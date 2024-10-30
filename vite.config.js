import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  test: {
    globals: true,
    environment: 'jsdom',
    setupFiles: './src/setupTests.js',
  },
  build: {
    rollupOptions: {
      // If any third-party module is causing trouble, try externalizing it here
      external: ['react', 'react-dom'],
    },
    sourcemap: true, // Enable source maps for easier debugging
  },
});