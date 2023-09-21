/**
 * @generated SignedSource<<48c6d98fe23dfb06c6528870327d6f68>>
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
  teamId?: string | null;
  timestamp?: string | null;
};
export type CommentsFormInsert_Mutation$variables = {
  connections: ReadonlyArray<string>;
  input: CommentsInsertInput;
};
export type CommentsFormInsert_Mutation$data = {
  readonly insertIntoCommentsCollection: {
    readonly affectedCount: number;
    readonly records: ReadonlyArray<{
      readonly message: string;
      readonly metricId: string;
      readonly profileId: string;
      readonly replyTo: string | null;
      readonly teamId: string;
      readonly timestamp: string;
    }>;
  } | null;
};
export type CommentsFormInsert_Mutation = {
  response: CommentsFormInsert_Mutation$data;
  variables: CommentsFormInsert_Mutation$variables;
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
},
v9 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "timestamp",
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
    "name": "CommentsFormInsert_Mutation",
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
              (v9/*: any*/)
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
    "name": "CommentsFormInsert_Mutation",
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
              (v9/*: any*/),
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
                "value": "CommentsEdge"
              }
            ]
          }
        ],
        "storageKey": null
      }
    ]
  },
  "params": {
    "cacheID": "ff4c7ea817e68acc23f53f0779df1127",
    "id": null,
    "metadata": {},
    "name": "CommentsFormInsert_Mutation",
    "operationKind": "mutation",
    "text": "mutation CommentsFormInsert_Mutation(\n  $input: CommentsInsertInput!\n) {\n  insertIntoCommentsCollection(objects: [$input]) {\n    affectedCount\n    records {\n      teamId\n      metricId\n      message\n      replyTo\n      profileId\n      timestamp\n      nodeId\n    }\n  }\n}\n"
  }
};
})();

(node as any).hash = "0608a1142378f0d9c9d844acc7401d78";

export default node;
