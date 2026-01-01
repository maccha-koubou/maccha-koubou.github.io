import React from 'react'
import { BrowserRouter } from 'react-router-dom'
import Router from './router/Router'
import MainNavigation from "./components/MainNavigation";

const App = () => {
    return (
        <BrowserRouter>
            <div style={{ display: 'flex', flexDirection: 'column', height: '100%' }}>
                <div style={{ flex: 1, position: 'relative' }}>
                    <Router />
                </div>
                <MainNavigation />
            </div>
        </BrowserRouter>
    )
}

export default App