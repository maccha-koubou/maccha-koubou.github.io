import React, {useEffect, useState} from 'react'
import {colors} from "../../styles/theme";

interface CardStackDecoProps {
    borderColor?: string
    radius?: number
    borderWidth?: number
    w: number
    h: number
    layers: number
    animateIn?: boolean
    animateOut?: boolean
    onAnimationComplete?: () => void
}

const CardStackDeco = ({
                  radius = 24,
                  borderColor = colors.primaryLight,
                  borderWidth = 2,
                  w,
                  h,
                  layers,
                  animateIn,
                  animateOut,
                  onAnimationComplete,
              }: CardStackDecoProps) => {


    const offset = 8

    const [visible, setVisible] = useState(Array(layers).fill(false))

    // Animate in
    useEffect(() => {
        const timers: number[] = []
        for (let i = 0; i < layers; i++) {
            timers.push(
                window.setTimeout(() => {
                    setVisible(prev => {
                        const next = [...prev]
                        next[i] = true
                        return next
                    })
                }, i * 60)
            )
        }
        return () => timers.forEach(clearTimeout)
    }, [layers])

    // Animate out
    useEffect(() => {
        if (!animateOut) return

        const timers: number[] = []
        for (let i = 0; i < layers; i++) {
            timers.push(
                window.setTimeout(() => {
                    setVisible(prev => {
                        const next = [...prev]
                        next[i] = false
                        return next
                    })
                }, i * 60)
            )
        }
        return () => timers.forEach(clearTimeout)
    }, [animateOut, layers])



    return (
        <div style={{
            width: `${w + offset * layers}px`,
            height: `${h + offset * layers}px`,
        }}>
            {visible.map((isThisVisible, i) => {
                if (!isThisVisible) return null
                return (
                    <div
                        key={i}
                        style={{
                            width: w,
                            height: h,
                            position: 'absolute',
                            left: offset * i,
                            top: offset * i,
                            border: `${borderWidth}px solid ${borderColor}`,
                            borderRadius: radius,
                        }}
                    />
                )
            })}
        </div>
    )
}

export default CardStackDeco