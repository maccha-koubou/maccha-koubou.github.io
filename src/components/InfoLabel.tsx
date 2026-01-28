import {useState} from 'react';
import Card from "./Card";
import React from "react";
import { motion } from "framer-motion";
import measureSize from "../utils/measureSize";
import {colors} from "../styles/theme";

interface InfoLabelProps {
    animateIn: boolean;
    animateOut: boolean;
    bg?: string;
    textColor?: string;
    text: string;
}

const InfoLabel = ({
    animateIn,
    animateOut,
    bg = colors.primary,
    textColor = colors.white,
    text,
}: InfoLabelProps) => {
    const [isHover, setIsHover] = useState(false);
    const { ref, size: textSize } = measureSize<HTMLDivElement>()
    const textWidth = textSize ? textSize.width : 0

    return (
        <Card
            h={28}
            radius={14}
            bg={bg}
            embodiedBorder={true}
            animateIn={animateIn}
            animateOut={animateOut}
        >
            <motion.div
                animate={{
                    width: isHover ? textWidth + 16 : 28
                }}
                transition={{ duration: 0.4, ease: "easeInOut" }}
                style={{
                    display: 'flex',
                    justifyContent: 'center',
                }}
                onMouseEnter={() => setIsHover(true)}
                onMouseLeave={() => setIsHover(false)}
            >
                <div ref={ref} style={{
                    whiteSpace: 'nowrap',
                    width: 'fit-content',
                    display: 'inline-block',
                    padding: '0px 0px 2px 0px',
                    color: textColor,
                    fontWeight: 300,
                    fontSize: '20px',
                }}
                >
                    {isHover ? text : '?'}
                </div>
            </motion.div>
        </Card>
    );
};

export default InfoLabel;