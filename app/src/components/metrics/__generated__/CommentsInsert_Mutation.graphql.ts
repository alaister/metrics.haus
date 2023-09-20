/**
 * @generated SignedSource<<f95fd61e48efcfb2f3701ac0269c4729>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest, Mutation } from 'relay-runtime';
export type CommentsInsertInput = {
  message?: string | null;
  metricId?: string | null;
  replyTo?: string | null;
};
export type CommentsInsert_Mutation$variables = {
  connections: ReadonlyArray<string>;
  input: CommentsInsertInput;
};
export type CommentsInsert_Mutation$data = {
  readonly insertIntoCommentsCollection: {
    readonly affectedCount: number;
    readonly records: ReadonlyArray<{
      readonly message: string;
      readonly metricId: string;
      readonly profileId: string;
      readonly replyTo: string | null;
      readonly teamId: string;
    }>;
  } | null;
};
export type CommentsInsert_Mutation = {
  response: CommentsInsert_Mutation$data;
  variables: CommentsInsert_Mutation$variables;
};

const node: ConcreteRequest = (function(){
var v0 = {
  "defaultValue": null,
  "kind": "LocalArgument",
  "name": "connections"
},
v1 = {
  "defaultValue": null,
  "kind": "LocalArgument",
  "name": "input"
},
v2 = [
  {
    "items": [
      {
        "kind": "Variable",
        "name": "objects.0",
        "variableName": "input"
      }
    ],
    "kind": "ListValue",
    "name": "objects"
  }
],
v3 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "affectedCount",
  "storageKey": null
},
v4 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "teamId",
  "storageKey": null
},
v5 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "metricId",
  "storageKey": null
},
v6 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "message",
  "storageKey": null
},
v7 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "replyTo",
  "storageKey": null
},
v8 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "profileId",
  "storageKey": null
};
return {
  "fragment": {
    "argumentDefinitions": [
      (v0/*: any*/),
      (v1/*: any*/)
    ],
    "kind": "Fragment",
    "metadata": null,
    "name": "CommentsInsert_Mutation",
    "selections": [
      {
        "alias": null,
        "args": (v2/*: any*/),
        "concreteType": "CommentsInsertResponse",
        "kind": "LinkedField",
        "name": "insertIntoCommentsCollection",
        "plural": false,
        "selections": [
          (v3/*: any*/),
          {
            "alias": null,
            "args": null,
            "concreteType": "Comments",
            "kind": "LinkedField",
            "name": "records",
            "plural": true,
            "selections": [
              (v4/*: any*/),
              (v5/*: any*/),
              (v6/*: any*/),
              (v7/*: any*/),
              (v8/*: any*/)
            ],
            "storageKey": null
          }
        ],
        "storageKey": null
      }
    ],
    "type": "Mutation",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": [
      (v1/*: any*/),
      (v0/*: any*/)
    ],
    "kind": "Operation",
    "name": "CommentsInsert_Mutation",
    "selections": [
      {
        "alias": null,
        "args": (v2/*: any*/),
        "concreteType": "CommentsInsertResponse",
        "kind": "LinkedField",
        "name": "insertIntoCommentsCollection",
        "plural": false,
        "selections": [
          (v3/*: any*/),
          {
            "alias": null,
            "args": null,
            "concreteType": "Comments",
            "kind": "LinkedField",
            "name": "records",
            "plural": true,
            "selections": [
              (v4/*: any*/),
              (v5/*: any*/),
              (v6/*: any*/),
              (v7/*: any*/),
              (v8/*: any*/),
              {
                "alias": null,
                "args": null,
                "kind": "ScalarField",
                "name": "nodeId",
                "storageKey": null
              }
            ],
            "storageKey": null
          },
          {
            "alias": null,
            "args": null,
            "filters": null,
            "handle": "prependNode",
            "key": "",
            "kind": "LinkedHandle",
            "name": "records",
            "handleArgs": [
              {
                "kind": "Variable",
                "name": "connections",
                "variableName": "connections"
              },
              {
                "kind": "Literal",
                "name": "edgeTypeName",
                "value": "MetricsEdge"
              }
            ]
          }
        ],
        "storageKey": null
      }
    ]
  },
  "params": {
    "cacheID": "af9de8ee30d1ce464666a73ee5f77581",
    "id": null,
    "metadata": {},
    "name": "CommentsInsert_Mutation",
    "operationKind": "mutation",
    "text": "mutation CommentsInsert_Mutation(\n  $input: CommentsInsertInput!\n) {\n  insertIntoCommentsCollection(objects: [$input]) {\n    affectedCount\n    records {\n      teamId\n      metricId\n      message\n      replyTo\n      profileId\n      nodeId\n    }\n  }\n}\n"
  }
};
})();

(node as any).hash = "f59f8459a62a8c9188bb40c5a9aaaac3";

export default node;
