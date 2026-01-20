import React, {useEffect, useRef} from "react"
import ScrollWrapper, {ScrollWrapperHandle} from "../../components/ScrollWrapper";
import measureSize from "../../utils/measureSize";
import ProjectCanvas from "../../components/project/ProjectCanvas";
import {Navigate, useParams} from "react-router-dom";
import projects from "../../contents/projects";

const ProjectDetail = () => {

    const { projectUrl } = useParams<{ projectUrl: string }>();

    const project = projects.find(
        project => project.url === projectUrl
    )

    if (!project) {
        return <Navigate to="/work" replace />
    }

    const { ref, size: canvasSize } = measureSize<HTMLDivElement>()
    const canvasWidth = canvasSize ? canvasSize.width : 0
    const canvasHeight = canvasSize ? canvasSize.height : 0

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


    return (
        <div ref={ref} style={{width:'100%', height:'100%'}}>
            <div ref={parentRef}>
                <ScrollWrapper ref={scrollWrapperRef} canvasWidth={canvasWidth} canvasHeight={canvasHeight}>
                    <ProjectCanvas
                        project={project}
                    />
                </ScrollWrapper>
            </div>
        </div>
    )
}

export default ProjectDetail