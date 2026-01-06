import React from 'react'
import {colors} from "../styles/theme";
import Card from "./Card";
import measureSize from "../utils/measureSize";

interface CardStackProps {
    children: React.ReactNode
    borderColor?: string
    radius?: number
    borderWidth?: number
    bg?: string
    w?: number | 'fit-content' | string
    h?: number | 'fit-content' | string
    padding?: number | [number, number, number, number] // [top, right, bottom, left]
    horizon?: 'flex-start' | 'center' | 'flex-end'
    vertical?: 'flex-start' | 'center' | 'flex-end'
}

const CardStack = ({
                  children,
                  radius = 24,
                  borderColor = colors.primaryLight,
                  borderWidth = 2,
                  bg = colors.white,
                  w = 'fit-content',
                  h = 'fit-content',
                  padding = 0,
                  horizon = 'center',
                  vertical = 'center',
              }: CardStackProps) => {

    // Get the size of the main card
    const { ref, size: mainCardSize } = measureSize<HTMLDivElement>()

    const offset = 10
    const cardWidth = mainCardSize ? mainCardSize.width : undefined
    const cardHeight = mainCardSize ? mainCardSize.height : undefined
    const finalWidth = cardWidth !== undefined ? cardWidth + offset * 3 : undefined
    const finalHeight = cardHeight !== undefined ? cardHeight + offset * 3 : undefined

    return (
        <div style={{
            width: `${finalWidth}px`,
            height: `${finalHeight}px`,
        }}>
            <div style={{
                    display: 'flex',
                    width: 'fit-content',
                    height: 'fit-content',
                    position: 'absolute',
                    left: '0px',
                    top: '0px',
                    zIndex: 1,
                }}
                ref={ref}
            >
                <Card
                    children={children}
                    radius={radius}
                    borderColor={borderColor}
                    borderWidth={borderWidth}
                    bg={bg}
                    w={w}
                    h={h}
                    padding={padding}
                    horizon={horizon}
                    vertical={vertical}
                />
            </div>
            <div
                style={{
                    display: 'flex',
                    width: 'fit-content',
                    height: 'fit-content',
                    position: 'absolute',
                    top: `${offset}px`,
                    left: `${offset}px`,
                    zIndex: 0,
                }}
            >
                <Card
                    children={(<></>)}
                    radius={radius}
                    borderColor={borderColor}
                    borderWidth={borderWidth}
                    bg={'transparent'}
                    w={cardWidth}
                    h={cardHeight}
                />
            </div>
            <div
                style={{
                    display: 'flex',
                    width: 'fit-content',
                    height: 'fit-content',
                    top: `${offset * 2}px`,
                    left: `${offset * 2}px`,
                    position: 'absolute',
                    zIndex: 0,
                }}
            >
                <Card
                    children={(<></>)}
                    radius={radius}
                    borderColor={borderColor}
                    borderWidth={borderWidth}
                    bg={'transparent'}
                    w={cardWidth}
                    h={cardHeight}
                />
            </div>
            <div
                style={{
                    display: 'flex',
                    width: 'fit-content',
                    height: 'fit-content',
                    top: `${offset * 3}px`,
                    left: `${offset * 3}px`,
                    position: 'absolute',
                    zIndex: 0,
                }}
            >
                <Card
                    children={(<></>)}
                    radius={radius}
                    borderColor={borderColor}
                    borderWidth={borderWidth}
                    bg={'transparent'}
                    w={cardWidth}
                    h={cardHeight}
                />
            </div>
        </div>
    )
}

export default CardStack