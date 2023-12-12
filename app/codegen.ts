import type { CodegenConfig } from '@graphql-codegen/cli'
import { addTypenameSelectionDocumentTransform } from '@graphql-codegen/client-preset'

const SUPABASE_URL =
  process.env.NEXT_PUBLIC_SUPABASE_URL || 'http://localhost:54321'

const API_KEY_QUERY_STRING = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY
  ? `?apikey=${process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY}`
  : ''

const config: CodegenConfig = {
  schema: `${SUPABASE_URL}/graphql/v1${API_KEY_QUERY_STRING}`,
  documents: 'src/**/*.tsx',
  overwrite: true,
  ignoreNoDocuments: true,
  generates: {
    'src/lib/gql/': {
      preset: 'client',
      documentTransforms: [addTypenameSelectionDocumentTransform],
      plugins: [],
      presetConfig: {
        fragmentMasking: false,
      },
      config: {
        scalars: {
          UUID: 'string',
          Date: 'string',
          Time: 'string',
          Datetime: 'string',
          JSON: 'string',
          BigInt: 'string',
          BigFloat: 'string',
          Opaque: 'any',
        },
      },
    },
  },
  hooks: {
    afterAllFileWrite: ['npm run prettier'], // optional
  },
}

export default config
