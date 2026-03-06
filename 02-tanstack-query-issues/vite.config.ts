import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';
import path from 'path';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@libs': path.resolve(__dirname, './src/libs'),
      '@helpers': path.resolve(__dirname, './src/helpers'),
      '@components': path.resolve(__dirname, './src/components'),
      '@api': path.resolve(__dirname, './src/api'),
      '@pages': path.resolve(__dirname, './src/pages'),
      '@issues': path.resolve(__dirname, './src/issues'),
    },
  },
});
