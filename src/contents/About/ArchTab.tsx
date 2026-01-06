import React from 'react'
import TabCanvas from "../../components/About/TabCanvas"
import {CanvasItemProps} from "../../components/CanvasItem";
import {colors} from "../../styles/theme";
import CardStack from "../../components/CardStack";
import Button from "../../components/Button";
import rightArrowIcon from '../../assets/icons/rightArrow.svg'
import measureSize from "../../utils/measureSize";

const ArchTab = () => {

    // Get the size of the button and cards
    const { ref: refCard1, size: card1Size } = measureSize<HTMLDivElement>()
    const { ref: refCard2, size: card2Size } = measureSize<HTMLDivElement>()
    const card1Height = card1Size ? card1Size.height : 0
    const card2Height = card2Size ? card2Size.height : 0
    const topDistance = 200
    const cardGap = -8


    const items: CanvasItemProps[] = [
        {
            id: 'about-arch-card-1',
            x: 140,
            y: topDistance,
            z: 1,
            children: (
                <div style={{width: 'fit-content', height: 'fit-content'}} ref={refCard1}>
                    <CardStack w={720}>
                        <span style={{
                            padding: '40px',
                            fontWeight: '300',
                            fontSize: '20px',
                            color: colors.secondary,
                        }}>
                            My background in urban design helps me look beyond individual buildings. I see public spaces as links between urban systems, including communities, transportation, and commerce. I aim to make cities more connected, efficient, and inclusive.
                        </span>
                    </CardStack>
                </div>
            )
        },
        {
            id: 'about-arch-card-2',
            x: 72,
            y: topDistance + cardGap + card1Height,
            z: 1,
            children: (
                <div style={{width: 'fit-content', height: 'fit-content'}} ref={refCard2}>
                    <CardStack w={720}>
                        <span style={{
                            padding: '40px',
                            fontWeight: '300',
                            fontSize: '20px',
                            color: colors.secondary,
                        }}>
                            I also care about how people interact with space. Through behavioral observation and research, I try to create supportive, non-exclusionary places for diverse public life.
                        </span>
                    </CardStack>
                </div>
            )
        },
        {
            id: 'about-arch-button',
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
                            text={'My space works'}
                            icon={
                                <img width="28" height="28" src={rightArrowIcon}/>
                            }
                        />
                    </div>
                </div>
            )
        }
    ]

    return (
        <TabCanvas items={items} />
    )
}

export default ArchTab