import React from 'react'
import {NAV_HEIGHT} from "../config/Size";
import NavBar from "../components/NavBar";
import {NavButtonProps} from "../components/NavButton";
import { useNavigate } from 'react-router-dom'

const MainNav = () => {
    const navigate = useNavigate()

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
            onClick: () => {
                navigate('/')
            }
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
            onClick: () => {
                navigate('/work')
            }
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
            onClick: () => {
                navigate('/about')
            }
        }
    ]
    return (
        <div style={{display: "flex", justifyContent: 'center',height: `${NAV_HEIGHT}px`}}>
            <NavBar buttons={buttons} direction={'row'} gap={40} />
        </div>
    )
}

export default MainNav