import React from 'react'
import { CanvasItem, CanvasItemProps } from "../CanvasItem";
import {CANVAS_HEIGHT} from "../../config/Size";

interface AboutCanvasProps {
    items: CanvasItemProps[]
    width: number
}

const AboutCanvas: React.FC<AboutCanvasProps> = ({ items, width }) => {
    return (
        <div style={{
            width: `${width}px`,
            height: '100%',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
        }}>
            <div
                data-component="AboutCanvas"
                style={{
                    position: 'relative',
                    width: `1200px`,
                    height: `${CANVAS_HEIGHT}px`
                }}>
                {items.map(item => (
                    <CanvasItem key={item.id} {...item} />
                ))}
            </div>
        </div>
    )
}

export default AboutCanvas