import React from 'react'
import {Project} from "../config/ProjectType";
import {colors} from "../styles/theme";
import Card from "./Card";
import {genCardLabelCoord} from "../utils/genCardLabelCoord";
import measureSize from "../utils/measureSize";

interface ProjectCardProps {
    project: Project
    isLabelSecondary?: boolean
    onClick?: () => void
    onMouseEnter?: () => void
    onMouseLeave?: () => void
    h: number
    w: number
    index?: number
    horizontalPosLimitation?: 'left' | 'right' | 'both'
    focusPoint: {x: number; y: number}
}

const ProjectCard = ({
                project,
                isLabelSecondary = false,
                onClick,
                onMouseEnter,
                onMouseLeave,
                h,
                w,
                index,
                horizontalPosLimitation,
                focusPoint
              }: ProjectCardProps) => {

    // Get the size of the label
    const { ref, size: labelSize } = measureSize<HTMLDivElement>()

    // Randomize the coordination of the label
    let horizontalPos: 'left' | 'right' | 'both' =
        horizontalPosLimitation ? horizontalPosLimitation : 'both'
    let verticalPos: 'upper' | 'lower' | 'both' = 'both'

    if (index !== undefined) {
        // If this card is used on home page and has an index
        switch (index) {
            case 0:
                horizontalPos = 'right'
                verticalPos = 'both'
                break
            case 1:
                horizontalPos = 'right'
                verticalPos = 'lower'
                break
            case 2:
                horizontalPos = 'left'
                verticalPos = 'lower'
                break
            case 3:
                horizontalPos = 'left'
                verticalPos = 'both'
                break
            case 4:
                horizontalPos = 'left'
                verticalPos = 'upper'
                break
            case 5:
                horizontalPos = 'right'
                verticalPos = 'upper'
                break
        }
    }
    const labelCoord = genCardLabelCoord(
        horizontalPos,
        verticalPos,
        labelSize ? labelSize.width : 0,
        labelSize ? labelSize.height : 0,
        w,
        h
    )

    let labelBg = colors.primary
    if (isLabelSecondary) {
        labelBg = colors.secondary
    }


    return (
        <div style={{
            width:`${w}px`,
            height:`${h}px`,
            overflow: 'visible',
        }}>
            <Card
                borderColor={colors.primaryLight}
                borderWidth={2}
                w={w}
                h={h}
                radius={24}
            >
                <div style={{
                    position: 'relative',
                    overflow: 'hidden',
                    width: w,
                    height: h
                }}>
                    <img
                        src={project.cover}
                        style={{
                            width: '100%',
                            height: '100%',
                            objectFit: 'cover',
                            display: 'block',
                            objectPosition: `${focusPoint.x * 100}% ${focusPoint.y * 100}%`
                        }}
                        alt={project.subtitle}
                    />
                </div>
            </Card>

            {/* The label of card */}
            <div style={{
                position: 'absolute',
                top: `${labelCoord.y}px`,
                left: `${labelCoord.x}px`,
                zIndex: 2,
                width: "fit-content",
                height: "fit-content",
                }}
                ref={ref}
            >
                <Card bg={labelBg} radius={14} h={28} padding={[0, 8, 0, 8]}>
                    <span style={{
                        display: "flex",
                        width: "fit-content",
                        height: "fit-content",
                        color: `${colors.white}`,
                        fontWeight: 400,
                        fontSize: '16px',
                        whiteSpace: 'nowrap',
                    }}>
                        {project.title}
                    </span>
                </Card>
            </div>

        </div>
    )
}

export default ProjectCard