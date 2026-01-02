import React from 'react'
import Card from "../components/Card";
import MainCanvas from "../components/MainCanvas";
import { CanvasItemProps } from "../components/CanvasItem";

const Home = () => {
    const items: CanvasItemProps[] = [
        {
            id: 'home-info-card',
            x: 120,
            y: 80,
            z: 1,
            children: (
                <Card w={400} h={300} bg={"#fff"} borderWidth={1} borderColor={"#33ff44"} radius={16} padding={24}>
                    123
                </Card>
            ),
        },
        {
            id: 'home-project-1',
            x: 420,
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
        <MainCanvas items={items} />
    )
}

export default Home