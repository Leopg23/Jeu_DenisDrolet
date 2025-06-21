import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { VitePWA } from 'vite-plugin-pwa'

export default defineConfig({
  plugins: [
    react(),
    VitePWA({
      filename: 'manifest.webmanifest',
      registerType: 'autoUpdate',
      includeAssets: ['favicon.ico', 'apple-touch-icon.png', 'masked-icon.svg'],
      manifest: {
        name: 'Jeu Denis Drolet',
        short_name: 'Jeu Denis Drolet',
        description: 'Jeu Denis Drolet',
        theme_color: '#ffffff',
        display: 'fullscreen',
        start_url: '/Jeu_DenisDrolet/',  
        icons: [
          {
            src: 'pwa-192x192.png',
            sizes: '192x192',
            type: 'image/png'
          },
          {
            src: 'pwa-512x512.png',
            sizes: '512x512',
            type: 'image/png',
            purpose: 'any maskable'
          }
        ],
      }
    })
  ],
  base: "/Jeu_DenisDrolet/",
  server: {
    host: '0.0.0.0'
  }
})
