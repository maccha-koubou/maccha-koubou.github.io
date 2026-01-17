import {CanvasItemProps} from "../../components/CanvasItem";
import {getFinalImgSize} from "../getImgSize";
import ProjectCard from "../../components/ProjectCard";
import React, {useRef} from "react";
import {Project} from "../../config/ProjectType";
import {CANVAS_HEIGHT, NAV_HEIGHT, PROJECT_CARD_LONGER_SIDE} from "../../config/Size";
import WorkCategoryCanvas from "../../components/Work/WorkCategoryCanvas";



// Create random offsets that don't change during the whole lifecycle of the components
export const useRandomizeOffsets = (
    count: number,
    maxXOffset: number,
    maxYOffset: number
) => {
    const xOffsetsRef = useRef<number[] | null>(null)
    const yOffsetsRef = useRef<number[] | null>(null)
    if (!xOffsetsRef.current) {
        xOffsetsRef.current = Array.from(
            { length: count },
            () => Math.random() * maxXOffset
        )
    }
    if (!yOffsetsRef.current) {
        yOffsetsRef.current = Array.from(
            { length: count },
            () => Math.random() * maxYOffset
        )
    }
    return {x: xOffsetsRef.current, y: yOffsetsRef.current}
}



// Generate the project cards
export const genProjectCards = (
    projects: Project[],
    baselineGap: number,
    offsets: {x: number[], y: number[]},
    maxYOffset: number,
) => {
    return Array.from({ length: projects.length }, (_, i) => {

        const size = getFinalImgSize(projects[i].cover)
        const bottomProjectBaseOffset = CANVAS_HEIGHT - NAV_HEIGHT - 50 - PROJECT_CARD_LONGER_SIDE - maxYOffset

        let finalOffsets = {x: offsets.x[i], y: offsets.y[i]}
        // The last project doesn't get offsets
        if (i === projects.length - 1) {
            finalOffsets = {x: 0, y: 0}
        }
        if (i % 2 === 0) {
            finalOffsets.y = finalOffsets.y + bottomProjectBaseOffset
        }

        // The label of the first project is always on right
        // The label of the last project is always on left
        let labelPosition: 'left' | 'right' | 'both' = 'both'
        if (i === projects.length - 1) {
            labelPosition = 'left'
        } else if (i === 0) {
            labelPosition = 'right'
        }

        return {
            id: `work-category-project-${i}`,
            x: i * baselineGap + finalOffsets.x,
            y: 20 + finalOffsets.y,
            z: 2,
            children: (
                <ProjectCard
                    project={projects[i]}
                    isLabelSecondary={true}
                    w={size.width}
                    h={size.height}
                    horizontalPosLimitation={labelPosition}
                />
            ),
        }
    })
}




const workCategoryDistribution = (
    canvasWidth: number,
    canvasHeight: number,
    projects: Project[],
    activeProject: Project | null,
    setActiveProject: (project: Project) => void,
    randomOffsets: {x: number[], y: number[]},
    maxYOffset: number,
): CanvasItemProps => {

    // Calculate how wide area does all projects occupy
    // The overall width from the left side of the first project, to the right side of the last project

    // Every project are evenly distributed, then have random offsets to the right
    // The last project don't get offsets

    const baselineGap = Math.max(280, 1000 - projects.length * 200)
    const overallWidth = projects.length * baselineGap

    const projectCards =
        genProjectCards(projects, baselineGap, randomOffsets, maxYOffset)

    return {
        id: `work-category-project-canvas`,
        x: 0,
        y: 0,
        z: 2,
        children: (
                <WorkCategoryCanvas items={projectCards} width={`${overallWidth}px`}/>
        ),
    }
}

export default workCategoryDistribution;