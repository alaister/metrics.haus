/**
 * @generated SignedSource<<0924e760d965dd66f77408ae3860114f>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest, Mutation } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type MetricInterval = "day" | "hour" | "minute" | "month" | "week" | "%future added value";
export type MetricsInsertInput = {
  createdAt?: string | null;
  id?: string | null;
  interval?: MetricInterval | null;
  name?: string | null;
  teamId?: string | null;
  updatedAt?: string | null;
};
export type MetricForm_Mutation$variables = {
  connections: ReadonlyArray<string>;
  input: MetricsInsertInput;
};
export type MetricForm_Mutation$data = {
  readonly insertIntoMetricsCollection: {
    readonly affectedCount: number;
    readonly records: ReadonlyArray<{
      readonly nodeId: string;
      readonly " $fragmentSpreads": FragmentRefs<"MetricCard_metrics">;
    }>;
  } | null;
};
export type MetricForm_Mutation = {
  response: MetricForm_Mutation$data;
  variables: MetricForm_Mutation$variables;
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
  "name": "nodeId",
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
    "name": "MetricForm_Mutation",
    "selections": [
      {
        "alias": null,
        "args": (v2/*: any*/),
        "concreteType": "MetricsInsertResponse",
        "kind": "LinkedField",
        "name": "insertIntoMetricsCollection",
        "plural": false,
        "selections": [
          (v3/*: any*/),
          {
            "alias": null,
            "args": null,
            "concreteType": "Metrics",
            "kind": "LinkedField",
            "name": "records",
            "plural": true,
            "selections": [
              (v4/*: any*/),
              {
                "args": null,
                "kind": "FragmentSpread",
                "name": "MetricCard_metrics"
              }
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
    "name": "MetricForm_Mutation",
    "selections": [
      {
        "alias": null,
        "args": (v2/*: any*/),
        "concreteType": "MetricsInsertResponse",
        "kind": "LinkedField",
        "name": "insertIntoMetricsCollection",
        "plural": false,
        "selections": [
          (v3/*: any*/),
          {
            "alias": null,
            "args": null,
            "concreteType": "Metrics",
            "kind": "LinkedField",
            "name": "records",
            "plural": true,
            "selections": [
              (v4/*: any*/),
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
              },
              {
                "alias": null,
                "args": null,
                "kind": "ScalarField",
                "name": "createdAt",
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
    "cacheID": "b960726dc86bc76a0d4a057a23601894",
    "id": null,
    "metadata": {},
    "name": "MetricForm_Mutation",
    "operationKind": "mutation",
    "text": "mutation MetricForm_Mutation(\n  $input: MetricsInsertInput!\n) {\n  insertIntoMetricsCollection(objects: [$input]) {\n    affectedCount\n    records {\n      nodeId\n      ...MetricCard_metrics\n    }\n  }\n}\n\nfragment MetricCard_metrics on Metrics {\n  id\n  name\n  createdAt\n}\n"
  }
};
})();

(node as any).hash = "2b7cdd690fb9b0db20457117844506be";

export default node;
