import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig(({ command }) => {
  return {
    plugins: [react()],
    base: command === 'build' ? '/Camera-Rent-House/' : '/', // Set base path for GitHub Pages
  };
});
