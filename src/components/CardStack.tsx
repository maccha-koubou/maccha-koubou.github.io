import React, {useEffect, useRef} from 'react'
import {colors} from "../styles/theme";
import Card from "./Card";

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
                  bg = 'transparent',
                  w = 'fit-content',
                  h = 'fit-content',
                  padding = 0,
                  horizon = 'center',
                  vertical = 'center',
              }: CardStackProps) => {

    // Get the size of the main card
    const ref = useRef<HTMLDivElement>(null)
    const mainCardSizeRef = useRef<{ width: number; height: number } | null>(null)
    useEffect(() => {
        if (ref.current) {
            const { width, height } = ref.current.getBoundingClientRect()
            mainCardSizeRef.current = { width, height }
        }
    }, [])

    const offset = 10
    const cardWidth = mainCardSizeRef.current ? mainCardSizeRef.current.width : 0
    const cardHeight = mainCardSizeRef.current ? mainCardSizeRef.current.height : 0
    const finalWidth = cardWidth + offset * 2
    const finalHeight = cardHeight + offset * 2

    return (
        <div>
            <div
                style={{
                    display: 'flex',
                    width: 'fit-content',
                    height: 'fit-content',
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
                    top: offset,
                    left: offset,
                    zIndex: 0,
                }}
            >
                <Card
                    children={(<></>)}
                    radius={radius}
                    borderColor={borderColor}
                    borderWidth={borderWidth}
                    bg={'transparent'}
                    w={finalWidth}
                    h={finalHeight}
                />
            </div>
            <div
                style={{
                    display: 'flex',
                    width: 'fit-content',
                    height: 'fit-content',
                    top: offset * 2,
                    left: offset * 2,
                    zIndex: 1,
                }}
                ref={ref}
            >
                <Card
                    children={(<></>)}
                    radius={radius}
                    borderColor={borderColor}
                    borderWidth={borderWidth}
                    bg={'transparent'}
                    w={finalWidth}
                    h={finalHeight}
                />
            </div>
        </div>
    )
}

export default CardStack