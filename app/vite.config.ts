import react from '@vitejs/plugin-react'
import path from 'path'
import { defineConfig } from 'vite'
import { ViteMinifyPlugin } from 'vite-plugin-minify'

export default defineConfig({
  plugins: [react(), ViteMinifyPlugin()],
  resolve: {
    alias: {
      '~': path.resolve(__dirname, './src'),
    },
  },
})
