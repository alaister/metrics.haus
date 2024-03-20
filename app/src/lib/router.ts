// Generouted, changes to this file will be overriden
/* eslint-disable */

import { components, hooks, utils } from '@generouted/react-router/client'

export type Path =
  | `/`
  | `/account`
  | `/imports`
  | `/imports/:id`
  | `/imports/new`
  | `/metrics/:id`
  | `/sign-in`
  | `/threads/:id`

export type Params = {
  '/imports/:id': { id: string }
  '/metrics/:id': { id: string }
  '/threads/:id': { id: string }
}

export type ModalPath = `/metrics/[id]/data-points/new` | `/metrics/new`

export const { Link, Navigate } = components<Path, Params>()
export const { useModals, useNavigate, useParams } = hooks<
  Path,
  Params,
  ModalPath
>()
export const { redirect } = utils<Path, Params>()
