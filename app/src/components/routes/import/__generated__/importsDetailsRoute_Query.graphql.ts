/**
 * @generated SignedSource<<65287d6d8768313d0e0b58783f687bc5>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest, Query } from 'relay-runtime';
export type ImportStatus = "canceled" | "data_importing" | "failed" | "file_uploaded" | "finished" | "ready_for_import" | "%future added value";
export type importsDetailsRoute_Query$variables = {
  nodeId: string;
};
export type importsDetailsRoute_Query$data = {
  readonly node: {
    readonly id?: string;
    readonly nodeId: string;
    readonly status?: ImportStatus;
  } | null;
};
export type importsDetailsRoute_Query = {
  response: importsDetailsRoute_Query$data;
  variables: importsDetailsRoute_Query$variables;
};

const node: ConcreteRequest = (function(){
var v0 = [
  {
    "defaultValue": null,
    "kind": "LocalArgument",
    "name": "nodeId"
  }
],
v1 = [
  {
    "kind": "Variable",
    "name": "nodeId",
    "variableName": "nodeId"
  }
],
v2 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "nodeId",
  "storageKey": null
},
v3 = {
  "kind": "InlineFragment",
  "selections": [
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "id",
      "storageKey": null
    },
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "status",
      "storageKey": null
    }
  ],
  "type": "Imports",
  "abstractKey": null
};
return {
  "fragment": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Fragment",
    "metadata": null,
    "name": "importsDetailsRoute_Query",
    "selections": [
      {
        "alias": null,
        "args": (v1/*: any*/),
        "concreteType": null,
        "kind": "LinkedField",
        "name": "node",
        "plural": false,
        "selections": [
          (v2/*: any*/),
          (v3/*: any*/)
        ],
        "storageKey": null
      }
    ],
    "type": "Query",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "importsDetailsRoute_Query",
    "selections": [
      {
        "alias": null,
        "args": (v1/*: any*/),
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
          (v2/*: any*/),
          (v3/*: any*/)
        ],
        "storageKey": null
      }
    ]
  },
  "params": {
    "cacheID": "82bc774a2ce3e31b0c6ae3ceff0b0cb1",
    "id": null,
    "metadata": {},
    "name": "importsDetailsRoute_Query",
    "operationKind": "query",
    "text": "query importsDetailsRoute_Query(\n  $nodeId: ID!\n) {\n  node(nodeId: $nodeId) {\n    __typename\n    nodeId\n    ... on Imports {\n      id\n      status\n    }\n  }\n}\n"
  }
};
})();

(node as any).hash = "7bff9d9676f4c0c77928de67862685da";

export default node;
