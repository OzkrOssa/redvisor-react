import React from 'react'
import { createRoot } from 'react-dom/client'
import './style.css'
import App from './App'
import { HashRouter, Routes, Route } from "react-router-dom";
import { HitDetails } from './components/HitDetails';

const container = document.getElementById('root')

const root = createRoot(container)

root.render(
    <React.StrictMode>
        <HashRouter basename={"/"}>
            {/* The rest of your app goes here */}
            <Routes>
                <Route path="/" element={<App />} exact />
                <Route path="/hit-details" element={<HitDetails />} exact />
                {/* more... */}
            </Routes>
        </HashRouter>,
    </React.StrictMode>
)
