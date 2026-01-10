import React, {useMemo, useState} from 'react'
import {CanvasItemProps} from "../../components/CanvasItem";
import measureSize from "../../utils/measureSize";
import WorkCategoryCanvas from "../../components/Work/WorkCategoryCanvas";
import {Project, ProjectType, SubProjectType} from "../../config/ProjectType";
import projects from "../../contents/projects";
import WorkCategoryTitle from "../../contents/Work/WorkCategoryTitle";
import workCategoryDistribution from "../../utils/Work/workCategoryDistribution";

interface WorkCategoryProps {
    type: ProjectType
    subType?: SubProjectType | null
}

const WorkCategory = ({
    type,
    subType = null,
}: WorkCategoryProps ) => {

    // Responsive width of canvas for the ellipse distribution
    const { ref, size: canvasSize } = measureSize<HTMLDivElement>()
    const canvasWidth = canvasSize ? canvasSize.width : 0
    const canvasHeight = canvasSize ? canvasSize.height : 0
    
    const [activeSubType, setActiveSubType] = useState<SubProjectType | null>(subType)
    const [activeProject, setActiveProject] = useState<Project | null>(null)

    // Only filter projects based on the subtype when the activeSubType is not null
    const filteredProjects = useMemo(
        () => {
            let filtered: Project[]
            if (!activeSubType) {
                filtered = projects.filter(project => project.types.includes(type))
            } else {
                filtered = projects.filter(project => project.subtypes.includes(activeSubType))
            }
            return filtered.length > 0 ? filtered : projects
        }, [projects, type]
    )


    const itemWithoutProject: CanvasItemProps[] = [
        {
            id: 'work-category-title',
            x: 0,
            y: 0,
            z: 1,
            w: '100%',
            h: '100%',
            children: (
                <WorkCategoryTitle type={type} activeProject={activeProject} />
            ),
        }
    ]

    const projectCards = workCategoryDistribution(
        canvasWidth,
        canvasHeight,
        filteredProjects,
        activeProject,
        setActiveProject,
    )



    const items: CanvasItemProps[] = [
        ...itemWithoutProject,
        projectCards,
    ]
    return (
        <div ref={ref}>
            <WorkCategoryCanvas items={items} data-component="Work category" />
        </div>
    )
}

export default WorkCategory