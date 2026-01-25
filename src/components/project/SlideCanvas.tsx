import React from 'react'
import {PROJECT_HEIGHT, PROJECT_WIDTH} from "../../config/Size";
import {CanvasItem, CanvasItemProps} from "../CanvasItem";

interface SlideCanvasProps {
    items: CanvasItemProps[]
}

const SlideCanvas: React.FC<SlideCanvasProps> = ({ items }) => {
    return (
        <div style={{
            position: 'relative',
            width: `${PROJECT_WIDTH}px`,
            height: `${PROJECT_HEIGHT}px`
        }}>
            {items.map(item => (
                <CanvasItem {...item} />
            ))}
        </div>
    )
}

export default SlideCanvas