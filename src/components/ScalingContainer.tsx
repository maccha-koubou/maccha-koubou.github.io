import React, {createContext, useContext, useEffect, useState} from 'react'
import {CANVAS_MIN_WIDTH, ORIGINAL_HEIGHT} from "../config/Size";

export const ScalingContainerContext = createContext<HTMLDivElement | null>(null);
export const useScalingContainerRef = () => useContext(ScalingContainerContext);

interface ScalingContainerProps {
    children: React.ReactNode
}

export const ScalingContainer = ({ children }: ScalingContainerProps) => {
    const [containerElement, setContainerElement] = useState<HTMLDivElement | null>(null);

    // Calculate the scaling factor of the layout
    const [scale, setScale] = useState(window.innerHeight / ORIGINAL_HEIGHT)
    const [windowWidth, setWindowWidth] = useState(window.innerWidth);

    useEffect(() => {
        const handleResize = () => {
            setScale(window.innerHeight / ORIGINAL_HEIGHT)
            setWindowWidth(window.innerWidth)
        }

        window.addEventListener('resize', handleResize)
        handleResize();
        return () => {
            window.removeEventListener('resize', handleResize)
        }
    }, [])

    // The container should as wide as the window unless the window is narrower than 1200px
    const finalOuterWidth = Math.max(windowWidth, CANVAS_MIN_WIDTH * scale)
    const finalInnerWidth = Math.max(windowWidth / scale - 1, CANVAS_MIN_WIDTH)

    // Scaling should be based on the top left position, or there will be gaps on left and right sides
    return (
        <ScalingContainerContext.Provider value={containerElement}>
            <div
                style={{
                    width: `${finalOuterWidth}px`,
                    margin: '0px',
                    overflowX: 'hidden',
                }}
                tabIndex={-1}
            >

                {/* Outer div is used to cut the overflowing part of inner div which was caused by the rescaling*/}
                <div
                    style={{
                        width: `${finalInnerWidth}px`,
                        margin: '0px',
                        transform: `scale(${scale})`,
                        transformOrigin: 'top left',
                        overflow: 'hidden',
                    }}
                    ref={setContainerElement}
                >
                    {children}
                </div>
            </div>
        </ScalingContainerContext.Provider>
    )
}