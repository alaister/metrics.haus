/**
 * @generated SignedSource<<7d71626f7b80fbed3ddeaa6790aeaa57>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { Fragment, ReaderFragment } from 'relay-runtime'
import { FragmentRefs } from 'relay-runtime'
export type MetricCard_metrics$data = {
  readonly createdAt: string
  readonly id: string
  readonly name: string
  readonly ' $fragmentType': 'MetricCard_metrics'
}
export type MetricCard_metrics$key = {
  readonly ' $data'?: MetricCard_metrics$data
  readonly ' $fragmentSpreads': FragmentRefs<'MetricCard_metrics'>
}

const node: ReaderFragment = {
  argumentDefinitions: [],
  kind: 'Fragment',
  metadata: null,
  name: 'MetricCard_metrics',
  selections: [
    {
      alias: null,
      args: null,
      kind: 'ScalarField',
      name: 'id',
      storageKey: null,
    },
    {
      alias: null,
      args: null,
      kind: 'ScalarField',
      name: 'name',
      storageKey: null,
    },
    {
      alias: null,
      args: null,
      kind: 'ScalarField',
      name: 'createdAt',
      storageKey: null,
    },
  ],
  type: 'Metrics',
  abstractKey: null,
}

;(node as any).hash = 'b4b33d27aa9f4deec066cee049a01306'

export default node
