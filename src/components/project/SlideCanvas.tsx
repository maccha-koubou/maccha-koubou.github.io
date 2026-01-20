import React from 'react'
import {PROJECT_HEIGHT, PROJECT_WIDTH} from "../../config/Size";
import {SlideItem, SlideItemProps} from "./SlideItem";

interface SlideCanvasProps {
    items: SlideItemProps[]
}

const SlideCanvas: React.FC<SlideCanvasProps> = ({ items }) => {
    return (
        <div style={{
            position: 'relative',
            width: `${PROJECT_WIDTH}px`,
            height: `${PROJECT_HEIGHT}px`
        }}>
            {items.map(item => (
                <SlideItem {...item} />
            ))}
        </div>
    )
}

export default SlideCanvas