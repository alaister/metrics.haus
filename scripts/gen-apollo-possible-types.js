#!/usr/bin/env node

const fs = require('fs')

fetch('http://localhost:54321/graphql/v1', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
    apikey: process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || '',
    Authorization: `Bearer ${
      process.env.SUPABASE_AUTHENTICATED_USER_KEY || ''
    }`,
  },
  body: JSON.stringify({
    variables: {},
    query: `
      {
        __schema {
          types {
            kind
            name
            possibleTypes {
              name
            }
          }
        }
      }
    `,
  }),
})
  .then((result) => result.json())
  .then((result) => {
    const possibleTypes = {}

    result.data.__schema.types.forEach((supertype) => {
      if (supertype.possibleTypes) {
        possibleTypes[supertype.name] = supertype.possibleTypes.map(
          (subtype) => subtype.name
        )
      }
    })

    fs.writeFile(
      './app/src/lib/gql/possible-types.json',
      JSON.stringify(possibleTypes),
      (err) => {
        if (err) {
          console.error('Error writing possibleTypes.json', err)
        } else {
          console.log('Fragment types successfully extracted!')
        }
      }
    )
  })
