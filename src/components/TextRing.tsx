import React from 'react'
import {colors} from "../styles/theme";
import styles from './TextRing.module.css'

interface TextRingProps {
    text: string
    radius: number
    fontSize: number
    width: number
    height: number
}

const TextRing = ({
    text,
    radius,
    fontSize,
    width,
    height,
}: TextRingProps) => {

    // Repeat the text until it is closed to the target char length
    const targetLength = 120
    const repeatCount = Math.ceil(targetLength / text.length)
    const finalText = text.repeat(repeatCount)

    const chars = finalText.split('')
    const count = chars.length
    const angle = 360 / count
    const spanSize = 30

    return (
        <div
            style={{
                width: `${width}px`,
                height: `${height}px`,
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
            }}
            aria-hidden="true"
        >
            <div style={{
                position: 'relative',
                width: `${radius * 2 + spanSize}px`,
                height: `${radius * 2 + spanSize}px`,
            }}>
                <div className={styles.rotator}>
                    <div style={{
                        position: 'absolute',
                        transform: `translate(${radius}px, ${radius}px)`,
                    }}>
                        {chars.map((char, i) => (
                            <span
                                key={i}
                                className={styles.char}
                                style={{

                                    transform: `
                                        rotate(${i * angle}deg)
                                        translate(${radius}px)
                                        rotate(90deg)
                                    `,
                                    fontSize: fontSize,
                                    fontWeight: 200,
                                    color: colors.secondary,
                                    width: `${spanSize}px`,
                                    height: `${spanSize}px`,
                                    display: 'inline-flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    transformOrigin: '50% 50%',
                                }}
                            >
                                {char}
                            </span>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default TextRing