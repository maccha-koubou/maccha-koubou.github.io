import React, {useMemo, useState} from 'react'
import {CanvasItemProps} from "../../components/CanvasItem";
import measureSize from "../../utils/measureSize";
import WorkCategoryCanvas from "../../components/Work/WorkCategoryCanvas";
import {Project, ProjectType, SubProjectType} from "../../config/ProjectType";
import projects from "../../contents/projects";
import WorkCategoryTitle from "../../contents/Work/WorkCategoryTitle";
import workCategoryDistribution, {useRandomizeOffsets} from "../../utils/Work/workCategoryDistribution";

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

    let subType1: SubProjectType
    let subType2: SubProjectType

    switch (type) {
        case ProjectType.PRODUCT:
            subType1 = SubProjectType.DIGITAL_PRODUCTS
            subType2 = SubProjectType.PHYSICAL_PRODUCTS
            break
        case ProjectType.SPACE:
            subType1 = SubProjectType.ARCHITECTURE_SPACES
            subType2 = SubProjectType.URBAN_SPACES
            break
        case ProjectType.VISUALIZATION:
            subType1 = SubProjectType.VISUAL_COMMUNICATION
            subType2 = SubProjectType.RESEARCH_VISUALIZATIONS
            break
    }

    const [activeSubType, setActiveSubType] = useState<SubProjectType[]>(subType ? [subType] : [subType2])
    const [activeProject, setActiveProject] = useState<Project | null>(null)


    // Only filter projects based on the subtype when the activeSubType is not null
    const filteredProjects = useMemo(
        () => {
            let filtered: Project[]
            if (activeSubType.length === 0) {
                filtered = projects.filter(project => project.types.includes(type))
            } else {
                filtered = projects.filter(
                    project =>
                        activeSubType.some(subType => project.subtypes.includes(subType)))
            }
            return filtered.length > 0 ? filtered : projects
        }, [projects, type, activeSubType]
    )


    const itemWithoutProject: CanvasItemProps[] = [
        {
            id: 'work-category-title',
            x: 0,
            y: 0,
            z: 3,
            w: '100%',
            h: '100%',
            children: (
                <WorkCategoryTitle
                    type={type}
                    activeProject={activeProject}
                    activeSubType={activeSubType}
                    setActiveSubType={setActiveSubType}
                />
            ),
        }
    ]

    const maxXOffset = 200
    const maxYOffset = 80
    const randomOffsets = useRandomizeOffsets(projects.filter(project => project.types.includes(type)).length, maxXOffset, maxYOffset)

    const projectCards = workCategoryDistribution(
        canvasWidth,
        canvasHeight,
        filteredProjects,
        activeProject,
        setActiveProject,
        randomOffsets,
        maxYOffset,
    )



    const items: CanvasItemProps[] = [
        ...itemWithoutProject,
        projectCards,
    ]
    return (
        <div ref={ref}>
            <WorkCategoryCanvas
                key={subType ? subType : type}
                items={items}
                data-component="Work category" />
        </div>
    )
}

export default WorkCategory