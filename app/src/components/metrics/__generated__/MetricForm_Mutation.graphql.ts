/**
 * @generated SignedSource<<4f3691c25d881b6f9f4feb02c7fb74e2>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest, Mutation } from 'relay-runtime';
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
  input: MetricsInsertInput;
};
export type MetricForm_Mutation$data = {
  readonly insertIntoMetricsCollection: {
    readonly affectedCount: number;
    readonly records: ReadonlyArray<{
      readonly id: string;
      readonly interval: MetricInterval;
      readonly name: string;
      readonly nodeId: string;
      readonly teamId: string;
    }>;
  } | null;
};
export type MetricForm_Mutation = {
  response: MetricForm_Mutation$data;
  variables: MetricForm_Mutation$variables;
};

const node: ConcreteRequest = (function(){
var v0 = [
  {
    "defaultValue": null,
    "kind": "LocalArgument",
    "name": "input"
  }
],
v1 = [
  {
    "alias": null,
    "args": [
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
    "concreteType": "MetricsInsertResponse",
    "kind": "LinkedField",
    "name": "insertIntoMetricsCollection",
    "plural": false,
    "selections": [
      {
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "affectedCount",
        "storageKey": null
      },
      {
        "alias": null,
        "args": null,
        "concreteType": "Metrics",
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
            "name": "interval",
            "storageKey": null
          },
          {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "teamId",
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
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Fragment",
    "metadata": null,
    "name": "MetricForm_Mutation",
    "selections": (v1/*: any*/),
    "type": "Mutation",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "MetricForm_Mutation",
    "selections": (v1/*: any*/)
  },
  "params": {
    "cacheID": "6ac95a90d56a11524520fd64586a5f7c",
    "id": null,
    "metadata": {},
    "name": "MetricForm_Mutation",
    "operationKind": "mutation",
    "text": "mutation MetricForm_Mutation(\n  $input: MetricsInsertInput!\n) {\n  insertIntoMetricsCollection(objects: [$input]) {\n    affectedCount\n    records {\n      nodeId\n      id\n      name\n      interval\n      teamId\n    }\n  }\n}\n"
  }
};
})();

(node as any).hash = "a34fec439b5c1a68c355c0c3f138fda1";

export default node;
