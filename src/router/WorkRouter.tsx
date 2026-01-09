import React from "react"
import {Route, Routes} from 'react-router-dom'
import About from '../pages/About'
import {NAV_HEIGHT, ORIGINAL_HEIGHT} from "../config/Size";
import WorkNav from "../contents/Work/WorkNav";
import WorkCategory from "../pages/Work/WorkCategory";
import {ProjectType} from "../config/ProjectType";

const WorkRouter = () => {
    return (

        <div style={{
            height: `${ORIGINAL_HEIGHT - NAV_HEIGHT}px`,
            display: 'flex',
            flexDirection: 'column',
        }}>
            <div style={{ flex: 1, position: 'relative' }}>
                <WorkNav />
                <Routes>
                    <Route path="product" element={<WorkCategory type={ProjectType.PRODUCT} />} />
                    <Route path="space" element={<WorkCategory type={ProjectType.SPACE} />} />
                    <Route path="visualization" element={<WorkCategory type={ProjectType.VISUALIZATION} />} />
                    <Route path=":projectUrl" element={<About />} />
                </Routes>
            </div>
        </div>
    )
}

export default WorkRouter