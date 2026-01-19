import React, {useEffect, useRef, useState} from 'react'
import { NavButtonProps, NavButton } from "./NavButton";
import { motion } from "framer-motion";

interface NavBarProps {
    buttons: NavButtonProps[]
    direction: 'column' | 'row'
    gap: number
    highlightNumber: number
    setHighlightNumber: (val: number) => void
}

const NavBar: React.FC<NavBarProps> = ({ buttons, direction, gap, highlightNumber, setHighlightNumber }) => {

    const buttonRefs = useRef<(HTMLDivElement | null)[]>([]);


    // Calculate the position of highlight
    const [highlight, setHighlight] = useState({ x: 0, y: 0, width: 0, height: 0, parentHeight: 0, parentWidth: 0 });

    useEffect(() => {
        const element = buttonRefs.current[highlightNumber];
        if (!element) return;
        const parent = element.parentElement;
        if (!parent) return;

        const parentRect = parent.getBoundingClientRect();
        const rect = element.getBoundingClientRect();

        setHighlight({
            x: rect.left - parentRect.left,
            y: rect.top - parentRect.top,
            width: rect.width,
            height: rect.height,
            parentWidth: parentRect.width,
            parentHeight: parentRect.height,
        });
    }, [highlightNumber, buttons]);


    return (
        <div style={{ position: 'relative' }}>

            {/* Unhighlighted buttons layer */}
            <div style={{
                display: "flex",
                width: 'fit-content',
                height: 'fit-content',
                justifyContent: 'flex-end',
                alignItems: 'flex-start',
                flexDirection: `${direction}`,
                gap: `${gap}px`
            }}>
                {buttons.map((button, i) => (
                    <NavButton
                        {...button}
                        key={button.id}
                        setHighlightNumber={setHighlightNumber}
                        ref={button => {
                        buttonRefs.current[i] = button
                    }}/>
                ))}
            </div>

            {/* Highlighted buttons layer */}

                <motion.div
                    style={{
                        position: 'absolute',
                        top: '0px',
                        left: '0px',
                        display: "flex",
                        width: 'fit-content',
                        height: 'fit-content',
                        justifyContent: 'flex-end',
                        alignItems: 'flex-start',
                        flexDirection: `${direction}`,
                        gap: `${gap}px`,
                    }}
                    animate={{
                        clipPath: `inset(
                            ${highlight.y / highlight.parentHeight * 100}% 
                            ${(highlight.parentWidth - highlight.x - highlight.width) / highlight.parentWidth * 100}% 
                            ${(highlight.parentHeight - highlight.y - highlight.height) / highlight.parentHeight * 100}% 
                            ${highlight.x / highlight.parentWidth * 100}%
                            round 100px
                        )`
                }}
                    transition={{ duration: 0.4, ease: "easeInOut" }}
                >
                    {buttons.map(button => (
                        <NavButton key={button.id} {...button} highlighted={true} />
                    ))}
                </motion.div>
        </div>
    )
}

export default NavBar;