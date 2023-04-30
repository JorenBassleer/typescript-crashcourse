/// <reference types="vite/client" />
interface ImportMetaEnv {
  readonly VITE_APP_TITLE;
  readonly VITE_API_URL;
  // more env variables...
}

interface ImportMeta {
  readonly env: ImportMetaEnv
}