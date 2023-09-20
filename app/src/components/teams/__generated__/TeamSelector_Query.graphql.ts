/**
 * @generated SignedSource<<84e811bd297b78b492bf72f08ff97dd4>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest, Query } from 'relay-runtime';
export type TeamSelector_Query$variables = {};
export type TeamSelector_Query$data = {
  readonly teamsCollection: {
    readonly edges: ReadonlyArray<{
      readonly node: {
        readonly id: string;
        readonly name: string;
        readonly nodeId: string;
      };
    }>;
  } | null;
};
export type TeamSelector_Query = {
  response: TeamSelector_Query$data;
  variables: TeamSelector_Query$variables;
};

const node: ConcreteRequest = (function(){
var v0 = [
  {
    "alias": null,
    "args": null,
    "concreteType": "TeamsConnection",
    "kind": "LinkedField",
    "name": "teamsCollection",
    "plural": false,
    "selections": [
      {
        "alias": null,
        "args": null,
        "concreteType": "TeamsEdge",
        "kind": "LinkedField",
        "name": "edges",
        "plural": true,
        "selections": [
          {
            "alias": null,
            "args": null,
            "concreteType": "Teams",
            "kind": "LinkedField",
            "name": "node",
            "plural": false,
            "selections": [
              {
                "alias": null,
                "args": null,
                "kind": "ScalarField",
                "name": "nodeId",
                "storageKey": null
              },
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
                "name": "name",
                "storageKey": null
              }
            ],
            "storageKey": null
          }
        ],
        "storageKey": null
      }
    ],
    "storageKey": null
  }
];
return {
  "fragment": {
    "argumentDefinitions": [],
    "kind": "Fragment",
    "metadata": null,
    "name": "TeamSelector_Query",
    "selections": (v0/*: any*/),
    "type": "Query",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": [],
    "kind": "Operation",
    "name": "TeamSelector_Query",
    "selections": (v0/*: any*/)
  },
  "params": {
    "cacheID": "5c55db60c4d3e110756724e25d4a140b",
    "id": null,
    "metadata": {},
    "name": "TeamSelector_Query",
    "operationKind": "query",
    "text": "query TeamSelector_Query {\n  teamsCollection {\n    edges {\n      node {\n        nodeId\n        id\n        name\n      }\n    }\n  }\n}\n"
  }
};
})();

(node as any).hash = "555a9fd86eb69853d4188a291208e6ce";

export default node;
