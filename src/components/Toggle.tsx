import React, {JSX, useState} from 'react'
import {colors} from "../styles/theme";
import Card from "./Card";

interface ToggleProps {
    text: string
    textSize?: number
    onIcon: JSX.Element
    offIcon: JSX.Element
    color?: string
    radius?: number
    w?: number | 'fit-content' | string
    h?: number | 'fit-content' | string
    padding?: number | [number, number, number, number] // [top, right, bottom, left]
    horizon?: 'flex-start' | 'center' | 'flex-end'
    vertical?: 'flex-start' | 'center' | 'flex-end'
    onClick?: () => void
    isActive: boolean
    animateIn?: boolean
    animateOut?: boolean
    onAnimationComplete?: () => void
}

const Toggle = ({
    text,
    textSize = 20,
    onIcon,
    offIcon,
    color = colors.primary,
    radius = 24,
    w = 'fit-content',
    h = 48,
    padding = [12, 16, 12, 16],
    horizon = 'flex-start',
    vertical = 'center',
    onClick,
    isActive,
    animateIn,
    animateOut,
    onAnimationComplete,
}: ToggleProps) => {

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
                console.log(isActive)
                setRefreshKey(refreshKey + 1)
                setIsLeave(false)
                setIsHover(true)
            }}
            onMouseLeave={() => {
                setIsHover(false)
                setIsLeave(true)
            }}
        >

            {/* Off layer of button */}
            <div style={{
                display: 'flex',
                width: 'fit-content',
                height: 'fit-content',
                zIndex: 0,
            }}>
                <Card
                    radius={radius}
                    bg={'transparent'}
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
                        color: color,
                        whiteSpace: 'nowrap',
                        justifyContent: 'center',
                        gap: '8px'
                    }}>
                        {offIcon}
                        {text}
                    </span>
                </Card>
            </div>

            {/* On layer of button */}
            <div style={{
                display: 'flex',
                width: 'fit-content',
                height: 'fit-content',
                position: 'absolute',
                left: '0px',
                top: '0px',
                zIndex: 1,
                opacity: isActive ? 1 : 0,
            }}>
                <Card
                    radius={radius}
                    bg={color}
                    w={w}
                    h={h}
                    padding={padding}
                    horizon={horizon}
                    vertical={vertical}
                >
                    <span style={{
                        display: 'flex',
                        fontSize: `${textSize}px`,
                        fontWeight: 300,
                        color: colors.white,
                        whiteSpace: 'nowrap',
                        justifyContent: 'center',
                        gap: '8px'
                    }}>
                        {onIcon}
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
                zIndex: 2,
            }}>
                <Card
                    key={refreshKey}
                    radius={radius}
                    bg={colors.white}
                    w={w}
                    h={h}
                    padding={padding}
                    horizon={horizon}
                    vertical={vertical}
                    borderColor={color}
                    borderWidth={2}
                    animateIn={isHover}
                    animateOut={isLeave}
                    initialHiding={true}
                    embodiedBorder={true}
                >
                    <span style={{
                        display: 'flex',
                        fontSize: `${textSize}px`,
                        fontWeight: 300,
                        color: color,
                        whiteSpace: 'nowrap',
                        justifyContent: 'center',
                        gap: '8px'
                    }}>
                        {isActive ? onIcon : offIcon}
                        {text}
                    </span>
                </Card>
            </div>
        </div>
    )
}

export default Toggle