import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  base: './',
  plugins: [react(), tailwindcss()],
  server: {
    port: 5173,
    proxy: {
      '/_next': {
        target: 'https://the-game.gg',
        changeOrigin: true,
        secure: true,
      },
      '/images': {
        target: 'https://the-game.gg',
        changeOrigin: true,
        secure: true,
      },
      '/static': {
        target: 'https://the-game.gg',
        changeOrigin: true,
        secure: true,
      },
    },
  },
  preview: {
    port: 4173,
    proxy: {
      '/_next': {
        target: 'https://the-game.gg',
        changeOrigin: true,
        secure: true,
      },
      '/images': {
        target: 'https://the-game.gg',
        changeOrigin: true,
        secure: true,
      },
      '/static': {
        target: 'https://the-game.gg',
        changeOrigin: true,
        secure: true,
      },
    },
  },
});
