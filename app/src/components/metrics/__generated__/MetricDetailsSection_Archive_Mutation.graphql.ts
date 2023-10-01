/**
 * @generated SignedSource<<8f134128092a783ce1fe499870e05978>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest, Mutation } from 'relay-runtime';
export type FilterIs = "NOT_NULL" | "NULL" | "%future added value";
export type MetricInterval = "day" | "hour" | "minute" | "month" | "week" | "%future added value";
export type MetricsUpdateInput = {
  archived?: boolean | null;
  description?: string | null;
  icon?: string | null;
  interval?: MetricInterval | null;
  name?: string | null;
  unitShort?: string | null;
};
export type MetricsFilter = {
  archived?: BooleanFilter | null;
  createdAt?: DatetimeFilter | null;
  description?: StringFilter | null;
  icon?: StringFilter | null;
  id?: UUIDFilter | null;
  interval?: MetricIntervalFilter | null;
  name?: StringFilter | null;
  nodeId?: IDFilter | null;
  teamId?: UUIDFilter | null;
  unitShort?: StringFilter | null;
  updatedAt?: DatetimeFilter | null;
};
export type UUIDFilter = {
  eq?: string | null;
  in?: ReadonlyArray<string> | null;
  is?: FilterIs | null;
  neq?: string | null;
};
export type DatetimeFilter = {
  eq?: string | null;
  gt?: string | null;
  gte?: string | null;
  in?: ReadonlyArray<string> | null;
  is?: FilterIs | null;
  lt?: string | null;
  lte?: string | null;
  neq?: string | null;
};
export type MetricIntervalFilter = {
  eq?: MetricInterval | null;
  in?: ReadonlyArray<MetricInterval> | null;
  is?: FilterIs | null;
  neq?: MetricInterval | null;
};
export type StringFilter = {
  eq?: string | null;
  gt?: string | null;
  gte?: string | null;
  ilike?: string | null;
  in?: ReadonlyArray<string> | null;
  iregex?: string | null;
  is?: FilterIs | null;
  like?: string | null;
  lt?: string | null;
  lte?: string | null;
  neq?: string | null;
  regex?: string | null;
  startsWith?: string | null;
};
export type BooleanFilter = {
  eq?: boolean | null;
  is?: FilterIs | null;
};
export type IDFilter = {
  eq?: string | null;
};
export type MetricDetailsSection_Archive_Mutation$variables = {
  filter?: MetricsFilter | null;
  input: MetricsUpdateInput;
};
export type MetricDetailsSection_Archive_Mutation$data = {
  readonly updateMetricsCollection: {
    readonly affectedCount: number;
  };
};
export type MetricDetailsSection_Archive_Mutation = {
  response: MetricDetailsSection_Archive_Mutation$data;
  variables: MetricDetailsSection_Archive_Mutation$variables;
};

const node: ConcreteRequest = (function(){
var v0 = {
  "defaultValue": null,
  "kind": "LocalArgument",
  "name": "filter"
},
v1 = {
  "defaultValue": null,
  "kind": "LocalArgument",
  "name": "input"
},
v2 = [
  {
    "alias": null,
    "args": [
      {
        "kind": "Variable",
        "name": "filter",
        "variableName": "filter"
      },
      {
        "kind": "Variable",
        "name": "set",
        "variableName": "input"
      }
    ],
    "concreteType": "MetricsUpdateResponse",
    "kind": "LinkedField",
    "name": "updateMetricsCollection",
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
    "argumentDefinitions": [
      (v0/*: any*/),
      (v1/*: any*/)
    ],
    "kind": "Fragment",
    "metadata": null,
    "name": "MetricDetailsSection_Archive_Mutation",
    "selections": (v2/*: any*/),
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
    "name": "MetricDetailsSection_Archive_Mutation",
    "selections": (v2/*: any*/)
  },
  "params": {
    "cacheID": "95bafb46d34b73d6b8bd5c3d179eced0",
    "id": null,
    "metadata": {},
    "name": "MetricDetailsSection_Archive_Mutation",
    "operationKind": "mutation",
    "text": "mutation MetricDetailsSection_Archive_Mutation(\n  $input: MetricsUpdateInput!\n  $filter: MetricsFilter\n) {\n  updateMetricsCollection(set: $input, filter: $filter) {\n    affectedCount\n  }\n}\n"
  }
};
})();

(node as any).hash = "00a1f34761ada4fdf796fba924494cef";

export default node;
