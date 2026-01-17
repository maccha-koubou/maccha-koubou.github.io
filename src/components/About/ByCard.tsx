import React from 'react'
import {colors} from "../../styles/theme";
import Card from "../Card";

interface ByCardProps {
    text: string
    title: string
    animateIn: boolean;
    animateOut: boolean;
    onAnimationComplete?: () => void;
}

const ByCard = ({
                    text,
                    title,
                    animateIn,
                    animateOut,
                    onAnimationComplete,
                }: ByCardProps) => {

    return (
        <div style={{
            position: 'relative',
            width: 'fit-content'
        }}>

            {/* Basic layer of button */}
            <div style={{
                display: 'flex',
                width: 'fit-content',
                height: 'fit-content',
                zIndex: 0,
            }}>
                <Card
                    radius={44}
                    borderWidth={2}
                    borderColor={colors.primaryLight}
                    bg={colors.white}
                    w={800}
                    h={88}
                    padding={36}
                    horizon={'flex-start'}
                    vertical={'center'}
                    animateIn={animateIn}
                    animateOut={animateOut}
                    onAnimationComplete={onAnimationComplete}
                >
                    <span style={{
                        display: 'flex',
                        fontSize: `20px`,
                        fontWeight: 300,
                        color: colors.secondary,
                        justifyContent: 'flex-start',
                    }}>
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
                    radius={44}
                    bg={colors.primary}
                    w={800}
                    h={88}
                    padding={36}
                    horizon={'flex-start'}
                    vertical={'center'}
                    animateIn={animateIn}
                    animateOut={animateOut}
                >
                    <span style={{
                        display: 'flex',
                        fontSize: `36px`,
                        fontWeight: 500,
                        color: colors.white,
                        justifyContent: 'flex-start',
                    }}>
                        {title}
                    </span>
                </Card>
            </div>
        </div>
    )
}

export default ByCard