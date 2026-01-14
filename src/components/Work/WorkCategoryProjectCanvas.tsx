import React from "react";
import {Project} from "../../config/ProjectType";
import workCategoryDistribution, {useRandomizeOffsets} from "../../utils/Work/workCategoryDistribution";
import WorkCategoryCanvas from "./WorkCategoryCanvas";

interface WorkCategoryProjectCanvasProps {
    projects: Project[]
    activeProject: Project | null
    setActiveProject: (p: Project) => void
    canvasWidth: number
    canvasHeight: number
    maxXOffset: number
    maxYOffset: number
}

const WorkCategoryProjectCanvas = ({
                                       projects,
                                       activeProject,
                                       setActiveProject,
                                       canvasWidth,
                                       canvasHeight,
                                       maxXOffset,
                                       maxYOffset,
                                   }: WorkCategoryProjectCanvasProps) => {

    const randomOffsets = useRandomizeOffsets(projects.length, maxXOffset, maxYOffset)

    const projectCards = workCategoryDistribution(
        canvasWidth,
        canvasHeight,
        projects,
        activeProject,
        setActiveProject,
        randomOffsets,
        maxYOffset
    )

    return (
        <WorkCategoryCanvas
            items={[projectCards]}
            data-component="Work category"
        />
    )
}

export default WorkCategoryProjectCanvas
