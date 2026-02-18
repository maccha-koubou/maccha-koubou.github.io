import React, {createContext, useContext, useEffect, useRef, useState} from "react";
import styles from './ScrollWrapper.module.css'
import {PROJECT_HEIGHT} from "../config/Size";

export interface ScrollState {
    scrollX: number;
    scrollY: number;
}

export const ScrollContext = createContext<ScrollState>({ scrollX: 0, scrollY: 0 });
export const useScroll = () => useContext(ScrollContext);

interface ScrollWrapperProps {
    children: React.ReactNode;
    canvasWidth: number,
    alignment?: 'center' | 'left',
    speed?: number,
}

export interface ScrollWrapperHandle {
    scrollByDelta: (deltaY: number) => void
    scrollToX: (x: number) => void
}

const ScrollWrapper = React.forwardRef<ScrollWrapperHandle, ScrollWrapperProps>(({
    children,
    canvasWidth,
    alignment = 'center',
    speed = 1
}, ref) => {
    const internalRef = useRef<HTMLDivElement>(null)
    const [scroll, setScroll] = useState<ScrollState>({ scrollX: 0, scrollY: 0 });

    useEffect(() => {
        const element = internalRef.current
        if (!element) return

        const onScroll = () => {
            setScroll({
                scrollX: element.scrollLeft,
                scrollY: element.scrollTop,
            })
        }
        element.addEventListener('scroll', onScroll, { passive: true })

        onScroll()

        return () => {
            element.removeEventListener('scroll', onScroll)
        }
    }, [])

    // Manage the scrolling action
    const scrollByDelta = (deltaX: number, noSpeed = false) => {
        const element = internalRef.current
        if (!element) return;

        // Ease the animation of the scrolling
        const start = element.scrollLeft
        const end = start + (noSpeed ? deltaX : deltaX * speed)
        const duration = 300
        const startTime = performance.now()

        const step = (time: number) => {
            const t = Math.min((time - startTime) / duration, 1)
            const ease = 1 - (1 - t) * (1 - t) // Only use ease-out, because ease-in-out can be not smooth in continuous scrolling
            element.scrollLeft = start + (end - start) * ease
            //setScroll({ scrollX: element.scrollLeft, scrollY: element.scrollTop })

            if (t < 1) requestAnimationFrame(step)
        }

        requestAnimationFrame(step)
    }

    // Scroll when there is horizontal scroll from the touchpad
    useEffect(() => {
        const element = internalRef.current;
        if (!element) return;

        const onWheel = (e: WheelEvent) => {
            element.scrollLeft += e.deltaX * speed;
        };

        element.addEventListener('wheel', onWheel, { passive: false });

        return () => {
            element.removeEventListener('wheel', onWheel);
        };
    }, [scrollByDelta]);

    // Scroll to specific X
    const scrollToX = (x: number) => {
        const element = internalRef.current;
        if (!element) return;
        scrollByDelta(x - element.scrollLeft, true);
    };

    React.useImperativeHandle(ref, () => ({
        scrollByDelta,
        scrollToX
    }))

    return (
        <ScrollContext.Provider value={scroll}>
            <div style={{
                width: `${canvasWidth}px`,
                height: `${PROJECT_HEIGHT}px`,
                justifyContent: alignment,
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