import React, {useEffect, useImperativeHandle, useRef} from "react"
import ScrollWrapper, {ScrollWrapperHandle} from "../../components/ScrollWrapper";
import measureSize from "../../utils/measureSize";
import ProjectCanvas from "../../components/project/ProjectCanvas";
import {Navigate, useParams} from "react-router-dom";
import projects from "../../contents/projects";

interface ProjectDetailProps {
    navigateSlide: (index: number) => void;
    setScrollX: (x: number) => void;
    scrollX: number;
    cleanScroll: () => void;
}

const ProjectDetail = React.forwardRef<ScrollWrapperHandle, ProjectDetailProps>((props, ref) => {

    const { projectUrl } = useParams<{ projectUrl: string }>();

    const project = projects.find(
        project => project.url === projectUrl
    )

    if (!project) {
        return <Navigate to="/work" replace />
    }

    const { ref: measureRef, size: canvasSize } = measureSize<HTMLDivElement>()
    const canvasWidth = canvasSize ? canvasSize.width : 0

    // Scroll the project card canvas on the bottom layer
    const parentRef = useRef<HTMLDivElement>(null)
    const scrollWrapperRef = useRef<ScrollWrapperHandle>(null)

    useImperativeHandle(ref, () => ({
        scrollByDelta: (deltaY: number) => scrollWrapperRef.current?.scrollByDelta(deltaY),
        scrollToX: (scrollToX: number) => scrollWrapperRef.current?.scrollToX(scrollToX),
    }));

    useEffect(() => {
        const onWheel = (e: WheelEvent) => {
            e.preventDefault();
            scrollWrapperRef.current?.scrollByDelta(e.deltaY)
        }

        const parent = parentRef.current
        parent?.addEventListener('wheel', onWheel, { passive: false })
        return () => parent?.removeEventListener('wheel', onWheel)
    }, [])


    return (
        <div ref={measureRef} style={{width:'100%', height:'100%'}}>
            <div ref={parentRef}>
                <ScrollWrapper ref={scrollWrapperRef as React.RefObject<ScrollWrapperHandle>} canvasWidth={canvasWidth} alignment={'left'} speed={3} navigateSlide={props.navigateSlide} scrollX={props.scrollX}>
                    <ProjectCanvas
                        project={project}
                        canvasWidth={canvasWidth}
                        navigateSlide={props.navigateSlide}
                        setScrollX={props.setScrollX}
                        cleanScroll={props.cleanScroll}
                    />
                </ScrollWrapper>
            </div>
        </div>
    )
})

export default ProjectDetail