import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server:{
    port:3000,
    proxy:{
      '/api': {
        target: 'https://movie-app-rrok.onrender.com/',
        changeOrigin: true, // Needed for CORS support
        // rewrite: (path) => path.replace(/^\/api/, ''),
      },
    },
  },
});
