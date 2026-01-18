import React from 'react'
import MainCanvas from "../components/MainCanvas";
import { CanvasItemProps } from "../components/CanvasItem";
import IntroCard from "../contents/Home/IntroCard";
import ellipseDistribution, {
    useRandomizeOffsets,
    useRandomizeProjects,
    useRandomizeZ
} from "../utils/Home/ellipseDistribution";
import measureSize from "../utils/measureSize";
import {useRandomizeRatio, useRandomizeSize} from "../utils/getImgSize";

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


    const COUNT = 6
    const randomOffsets = useRandomizeOffsets(COUNT)
    const randomProjects = useRandomizeProjects(COUNT)
    const randomZ = useRandomizeZ(COUNT)
    const randomSize = useRandomizeSize(COUNT)
    const randomRatio = useRandomizeRatio(COUNT)

    const ellipseItems =
        ellipseDistribution(canvasWidth, canvasHeight, randomOffsets, randomProjects, randomZ, randomSize, randomRatio)

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