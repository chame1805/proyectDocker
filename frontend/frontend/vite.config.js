import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      '/api':  'http://localhost:8000',
      '/chame':'http://localhost:8000', // ⬅️ antes 3000; cámbialo
    },
  },
})
