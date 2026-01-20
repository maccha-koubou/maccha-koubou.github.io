import React, {createContext, useContext, useRef, useState} from "react";
import styles from './ScrollWrapper.module.css'

export interface ScrollState {
    scrollX: number;
    scrollY: number;
}

export const ScrollContext = createContext<ScrollState>({ scrollX: 0, scrollY: 0 });
export const useScroll = () => useContext(ScrollContext);

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
        const [scroll, setScroll] = useState<ScrollState>({ scrollX: 0, scrollY: 0 });

        const scrollByDelta = (deltaY: number) => {
            const element = internalRef.current
            if (!element) return;

            // Ease the animation of the scrolling
            const start = element.scrollLeft
            const end = start + deltaY
            const duration = 300
            const startTime = performance.now()

            const step = (time: number) => {
                const t = Math.min((time - startTime) / duration, 1)
                const ease = 1 - (1 - t) * (1 - t) // Only use ease-out, because ease-in-out can be not smooth in continuous scrolling
                element.scrollLeft = start + (end - start) * ease
                setScroll({ scrollX: element.scrollLeft, scrollY: element.scrollTop })

                if (t < 1) requestAnimationFrame(step)
            }

            requestAnimationFrame(step)
        }

        React.useImperativeHandle(ref, () => ({
            scrollByDelta
        }))

    return (
        <ScrollContext.Provider value={scroll}>
            <div style={{
                width: `${canvasWidth}px`,
                height: `${canvasHeight}px`,
                }}
                className={styles.scrollWrapper}
                ref={internalRef}
            >
                {children}
            </div>
        </ScrollContext.Provider>
    )
})

export default ScrollWrapper;