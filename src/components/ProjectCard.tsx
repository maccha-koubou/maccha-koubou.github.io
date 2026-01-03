import React, {useEffect, useRef} from 'react'
import {Project} from "../config/ProjectType";
import {colors} from "../styles/theme";
import Card from "./Card";
import {genCardLabelCoord} from "../utils/genCardLabelCoord";

interface ProjectCardProps {
    project: Project
    isLabelSecondary: boolean
    onClick?: () => void
    onMouseEnter?: () => void
    onMouseLeave?: () => void
    h: number
    w: number
    index?: number
}

const ProjectCard = ({
                project,
                onClick,
                onMouseEnter,
                onMouseLeave,
                h,
                w,
                index,
              }: ProjectCardProps) => {

    // Get the size of the label
    const ref = useRef<HTMLDivElement>(null)
    const labelSizeRef = useRef<{ width: number; height: number } | null>(null)
    useEffect(() => {
        if (ref.current) {
            const { width, height } = ref.current.getBoundingClientRect()
            labelSizeRef.current = { width, height }
        }
    }, [])

    // Randomize the coordination of the label
    let horizontalPos: 'left' | 'right' | 'both' = 'both'
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
        labelSizeRef.current ? labelSizeRef.current.width : 0,
        labelSizeRef.current ? labelSizeRef.current.height : 0,
        w,
        h
    )


    return (
        <div style={{
            width:`${w}px`,
            height:`${h}px`,
            overflow: 'visible',
        }}>
            <Card
                borderColor={colors.primary}
                borderWidth={2}
                w={w}
                h={h}
                radius={24}
            >
                <img
                    src={project.cover}
                    width={w}
                    height={h}
                    alt={project.title}
                />
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
                <Card bg={colors.primary} radius={14} h={28} padding={[0, 8, 0, 8]}>
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