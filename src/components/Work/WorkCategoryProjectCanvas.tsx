import React, {useState} from "react";
import {Project, SubProjectType} from "../../config/ProjectType";
import {
    genProjectCards,
    useRandomizeOffsets
} from "../../utils/Work/workCategoryDistribution";
import WorkCategoryCanvas from "./WorkCategoryCanvas";
import {useRandomizeRatio, useRandomizeSize} from "../../utils/getImgSize";

interface WorkCategoryProjectCanvasProps {
    projects: Project[]
    activeProject: Project | null
    setActiveProject: (p: Project | null) => void
    canvasWidth: number
    canvasHeight: number
    maxXOffset: number
    maxYOffset: number
    isExit: '1' | '2' | 'false'
    setIsExit: (isExit: '1' | '2' | 'false') => void
    subType1: SubProjectType;
    subType2: SubProjectType;
    activeSubType: SubProjectType[];
    setActiveSubType: (activeSubType: SubProjectType[]) => void;
}

const WorkCategoryProjectCanvas = ({
                                       projects,
                                       activeProject,
                                       setActiveProject,
                                       canvasWidth,
                                       canvasHeight,
                                       maxXOffset,
                                       maxYOffset,
                                       isExit,
                                       setIsExit,
                                       subType1,
                                       subType2,
                                       activeSubType,
                                       setActiveSubType,
                                   }: WorkCategoryProjectCanvasProps) => {

    const randomOffsets = useRandomizeOffsets(projects.length, maxXOffset, maxYOffset)
    const randomSize = useRandomizeSize(projects.length)
    const randomRatio = useRandomizeRatio(projects.length)

    const [isProjectsHover, setIsProjectsHover] = useState<boolean[]>(Array.from({ length: projects.length }, () => false))



    // Calculate how wide area does all projects occupy
    // The overall width from the left side of the first project, to the right side of the last project

    // Every project are evenly distributed, then have random offsets to the right
    // The last project don't get offsets

    const baselineGap = Math.max(280, 1000 - projects.length * 200)
    const overallWidth = projects.length * baselineGap

    const projectCards =
        genProjectCards(projects, baselineGap, randomOffsets, maxYOffset, randomSize, randomRatio, isExit, setIsExit, subType1, subType2, activeSubType, setActiveSubType, setActiveProject, isProjectsHover, setIsProjectsHover)

    return (
        <WorkCategoryCanvas items={projectCards} width={`${overallWidth}px`}/>
    )
}

export default WorkCategoryProjectCanvas
