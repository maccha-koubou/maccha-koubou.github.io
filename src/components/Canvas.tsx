import React from 'react'
import { CanvasItem, CanvasItemProps } from "./CanvasItem";

interface CanvasProps {
    items: CanvasItemProps[]
}

const Canvas: React.FC<CanvasProps> = ({ items }) => {
    return (
        <div style={{ position: 'relative', width: '100%', height: '100%' }}>
            {items.map(item => (
                <CanvasItem key={item.id} {...item} />
            ))}
        </div>
    )
}

export default Canvas