import React, {useEffect, useState} from 'react'
import {NAV_HEIGHT} from "../config/Size";
import NavBar from "../components/NavBar";
import {NavButtonProps} from "../components/NavButton";
import {useLocation, useNavigate} from 'react-router-dom'
import getPageNumber from "../utils/getPageNumber";
import {isUrlProject} from "../router/Router";
import {usePageSwitch} from "../app";

const MainNav = () => {
    const navigate = useNavigate()
    const location = useLocation();
    const [highlightNumber, setHighlightNumber] = useState(Math.floor(getPageNumber(location.pathname)));
    const { setPageSwitchPhase } = usePageSwitch();

    useEffect(() => {
        const page = Math.floor(getPageNumber(location.pathname));
        setHighlightNumber(page);
    }, [location.pathname]);

    const buttons:NavButtonProps[] = [
        {
            id: 'home',
            h: 28,
            padding: 8,
            firstChildren: (
                <span style={{
                    display: "flex",
                    width: "fit-content",
                    height: "fit-content",
                    fontWeight: 400,
                    fontSize: '16px',
                }}>
                    HOME
                </span>
            ),
            onClick: () => {
                if (isUrlProject(location.pathname)) {
                    setPageSwitchPhase('exit')
                    setTimeout(() => navigate('/'), 400)
                } else {
                    navigate('/')
                }
            },
            index: 0,
        },
        {
            id: 'work',
            h: 28,
            padding: 8,
            firstChildren: (
                <span style={{
                    display: "flex",
                    width: "fit-content",
                    height: "fit-content",
                    fontWeight: 400,
                    fontSize: '16px',
                }}>
                    WORK
                </span>
            ),
            onClick: () => {
                if (isUrlProject(location.pathname)) {
                    setPageSwitchPhase('exit')
                    setTimeout(() => navigate('/work'), 400)
                } else {
                    navigate('/work')
                }
            },
            index: 1,
        },
        {
            id: 'about',
            h: 28,
            padding: 8,
            firstChildren: (
                <span style={{
                    display: "flex",
                    width: "fit-content",
                    height: "fit-content",
                    fontWeight: 400,
                    fontSize: '16px',
                }}>
                    ABOUT
                </span>
            ),
            onClick: () => {
                if (isUrlProject(location.pathname)) {
                    setPageSwitchPhase('exit')
                    setTimeout(() => navigate('/about'), 400)
                } else {
                    navigate('/about')
                }
            },
            index: 2,
        }
    ]
    return (
        <div style={{display: "flex", justifyContent: 'center',height: `${NAV_HEIGHT}px`}}>
            <NavBar
                buttons={buttons}
                direction={'row'}
                gap={40}
                highlightNumber={highlightNumber}
                setHighlightNumber={setHighlightNumber}
            />
        </div>
    )
}

export default MainNav