import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import WebApp from '@twa-dev/sdk'

//tell Telegram that our app is ready
//then Telegram will hide the loading placeholder and show the app
/**
 * Recommendation:
 *  1. call it after loaded some essential interface element
 *  2. call it as soon as possible
 */
WebApp.ready()

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
