import React, {useEffect, useRef, useState} from 'react'
import MainCanvas from "../components/MainCanvas";
import { CanvasItemProps } from "../components/CanvasItem";
import IntroCard from "../contents/Home/IntroCard";
import ellipseDistribution from "../utils/Home/ellipseDistribution";

const Home = () => {

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

    const itemWithoutEllipse: CanvasItemProps[] = [
        {
            id: 'home-intro-card',
            x: 0,
            y: 0,
            z: 1,
            w: '100%',
            h: '100%',
            children: (
                <IntroCard />
            ),
        }
    ]
    const ellipseItems = ellipseDistribution(canvasWidth, canvasHeight)

    const items: CanvasItemProps[] = [
        ...itemWithoutEllipse,
        ...ellipseItems,
    ]
    return (
        <div ref={ref}>
            <MainCanvas items={items} data-component="Home" />
        </div>
    )
}

export default Home