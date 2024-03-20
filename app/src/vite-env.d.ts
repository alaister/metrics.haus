/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly SUPABASE_URL: string
  readonly SUPABASE_ANON_KEY: string
  readonly NEXT_PUBLIC_FUNCTIONS_BASE_URL: string
}

interface ImportMeta {
  readonly env: ImportMetaEnv
}
