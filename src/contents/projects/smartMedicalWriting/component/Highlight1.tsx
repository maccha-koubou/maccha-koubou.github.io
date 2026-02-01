import React, {useEffect, useRef, useState} from 'react'
import {PROJECT_HEIGHT, PROJECT_WIDTH} from "../../../../config/Size";
import Card from "../../../../components/Card";
import uiVideo1 from "../img/uivideo1.mp4";
import uiVideo2 from "../img/uivideo2.mp4";
import uiVideo3 from "../img/uivideo3.mp4";
import uiVideo1Base from "../img/uivideo1Base.png";
import uiVideo2Base from "../img/uivideo2Base.png";
import uiVideo3Base from "../img/uivideo3Base.png";
import {colors} from "../../../../styles/theme";
import {RightArrowLargeIcon} from "../../../../assets/icons/RightArrowLargeIcon";

interface Highlight1Props {
    animateOut: boolean;
}

const Highlight1 = ({
    animateOut,
} : Highlight1Props) => {

    const [activeIndex, setActiveIndex] = useState(0)
    const [visibleCount, setVisibleCount] = useState(1)
    const [allFinished, setAllFinished] = useState(false)

    const videoRefs = useRef<HTMLVideoElement[]>([])

    useEffect(() => {
        const video = videoRefs.current[activeIndex]
        if (!video) return

        // Wait for ready
        const play = () => {
            video.play().catch(() => {})
        }

        if (video.readyState >= 2) {
            play()
        } else {
            video.onloadeddata = play
        }

        return () => {
            video.onloadeddata = null
        }
    }, [activeIndex, visibleCount])

    const handleVideoEnded = (index: number) => {
        if (index < 2) {
            setVisibleCount(prev => prev + 1)
            setActiveIndex(index + 1)
        }
        else {
            setTimeout(() => {
                setAllFinished(true)

                setTimeout(() => {
                    setAllFinished(false)
                    setVisibleCount(0)
                    setActiveIndex(0)

                    videoRefs.current.forEach(v => {
                        if (v) {
                            v.pause()
                            v.currentTime = 0
                        }
                    })

                    requestAnimationFrame(() => {
                        setVisibleCount(1)
                    })
                }, 300)
            }, 3000)
        }
    }

    return (
        <div style={{
                position: 'relative',
                width: `${PROJECT_WIDTH}px`,
                height: `${PROJECT_HEIGHT}px`
        }}>
            {visibleCount >= 1 &&
                <div style={{
                    width: 360,
                    display: 'flex',
                    position: 'absolute',
                    left: 0,
                    top: 60,
                    zIndex: 0,
                }}>
                    <div style={{
                        width: '100%',
                        height: '100%',
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        gap: '24px',
                    }}>
                        <Card
                            animateIn={true}
                            animateOut={animateOut}
                        >
                            <span style={{
                                color: colors.primary,
                                fontWeight: 600,
                                fontSize: '24px',
                                textAlign: 'center'
                            }}>
                                Original design
                            </span>
                        </Card>
                        <Card
                            w={360}
                            h={582}
                            bg={colors.white}
                            radius={24}
                            animateIn={true}
                            animateOut={animateOut || allFinished}
                        >
                            <div>

                                <video
                                    ref={el => {
                                        if (el) videoRefs.current[0] = el
                                    }}
                                    src={uiVideo1}
                                    style={{ width: 360 }}
                                    muted
                                    playsInline
                                    preload="auto"
                                    onEnded={() => handleVideoEnded(0)}
                                />
                                <img
                                    src={uiVideo1Base}
                                    style={{position: 'absolute', left: 0, top: 0, zIndex: -1, width: 360 }}
                                    alt={'Todo'}
                                />
                            </div>
                        </Card>
                    </div>
                </div>
            }
            {visibleCount >= 2 &&
                <div style={{
                    display: 'flex',
                    position: 'absolute',
                    left: 376,
                    top: 380,
                    zIndex: 0,
                }}>
                    <Card
                        w={28}
                        h={28}
                        bg={colors.primary}
                        radius={24}
                        animateIn={true}
                        animateOut={animateOut}
                    >
                        <div style={{color: colors.white, width: 16, height: 16}}>
                            <RightArrowLargeIcon size={16} />
                        </div>
                    </Card>
                </div>
            }
            {visibleCount >= 2 &&
                <div style={{
                    width: 360,
                    display: 'flex',
                    position: 'absolute',
                    left: 420,
                    top: 60,
                    zIndex: 0,
                }}>
                    <div style={{
                        width: '100%',
                        height: '100%',
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        gap: '24px',
                    }}>
                        <Card
                            animateIn={true}
                            animateOut={animateOut}
                        >
                            <span style={{
                                color: colors.primary,
                                fontWeight: 600,
                                fontSize: '24px',
                                textAlign: 'center'
                            }}>
                                First version
                            </span>
                        </Card>
                        <Card
                            w={360}
                            h={582}
                            bg={colors.white}
                            radius={24}
                            animateIn={true}
                            animateOut={animateOut || allFinished}
                        >
                            <div>
                                <video
                                    ref={el => {
                                        if (el) videoRefs.current[1] = el
                                    }}
                                   src={uiVideo2}
                                   style={{ width: 360 }}
                                   muted
                                   playsInline
                                   preload="auto"
                                   onEnded={() => handleVideoEnded(1)}
                                />
                                <img
                                    src={uiVideo2Base}
                                    style={{position: 'absolute', left: 0, top: 0, zIndex: -1, width: 360}}
                                    alt={'Todo'}
                                />
                            </div>
                        </Card>
                    </div>
                </div>
            }
            {visibleCount >= 3 &&
                <div style={{
                    display: 'flex',
                    position: 'absolute',
                    left: 796,
                    top: 380,
                    zIndex: 0,
                }}>
                    <Card
                        w={28}
                        h={28}
                        bg={colors.primary}
                        radius={24}
                        animateIn={true}
                        animateOut={animateOut}
                    >
                        <div style={{color: colors.white, width: 16, height: 16}}>
                            <RightArrowLargeIcon size={16} />
                        </div>
                    </Card>
                </div>
            }
            {visibleCount >= 3 &&
                <div style={{
                    width: 360,
                    display: 'flex',
                    position: 'absolute',
                    left: 840,
                    top: 60,
                    zIndex: 0,
                }}>
                    <div style={{
                        width: '100%',
                        height: '100%',
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        gap: '24px',
                    }}>
                        <Card
                            animateIn={true}
                            animateOut={animateOut}
                        >
                            <span style={{
                                color: colors.primary,
                                fontWeight: 600,
                                fontSize: '24px',
                                textAlign: 'center'
                            }}>
                                Final version
                            </span>
                        </Card>
                        <Card
                            w={360}
                            h={582}
                            bg={colors.white}
                            radius={24}
                            animateIn={true}
                            animateOut={animateOut || allFinished}
                        >
                            <div>
                                <video
                                    ref={el => {
                                        if (el) videoRefs.current[2] = el
                                    }}
                                    src={uiVideo3}
                                    style={{ width: 360 }}
                                    muted
                                    playsInline
                                    preload="auto"
                                    onEnded={() => handleVideoEnded(2)}
                                />
                                <img
                                    src={uiVideo3Base}
                                    style={{position: 'absolute', left: 0, top: 0, zIndex: -1, width: 360}}
                                    alt={'Todo'}
                                />
                            </div>
                        </Card>
                    </div>
                </div>
            }
        </div>
    )
}

export default Highlight1