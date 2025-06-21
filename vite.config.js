import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { VitePWA } from 'vite-plugin-pwa'  // This line is missing

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    VitePWA({
      registerType: 'autoUpdate',
      includeAssets: ['favicon.ico', 'apple-touch-icon.png', 'masked-icon.svg'],
      manifest: {
        name: 'Photo Upload App',
        short_name: 'PhotoApp',
        description: 'Photo upload application',
        theme_color: '#ffffff',
        display: 'fullscreen',
        start_url: '.',     
          
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

      },


    })
  ],
  base: "/Jeu_DenisDrolet/",// ajouter le nom du depot github si on publie sur GH pages : "/exemple/"
  server: {
    host: '0.0.0.0'
  }
})
