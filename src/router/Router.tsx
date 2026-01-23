import React, {useEffect, useState} from "react"
import {Routes, Route, useLocation} from 'react-router-dom'
import type { Location } from 'react-router-dom'
import Home from '../pages/Home'
import Work from '../pages/Work'
import About from '../pages/About'
import WorkRouter from "./WorkRouter";
import {motion} from "framer-motion";
import getPageNumber from "../utils/getPageNumber";

interface PageSwitchContextType {
    pageSwitchPhase: 'idle' | 'enter' | 'exit';
    setPageSwitchPhase: (phase: 'idle' | 'enter' | 'exit') => void;
}

const PageSwitchContext = React.createContext<PageSwitchContextType | null>(null);

export const usePageSwitch = () => {
    const context = React.useContext(PageSwitchContext);
    if (!context) throw new Error('no page switch context');
    return context;
};



const Router = () => {

    const location = useLocation()
    const [currentLocation, setCurrentLocation] = React.useState(location)
    const [nextLocation, setNextLocation] = React.useState<null | Location>(null)



    // Use different animation in project detail pages

    // Determine whether the page switching is relating to project detail pages
    const WORK_CATEGORY_PATHS = [
        '/work/product',
        '/work/space',
        '/work/visualization',
    ];

    const isProject = (pathname: string) => {
        if (!pathname.startsWith('/work/')) return false;
        return !WORK_CATEGORY_PATHS.includes(pathname);
    };

    const isAnimationDisable = isProject(currentLocation.pathname)
        || (nextLocation && isProject(nextLocation.pathname));


    // Handle the animation relating to project detail pages
    const [pageSwitchPhase, setPageSwitchPhase] = useState<'idle' | 'enter' | 'exit'>('idle');

    const handleAnimationComplete = React.useCallback(() => {
        if (!nextLocation) return;

        setCurrentLocation(nextLocation);
        setNextLocation(null);
        setPageSwitchPhase('enter');

        const t = setTimeout(() => setPageSwitchPhase('idle'), 400);
        return () => clearTimeout(t);
    }, [nextLocation]);

    useEffect(() => {
        if (!nextLocation) return;
        if (isAnimationDisable) {
            setPageSwitchPhase('exit');
            handleAnimationComplete();
            return;
        }
    }, [nextLocation, isAnimationDisable, handleAnimationComplete]);



    // Calculate the direction when the location changed
    const directionRef = React.useRef(1)

    React.useEffect(() => {
        if (location.pathname !== currentLocation.pathname) {
            const prevPage = getPageNumber(currentLocation.pathname)
            const nextPage = getPageNumber(location.pathname)
            directionRef.current = nextPage > prevPage ? 1 : -1
            setNextLocation(location)
        }
    }, [location, currentLocation])

    const direction = directionRef.current


    return (
        <PageSwitchContext.Provider value={{ pageSwitchPhase, setPageSwitchPhase }}>

            {isAnimationDisable
                ? (
                    <Routes location={currentLocation}>
                        <Route path="/" element={<Home/>}/>
                        <Route path="/work" element={<Work/>}/>
                        <Route path="/about" element={<About/>}/>
                        <Route path="/work/*" element={<WorkRouter/>}/>
                    </Routes>
                ) :

                (
                    <div style={{position: 'relative', width: '100%', height: '100%', overflow: 'hidden'}}>
                        {/* Current page */}
                        <motion.div
                            key={currentLocation.pathname}
                            animate={
                                nextLocation
                                    ? {x: `${-direction * 100}%`}
                                    : {x: 0}
                            }
                            transition={{duration: 0.4, ease: 'easeInOut'}}
                            style={{position: 'absolute', inset: 0}}
                        >
                            <Routes location={currentLocation}>
                                <Route path="/" element={<Home/>}/>
                                <Route path="/work" element={<Work/>}/>
                                <Route path="/about" element={<About/>}/>
                                <Route path="/work/*" element={<WorkRouter/>}/>
                            </Routes>
                        </motion.div>

                        {/* Next page */}
                        {nextLocation && (
                            <motion.div
                                key={nextLocation.pathname}
                                initial={{x: `${direction * 100}%`}}
                                animate={{x: 0}}
                                transition={{duration: 0.4, ease: 'easeInOut'}}
                                style={{position: 'absolute', inset: 0}}
                                onAnimationComplete={() => {
                                    setCurrentLocation(nextLocation)
                                    setNextLocation(null)
                                }}
                            >
                                <Routes location={nextLocation}>
                                    <Route path="/" element={<Home/>}/>
                                    <Route path="/work" element={<Work/>}/>
                                    <Route path="/about" element={<About/>}/>
                                    <Route path="/work/*" element={<WorkRouter/>}/>
                                </Routes>
                            </motion.div>
                        )}
                    </div>
                )}
        </PageSwitchContext.Provider>
    )
}

export default Router