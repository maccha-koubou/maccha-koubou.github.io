import React from 'react'
import TabCanvas from "../../components/About/TabCanvas"
import {CanvasItemProps} from "../../components/CanvasItem";
import ByCard from "../../components/About/ByCard";

const ByTab = () => {

    const items: CanvasItemProps[] = [
        {
            id: 'about-by-list',
            x: 80,
            y: 256,
            z: 1,
            children: (
                <div style={{
                    display: 'flex',
                    flexDirection: 'column',
                    width: 'fit-content',
                    height: 'fit-content',
                    gap: '24px'
                }}>
                    <ByCard
                        title={'Empathy'}
                        text={'I design from users\' behaviors and perspectives, coordinating diverse needs, especially for marginalized groups.'}
                    />
                    <ByCard
                        title={'Ethic sensitivity'}
                        text={'To be finished'}
                    />
                    <ByCard
                        title={'Systematic thinking'}
                        text={'I don\'t just focus on the happy path, but think systematically about edge cases and long-term challenges.'}
                    />
                </div>
            )
        }
    ]

    return (
        <TabCanvas items={items} />
    )
}

export default ByTab