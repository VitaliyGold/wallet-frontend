import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react';
import svgr from "vite-plugin-svgr";
import { resolve } from 'path';

export default defineConfig({
  plugins: [react(), svgr()],
  resolve: {
    alias: [
      { find: '@', replacement: resolve(__dirname, './src') },
    ]
  },
  /*
  server: {
    proxy: {
      '/api': {
        target: 'http://localhost:5001/api', // Change to your Node.js API server address
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api/, ''), // Remove '/api' prefix
      },
    }
  }
  */
})
