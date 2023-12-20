import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';
import checker from 'vite-plugin-checker';
import * as path from 'path';

// https://vitejs.dev/config/
export default defineConfig({
  resolve: {
    alias: {
      '@components': path.resolve(__dirname, '/src/components'),
      '@pages': path.resolve(__dirname, '/src/pages'),
      '@assets': path.resolve(__dirname, '/src/assets'),
    },
  },
  plugins: [
    react(),
    checker({
      typescript: true
    })
  ]
});
