import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/ves/', // Updated to match lowercase repository name
  build: {
    outDir: 'dist',
  },
})