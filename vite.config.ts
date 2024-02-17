import { defineConfig, loadEnv } from 'vite'
import react from '@vitejs/plugin-react';
import svgr from "vite-plugin-svgr";
import { resolve } from 'path';

export default defineConfig(({ mode }) => {

    const env = loadEnv(mode, process.cwd(), '');

    return {
        plugins: [react(), svgr()],
        envPrefix: 'FRONTEND_',
        resolve: {
            alias: [
                { find: '@', replacement: resolve(__dirname, './src') },
            ]
        },
        server: {
            proxy: {
            '/api': {
                target: env.API_URL,
                changeOrigin: true,
                rewrite: (path) => path.replace(/^\/api/, ''),
            },
            }
        }
    }
  
})
