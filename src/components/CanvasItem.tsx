import React from 'react'

export interface CanvasItemProps {
    id: string
    x: number
    y: number
    z: number
    w?: number | 'fit-content' | '100%'
    h?: number | 'fit-content' | '100%'
    children: React.ReactNode
}

export const CanvasItem: React.FC<CanvasItemProps> = ({ id, x, y, z, children, w = 'fit-content', h = 'fit-content' }) => {
    return (
        <div style={{ display: 'flex', position: 'absolute', left: x, top: y, zIndex: z, width: w, height: h }}>
            {children}
        </div>
    )
}