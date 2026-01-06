import { useState, useLayoutEffect, useRef } from 'react'

const measureSize = <T extends HTMLElement>() => {
    const ref = useRef<T>(null)
    const [size, setSize] = useState<{ width: number; height: number } | null>(null)

    useLayoutEffect(() => {
        if (!ref.current) return

        const updateSize = (rect: DOMRectReadOnly | DOMRect) => {
            setSize({ width: rect.width, height: rect.height })
        }

        // Get initial size
        updateSize(ref.current.getBoundingClientRect())

        // Observe the resize
        const observer = new ResizeObserver(entries => {
            const rect = entries[0].contentRect
            updateSize(rect)
        })
        observer.observe(ref.current)

        return () => observer.disconnect()
    }, [])

    return { ref, size }
}

export default measureSize