import short from 'short-uuid'
import slugify from 'slugify'
import { validate as isUUID } from 'uuid'

const translator = short()

export interface ToUrlIdOptions {
  id: string
  title?: string | null
}

export function toUrlId({ title, id }: ToUrlIdOptions) {
  let shortId = id

  if (isUUID(id)) {
    shortId = translator.fromUUID(id)
  }

  if (title) {
    return `${slugify(title, { lower: true, strict: true })}-${shortId}`
  }

  return shortId
}

export function fromUrlId(urlId?: string) {
  if (!urlId) {
    return ''
  }

  const maybeShortId = urlId.split('-').pop()

  try {
    if (maybeShortId) {
      const uuid = translator.toUUID(maybeShortId)

      if (isUUID(uuid)) {
        return `${uuid}`
      }
    }
  } catch (_) {
    /* empty */
  }

  // if we can't translate it, just return the original
  return urlId
}

export function toGlobalId(
  id: string,
  tableName: string,
  schemaName = 'public',
) {
  return btoa(JSON.stringify([schemaName, tableName, id]).replace(/,/g, ', '))
}

export function fromGlobalId(globalId: string): {
  schemaName: string
  tableName: string
  id: string
} {
  const [schemaName, tableName, id] = JSON.parse(atob(globalId))

  return { schemaName, tableName, id }
}

export function urlIdToGlobalId(
  urlId: string,
  tableName: string,
  schemaName?: string,
) {
  return toGlobalId(fromUrlId(urlId), tableName, schemaName)
}

export function globalIdToUrlId(globalId: string, title?: string) {
  const { id } = fromGlobalId(globalId)

  return toUrlId({ id, title })
}
