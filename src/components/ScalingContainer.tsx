import React, {useEffect, useState} from 'react'
import {ORIGINAL_HEIGHT} from "../config/Size";

interface ScalingContainerProps {
    children: React.ReactNode
}

export const ScalingContainer = ({ children }: ScalingContainerProps) => {

    // Calculate the scaling factor of the layout
    const [scale, setScale] = useState(window.innerHeight / ORIGINAL_HEIGHT)

    useEffect(() => {
        const handleResize = () => {
            setScale(window.innerHeight / ORIGINAL_HEIGHT)
        }

        window.addEventListener('resize', handleResize)

        return () => {
            window.removeEventListener('resize', handleResize)
        }
    }, [])

    // Scaling should be based on the top left position, or there will be gaps on left and right sides
    return (
        <div style={{ width: '100%', overflowX: 'hidden', }}>
            <div
                style={{
                    width: `${ window.innerWidth / scale - 1}px`,
                    margin: '0 auto',
                    transform: `scale(${scale})`,
                    transformOrigin: 'top left',
                    overflow: 'visible',
                }}
            >
                {children}
            </div>
        </div>
    )
}