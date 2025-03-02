/*
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

#![deny(warnings)]
#![deny(rust_2018_idioms)]
#![deny(clippy::all)]

mod ast;
mod build_ast;
mod constants;
mod indentation;
mod printer;
mod utils;

pub use ast::{AstBuilder, Primitive, QueryID, RequestParameters};
pub use build_ast::{
    build_request_params, is_static_storage_key_available, CodegenBuilder, CodegenVariant,
};
pub use printer::{
    print_fragment, print_operation, print_request, print_request_params, JSONPrinter, Printer,
};
pub use relay_config::JsModuleFormat;
