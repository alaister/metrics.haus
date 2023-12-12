import generouted from '@generouted/react-router/plugin'
import react from '@vitejs/plugin-react'
import path from 'path'
import { defineConfig } from 'vite'
import codegen from 'vite-plugin-graphql-codegen'
import { ViteMinifyPlugin } from 'vite-plugin-minify'

export default defineConfig({
  plugins: [
    react(),
    codegen(),
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
})
