import React from 'react'
import { NavButtonProps, NavButton } from "./NavButton";

interface NavBarProps {
    buttons: NavButtonProps[]
    direction: 'column' | 'row'
    gap: number
}

const NavBar: React.FC<NavBarProps> = ({ buttons, direction, gap }) => {
    return (
        <div style={{ position: 'relative' }}>

            {/* Unhighlighted buttons layer */}
            <div style={{
                display: "flex",
                width: 'fit-content',
                height: 'fit-content',
                justifyContent: 'flex-start',
                alignItems: 'flex-end',
                flexDirection: `${direction}`,
                gap: `${gap}px`
            }}>
                {buttons.map(button => (
                    <NavButton key={button.id} {...button} />
                ))}
            </div>

            {/* Highlighted buttons layer */}
            <div style={{
                position: 'absolute',
                top: '0px',
                left: '0px',

                display: "flex",
                width: 'fit-content',
                height: 'fit-content',
                justifyContent: 'flex-start',
                alignItems: 'flex-end',
                flexDirection: `${direction}`,
                gap: `${gap}px`
            }}>
                {buttons.map(button => (
                    <NavButton key={button.id} {...button} highlighted={true} />
                ))}
            </div>
        </div>
    )
}

export default NavBar;