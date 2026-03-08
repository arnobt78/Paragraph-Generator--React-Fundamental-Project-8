/**
 * Application entry point.
 * Mounts the root React component into the DOM and applies global styles.
 */
import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'

// createRoot (React 18+) replaces the legacy ReactDOM.render API
ReactDOM.createRoot(document.getElementById('root')).render(
  // StrictMode helps surface side-effects and deprecated APIs in development
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
