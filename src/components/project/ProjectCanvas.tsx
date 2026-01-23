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

interface ProjectCanvasProps {
    project: Project
}

const ProjectCanvas: React.FC<ProjectCanvasProps> = ({ project }) => {

    const overallWidth = PROJECT_COVER_WIDTH + PROJECT_GAP + PROJECT_TITLE_WIDTH + PROJECT_GAP + (PROJECT_WIDTH + PROJECT_GAP) * (project.slides.length)
    const beginX = -64 // The X coord and round corner radius of the cover
    const { pageSwitchPhase } = usePageSwitch();

    const { scrollX, scrollY } = useScroll();

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
                            <></>
                            <img
                                src={project.cover}
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
                    document.body
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
                    <span style={{
                        color: colors.primary,
                        fontWeight: 500,
                        fontSize: '80px',
                        textAlign: 'left',
                        whiteSpace: 'pre-line'
                    }}>
                        {project.titleWithLineBreak}
                    </span>
                </Card>
            </CanvasItem>

            {/* Slides */}
            {project.slides.map((slide, i) => (
                <CanvasItem
                    x={beginX + PROJECT_TITLE_WIDTH + PROJECT_GAP + (PROJECT_WIDTH + PROJECT_GAP) * (i + 1) }
                    y={0}
                    z={0}
                    children={slide}
                />
            ))}
        </div>
    )
}

export default ProjectCanvas