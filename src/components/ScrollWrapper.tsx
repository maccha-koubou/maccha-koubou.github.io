import React, {useEffect, useRef} from "react";
import styles from './ScrollWrapper.module.css'

interface ScrollWrapperProps {
    children: React.ReactNode;
    canvasWidth: number,
    canvasHeight: number,
}

const ScrollWrapper = ({
    children,
    canvasWidth,
    canvasHeight,
}: ScrollWrapperProps) => {
    const ref = useRef<HTMLDivElement>(null)

    useEffect(() => {
        const element = ref.current
        if (!element) return
        const onWheel = (e: WheelEvent) => {
            // Control the wheel action when the content is wider than the container
            if (element.scrollWidth > element.clientWidth) {
                e.preventDefault()
                element.scrollLeft += e.deltaY
            }
        }
        element.addEventListener('wheel', onWheel, { passive: false })
        return () => element.removeEventListener('wheel', onWheel)
    }, [])

    return (
        <div style={{
            width: `${canvasWidth}px`,
            height: `${canvasHeight}px`,
            }}
            className={styles.scrollWrapper}
            ref={ref}
        >
            {children}
        </div>
    )
}

export default ScrollWrapper;