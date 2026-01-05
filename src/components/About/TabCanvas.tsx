import React from 'react'
import { CanvasItem, CanvasItemProps } from "../CanvasItem";
import {CANVAS_HEIGHT} from "../../config/Size";

interface TabCanvasProps {
    items: CanvasItemProps[]
}

const TabCanvas: React.FC<TabCanvasProps> = ({ items }) => {
    return (
        <div
            data-component="AboutCanvas"
            style={{
                position: 'relative',
                width: `960px`,
                height: `${CANVAS_HEIGHT}px`,
                background: '#eee'
            }}>
            {items.map(item => (
                <CanvasItem key={item.id} {...item} />
            ))}
        </div>
    )
}

export default TabCanvas