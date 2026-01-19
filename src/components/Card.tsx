import React, {useEffect, useState} from 'react'
import {motion} from 'framer-motion'
import measureSize from "../utils/measureSize";

interface CardProps {
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
    animateIn?: boolean
    animateOut?: boolean
    embodiedBorder?: boolean
    onAnimationComplete?: () => void
    initialHiding?: boolean
    isCardSizeChange?: boolean
    interactable?: boolean
}

const Card = ({
    children,
    radius = 0,
    borderColor = 'transparent',
    borderWidth = 0,
    bg = 'transparent',
    w = 'fit-content',
    h = 'fit-content',
    padding = 0,
    horizon = 'center',
    vertical = 'center',
    animateIn = false,
    animateOut = false,
    embodiedBorder = false,
    onAnimationComplete,
    initialHiding = false,
    isCardSizeChange = false,
    interactable = true,
}: CardProps) => {

    // Add "px" after the width and height
    const finalWidth =
        typeof w === 'number'
            ? `${w}px`
            : w
    const finalHeight =
        typeof h === 'number'
            ? `${h}px`
            : h

    // If the padding is an array, unfold it with "px" after each item
    const finalPadding =
        typeof padding === 'number'
            ? `${padding}px`
            : padding.map(n => `${n}px`).join(' ')


    // Calculate the card size for the border layer
    const { ref: maskRef, size: cardSize } = measureSize<HTMLDivElement>()
    const cardWidth = cardSize ? cardSize.width : 0
    const cardHeight = cardSize ? cardSize.height : 0


    // If the card has a complex animation, the border layer here can make chaotic motions
    // In this case, turning on embodiedBorder can turn off the border layer and embody the border into the card content
    const bodyBorderWidth = embodiedBorder ? borderWidth : 0
    const bodyBorderRadius = embodiedBorder ? radius : 0


    // Determine weather the border animation is shown
    const borderInitialWidth = animateIn ? 0 : cardWidth;

    const [isActivated, setIsActivated] = useState(!initialHiding);
    useEffect(() => {
        if (initialHiding && animateIn) {
            setIsActivated(true);
        }
    }, [initialHiding, animateIn]);


    return (
        <div style={{
            width: finalWidth,
            height: finalHeight,
            position: 'relative',
            visibility: isActivated ? 'visible' : 'hidden',
            pointerEvents: interactable ? 'auto' : 'none',
            }}
            ref={maskRef}
        >
            {/* Mask layer */}
            <motion.div
                initial={{
                    clipPath:
                        animateIn
                            ? `inset(0 100% 0 0 round ${radius}px)`
                            : `inset(0 0 0 0 round ${radius}px)`
                }}
                animate={{
                    clipPath:
                        animateOut
                            ? `inset(0 0 0 100% round ${radius}px)`
                            : `inset(0 0 0 0 round ${radius}px)`
                }}
                transition={{ duration: 0.4, ease: "easeInOut" }}
                style={{
                    width: '100%',
                    height: '100%',
                    overflow: 'hidden',
                }}
                onAnimationComplete={() => { if (animateOut) {
                    onAnimationComplete?.()
                } }}
            >
                {/* Main content */}
                <div
                    style={{
                        display: 'flex',
                        backgroundColor: bg,
                        width: '100%',
                        height: '100%',
                        overflow: 'hidden',
                        boxSizing: 'border-box',
                        padding: finalPadding,
                        justifyContent: horizon,
                        alignItems: vertical,
                        border: `${bodyBorderWidth}px solid ${borderColor}`,
                        borderRadius: `${bodyBorderRadius}px`,
                    }}
                >
                    {children}
                </div>
            </motion.div>

            {/* Border layer */}
            <motion.div
                // key={cardWidth}
                initial={{ width: borderInitialWidth }}
                animate={{
                    width: animateOut ? 0 : cardWidth,
                    left: animateOut ? cardWidth : 0
                }}
                transition={
                    isCardSizeChange
                    ? { duration: 0, ease: 'linear' } // If the size of card is changing (e.g. in hovered project cards), use 0 duration to remove the animation
                    : { duration: 0.4, ease: "easeInOut" }
                }
                style={{
                    position: 'absolute',
                    inset: 0,
                    border: `${borderWidth}px solid ${borderColor}`,
                    borderRadius: `${radius}px`,
                    transformOrigin: animateOut ? 'right' : 'left',
                    pointerEvents: 'none',
                    height: `${cardHeight}px`,
                    visibility: embodiedBorder ? 'hidden' : 'visible',
                }}
            />
        </div>
    )
}

export default Card