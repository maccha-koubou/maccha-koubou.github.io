import React from 'react'
import TabCanvas from "../../components/About/TabCanvas"
import {CanvasItemProps} from "../../components/CanvasItem";
import ByCard from "../../components/About/ByCard";

interface ByTabProps {
    animateIn: boolean;
    animateOut: boolean;
    onAnimationComplete: () => void;
}

const ByTab = ({
                   animateIn,
                   animateOut,
                   onAnimationComplete,
               }: ByTabProps) => {

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
                        animateIn={animateIn}
                        animateOut={animateOut}
                        onAnimationComplete={onAnimationComplete}
                        title={'Empathy'}
                        text={'I design from users\' behaviors and perspectives, prioritizing the needs of marginalized groups and coordinating diverse stakeholders.'}
                    />
                    <ByCard
                        animateIn={animateIn}
                        animateOut={animateOut}
                        title={'Critical thinking'}
                        text={'I critically examine assumptions, conventions, and norms in design, ensuring they do not exclude people or limit new possibilities.'}
                    />
                    <ByCard
                        animateIn={animateIn}
                        animateOut={animateOut}
                        title={'Systematic thinking'}
                        text={'I don\'t just focus on the happy path, but think systematically about edge cases, multiple touchpoints, whole process, and long-term challenges.'}
                    />
                </div>
            )
        }
    ]

    return (
        <section aria-labelledby="by-title">
            <h2 style={{
                position: 'absolute',
                width: 1,
                height: 1,
                overflow: 'hidden',
                clip: 'rect(0 0 0 0)'
            }}>
                I Design by
            </h2>
            <TabCanvas items={items} />
        </section>
    )
}

export default ByTab