import React from 'react'
import { CanvasItem, CanvasItemProps } from "./CanvasItem";
import {PROJECT_HEIGHT, PROJECT_WIDTH} from "../config/Size";

interface ProjectCanvasProps {
    items: CanvasItemProps[]
}

const ProjectCanvas: React.FC<ProjectCanvasProps> = ({ items }) => {
    return (
        <div style={{
            position: 'relative',
            width: `${PROJECT_WIDTH}px`,
            height: `${PROJECT_HEIGHT}px`
        }}>
            {items.map(item => (
                <CanvasItem key={item.id} {...item} />
            ))}
        </div>
    )
}

export default ProjectCanvas