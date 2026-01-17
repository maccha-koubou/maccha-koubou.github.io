import React, {useRef} from "react";
import styles from './ScrollWrapper.module.css'

interface ScrollWrapperProps {
    children: React.ReactNode;
    canvasWidth: number,
    canvasHeight: number,
}

export interface ScrollWrapperHandle {
    scrollByDelta: (deltaY: number) => void
}

const ScrollWrapper = React.forwardRef<ScrollWrapperHandle, ScrollWrapperProps>(
    ({ children, canvasWidth, canvasHeight }, ref) => {
        const internalRef = useRef<HTMLDivElement>(null)

        const scrollByDelta = (deltaY: number) => {
            const element = internalRef.current
            if (!element) return
            if (element.scrollWidth > element.clientWidth) {
                element.scrollLeft += deltaY
            }
        }

        React.useImperativeHandle(ref, () => ({
            scrollByDelta
        }))

    return (
        <div style={{
            width: `${canvasWidth}px`,
            height: `${canvasHeight}px`,
            }}
            className={styles.scrollWrapper}
            ref={internalRef}
        >
            {children}
        </div>
    )
})

export default ScrollWrapper;