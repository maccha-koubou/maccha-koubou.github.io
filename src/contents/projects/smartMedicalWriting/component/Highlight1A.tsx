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

interface Highlight1AProps {
    animateOut: boolean;
}

const Highlight1A = ({
    animateOut,
} : Highlight1AProps) => {

    const [activeIndex, setActiveIndex] = useState(0)
    const [visibleCount, setVisibleCount] = useState(1)
    const [allFinished, setAllFinished] = useState(false)

    const videoRefs = useRef<HTMLVideoElement[]>([])

    useEffect(() => {
        const video = videoRefs.current[activeIndex]
        if (!video) return

        let cancelled = false

        const tryPlay = () => {
            if (cancelled) return
            video.play().catch(() => {})
        }

        if (video.readyState >= HTMLMediaElement.HAVE_ENOUGH_DATA) {
            tryPlay()
        } else {
            video.addEventListener('canplay', tryPlay, { once: true })
        }

        return () => {
            cancelled = true
            video.removeEventListener('canplay', tryPlay)
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
                    <section style={{
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
                            <h3 style={{
                                color: colors.primary,
                                fontWeight: 600,
                                fontSize: '24px',
                                textAlign: 'center'
                            }}>
                                Original design
                            </h3>
                        </Card>
                        <Card
                            w={360}
                            h={582}
                            bg={colors.white}
                            radius={24}
                            animateIn={true}
                            animateOut={animateOut || allFinished}
                        >
                            <video
                                ref={el => {
                                    if (el) videoRefs.current[0] = el
                                }}
                                src={uiVideo1}
                                poster={uiVideo1Base}
                                style={{ width: 360 }}
                                muted
                                playsInline
                                preload="auto"
                                onEnded={() => {
                                    setTimeout(() => {handleVideoEnded(0)}, 500)
                                }}
                            />
                        </Card>
                    </section>
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
                    <section style={{
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
                            <h3 style={{
                                color: colors.primary,
                                fontWeight: 600,
                                fontSize: '24px',
                                textAlign: 'center'
                            }}>
                                First proposal
                            </h3>
                        </Card>
                        <Card
                            w={360}
                            h={582}
                            bg={colors.white}
                            radius={24}
                            animateIn={true}
                            animateOut={animateOut || allFinished}
                        >
                            <video
                                ref={el => {
                                    if (el) videoRefs.current[1] = el
                                }}
                               src={uiVideo2}
                               poster={uiVideo2Base}
                               style={{ width: 360 }}
                               muted
                               playsInline
                               preload="auto"
                               onEnded={() => {
                                   setTimeout(() => { handleVideoEnded(1) }, 500)
                               }}
                            />
                        </Card>
                    </section>
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
                    <section style={{
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
                            <h3 style={{
                                color: colors.primary,
                                fontWeight: 600,
                                fontSize: '24px',
                                textAlign: 'center'
                            }}>
                                Final proposal
                            </h3>
                        </Card>
                        <Card
                            w={360}
                            h={582}
                            bg={colors.white}
                            radius={24}
                            animateIn={true}
                            animateOut={animateOut || allFinished}
                        >
                            <video
                                ref={el => {
                                    if (el) videoRefs.current[2] = el
                                }}
                                src={uiVideo3}
                                poster={uiVideo3Base}
                                style={{ width: 360 }}
                                muted
                                playsInline
                                preload="auto"
                                onEnded={() => {
                                    setTimeout(() => {handleVideoEnded(2)}, 500)
                                }}
                            />
                        </Card>
                    </section>
                </div>
            }
        </div>
    )
}

export default Highlight1A