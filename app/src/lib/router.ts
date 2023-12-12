// Generouted, changes to this file will be overriden
/* eslint-disable */

import { components, hooks, utils } from '@generouted/react-router/client'

export type Path = `/` | `/account` | `/metrics/:id` | `/sign-in`

export type Params = {
  '/metrics/:id': { id: string }
}

export type ModalPath = `/metrics/[id]/data-points/new` | `/metrics/new`

export const { Link, Navigate } = components<Path, Params>()
export const { useModals, useNavigate, useParams } = hooks<
  Path,
  Params,
  ModalPath
>()
export const { redirect } = utils<Path, Params>()
