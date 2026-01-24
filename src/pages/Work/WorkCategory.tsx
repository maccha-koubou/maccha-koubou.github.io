import React, {useEffect, useMemo, useRef, useState} from 'react'
import {CanvasItemProps} from "../../components/CanvasItem";
import measureSize from "../../utils/measureSize";
import WorkCategoryCanvas from "../../components/Work/WorkCategoryCanvas";
import {Project, ProjectType, SubProjectType} from "../../config/ProjectType";
import projects from "../../contents/projects";
import WorkCategoryTitle from "../../contents/Work/WorkCategoryTitle";
import WorkCategoryProjectCanvas from "../../components/Work/WorkCategoryProjectCanvas";
import ScrollWrapper, {ScrollWrapperHandle} from "../../components/ScrollWrapper";
import {useLocation, useNavigate, useSearchParams} from "react-router-dom";
import {usePageSwitch} from "../../app";
import {useHistory} from "../../router/HistoryContainer";

interface WorkCategoryProps {
    type: ProjectType
}

const WorkCategory = ({
    type,
}: WorkCategoryProps ) => {

    // Navigate function for project cards, change the phase state and navigate 0.4 seconds later
    const navigate = useNavigate();
    const location = useLocation()
    const { push } = useHistory()

    const { setPageSwitchPhase } = usePageSwitch();
    const projectCardOnClick = (url: string) => {
        setPageSwitchPhase('exit')
        push(location.pathname)
        setTimeout(() => navigate(`/work/${url}`), 400)
    }

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

    const [searchParams] = useSearchParams();
    let filteredType: SubProjectType | null = null;
    if (searchParams.get('filter') === subType1) {
        filteredType = subType1;
    } else if (searchParams.get('filter') === subType2) {
        filteredType = subType2;
    }
    const [activeSubType, setActiveSubType] = useState<SubProjectType[]>(filteredType ? [filteredType] : [subType1, subType2])
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


    // Scroll the project card canvas on the bottom layer

    const parentRef = useRef<HTMLDivElement>(null)
    const scrollWrapperRef = useRef<ScrollWrapperHandle>(null)

    useEffect(() => {
        const onWheel = (e: WheelEvent) => {
            e.preventDefault()
            scrollWrapperRef.current?.scrollByDelta(e.deltaY)
        }

        const parent = parentRef.current
        parent?.addEventListener('wheel', onWheel, { passive: false })
        return () => parent?.removeEventListener('wheel', onWheel)
    }, [])


    // Control the exit animation when switching the page
    // !!! The state of filter is changed by setIsExit !!!
    // !!! The state change happens at workCategoryDistribution -> genProjectCards() !!!
    const [isExit, setIsExit] = useState<'1' | '2' | 'false'>('false');



    const maxXOffset = 200
    const maxYOffset = 80


    const items: CanvasItemProps[] = [
        {
            id: 'work-category-title',
            x: 0,
            y: 0,
            z: 3,
            w: '100%',
            h: '100%',
            isPassThrough: true,
            children: (
                <WorkCategoryTitle
                    type={type}
                    subType1={subType1}
                    subType2={subType2}
                    activeProject={activeProject}
                    activeSubType={activeSubType}
                    setIsExit={setIsExit}
                    isExit={isExit}
                />
            ),
        },
        {
            id: 'work-category-projects',
            x: 0,
            y: 0,
            z: 2,
            w: '100%',
            h: '100%',
            children: (
                <div>
                    <ScrollWrapper ref={scrollWrapperRef} canvasWidth={canvasWidth} canvasHeight={canvasHeight}>
                        <WorkCategoryProjectCanvas
                            projects={filteredProjects}
                            activeProject={activeProject}
                            setActiveProject={setActiveProject}
                            subType1={subType1}
                            subType2={subType2}
                            activeSubType={activeSubType}
                            setActiveSubType={setActiveSubType}
                            canvasWidth={canvasWidth}
                            canvasHeight={canvasHeight}
                            maxXOffset={maxXOffset}
                            maxYOffset={maxYOffset}
                            isExit={isExit}
                            setIsExit={setIsExit}
                            onClick={projectCardOnClick}
                            key={activeSubType ? activeSubType.toString() : type}
                        />
                    </ScrollWrapper>
                </div>
            ),
        },
    ]


    return (
        <div ref={ref}>
            <div ref={parentRef}>
                <WorkCategoryCanvas
                    items={items}
                    data-component="Work category" />
            </div>
        </div>
    )
}

export default WorkCategory