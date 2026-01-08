import React from 'react'
import TabCanvas from "../../components/About/TabCanvas"
import {CanvasItemProps} from "../../components/CanvasItem";
import ForCard from "../../components/About/ForCard";

const ForTab = () => {

    const items: CanvasItemProps[] = [
        {
            id: 'about-by-list',
            x: 0,
            y: 296,
            z: 1,
            children: (
                <div style={{
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'center',
                    alignItems: 'center',
                    width: '960px',
                    height: 'fit-content',
                    gap: '36px'
                }}>
                    <ForCard
                        title={'Queer-feminism'}
                        subtitle1={'Intersectionality'}
                        subtitle2={'Care'}
                    />
                    <ForCard
                        title={'Anti-ableism'}
                        subtitle1={'Neurodiversity'}
                        subtitle2={'Accessibility'}
                    />
                </div>
            )
        }
    ]

    return (
        <TabCanvas items={items} />
    )
}

export default ForTab