import React, {useState} from 'react'
import {ProjectType, SubProjectType} from "../../config/ProjectType";
import {colors} from "../../styles/theme";
import Card from "../Card";
import styles from './WorkSelector.module.css'
import {useLocation, useNavigate} from "react-router-dom";
import {useHistory} from "../../router/HistoryContainer";

interface WorkSelectorProps {
    title1: string
    title2: string
    type: ProjectType
    subTypes1?: SubProjectType
    subTypes2?: SubProjectType
    w: number,
    h: number,
    gap: number,
    setRingText: (text: string) => void
    setSlide: (type: ProjectType | null) => void
}

const WorkSelector = ({
    title1,
    title2,
    type,
    subTypes1,
    subTypes2,
    w,
    h,
    gap,
    setRingText,
    setSlide,
}: WorkSelectorProps) => {
    const navigate = useNavigate()
    const location = useLocation()
    const { push } = useHistory()
    const hoverMovingDistance = 50

    const [isHover, setIsHover] = useState(false)

    return (
        <div style={{
            width:`${w + gap * 2}px`,
            height:`${h + gap * 2 + hoverMovingDistance * 2}px`,
            }}
            className={styles.selector}
            onMouseEnter={() => {
                setIsHover(true)
                setRingText(`${title1} & ${title2} - `)
                    setSlide(type)
            }}
            onMouseLeave={() => {
                setIsHover(false)
                setRingText('Evelyn\'s Work - ')
                setSlide(null)
            }}
        >
            <button
                style={{
                    display: "flex",
                    position: "absolute",
                    left: '0px',
                    top: '0px',
                    width: 'fit-content',
                    height: 'fit-content',
                    zIndex: 3,
                    cursor: subTypes1 ? 'pointer' : 'not-allowed',
                    background: 'none',
                    border: 'none',
                }}
                onClick={() => {
                    if (subTypes1) {
                        push(location.pathname)
                        navigate(`/work/${type}`)
                    }
                }}
                onFocus={() => {
                    setIsHover(true)
                    setRingText(`${title1} & ${title2} - `)
                    setSlide(type)
                }}
                onBlur={() => {
                    setIsHover(false)
                    setRingText('Evelyn\'s Work - ')
                    setSlide(null)
                }}
            >
                <Card
                    borderColor={colors.primaryLight}
                    borderWidth={2}
                    bg={colors.white}
                    w={w}
                    h={h}
                    radius={24}
                    horizon={'flex-start'}
                    vertical={'center'}
                    padding={[0, 0, 4, 36]}
                    animateIn={true}
                >
                    <div style={{
                        display: "flex",
                        flexDirection: "column",
                        justifyContent: "flex-start",
                        alignItems: "flex-start",
                    }}>
                        <span style={{
                            color: colors.primary,
                            fontWeight: 500,
                            fontSize: '36px',
                            textAlign: 'left'
                        }}>
                            {title1}
                        </span>
                        <span style={{
                            color: colors.secondary,
                            fontWeight: 200,
                            fontSize: '36px',
                            textAlign: 'left'
                        }}>
                            &
                        </span>
                        <span style={{
                            color: colors.primary,
                            fontWeight: 500,
                            fontSize: '36px',
                            textAlign: 'left'
                        }}>
                            {title2}
                        </span>
                    </div>
                </Card>
            </button>

            <button
                style={{
                    display: "flex",
                    position: "absolute",
                    left: `${gap}px`,
                    top: `${gap}px`,
                    width: 'fit-content',
                    height: 'fit-content',
                    zIndex: 2,
                    cursor: subTypes1 ? 'pointer' : 'not-allowed',
                    background: 'none',
                    border: 'none',
                }}
                className={`${styles.card1} ${isHover ? styles.card1Hover : ''}`}
                onClick={() => {
                    if (subTypes1) {
                        push(location.pathname)
                        navigate(`/work/${type}?filter=${subTypes1}`)
                    }
                }}
                onFocus={() => {
                    setIsHover(true)
                    setRingText(`${title1} & ${title2} - `)
                    setSlide(type)
                }}
                onBlur={() => {
                    setIsHover(false)
                    setRingText('Evelyn\'s Work - ')
                    setSlide(null)
                }}
            >
                <Card
                    borderColor={colors.white}
                    borderWidth={2}
                    bg={colors.primary}
                    w={w}
                    h={h}
                    radius={24}
                    horizon={'flex-start'}
                    vertical={'flex-end'}
                    padding={[0, 0, 20, 36]}
                    animateIn={true}
                >
                    <span style={{
                        color: colors.white,
                        fontWeight: 300,
                        fontSize: '20px',
                        textAlign: 'left'
                    }}>
                        {subTypes1 ? subTypes1 : 'Coming soon...'}
                    </span>
                </Card>
            </button>

            <button
                style={{
                    display: "flex",
                    position: "absolute",
                    left: `${gap * 2}px`,
                    top: `${gap * 2}px`,
                    width: 'fit-content',
                    height: 'fit-content',
                    zIndex: 1,
                    cursor: subTypes2 ? 'pointer' : 'not-allowed',
                    background: 'none',
                    border: 'none',
                }}
                className={`${styles.card2} ${isHover ? styles.card2Hover : ''}`}
                onClick={() => {
                    if (subTypes2) {
                        push(location.pathname)
                        navigate(`/work/${type}?filter=${subTypes2}`)
                    }
                }}
                onFocus={() => {
                    setIsHover(true)
                    setRingText(`${title1} & ${title2} - `)
                    setSlide(type)
                }}
                onBlur={() => {
                    setIsHover(false)
                    setRingText('Evelyn\'s Work - ')
                    setSlide(null)
                }}
            >
                <Card
                    borderColor={colors.white}
                    borderWidth={2}
                    bg={colors.primary}
                    w={w}
                    h={h}
                    radius={24}
                    horizon={'flex-start'}
                    vertical={'flex-end'}
                    padding={[0, 0, 20, 36]}
                    animateIn={true}
                >
                    <span style={{
                        color: colors.white,
                        fontWeight: 300,
                        fontSize: '20px',
                        textAlign: 'left'
                    }}>
                        {subTypes2 ? subTypes2 : 'Coming soon...'}
                    </span>
                </Card>
            </button>

        </div>
    )
}

export default WorkSelector