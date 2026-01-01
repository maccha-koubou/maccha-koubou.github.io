import React from 'react'

export interface CanvasItemProps {
    id: number
    x: number
    y: number
    z: number
    children: React.ReactNode
}

export const CanvasItem: React.FC<CanvasItemProps> = ({ id, x, y, z, children }) => {
    return (
        <div style={{ position: 'absolute', left: x, top: y, zIndex: z }}>
            {children}
        </div>
    )
}