import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: '/minha-pagina-apresentacao/' // IMPORTANTE: mesmo nome do repositório
})