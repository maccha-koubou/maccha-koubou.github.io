import React from 'react'
import {NAV_HEIGHT} from "../config/Size";

const MainNavigation = () => {
    return (
        <div style={{
            display: 'flex',
            width: "100%",
            height: `${NAV_HEIGHT}px`,
            justifyContent: "center",
            alignItems: "flex-start",
        }}>
            Navigation
        </div>
    )
}

export default MainNavigation