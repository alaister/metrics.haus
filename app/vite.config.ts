import generouted from '@generouted/react-router/plugin'
import react from '@vitejs/plugin-react'
import path from 'path'
import { defineConfig, loadEnv } from 'vite'
import codegen from 'vite-plugin-graphql-codegen'
import { ViteMinifyPlugin } from 'vite-plugin-minify'

export default defineConfig(({ mode }) => {
  const {
    NEXT_PUBLIC_SUPABASE_URL,
    NEXT_PUBLIC_SUPABASE_ANON_KEY,
    SUPABASE_AUTHENTICATED_USER_KEY,
  } = loadEnv(mode, process.cwd(), [
    'NEXT_PUBLIC_',
    'SUPABASE_AUTHENTICATED_USER_KEY',
  ])

  return {
    plugins: [
      react(),
      codegen({
        configOverride: {
          schema: [
            {
              [`${NEXT_PUBLIC_SUPABASE_URL}/graphql/v1`]: {
                headers: {
                  apikey: NEXT_PUBLIC_SUPABASE_ANON_KEY,
                  Authorization: `Bearer ${SUPABASE_AUTHENTICATED_USER_KEY}`,
                },
              },
            },
          ],
        },
      }),
      generouted({
        output: 'src/lib/router.ts',
      }),
      ViteMinifyPlugin(),
    ],
    // Swap VITE_ to NEXT_PUBLIC_ as the Vercel Supabase integration names
    // environment variables with the NEXT_PUBLIC_ prefix.
    envPrefix: 'NEXT_PUBLIC_',
    resolve: {
      alias: {
        '~': path.resolve(__dirname, './src'),
      },
    },
  }
})
