import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { VitePWA } from 'vite-plugin-pwa'  // This line is missing

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    react(),
    VitePWA({
      registerType: 'autoUpdate',
      includeAssets: ['favicon.ico', 'apple-touch-icon.png', 'masked-icon.svg'],
      manifest: {
        name: 'Photo Upload App',
        short_name: 'PhotoApp',
        description: 'Photo upload application',
        theme_color: '#ffffff',
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
        // Enable offline functionality
        display: 'standalone',
        start_url: '/',
        background_color: '#ffffff'
      },
      // Add workbox configuration for offline support
      strategies: 'generateSW',
      workbox: {
        globPatterns: ['**/*.{js,css,html,ico,png,svg}'],
        runtimeCaching: [
          {
            urlPattern: /^https:\/\/fonts\.googleapis\.com\/.*/i,
            handler: 'CacheFirst',
            options: {
              cacheName: 'google-fonts-cache',
              expiration: {
                maxEntries: 10,
                maxAgeSeconds: 60 * 60 * 24 * 365 // <== 1 year
              }
            }
          }
        ]
      }
    })
  ],
  base: "",// ajouter le nom du depot github si on publie sur GH pages : "/exemple/"
  server: {
    host: '0.0.0.0'
  }
})
