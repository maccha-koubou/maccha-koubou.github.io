import React, {useLayoutEffect, useRef, useState} from 'react'
import { CanvasItem } from "../CanvasItem";
import {
    NAV_HEIGHT,
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
import {useScalingContainerRef} from "../ScalingContainer";
import {useScroll} from "../ScrollWrapper";

interface ProjectCanvasProps {
    project: Project
}

const ProjectCanvas: React.FC<ProjectCanvasProps> = ({ project }) => {

    const overallWidth = PROJECT_COVER_WIDTH + PROJECT_GAP + PROJECT_TITLE_WIDTH + PROJECT_GAP + (PROJECT_WIDTH + PROJECT_GAP) * (project.slides.length)
    const beginX = -64

    const { scrollX, scrollY } = useScroll();

    // Move the cover to ScalingContainer to cover the other elements
    const coverRef = useRef<HTMLDivElement>(null);
    const [coverRect, setCoverRect] = useState<{x:number}|null>(null);
    const scalingContainerRef = useScalingContainerRef();

    // Calculate the coord of the cover
    useLayoutEffect(() => {
        const update = () => {
            if (coverRef.current && scalingContainerRef) {
                const coverDOM = coverRef.current.getBoundingClientRect();
                const containerDOM = scalingContainerRef.getBoundingClientRect();

                setCoverRect({
                    x: coverDOM.left - containerDOM.left - scrollX,
                });
            }
        };
        update();
        window.addEventListener('resize', update);
        return () => window.removeEventListener('resize', update);
    }, [scrollX, scrollY, scalingContainerRef]);

    return (
        <div style={{
            position: 'relative',
            width: `${overallWidth}px`,
            height: `${PROJECT_HEIGHT}px`,
        }}>
            {/* Cover placeholder */}
            <div ref={coverRef}>
                <CanvasItem
                    x={beginX}
                    y={-NAV_HEIGHT}
                    z={0}>
                    <Card
                        w={PROJECT_COVER_WIDTH}
                        h={PROJECT_COVER_HEIGHT}
                    >
                        <></>
                    </Card>
                </CanvasItem>
            </div>

            {/* Portal layer & main content of cover */}
            {coverRect && scalingContainerRef &&
                ReactDOM.createPortal(
                    <CanvasItem
                        x={beginX + coverRect.x}
                        y={0}
                        z={0}
                        isPassThrough={true}
                    >
                        <Card
                            w={PROJECT_COVER_WIDTH}
                            h={PROJECT_COVER_HEIGHT}
                            borderColor={colors.primaryLight}
                            borderWidth={2}
                            radius={64}
                            embodiedBorder={true}
                            interactable={false}
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
                    scalingContainerRef
                )
            }

            {/* Project title */}
            <CanvasItem x={beginX + PROJECT_COVER_WIDTH + PROJECT_GAP} y={0} z={0}>
                <div style={{
                    position: 'relative',
                    width: PROJECT_TITLE_WIDTH,
                    height: PROJECT_HEIGHT,
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'center',
                    alignItems: 'flex-start',
                }}>
                    <span style={{
                        color: colors.primary,
                        fontWeight: 500,
                        fontSize: '80px',
                        textAlign: 'left',
                        whiteSpace: 'pre-line'
                    }}>
                        {project.titleWithLineBreak}
                    </span>
                </div>
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