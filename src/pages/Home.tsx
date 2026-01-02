import React, {useEffect, useState} from 'react'
import Card from "../components/Card";
import MainCanvas from "../components/MainCanvas";
import { CanvasItemProps } from "../components/CanvasItem";
import {ORIGINAL_HEIGHT} from "../config/Size";
import IntroCard from "../contents/Home/IntroCard";

const Home = () => {

    // Responsive width of canvas
    const [canvasWidth, setCanvasWidth] = useState(window.innerWidth);

    useEffect(() => {
        console.log(window.innerWidth)
        const handleResize = () => {
            setCanvasWidth(Math.max(window.innerWidth / (window.innerHeight / ORIGINAL_HEIGHT) - 1, 1200))
        }

        window.addEventListener('resize', handleResize)
        handleResize();
        return () => {
            window.removeEventListener('resize', handleResize)
        }
    }, []);

    const items: CanvasItemProps[] = [
        {
            id: 'home-info-card',
            x: 0,
            y: 0,
            z: 1,
            w: '100%',
            h: '100%',
            children: (
                <IntroCard />
            ),
        },
        {
            id: 'home-project-1',
            x: 0,
            y: 220,
            z: 2,
            children: (
                <Card w={400} h={300} bg={"#fff"} borderWidth={1} borderColor={"#33ff44"} radius={16} padding={24}>
                    456
                </Card>
            ),
        },
    ]
    return (
        <MainCanvas items={items} width={canvasWidth} data-component="Home" />
    )
}

export default Home