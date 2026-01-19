import React from 'react'
import {colors} from "../styles/theme";

export interface NavButtonProps {
    id: string;
    h: number
    padding: number
    firstChildren: React.ReactNode
    secondChildren?: React.ReactNode
    gap?: number
    firstColor?: string
    secondColor?: string
    bgColor?: string
    highlighted?: boolean
    onClick?: () => void
    onMouseEnter?: () => void
    onMouseLeave?: () => void
    isGap?: boolean
    index: number
    setHighlightNumber?: (number: number) => void
}

export const NavButton = React.forwardRef<HTMLDivElement, NavButtonProps>(({
                  id,
                  h,
                  padding,
                  firstChildren,
                  secondChildren,
                  firstColor = colors.primary,
                  secondColor = colors.primary,
                  gap = 0,
                  bgColor = colors.white,
                  highlighted = false,
                  onClick,
                  onMouseEnter,
                  onMouseLeave,
                  isGap = false,
                  index,
                  setHighlightNumber,
              }: NavButtonProps, ref) => {

    const bg = highlighted ? firstColor : bgColor;
    const finalFirstColor = highlighted ? colors.white : firstColor;
    const finalSecondColor = highlighted ? colors.white : secondColor;

    return (
        <div
            ref={ref}
            style={{
                display: 'flex',
                borderRadius: `${h / 2}px`,
                backgroundColor: bg,
                width: 'fit-content',
                height: h,
                boxSizing: 'border-box',
                padding: `0px ${padding}px 0px ${padding}px`,
                justifyContent: 'center',
                alignItems: 'center',
                gap: `${gap}px`,
                cursor: `${isGap ? 'default' : 'pointer'}`,
            }}
            onClick={() => {
                setHighlightNumber?.(index)
                onClick?.()
            }}
            onMouseEnter={onMouseEnter}
            onMouseLeave={onMouseLeave}
        >
            {/* Separated children for separated colors */}
            <div style={{color: finalFirstColor,}}>
                {firstChildren}
            </div>
            <div style={{color: finalSecondColor,}}>
                {secondChildren}
            </div>
        </div>
    )
})