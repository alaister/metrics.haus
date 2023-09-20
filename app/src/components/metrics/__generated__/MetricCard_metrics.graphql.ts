/**
 * @generated SignedSource<<14ace5ebefbb2987271f0cc2f90becc3>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { Fragment, ReaderFragment } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type MetricCard_metrics$data = {
  readonly createdAt: string;
  readonly id: string;
  readonly name: string;
  readonly " $fragmentSpreads": FragmentRefs<"LineChart_metrics">;
  readonly " $fragmentType": "MetricCard_metrics";
};
export type MetricCard_metrics$key = {
  readonly " $data"?: MetricCard_metrics$data;
  readonly " $fragmentSpreads": FragmentRefs<"MetricCard_metrics">;
};

const node: ReaderFragment = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "MetricCard_metrics",
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
      "args": null,
      "kind": "FragmentSpread",
      "name": "LineChart_metrics"
    }
  ],
  "type": "Metrics",
  "abstractKey": null
};

(node as any).hash = "ee4d686431731c0a629979452bcb8f66";

export default node;
