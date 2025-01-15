import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  base: "/article-frontend-react-vite/",
  define: {
    __API_URL__: JSON.stringify(import.meta.env.VITE_BASE_URL),
  },
})
