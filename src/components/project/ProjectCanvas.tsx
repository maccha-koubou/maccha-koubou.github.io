import React, {useEffect, useLayoutEffect, useRef, useState} from 'react'
import { CanvasItem } from "../CanvasItem";
import {
    NAV_HEIGHT, ORIGINAL_HEIGHT,
    PROJECT_COVER_HEIGHT,
    PROJECT_COVER_WIDTH,
    PROJECT_GAP,
    PROJECT_HEIGHT,
    PROJECT_TITLE_WIDTH,
    PROJECT_WIDTH
} from "../../config/Size";
import {Project} from "../../config/ProjectType";
import {colors} from "../../styles/theme";
import Card from "../Card";
import ReactDOM from "react-dom";
import {useScroll} from "../ScrollWrapper";
import {usePageSwitch} from "../../app";
import SlideCanvas from "./SlideCanvas";
import {useHistory} from "../../router/HistoryContainer";
import {useLocation, useNavigate} from "react-router-dom";
import RightArrowAnimation from "../../assets/icons/RightArrowAnimation";

interface ProjectCanvasProps {
    project: Project
    canvasWidth: number;
    navigateSlide: (index: number) => void;
    setScrollX: (x: number) => void;
    cleanScroll: () => void;
}

const ProjectCanvas: React.FC<ProjectCanvasProps> = ({ project, canvasWidth, navigateSlide, setScrollX, cleanScroll }) => {

    const overallWidth = PROJECT_COVER_WIDTH + PROJECT_GAP + PROJECT_TITLE_WIDTH + PROJECT_GAP + (PROJECT_WIDTH + PROJECT_GAP) * (project.slides.length)
    const beginX = -64 // The X coord and round corner radius of the cover

    const portalRoot = document.getElementById('theme-provider');
    const { scrollX, scrollY } = useScroll();

    const navigate = useNavigate()
    const { pageSwitchPhase, setPageSwitchPhase } = usePageSwitch();
    const location = useLocation()
    const { push } = useHistory()

    // Function for the navigation provided by the slide contents
    const onNavigate = (url: string) => {
        setPageSwitchPhase('exit')
        push(location.pathname)
        setTimeout(() => {
            cleanScroll()
            navigate(url)
        }, 400)
    }

    // Move the cover to ScalingContainer to cover the other elements
    const coverRef = useRef<HTMLDivElement>(null);
    const [coverRect, setCoverRect] = useState<{left: number, top: number, width: number, height: number, radius: number, border: number}|null>(null);

    // Update the coord and size of the cover
    const update = () => {
        if (coverRef.current) {
            const coverDOM = coverRef.current.getBoundingClientRect();
            const scale = window.innerHeight / ORIGINAL_HEIGHT
            setCoverRect({
                left: coverDOM.left,
                top: coverDOM.top,
                width: coverDOM.width,
                height: coverDOM.height,
                radius: -beginX * scale,
                border: 2 * scale,
            });
        }
    };

    // Observe the window resize to renew the coord of the cover
    useEffect(() => {
        setTimeout(update, 50);
        if (!coverRef.current) return;
        const ro = new ResizeObserver(() => {
            update();
        });
        ro.observe(coverRef.current);
        return () => ro.disconnect();
    }, []);

    // Calculate the coord of the cover
    useLayoutEffect(() => {
        update();
        setScrollX(scrollX);
        window.addEventListener('resize', update);
        return () => window.removeEventListener('resize', update);
    }, [scrollX, scrollY]);

    return (
        <div style={{
            position: 'relative',
            width: `${overallWidth}px`,
            height: `${PROJECT_HEIGHT}px`,
        }}>
            {/* Cover placeholder */}

            <CanvasItem
                x={beginX}
                y={-NAV_HEIGHT}
                z={0}>
                <div ref={coverRef} style={{width: PROJECT_COVER_WIDTH, height: PROJECT_COVER_HEIGHT}}>
                    <Card
                        w={PROJECT_COVER_WIDTH}
                        h={PROJECT_COVER_HEIGHT}
                    >
                        <></>
                    </Card>
                </div>
            </CanvasItem>

            {/* Portal layer & main content of cover */}
            {coverRect &&
                ReactDOM.createPortal(
                    <CanvasItem
                        x={coverRect.left}
                        y={0}
                        z={0}
                        isPassThrough={true}
                    >
                        {/* The arrow above the cover */}
                        <button
                            style={{
                                position: 'absolute',
                                zIndex: 1,
                                top: coverRect.height / 2 - coverRect.height / 16,
                                right: - coverRect.height / 20,
                                cursor: 'pointer',
                                border: 'none',
                                background: 'none',
                            }}
                            onClick={() => {navigateSlide(-0.7)}}
                            tabIndex={1}
                        >
                            <Card
                                padding={coverRect.height / 48}
                                bg={colors.primary}
                                radius={coverRect.radius}
                                embodiedBorder={true}
                                animateIn={true}
                                animateOut={pageSwitchPhase === 'exit'}
                            >
                                <div style={{
                                    color: colors.white,
                                    display: 'flex',
                                    flexDirection: 'row',
                                    alignItems: 'center',
                                    gap: coverRect.height / 48,
                                }}>
                                    <RightArrowAnimation size={coverRect.height / 32} />
                                    <span style={{
                                        fontWeight: 500,
                                        fontSize: 24 * (window.innerHeight / ORIGINAL_HEIGHT),
                                    }}>
                                        Swipe for details
                                    </span>
                                </div>
                            </Card>
                        </button>
                        <Card
                            w={coverRect.width}
                            h={coverRect.height}
                            borderColor={colors.primaryLight}
                            borderWidth={coverRect.border}
                            radius={coverRect.radius}
                            embodiedBorder={true}
                            interactable={false}
                            animateOut={pageSwitchPhase === 'exit'}
                        >
                            <img
                                src={project.coverColored}
                                style={{
                                    width: '100%',
                                    height: '100%',
                                    objectFit: 'cover',
                                    display: 'block',
                                    objectPosition: `${project.landscape.x * 100}% ${project.landscape.y * 100}%`
                                }}
                                alt={project.coverAlt}
                            />
                        </Card>
                    </CanvasItem>,
                    portalRoot ? portalRoot : document.body
                )
            }

            {/* Project title */}
            <CanvasItem x={beginX + PROJECT_COVER_WIDTH + PROJECT_GAP} y={0} z={0}>
                <Card
                    w={PROJECT_TITLE_WIDTH}
                    h={PROJECT_HEIGHT}
                    horizon={'flex-start'}
                    vertical={'center'}
                    animateIn={true}
                    animateOut={pageSwitchPhase === 'exit'}
                >
                    <h1 style={{
                        color: colors.primary,
                        fontWeight: 500,
                        fontSize: '80px',
                        textAlign: 'left',
                        whiteSpace: 'pre-line',
                        padding: '0px 0px 60px 0px',
                    }}>
                        {project.titleWithLineBreak}
                    </h1>
                </Card>
            </CanvasItem>

            {/* Slides */}
            {project.slides.map((slide, i) => {
                const x = beginX + PROJECT_TITLE_WIDTH + PROJECT_GAP + (PROJECT_WIDTH + PROJECT_GAP) * (i + 1)
                const isVisible =
                    x + PROJECT_WIDTH > scrollX &&
                    x < scrollX + canvasWidth
                if (!isVisible) return null
                return (
                    <CanvasItem
                        x={beginX + PROJECT_TITLE_WIDTH + PROJECT_GAP + (PROJECT_WIDTH + PROJECT_GAP) * (i + 1)}
                        y={0}
                        z={0}
                    >
                        <SlideCanvas items={slide.render(true, pageSwitchPhase === 'exit', onNavigate)}/>
                    </CanvasItem>
                )
            })}

            {/* Placeholder at the end, to ensure the whole canvas can be display, no matter whether the slides at the end are rendered */}
            <CanvasItem x={overallWidth - 10} y={0} z={0}>
                <div style={{width: 10, height: 10}} />
            </CanvasItem>
        </div>
    )
}

export default ProjectCanvas