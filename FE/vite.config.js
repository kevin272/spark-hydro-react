// vite.config.js
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  css: {
    postcss: './postcss.config.cjs',
    devSourcemap: true,
    preprocessorOptions: {},
  },
  optimizeDeps: {
    include: ['glightbox'], // optional
  },
});
