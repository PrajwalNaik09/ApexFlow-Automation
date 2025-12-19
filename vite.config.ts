import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@': '.',
    },
  },
  define: {
    // Polyfill process.env for client-side code if needed, though usually handled by environment
    'process.env': process.env
  }
});