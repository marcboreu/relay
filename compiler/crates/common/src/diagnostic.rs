/*
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

use lsp_types::{DiagnosticSeverity, DiagnosticTag};

use crate::{Location, SourceLocationKey};
use std::error::Error;
use std::fmt;
use std::fmt::Write;

pub type DiagnosticsResult<T> = Result<T, Vec<Diagnostic>>;

#[derive(fmt::Debug)]
pub struct WithDiagnostics<T> {
    pub item: T,
    pub errors: Vec<Diagnostic>,
}

impl<T> From<WithDiagnostics<T>> for Result<T, Vec<Diagnostic>> {
    fn from(s: WithDiagnostics<T>) -> Result<T, Vec<Diagnostic>> {
        if s.errors.is_empty() {
            Ok(s.item)
        } else {
            Err(s.errors)
        }
    }
}

pub fn diagnostics_result<T>(result: T, diagnostics: Vec<Diagnostic>) -> DiagnosticsResult<T> {
    if diagnostics.is_empty() {
        Ok(result)
    } else {
        Err(diagnostics)
    }
}

/// A diagnostic message as a result of validating some code. This struct is
/// modeled after the LSP Diagnostic type:
/// https://microsoft.github.io/language-server-protocol/specification#diagnostic
///
/// Changes from LSP:
/// - `location` is different from LSP in that it's a file + span instead of
///   just a span.
/// - Unused fields are omitted.
#[derive(fmt::Debug)]
pub struct Diagnostic(Box<DiagnosticData>);

impl Diagnostic {
    /// Creates a new error Diagnostic.
    /// Additional locations can be added with the `.annotate()` function.
    pub fn error<T: 'static + DiagnosticDisplay>(message: T, location: Location) -> Self {
        Self(Box::new(DiagnosticData {
            message: Box::new(message),
            location,
            tags: Vec::new(),
            severity: DiagnosticSeverity::Error,
            related_information: Vec::new(),
            data: Vec::new(),
        }))
    }

    /// Creates a new error Diagnostic with additional data that
    /// can be used in IDE code actions
    pub fn error_with_data<T: 'static + DiagnosticDisplay + WithDiagnosticData>(
        message: T,
        location: Location,
    ) -> Self {
        let data = message.get_data();
        Self(Box::new(DiagnosticData {
            message: Box::new(message),
            location,
            tags: Vec::new(),
            severity: DiagnosticSeverity::Error,
            related_information: Vec::new(),
            data,
        }))
    }

    /// Creates a new Diagnostic with a severity of Hint
    /// Additional locations can be added with the `.annotate()` function.
    pub fn hint<T: 'static + DiagnosticDisplay>(
        message: T,
        location: Location,
        tags: Vec<DiagnosticTag>,
    ) -> Self {
        Self(Box::new(DiagnosticData {
            message: Box::new(message),
            location,
            tags,
            related_information: Vec::new(),
            severity: DiagnosticSeverity::Hint, // TODO: Make this an argument?
            data: Vec::new(),
        }))
    }

    /// Annotates this error with an additional location and associated message.
    pub fn annotate<T: 'static + DiagnosticDisplay>(
        mut self,
        message: T,
        location: Location,
    ) -> Self {
        self.0
            .related_information
            .push(DiagnosticRelatedInformation {
                message: Box::new(message),
                location,
            });
        self
    }

    pub fn message(&self) -> &impl DiagnosticDisplay {
        &self.0.message
    }

    pub fn location(&self) -> Location {
        self.0.location
    }

    pub fn get_data(&self) -> &[impl DiagnosticDisplay] {
        &self.0.data
    }

    pub fn severity(&self) -> DiagnosticSeverity {
        self.0.severity
    }

    pub fn tags(&self) -> Vec<DiagnosticTag> {
        self.0.tags.clone()
    }

    /// Override the location. This should only be used for exceptional situations.
    /// Typically, diagnostics should be constructed with a correct location.
    pub fn override_location(&mut self, location: Location) {
        assert!(
            self.0.location.source_location() == SourceLocationKey::Generated,
            "Diagnostic::override_location can only be called when the location is generated."
        );
        self.0.location = location;
    }

    pub fn related_information(&self) -> &[DiagnosticRelatedInformation] {
        &self.0.related_information
    }

    pub fn print_without_source(&self) -> String {
        let mut result = String::new();
        writeln!(
            result,
            "{message}:{location:?}",
            message = &self.0.message,
            location = self.0.location
        )
        .unwrap();
        if !self.0.related_information.is_empty() {
            for (ix, related) in self.0.related_information.iter().enumerate() {
                writeln!(
                    result,
                    "[related {ix}] {message}:{location:?}",
                    ix = ix + 1,
                    message = related.message,
                    location = related.location
                )
                .unwrap();
            }
        };
        result
    }
}

impl fmt::Display for Diagnostic {
    fn fmt(&self, f: &mut fmt::Formatter<'_>) -> fmt::Result {
        write!(f, "{}", self.print_without_source())
    }
}

impl Error for Diagnostic {}

// statically verify that the Diagnostic type is thread safe
fn _assert_diagnostic_constraints()
where
    Diagnostic: Send + Sync,
{
}

#[derive(fmt::Debug)]
struct DiagnosticData {
    /// Human readable error message.
    message: Box<dyn DiagnosticDisplay>,

    /// The primary location of this diagnostic.
    location: Location,

    /// Related diagnostic information, such as other definitions in the case of
    /// a duplicate definition error.
    related_information: Vec<DiagnosticRelatedInformation>,

    tags: Vec<DiagnosticTag>,

    severity: DiagnosticSeverity,

    /// A list with data that can be passed to the code actions
    /// `data` is used in the LSP protocol:
    /// @see https://microsoft.github.io/language-server-protocol/specifications/specification-current/#diagnostic
    data: Vec<Box<dyn DiagnosticDisplay>>,
}

/// Secondary locations attached to a diagnostic.
#[derive(fmt::Debug)]
pub struct DiagnosticRelatedInformation {
    /// The message of this related diagnostic information.
    pub message: Box<dyn DiagnosticDisplay>,

    /// The location of this related diagnostic information.
    pub location: Location,
}

pub trait WithDiagnosticData {
    fn get_data(&self) -> Vec<Box<dyn DiagnosticDisplay>>;
}

/// Trait for diagnostic messages to allow structs that capture
/// some data and can lazily convert it to a message.
pub trait DiagnosticDisplay: fmt::Debug + fmt::Display + Send + Sync {}

/// Automatically implement the trait if constraints are met, so that
/// implementors don't need to.
impl<T> DiagnosticDisplay for T where T: fmt::Debug + fmt::Display + Send + Sync {}

impl From<Diagnostic> for Vec<Diagnostic> {
    fn from(diagnostic: Diagnostic) -> Self {
        vec![diagnostic]
    }
}
