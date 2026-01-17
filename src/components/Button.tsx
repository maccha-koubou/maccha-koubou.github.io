import React, {JSX, useState} from 'react'
import {colors} from "../styles/theme";
import Card from "./Card";

interface ButtonProps {
    text: string
    textSize?: number
    icon?: JSX.Element
    primaryColor?: string
    secondaryColor?: string
    radius?: number
    w?: number | 'fit-content' | string
    h?: number | 'fit-content' | string
    padding?: number | [number, number, number, number] // [top, right, bottom, left]
    horizon?: 'flex-start' | 'center' | 'flex-end'
    vertical?: 'flex-start' | 'center' | 'flex-end'
    onClick?: () => void
    animateIn?: boolean
    animateOut?: boolean
    onAnimationComplete?: () => void
}

const Button = ({
    text,
    textSize = 20,
    icon,
    primaryColor = colors.primary,
    secondaryColor = colors.white,
    radius = 24,
    w = 'fit-content',
    h = 48,
    padding = [12, 16, 12, 16],
    horizon = 'flex-start',
    vertical = 'center',
    onClick,
    animateIn,
    animateOut,
    onAnimationComplete,
}: ButtonProps) => {

    const [isHover, setIsHover] = useState(false);
    const [isLeave, setIsLeave] = useState(false);
    const [refreshKey, setRefreshKey] = useState(0)

    return (
        <div
            style={{
                position: 'relative',
                width: 'fit-content',
                cursor: 'pointer',
            }}
            onClick={onClick}
            onMouseEnter={() => {
                setRefreshKey(refreshKey + 1)
                setIsLeave(false)
                setIsHover(true)
            }}
            onMouseLeave={() => {
                setIsHover(false)
                setIsLeave(true)
            }}
        >

            {/* Basic layer of button */}
            <div style={{
                display: 'flex',
                width: 'fit-content',
                height: 'fit-content',
                zIndex: 0,
            }}>
                <Card
                    radius={radius}
                    bg={primaryColor}
                    w={w}
                    h={h}
                    padding={padding}
                    horizon={horizon}
                    vertical={vertical}
                    animateIn={animateIn}
                    animateOut={animateOut}
                    onAnimationComplete={onAnimationComplete}
                >
                    <span style={{
                        display: 'flex',
                        fontSize: `${textSize}px`,
                        fontWeight: 300,
                        color: secondaryColor,
                        whiteSpace: 'nowrap',
                        justifyContent: 'center',
                        gap: '8px'
                    }}>
                        {icon ? React.cloneElement(icon) : ''}
                        {text}
                    </span>
                </Card>
            </div>

            {/* Highlight layer of button */}
            <div style={{
                display: 'flex',
                width: 'fit-content',
                height: 'fit-content',
                position: 'absolute',
                left: '0px',
                top: '0px',
                zIndex: 1,
            }}>
                <Card
                    key={refreshKey}
                    radius={radius}
                    bg={secondaryColor}
                    w={w}
                    h={h}
                    padding={padding}
                    horizon={horizon}
                    vertical={vertical}
                    animateIn={isHover}
                    animateOut={isLeave}
                    borderColor={primaryColor}
                    borderWidth={2}
                    initialHiding={true}
                    embodiedBorder={true}
                >
                    <span style={{
                        display: 'flex',
                        fontSize: `${textSize}px`,
                        fontWeight: 300,
                        color: primaryColor,
                        whiteSpace: 'nowrap',
                        justifyContent: 'center',
                        gap: '8px'
                    }}>
                        {icon ? React.cloneElement(icon) : ''}
                        {text}
                    </span>
                </Card>
            </div>
        </div>
    )
}

export default Button