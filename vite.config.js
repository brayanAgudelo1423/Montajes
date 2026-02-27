import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// Para GitHub Pages: si tu repo es usuario.github.io/Montajes usa base: '/Montajes/'
// Si es usuario.github.io (solo el repo) usa base: '/'
export default defineConfig({
  plugins: [react()],
  base: process.env.GITHUB_PAGES ? '/Montajes/' : '/',
})
