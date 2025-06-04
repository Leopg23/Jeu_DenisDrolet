import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './main.scss';
import Appli from './composants/Appli';
import React from 'react'
import ReactDOM from 'react-dom/client'
import { registerSW } from 'virtual:pwa-register'

const updateSW = registerSW({
  onNeedRefresh() {
    // Optional: Add logic for when an update is available
    if (confirm('New content available. Reload?')) {
      updateSW(true)
    }
  },
})
ReactDOM.createRoot(document.getElementById('racine')).render(
  <StrictMode>
    <Appli />
  </StrictMode>,
)
