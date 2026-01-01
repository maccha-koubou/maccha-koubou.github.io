import React from 'react'

interface CardProps {
    children: React.ReactNode
    borderColor?: string
    radius?: number
    borderWidth?: number
    bg?: string
    w?: number | 'auto' | '100vw'
    h?: number | 'auto' | '100%'
    padding?: number | [number, number, number, number] // [top, right, bottom, left]
}

const Card = ({
    children,
    radius = 0,
    borderColor = 'transparent',
    borderWidth = 0,
    bg = 'transparent',
    w = 'auto',
    h = 'auto',
    padding = 0,
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

    return (
        <div
            style={{
                display: 'flex',
                border: `${borderWidth}px solid ${borderColor}`,
                borderRadius: `${radius}px`,
                backgroundColor: bg,
                width: finalWidth,
                height: finalHeight,
                overflow: 'hidden',
                boxSizing: 'border-box',
                padding: finalPadding,
            }}
        >
            {children}
        </div>
    )
}

export default Card