import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
// vite.config.js
export default defineConfig({
  plugins: [react()],
  base: '/event-portal/', // Add this line
})
