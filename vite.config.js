import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  base: '/Landing-Page-/',  // Asegúrate de que coincide con la ruta de tu repositorio
  plugins: [react(), tailwindcss()],
})

