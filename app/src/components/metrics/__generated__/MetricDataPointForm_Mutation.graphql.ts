/**
 * @generated SignedSource<<9375a064f1b71e8337e35e189c1226b2>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest, Mutation } from 'relay-runtime';
export type MetricsDataPointsInsertInput = {
  metricId?: string | null;
  time?: string | null;
  value?: number | null;
};
export type MetricDataPointForm_Mutation$variables = {
  connections: ReadonlyArray<string>;
  input: MetricsDataPointsInsertInput;
};
export type MetricDataPointForm_Mutation$data = {
  readonly insertIntoMetricsDataPointsCollection: {
    readonly affectedCount: number;
    readonly records: ReadonlyArray<{
      readonly nodeId: string;
      readonly time: string;
      readonly value: number;
    }>;
  } | null;
};
export type MetricDataPointForm_Mutation = {
  response: MetricDataPointForm_Mutation$data;
  variables: MetricDataPointForm_Mutation$variables;
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
  "concreteType": "MetricsDataPoints",
  "kind": "LinkedField",
  "name": "records",
  "plural": true,
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
      "name": "time",
      "storageKey": null
    },
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "value",
      "storageKey": null
    }
  ],
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
    "name": "MetricDataPointForm_Mutation",
    "selections": [
      {
        "alias": null,
        "args": (v2/*: any*/),
        "concreteType": "MetricsDataPointsInsertResponse",
        "kind": "LinkedField",
        "name": "insertIntoMetricsDataPointsCollection",
        "plural": false,
        "selections": [
          (v3/*: any*/),
          (v4/*: any*/)
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
    "name": "MetricDataPointForm_Mutation",
    "selections": [
      {
        "alias": null,
        "args": (v2/*: any*/),
        "concreteType": "MetricsDataPointsInsertResponse",
        "kind": "LinkedField",
        "name": "insertIntoMetricsDataPointsCollection",
        "plural": false,
        "selections": [
          (v3/*: any*/),
          (v4/*: any*/),
          {
            "alias": null,
            "args": null,
            "filters": null,
            "handle": "appendNode",
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
                "value": "MetricsDataPoints"
              }
            ]
          }
        ],
        "storageKey": null
      }
    ]
  },
  "params": {
    "cacheID": "bbd3daf36b3f13f3a452db03d2262123",
    "id": null,
    "metadata": {},
    "name": "MetricDataPointForm_Mutation",
    "operationKind": "mutation",
    "text": "mutation MetricDataPointForm_Mutation(\n  $input: MetricsDataPointsInsertInput!\n) {\n  insertIntoMetricsDataPointsCollection(objects: [$input]) {\n    affectedCount\n    records {\n      nodeId\n      time\n      value\n    }\n  }\n}\n"
  }
};
})();

(node as any).hash = "00fdec524e47765977916b7915d31141";

export default node;
