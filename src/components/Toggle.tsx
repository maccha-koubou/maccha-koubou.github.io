import React, {JSX} from 'react'
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
}: ToggleProps) => {

    return (
        <div style={{
            position: 'relative',
            width: 'fit-content'
        }}>

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
                        {offIcon ? React.cloneElement(offIcon, { fill: color }) : ''}
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
                        {onIcon ? React.cloneElement(onIcon, { fill: colors.white }) : ''}
                        {text}
                    </span>
                </Card>
            </div>
        </div>
    )
}

export default Toggle