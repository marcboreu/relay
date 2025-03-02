/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 * 
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * @generated SignedSource<<5f0f6911198e4dca80cb6afa6e594733>>
 * @flow
 * @lightSyntaxTransform
 * @nogrep
 */

/* eslint-disable */

'use strict';

/*::
import type { Fragment, ReaderFragment } from 'relay-runtime';
import type { FragmentType } from "relay-runtime";
declare export opaque type useFragmentFlowtest_user$fragmentType: FragmentType;
export type useFragmentFlowtest_user$ref = useFragmentFlowtest_user$fragmentType;
export type useFragmentFlowtest_user$data = {|
  +id: string,
  +$fragmentType: useFragmentFlowtest_user$fragmentType,
|};
export type useFragmentFlowtest_user = useFragmentFlowtest_user$data;
export type useFragmentFlowtest_user$key = {
  +$data?: useFragmentFlowtest_user$data,
  +$fragmentSpreads: useFragmentFlowtest_user$fragmentType,
  ...
};
*/

var node/*: ReaderFragment*/ = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "useFragmentFlowtest_user",
  "selections": [
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "id",
      "storageKey": null
    }
  ],
  "type": "User",
  "abstractKey": null
};

if (__DEV__) {
  (node/*: any*/).hash = "a0eb71a1bbfb0eb3a4c42fb5a69a7f81";
}

module.exports = ((node/*: any*/)/*: Fragment<
  useFragmentFlowtest_user$fragmentType,
  useFragmentFlowtest_user$data,
>*/);
