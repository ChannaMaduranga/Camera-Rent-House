import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: command === 'build' ? '/Camera-Rent-House/' : '/',
  
})
