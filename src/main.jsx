import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
// Globals first: component styles must be able to override them.
import './styles/global.css'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>
)
