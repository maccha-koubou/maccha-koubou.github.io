import React from 'react'
import {NAV_HEIGHT} from "../config/Size";
import NavBar from "./NavBar";
import {NavButtonProps} from "./NavButton";

const MainNav = () => {
    const buttons:NavButtonProps[] = [
        {
            id: 'home',
            h: 28,
            padding: 8,
            firstChildren: (
                <div style={{display: "flex", width: "fit-content", height: "fit-content"}}>
                    HOME
                </div>
            ),
        },
        {
            id: 'work',
            h: 28,
            padding: 8,
            firstChildren: (
                <div style={{display: "flex", width: "fit-content", height: "fit-content"}}>
                    WORK
                </div>
            ),
        },
        {
            id: 'about',
            h: 28,
            padding: 8,
            firstChildren: (
                <div style={{display: "flex", width: "fit-content", height: "fit-content"}}>
                    ABOUT
                </div>
            ),
        }
    ]
    return (
        <div style={{display: "flex", justifyContent: 'center',height: `${NAV_HEIGHT}px`}}>
            <NavBar buttons={buttons} direction={'row'} gap={40} />
        </div>
    )
}

export default MainNav