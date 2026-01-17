import React from 'react'
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
    defaultAnimateIn?: boolean
    defaultAnimateOut?: boolean
    embodiedBorder?: boolean
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
    animateIn,
    animateOut,
    defaultAnimateIn = true,
    defaultAnimateOut = true,
    embodiedBorder = false
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


    // Determine weather the animation is shown
    let enterAnimate: "enter" | undefined = undefined;
    let exitAnimate: "exit" | undefined = undefined;

    if (animateIn !== undefined) {
        enterAnimate = animateIn ? "enter" : undefined;
    } else if (defaultAnimateIn) {
        enterAnimate = "enter";
    }
    if (animateOut !== undefined) {
        exitAnimate = animateOut ? "exit" : undefined;
    } else if (defaultAnimateOut) {
        exitAnimate = "exit";
    }

    const maskVariants = {
        initial: { clipPath: `inset(0 100% 0 0 round ${radius}px)` },
        enter: { clipPath: `inset(0 0 0 0 round ${radius}px)` },
        exit: { clipPath: `inset(0 0 0 100% round ${radius}px)` }
    }

    const maskClipInitial = enterAnimate ? `inset(0 100% 0 0 round ${radius}px)` : `inset(0 0 0 0 round ${radius}px)`;
    const borderInitialWidth = enterAnimate ? 0 : cardWidth;

    if (!enterAnimate) {console.log(borderInitialWidth)}

    return (
        <div style={{
            width: finalWidth,
            height: finalHeight,
            position: 'relative',
            }}
            ref={maskRef}
        >
            {/* Mask layer */}
            <motion.div
                initial={{ clipPath: maskClipInitial }}
                animate={enterAnimate}
                exit={exitAnimate}
                variants={maskVariants}
                transition={{ duration: 0.6, ease: "easeInOut" }}
                style={{
                    width: '100%',
                    height: '100%',
                    overflow: 'hidden',
                }}
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
                key={cardWidth}
                initial={{ width: borderInitialWidth }}
                animate={enterAnimate === "enter" ? { width: cardWidth } : undefined}
                exit={exitAnimate === "exit" ? { width: 0, originX: 1 } : undefined}
                transition={{ duration: 0.6, ease: "easeInOut" }}
                style={{
                    position: 'absolute',
                    inset: 0,
                    border: `${borderWidth}px solid ${borderColor}`,
                    borderRadius: `${radius}px`,
                    transformOrigin: 'left',
                    pointerEvents: 'none',
                    height: `${cardHeight}px`,
                    visibility: embodiedBorder ? 'hidden' : 'visible'
                }}
            />
        </div>
    )
}

export default Card