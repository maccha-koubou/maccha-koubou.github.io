import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './app'
import './styles/globals.css'
import {fonts} from './styles/theme'

ReactDOM.createRoot(document.getElementById('root')!).render(
    <React.StrictMode>
        <App />
    </React.StrictMode>
)

// Apply fonts
document.documentElement.style.setProperty('--font', fonts.alphabet)