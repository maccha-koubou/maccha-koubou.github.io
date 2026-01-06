import React, {useEffect, useRef, useState} from 'react'
import {CanvasItemProps} from "../components/CanvasItem";
import AboutNav from "../contents/About/AboutNav";
import AboutCanvas from "../components/About/AboutCanvas";
import IntroTab from "../contents/About/IntroTab";

const About = () => {

    // Responsive width of canvas for the ellipse distribution
    const ref = useRef<HTMLDivElement>(null)
    const [canvasHeight, setCanvasHeight] = useState(0)
    const [canvasWidth, setCanvasWidth] = useState(0)

    useEffect(() => {
        if (!ref.current) return
        const observer = new ResizeObserver(entries => {
            setCanvasWidth(entries[0].contentRect.width)
            setCanvasHeight(entries[0].contentRect.height)
        })
        observer.observe(ref.current)
        return () => observer.disconnect()
    }, [])

    const items: CanvasItemProps[] = [
        {
            id: 'about-nav',
            x: 0,
            y: 200,
            z: 2,
            children: (
                <AboutNav />
            )
        },
        {
            id: 'about-tab',
            x: 280,
            y: 0,
            z: 1,
            children: (
                <IntroTab />
            )
        }
    ]

    return (
        <div ref={ref}>
            <AboutCanvas items={items} width={canvasWidth} data-component="About" />
        </div>
    )
}

export default About