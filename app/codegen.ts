import type { CodegenConfig } from '@graphql-codegen/cli'
import { addTypenameSelectionDocumentTransform } from '@graphql-codegen/client-preset'

const config: CodegenConfig = {
  schema: 'http://localhost:54321/graphql/v1', // Using the local endpoint, update if needed
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
