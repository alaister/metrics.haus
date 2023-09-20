/**
 * @generated SignedSource<<4e16b33c683b60b6defa2500c4ad331b>>
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
  readonly nodeId: string;
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
      "name": "createdAt",
      "storageKey": null
    }
  ],
  "type": "Metrics",
  "abstractKey": null
};

(node as any).hash = "5cdae9d2288c97a0ab665797d1bfa726";

export default node;
