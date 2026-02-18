import React from 'react';
import { motion } from 'framer-motion';
import { RightArrowLargeIcon } from './RightArrowLargeIcon';

interface RightArrowAnimationProps {
    size: number;
}

const RightArrowAnimation = ({ size }: RightArrowAnimationProps) => {
    const arrows = [0, 0]

    return (
        <div
            style={{
                position: 'relative',
                width: size,
                height: size,
                overflow: 'hidden',
            }}
        >
            {arrows.map((_, i) => {
                return (
                    <motion.div
                        key={i}
                        style={{
                            position: 'absolute',
                            left: -size - size / 2,
                            top: 0,
                        }}
                        animate={{ x: size * 2 + size / 2 }}
                        transition={{
                            duration: 2,
                            ease: 'linear',
                            repeat: Infinity,
                            repeatType: 'loop',
                            delay: i,
                        }}
                    >
                        <RightArrowLargeIcon size={size} />
                    </motion.div>
                );
            })}
        </div>
    );
};

export default RightArrowAnimation