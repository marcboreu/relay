/*
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

use common::{ConsoleLogger, SourceLocationKey};
use fixture_tests::Fixture;
use fnv::FnvHashMap;
use graphql_ir::{build, Program};
use graphql_syntax::parse_executable;
use intern::string_key::Intern;
use relay_codegen::JsModuleFormat;
use relay_config::ProjectConfig;
use relay_test_schema::{get_test_schema, get_test_schema_with_extensions};
use relay_transforms::apply_transforms;
use relay_typegen::{self, TypegenConfig, TypegenLanguage};
use std::sync::Arc;

pub fn transform_fixture(fixture: &Fixture<'_>) -> Result<String, String> {
    let parts = fixture.content.split("%extensions%").collect::<Vec<_>>();
    let (source, schema) = match parts.as_slice() {
        [source, extensions] => (source, get_test_schema_with_extensions(extensions)),
        [source] => (source, get_test_schema()),
        _ => panic!(),
    };

    let source_location = SourceLocationKey::standalone(fixture.file_name);

    let mut sources = FnvHashMap::default();
    sources.insert(source_location, source);
    let ast = parse_executable(source, source_location).unwrap_or_else(|e| {
        panic!("Encountered error building AST: {:?}", e);
    });
    let ir = build(&schema, &ast.definitions).unwrap_or_else(|e| {
        panic!("Encountered error building IR {:?}", e);
    });
    let program = Program::from_definitions(Arc::clone(&schema), ir);
    let project_config = ProjectConfig {
        name: "test".intern(),
        ..Default::default()
    };
    let programs = apply_transforms(
        &project_config,
        Arc::new(program),
        Default::default(),
        Arc::new(ConsoleLogger),
        None,
    )
    .unwrap();

    let js_module_format = JsModuleFormat::Haste;
    let has_unified_output = false;
    let typegen_config = TypegenConfig {
        language: TypegenLanguage::TypeScript,
        ..Default::default()
    };

    let mut operations: Vec<_> = programs.typegen.operations().collect();
    operations.sort_by_key(|op| op.name.item);
    let operation_strings = operations.into_iter().map(|typegen_operation| {
        let normalization_operation = programs
            .normalization
            .operation(typegen_operation.name.item)
            .unwrap();
        relay_typegen::generate_operation_type_exports_section(
            typegen_operation,
            normalization_operation,
            &schema,
            js_module_format,
            has_unified_output,
            &typegen_config,
        )
    });

    let mut fragments: Vec<_> = programs.typegen.fragments().collect();
    fragments.sort_by_key(|frag| frag.name.item);
    let fragment_strings = fragments.into_iter().map(|frag| {
        relay_typegen::generate_fragment_type_exports_section(
            frag,
            &schema,
            js_module_format,
            has_unified_output,
            &typegen_config,
        )
    });

    let mut result: Vec<String> = operation_strings.collect();
    result.extend(fragment_strings);
    Ok(result
        .join("-------------------------------------------------------------------------------\n"))
}
