/**
 * @generated SignedSource<<3bbe50618a29804020f2c54508a54951>>
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
  interval?: MetricInterval | null;
  name?: string | null;
  teamId?: string | null;
};
export type MetricForm_Mutation$variables = {
  connections: ReadonlyArray<string>;
  input: MetricsInsertInput;
};
export type MetricForm_Mutation$data = {
  readonly insertIntoMetricsCollection: {
    readonly affectedCount: number;
    readonly records: ReadonlyArray<{
      readonly id: string;
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
  "name": "id",
  "storageKey": null
},
v5 = {
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
              (v5/*: any*/),
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
              (v5/*: any*/),
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
              },
              {
                "alias": "dataPoints",
                "args": null,
                "concreteType": "MetricsDataPointsConnection",
                "kind": "LinkedField",
                "name": "metricsDataPointsCollection",
                "plural": false,
                "selections": [
                  {
                    "alias": null,
                    "args": null,
                    "kind": "ScalarField",
                    "name": "totalCount",
                    "storageKey": null
                  }
                ],
                "storageKey": null
              },
              {
                "alias": null,
                "args": null,
                "concreteType": "MetricsDataPointsConnection",
                "kind": "LinkedField",
                "name": "metricsDataPointsCollection",
                "plural": false,
                "selections": [
                  {
                    "alias": null,
                    "args": null,
                    "concreteType": "MetricsDataPointsEdge",
                    "kind": "LinkedField",
                    "name": "edges",
                    "plural": true,
                    "selections": [
                      {
                        "alias": null,
                        "args": null,
                        "concreteType": "MetricsDataPoints",
                        "kind": "LinkedField",
                        "name": "node",
                        "plural": false,
                        "selections": [
                          (v5/*: any*/),
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
                      }
                    ],
                    "storageKey": null
                  }
                ],
                "storageKey": null
              },
              {
                "alias": null,
                "args": null,
                "concreteType": "CommentsConnection",
                "kind": "LinkedField",
                "name": "commentsCollection",
                "plural": false,
                "selections": [
                  {
                    "alias": null,
                    "args": null,
                    "concreteType": "CommentsEdge",
                    "kind": "LinkedField",
                    "name": "edges",
                    "plural": true,
                    "selections": [
                      {
                        "alias": null,
                        "args": null,
                        "concreteType": "Comments",
                        "kind": "LinkedField",
                        "name": "node",
                        "plural": false,
                        "selections": [
                          (v4/*: any*/),
                          {
                            "alias": null,
                            "args": null,
                            "kind": "ScalarField",
                            "name": "timestamp",
                            "storageKey": null
                          },
                          {
                            "alias": null,
                            "args": null,
                            "kind": "ScalarField",
                            "name": "replyTo",
                            "storageKey": null
                          },
                          (v5/*: any*/)
                        ],
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
    "cacheID": "e4c65fe135bf2db093b6f8d9339d12c9",
    "id": null,
    "metadata": {},
    "name": "MetricForm_Mutation",
    "operationKind": "mutation",
    "text": "mutation MetricForm_Mutation(\n  $input: MetricsInsertInput!\n) {\n  insertIntoMetricsCollection(objects: [$input]) {\n    affectedCount\n    records {\n      id\n      nodeId\n      ...MetricCard_metrics\n    }\n  }\n}\n\nfragment LineChart_metrics on Metrics {\n  metricsDataPointsCollection {\n    edges {\n      node {\n        nodeId\n        time\n        value\n      }\n    }\n  }\n  commentsCollection {\n    edges {\n      node {\n        id\n        timestamp\n        replyTo\n        nodeId\n      }\n    }\n  }\n}\n\nfragment MetricCard_metrics on Metrics {\n  id\n  name\n  createdAt\n  dataPoints: metricsDataPointsCollection {\n    totalCount\n  }\n  ...LineChart_metrics\n}\n"
  }
};
})();

(node as any).hash = "1fddfe86230403c6586d714527a83df7";

export default node;
