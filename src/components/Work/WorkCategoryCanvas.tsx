import React from 'react'
import { CanvasItem, CanvasItemProps } from "../CanvasItem";
import {CANVAS_HEIGHT, NAV_HEIGHT} from "../../config/Size";

interface WorkCategoryCanvasProps {
    items: CanvasItemProps[]
    width?: string
}

const WorkCategoryCanvas: React.FC<WorkCategoryCanvasProps> = ({ items, width = '100%' }) => {
    return (
        <div
            data-component="MainCanvas"
            style={{
                position: 'relative',
                width: width,
                height: `${CANVAS_HEIGHT - NAV_HEIGHT}px`
        }}>
            {items.map(item => (
                <CanvasItem key={item.id} {...item} />
            ))}
        </div>
    )
}

export default WorkCategoryCanvas