import React from 'react'
import TabCanvas from "../../components/About/TabCanvas"
import {CanvasItemProps} from "../../components/CanvasItem";
import ForCard from "../../components/About/ForCard";

interface ForTabProps {
    animateIn: boolean;
    animateOut: boolean;
    onAnimationComplete: () => void;
}

const ForTab = ({
                    animateIn,
                    animateOut,
                    onAnimationComplete,
                }: ForTabProps) => {

    const items: CanvasItemProps[] = [
        {
            id: 'about-by-list',
            x: 0,
            y: 300,
            z: 1,
            children: (
                <div style={{
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'center',
                    alignItems: 'center',
                    width: '960px',
                    height: 'fit-content',
                    gap: '48px'
                }}>
                    <ForCard
                        title={'Queer-feminism'}
                        subtitle1={'Intersectionality'}
                        subtitle2={'Care for vulnerability'}
                        animateIn={animateIn}
                        animateOut={animateOut}
                        onAnimationComplete={onAnimationComplete}
                    />
                    <ForCard
                        title={'Anti-ableism'}
                        subtitle1={'Social model of disability'}
                        subtitle2={'Design for all'}
                        animateIn={animateIn}
                        animateOut={animateOut}
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