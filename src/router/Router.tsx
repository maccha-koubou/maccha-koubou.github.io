import React from "react"
import { Routes, Route } from 'react-router-dom'
import Home from '../pages/Home'
import Work from '../pages/Work'
import About from '../pages/About'
import WorkRouter from "./WorkRouter";

const Router = () => {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/work" element={<Work />} />
            <Route path="/about" element={<About />} />
            <Route path="/work/*" element={<WorkRouter />} />
        </Routes>
    )
}

export default Router