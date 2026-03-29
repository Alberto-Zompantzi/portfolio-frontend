import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import i18n from './i18n/index'

console.log('i18n initialized:', i18n.isInitialized);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <App />
)
