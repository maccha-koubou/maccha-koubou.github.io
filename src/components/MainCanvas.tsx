import { CanvasItem, CanvasItemProps } from "./CanvasItem";
import {CANVAS_HEIGHT} from "../config/Size";

interface MainCanvasProps {
    items: CanvasItemProps[]
    width: number;
}

const MainCanvas: React.FC<MainCanvasProps> = ({ items, width }) => {
    return (
        <div
            data-component="MainCanvas"
            style={{
                position: 'relative',
                width: `${width}px`,
                height: `${CANVAS_HEIGHT}px`
        }}>
            {items.map(item => (
                <CanvasItem key={item.id} {...item} />
            ))}
        </div>
    )
}

export default MainCanvas