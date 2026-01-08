import React from 'react'
import MainCanvas from "../components/MainCanvas";
import { CanvasItemProps } from "../components/CanvasItem";
import IntroCard from "../contents/Home/IntroCard";
import ellipseDistribution from "../utils/Home/ellipseDistribution";
import measureSize from "../utils/measureSize";

const Home = () => {

    // Responsive width of canvas for the ellipse distribution
    const { ref, size: canvasSize } = measureSize<HTMLDivElement>()
    const canvasWidth = canvasSize ? canvasSize.width : 0
    const canvasHeight = canvasSize ? canvasSize.height : 0

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