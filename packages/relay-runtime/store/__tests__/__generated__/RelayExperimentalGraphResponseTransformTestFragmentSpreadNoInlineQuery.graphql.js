/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 * 
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * @generated SignedSource<<c135b4653ce674eed6d9bc7db66bcc2e>>
 * @flow
 * @lightSyntaxTransform
 * @nogrep
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest, Query } from 'relay-runtime';
type RelayExperimentalGraphResponseTransformTest_no_inline_user_name$fragmentType = any;
export type RelayExperimentalGraphResponseTransformTestFragmentSpreadNoInlineQuery$variables = {||};
export type RelayExperimentalGraphResponseTransformTestFragmentSpreadNoInlineQueryVariables = RelayExperimentalGraphResponseTransformTestFragmentSpreadNoInlineQuery$variables;
export type RelayExperimentalGraphResponseTransformTestFragmentSpreadNoInlineQuery$data = {|
  +node: ?{|
    +$fragmentSpreads: RelayExperimentalGraphResponseTransformTest_no_inline_user_name$fragmentType,
  |},
|};
export type RelayExperimentalGraphResponseTransformTestFragmentSpreadNoInlineQueryResponse = RelayExperimentalGraphResponseTransformTestFragmentSpreadNoInlineQuery$data;
export type RelayExperimentalGraphResponseTransformTestFragmentSpreadNoInlineQuery = {|
  variables: RelayExperimentalGraphResponseTransformTestFragmentSpreadNoInlineQueryVariables,
  response: RelayExperimentalGraphResponseTransformTestFragmentSpreadNoInlineQuery$data,
|};
*/

var node/*: ConcreteRequest*/ = (function(){
var v0 = [
  {
    "kind": "Literal",
    "name": "id",
    "value": "10"
  }
];
return {
  "fragment": {
    "argumentDefinitions": [],
    "kind": "Fragment",
    "metadata": null,
    "name": "RelayExperimentalGraphResponseTransformTestFragmentSpreadNoInlineQuery",
    "selections": [
      {
        "alias": null,
        "args": (v0/*: any*/),
        "concreteType": null,
        "kind": "LinkedField",
        "name": "node",
        "plural": false,
        "selections": [
          {
            "args": null,
            "kind": "FragmentSpread",
            "name": "RelayExperimentalGraphResponseTransformTest_no_inline_user_name"
          }
        ],
        "storageKey": "node(id:\"10\")"
      }
    ],
    "type": "Query",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": [],
    "kind": "Operation",
    "name": "RelayExperimentalGraphResponseTransformTestFragmentSpreadNoInlineQuery",
    "selections": [
      {
        "alias": null,
        "args": (v0/*: any*/),
        "concreteType": null,
        "kind": "LinkedField",
        "name": "node",
        "plural": false,
        "selections": [
          {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "__typename",
            "storageKey": null
          },
          {
            "args": null,
            "fragment": require('./RelayExperimentalGraphResponseTransformTest_no_inline_user_name$normalization.graphql'),
            "kind": "FragmentSpread"
          },
          {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "id",
            "storageKey": null
          }
        ],
        "storageKey": "node(id:\"10\")"
      }
    ]
  },
  "params": {
    "cacheID": "c2be61a649c1c0c603f33ec12b31aeaf",
    "id": null,
    "metadata": {},
    "name": "RelayExperimentalGraphResponseTransformTestFragmentSpreadNoInlineQuery",
    "operationKind": "query",
    "text": "query RelayExperimentalGraphResponseTransformTestFragmentSpreadNoInlineQuery {\n  node(id: \"10\") {\n    __typename\n    ...RelayExperimentalGraphResponseTransformTest_no_inline_user_name\n    id\n  }\n}\n\nfragment RelayExperimentalGraphResponseTransformTest_no_inline_user_name on User {\n  name\n}\n"
  }
};
})();

if (__DEV__) {
  (node/*: any*/).hash = "fbfe5e49950cb623a46a3c6e4377ee0c";
}

module.exports = ((node/*: any*/)/*: Query<
  RelayExperimentalGraphResponseTransformTestFragmentSpreadNoInlineQuery$variables,
  RelayExperimentalGraphResponseTransformTestFragmentSpreadNoInlineQuery$data,
>*/);
