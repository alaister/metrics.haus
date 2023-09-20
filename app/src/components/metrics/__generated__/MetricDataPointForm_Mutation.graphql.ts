/**
 * @generated SignedSource<<c4ac35947b8524218929483e867561af>>
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
  input: MetricsDataPointsInsertInput;
};
export type MetricDataPointForm_Mutation$data = {
  readonly insertIntoMetricsDataPointsCollection: {
    readonly affectedCount: number;
  } | null;
};
export type MetricDataPointForm_Mutation = {
  response: MetricDataPointForm_Mutation$data;
  variables: MetricDataPointForm_Mutation$variables;
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
    "concreteType": "MetricsDataPointsInsertResponse",
    "kind": "LinkedField",
    "name": "insertIntoMetricsDataPointsCollection",
    "plural": false,
    "selections": [
      {
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "affectedCount",
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
    "name": "MetricDataPointForm_Mutation",
    "selections": (v1/*: any*/),
    "type": "Mutation",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "MetricDataPointForm_Mutation",
    "selections": (v1/*: any*/)
  },
  "params": {
    "cacheID": "d1e660a6b68c0257005230827bdef527",
    "id": null,
    "metadata": {},
    "name": "MetricDataPointForm_Mutation",
    "operationKind": "mutation",
    "text": "mutation MetricDataPointForm_Mutation(\n  $input: MetricsDataPointsInsertInput!\n) {\n  insertIntoMetricsDataPointsCollection(objects: [$input]) {\n    affectedCount\n  }\n}\n"
  }
};
})();

(node as any).hash = "0e53cfb0c3fc3b7dabd00f058f620967";

export default node;
