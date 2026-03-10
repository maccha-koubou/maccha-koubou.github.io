import React from 'react'
import TabCanvas from "../../components/About/TabCanvas"
import {CanvasItemProps} from "../../components/CanvasItem";
import ForCard from "../../components/About/ForCard";
import ByCard from "../../components/About/ByCard";

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
        /*
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
                        subtitle2={'Access for all'}
                        animateIn={animateIn}
                        animateOut={animateOut}
                    />
                </div>
            )
        },*/

        {
            id: 'about-by-list',
            x: 80,
            y: 312,
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
                        animateIn={animateIn}
                        animateOut={animateOut}
                        onAnimationComplete={onAnimationComplete}
                        title={'Queer & Feminism'}
                        text={'I design for products and spaces that recognize unequally distributed vulnerabilities and support mutual care and connection in everyday life.'}
                    />
                    <ByCard
                        animateIn={animateIn}
                        animateOut={animateOut}
                        title={'Anti-ableism'}
                        text={'I focus on removing social and systemic barriers, creating accessible and enabling experiences for people with diverse access needs.'}
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