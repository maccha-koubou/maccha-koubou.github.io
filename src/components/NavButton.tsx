import React from 'react'
import {colors} from "../styles/theme";

export interface NavButtonProps {
    id: string;
    firstChildren: React.ReactNode
    secondChildren: React.ReactNode
    h: number
    padding: number
    gap?: number
    firstColor?: string
    secondColor?: string
    bgColor?: string
    highlightColor?: string
    highlighted?: boolean
}

export const NavButton = ({
                  id,
                  firstChildren,
                  secondChildren,
                  h,
                  padding,
                  firstColor = colors.primary,
                  secondColor = colors.primary,
                  gap = '0px',
                  bgColor = colors.white,
                  highlighted = false,
              }: NavButtonProps) => {

    const bg = highlighted ? firstColor : bgColor;
    const finalFirstColor = highlighted ? colors.white : firstColor;
    const finalSecondColor = highlighted ? colors.white : secondColor;

    return (
        <div
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
            }}
        >
            <div style={{color: `${finalFirstColor}`,}}>
                {firstChildren}
            </div>
            <div style={{color: `${finalSecondColor}`,}}>
                {secondChildren}
            </div>
        </div>
    )
}