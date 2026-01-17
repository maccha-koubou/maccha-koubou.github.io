import React from 'react'
import {colors} from "../../styles/theme";
import Card from "../Card";
import styles from './ForCard.module.css'
import measureSize from "../../utils/measureSize";

interface ForCardProps {
    title:string
    subtitle1: string
    subtitle2: string
}

const ForCard = ({
    title,
    subtitle1,
    subtitle2
}: ForCardProps) => {
    const height = 72
    const padding = 24
    const gap = 10

    // Get the size of each card
    const { ref: refTitle, size: titleSize } = measureSize<HTMLDivElement>()
    const { ref: refCard1, size: card1Size } = measureSize<HTMLDivElement>()
    const { ref: refCard2, size: card2Size } = measureSize<HTMLDivElement>()
    const { ref: refEntire, size: entireSize } = measureSize<HTMLDivElement>()
    const titleWidth = titleSize ? titleSize.width : 0
    const card1Width = card1Size ? card1Size.width : 0
    const card2Width = card2Size ? card2Size.width : 0
    const entireWidth = entireSize ? entireSize.width + 16 : 0

    console.log(titleWidth, card1Width, card2Width)

    return (
        <div style={{
            '--title-width': `${titleWidth}px`,
            '--card-1-width': `${card1Width}px`,
            '--card-2-width': `${card2Width}px`,
            height:`${height + gap * 2}px`,
            width:`${entireWidth}px`,
            position: 'relative',
            }  as React.CSSProperties}
            className={styles.entire}
        >

            <div style={{
                display: "flex",
                position: "absolute",
                left: `0px`,
                top: `0px`,
                width: 'fit-content',
                height: 'fit-content',
                zIndex: 3,
            }}
                 ref={refTitle}
            >
                <Card
                    borderColor={colors.primaryLight}
                    borderWidth={2}
                    bg={colors.white}
                    w={'fit-content'}
                    h={height}
                    radius={height / 2}
                    horizon={'flex-start'}
                    vertical={'center'}
                    padding={padding}
                >
                    <span style={{
                        color: colors.primary,
                        fontWeight: 500,
                        fontSize: '36px',
                        textAlign: 'left',
                        whiteSpace: 'nowrap',
                    }}>
                        {title}
                    </span>
                </Card>
            </div>

            <div style={{
                display: "flex",
                position: "absolute",
                left: `${gap}px`,
                top: `${gap}px`,
                height: 'fit-content',
                zIndex: 2,
            }}
                 className={styles.card1}
            >
                <Card
                    borderColor={colors.white}
                    borderWidth={2}
                    bg={colors.primary}
                    w={'100%'}
                    h={height}
                    radius={height / 2}
                    horizon={'flex-end'}
                    vertical={'flex-end'}
                    padding={padding}
                    defaultAnimateIn={false}
                    defaultAnimateOut={false}
                    embodiedBorder={true}
                >
                    <span style={{
                        color: colors.white,
                        fontWeight: 300,
                        fontSize: '20px',
                        textAlign: 'right'
                        }}
                        ref={refCard1}
                    >
                        {subtitle1}
                    </span>
                </Card>
            </div>

            <div style={{
                display: "flex",
                position: "absolute",
                left: `${gap * 2}px`,
                top: `${gap * 2}px`,
                height: 'fit-content',
                zIndex: 1,
            }}
                 className={styles.card2}
                 ref={refEntire}
            >
                <Card
                    borderColor={colors.white}
                    borderWidth={2}
                    bg={colors.primary}
                    w={'100%'}
                    h={height}
                    radius={height / 2}
                    horizon={'flex-end'}
                    vertical={'flex-end'}
                    padding={padding}
                    defaultAnimateIn={false}
                    defaultAnimateOut={false}
                    embodiedBorder={true}
                >
                    <span style={{
                        color: colors.white,
                        fontWeight: 300,
                        fontSize: '20px',
                        textAlign: 'right'
                        }}
                        ref={refCard2}
                    >
                        {subtitle2}
                    </span>
                </Card>
            </div>

        </div>
    )
}

export default ForCard