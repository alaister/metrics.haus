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
