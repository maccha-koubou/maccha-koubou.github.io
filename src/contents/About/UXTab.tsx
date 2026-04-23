import React from 'react'
import TabCanvas from "../../components/About/TabCanvas"
import {CanvasItemProps} from "../../components/CanvasItem";
import {colors} from "../../styles/theme";
import CardStack from "../../components/CardStack";
import Button from "../../components/Button";
import measureSize from "../../utils/measureSize";
import {RightArrowIcon} from "../../assets/icons/RightArrowIcon";
import {useLocation, useNavigate} from "react-router-dom";
import {useHistory} from "../../router/HistoryContainer";

interface UXTabProps {
    animateIn: boolean;
    animateOut: boolean;
    onAnimationComplete: () => void;
}

const UXTab = ({
                   animateIn,
                   animateOut,
                   onAnimationComplete,
               }: UXTabProps) => {
    const navigate = useNavigate()
    const location = useLocation()
    const { push } = useHistory()

    // Get the size of the button and cards
    const { ref: refCard1, size: card1Size } = measureSize<HTMLDivElement>()
    const { ref: refCard2, size: card2Size } = measureSize<HTMLDivElement>()
    const card1Height = card1Size ? card1Size.height : 0
    const card2Height = card2Size ? card2Size.height : 0
    const topDistance = 200
    const cardGap = -8


    const items: CanvasItemProps[] = [
        {
            id: 'about-ux-card-1',
            x: 140,
            y: topDistance,
            z: 1,
            children: (
                <article style={{width: 'fit-content', height: 'fit-content'}} ref={refCard1}>
                    <CardStack
                        w={720}
                        animateIn={animateIn}
                        animateOut={animateOut}
                        onAnimationComplete={onAnimationComplete}
                    >
                        <p style={{
                            padding: '40px',
                            fontWeight: '300',
                            fontSize: '20px',
                            color: colors.secondary,
                        }}>
                            My focus goes beyond interfaces and functions. With human-centric perspectives and logical thinking, I design for marginalized users and complex scenarios, aiming to create smooth experiences that bridge entire ecosystems.
                        </p>
                    </CardStack>
                </article>
            )
        },
        {
            id: 'about-ux-card-2',
            x: 72,
            y: topDistance + cardGap + card1Height,
            z: 1,
            children: (
                <article style={{width: 'fit-content', height: 'fit-content'}} ref={refCard2}>
                    <CardStack
                        w={720}
                        animateIn={animateIn}
                        animateOut={animateOut}
                    >
                        <p style={{
                            padding: '40px',
                            fontWeight: '300',
                            fontSize: '20px',
                            color: colors.secondary,
                        }}>
                            I'm also interested in technology. I believe technologies are non-neutral, and I aim to mitigate their biases and structural inequalities, leveraging their potential for accessibility and empowerment
                        </p>
                    </CardStack>
                </article>
            )
        },
        {
            id: 'about-ux-button',
            x: 0,
            y: topDistance + cardGap + card1Height + card2Height - 40,
            z: 2,
            children: (
                <div style={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'flex-end',
                    width: '900px',
                }}>

                    <div style={{width: 'fit-content', height: 'fit-content'}}>
                        <Button
                            text={'My product works'}
                            icon={<RightArrowIcon />}
                            animateIn={animateIn}
                            animateOut={animateOut}
                            onClick={() => {
                                push(location.pathname)
                                navigate('/work/product')
                            }}
                        />
                    </div>
                </div>
            )
        }
    ]

    return (
        <section aria-labelledby="ux-title">
            <h2 style={{
                position: 'absolute',
                width: 1,
                height: 1,
                overflow: 'hidden',
                clip: 'rect(0 0 0 0)'
            }}>
                UX Designer
            </h2>
            <TabCanvas items={items} />
        </section>
    )
}

export default UXTab