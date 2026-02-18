import {calculateImgFocus, calculateImgFrameSize} from "../getImgSize";
import ProjectCard from "../../components/ProjectCard";
import React, {useRef} from "react";
import {Project, SubProjectType} from "../../config/ProjectType";
import {CANVAS_HEIGHT, NAV_HEIGHT, PROJECT_CARD_LONGER_SIDE} from "../../config/Size";



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
    randomSize: number[],
    randomRatio: number[],
    isExit: '1' | '2' | 'false',
    setIsExit: (isExit: '1' | '2' | 'false') => void,
    subType1: SubProjectType,
    subType2: SubProjectType,
    activeSubType: SubProjectType[],
    setActiveSubType: (activeSubType: SubProjectType[]) => void,
    setActiveProject: (p: Project | null) => void,
    isProjectsHover: boolean[],
    setIsProjectsHover: (b: boolean[]) => void,
    onClick: (url: string) => void,
) => {
    return Array.from({ length: projects.length }, (_, i) => {

        const size = calculateImgFrameSize(randomRatio[i], randomSize[i])
        const focusPoint = calculateImgFocus(projects[i], randomRatio[i])
        const bottomProjectBaseOffset = CANVAS_HEIGHT - NAV_HEIGHT - 50 - PROJECT_CARD_LONGER_SIDE - maxYOffset

        let finalOffsets = {x: offsets.x[i], y: offsets.y[i]}
        let transformOriginVertical: 'top' | 'bottom'
        let transformOriginHorizontal: 'left' | 'right'

        // The last project doesn't get offsets
        if (i === projects.length - 1) {
            finalOffsets = {x: 0, y: 0}
        }
        if (i % 2 === 0) {
            finalOffsets.y = finalOffsets.y + bottomProjectBaseOffset
            transformOriginVertical = 'bottom'
            transformOriginHorizontal = 'right'
        } else {
            transformOriginVertical = 'top'
            transformOriginHorizontal = 'left'
        }

        // The label of the first project is always on right
        // The label of the last project is always on left
        // The expanding direction is on the same side
        let labelPosition: 'left' | 'right' | 'both' = 'both'
        if (i === projects.length - 1) {
            labelPosition = 'left'
            transformOriginHorizontal = 'right'
        } else if (i === 0) {
            labelPosition = 'right'
            transformOriginHorizontal = 'left'
        }

        return {
            id: `work-category-project-${i}`,
            x: i * baselineGap + finalOffsets.x,
            y: 20 + finalOffsets.y,
            z: 2,
            children: (
                <ProjectCard
                    onClick={() => {onClick(projects[i].url)}}
                    project={projects[i]}
                    onMouseEnter={() => {
                        setActiveProject(projects[i])
                        // Change the corresponding item on the array true when the project card is hovered
                        setIsProjectsHover([
                            ...isProjectsHover.slice(0, i),
                            true,
                            ...isProjectsHover.slice(i + 1),
                        ])
                    }}
                    onMouseLeave={() => {
                        setActiveProject(null)
                        setIsProjectsHover(Array.from({ length: projects.length }, () => false))
                    }}
                    isLabelSecondary={true}
                    w={size.width}
                    h={size.height}
                    focusPoint={focusPoint}
                    horizontalPosLimitation={labelPosition}
                    animateOut={isExit !== 'false'}
                    labelAnimateOut={isProjectsHover[i]}
                    transformOrigin={`${transformOriginVertical} ${transformOriginHorizontal}`}
                    onAnimationComplete={() => {
                        switch (isExit) {
                            case '1':
                                setIsExit('false')
                                if (activeSubType.includes(subType1)) {
                                    setActiveSubType(activeSubType.filter(type => type !== subType1))
                                } else {
                                    setActiveSubType([...activeSubType, subType1])
                                }
                                setActiveProject(null)
                                break
                            case '2':
                                setIsExit('false')
                                if (activeSubType.includes(subType2)) {
                                    setActiveSubType(activeSubType.filter(type => type !== subType2))
                                } else {
                                    setActiveSubType([...activeSubType, subType2])
                                }
                                setActiveProject(null)
                                break
                            case 'false':
                                break
                        }
                    }}
                />
            ),
        }
    })
}




/*const workCategoryDistribution = (
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

export default workCategoryDistribution;*/