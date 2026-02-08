import React, {useEffect, useState} from 'react'
import {colors} from "../styles/theme";
import Card from "./Card";
import {AnimatePresence, motion} from "framer-motion";

interface CardSlideProps {
    interval: number
    children: React.ReactNode[]
    borderColor?: string
    radius?: number
    borderWidth?: number
    bg?: string
    w?: number | 'fit-content' | string
    h?: number | 'fit-content' | string
    padding?: number | [number, number, number, number] // [top, right, bottom, left]
    horizon?: 'flex-start' | 'center' | 'flex-end'
    vertical?: 'flex-start' | 'center' | 'flex-end'
    initialHiding?: boolean
    animateIn?: boolean
    animateOut?: boolean
    onAnimationComplete?: () => void
    delayOut?: boolean
    visiblePlaceholder?: number
}

const CardSlide = ({
                       interval,
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
                       initialHiding = false,
                       animateIn,
                       animateOut,
                       onAnimationComplete,
                       delayOut = false,
                       visiblePlaceholder,
                   }: CardSlideProps) => {

    const [index, setIndex] = useState(0)
    const [prevIndex, setPrevIndex] = React.useState(index)

    useEffect(() => {
        const timer = setInterval(() => {
            setIndex(i => (i + 1) % children.length)
        }, interval)

        return () => clearInterval(timer)
    }, [interval, children.length])

    if (delayOut) {
        return (
            <Card
                radius={radius}
                borderColor={borderColor}
                borderWidth={borderWidth}
                bg={bg}
                w={w}
                h={h}
                padding={padding}
                horizon={horizon}
                vertical={vertical}
                initialHiding={initialHiding}
                animateIn={animateIn}
                animateOut={animateOut}
                onAnimationComplete={onAnimationComplete}
            >
                <div style={{ position: 'relative'}}>
                    <AnimatePresence>
                        <motion.div
                            key={index}
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            transition={{ duration: 0.3, ease: 'easeInOut' }}
                            style={{
                                position: 'absolute',
                                zIndex: 1,
                                display: 'flex',
                                alignItems: 'center',
                            }}
                        >
                            {children[index]}
                        </motion.div>
                    </AnimatePresence>

                    {/* Placeholder for stable card size */}
                    <div
                        style={{
                            position: 'relative',
                            visibility: visiblePlaceholder === undefined ? 'hidden' : 'visible',
                            display: 'flex',
                            alignItems: 'center'
                        }}
                    >
                        {children[visiblePlaceholder === undefined ? 0 : visiblePlaceholder]}
                    </div>
                </div>
            </Card>
        )

    } else {
        return (
            <Card
                radius={radius}
                borderColor={borderColor}
                borderWidth={borderWidth}
                bg={bg}
                w={w}
                h={h}
                padding={padding}
                horizon={horizon}
                vertical={vertical}
                initialHiding={initialHiding}
                animateIn={animateIn}
                animateOut={animateOut}
                onAnimationComplete={onAnimationComplete}
            >
                <div style={{position: 'relative'}}>
                    {/* Existing card */}
                    {prevIndex !== index && (
                        <div
                            style={{
                                position: 'absolute',
                                zIndex: 1,
                                display: 'flex',
                                alignItems: 'center'
                            }}
                        >
                            {children[prevIndex]}
                        </div>
                    )}

                    {/* Entering card */}
                    <motion.div
                        key={index}
                        initial={{opacity: 0}}
                        animate={{opacity: 1}}
                        transition={{duration: 0.3, ease: 'easeInOut'}}
                        style={{
                            position: 'absolute',
                            zIndex: 1,
                            display: 'flex',
                            alignItems: 'center'
                        }}
                        onAnimationComplete={() => {
                            setPrevIndex(index)
                        }}
                    >
                        {children[index]}
                    </motion.div>

                    {/* Placeholder for stable card size */}
                    <div
                        style={{
                            position: 'relative',
                            visibility: 'hidden',
                            display: 'flex',
                            alignItems: 'center'
                        }}
                    >
                        {children[0]}
                    </div>
                </div>
            </Card>
        )
    }
}

export default CardSlide