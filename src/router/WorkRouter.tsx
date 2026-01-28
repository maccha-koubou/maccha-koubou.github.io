import React, {useRef} from "react"
import {Route, Routes, useLocation} from 'react-router-dom'
import {
    NAV_HEIGHT,
    ORIGINAL_HEIGHT,
    PROJECT_COVER_WIDTH,
    PROJECT_GAP,
    PROJECT_TITLE_WIDTH,
    PROJECT_WIDTH
} from "../config/Size";
import WorkNav from "../contents/Work/WorkNav";
import WorkCategory from "../pages/Work/WorkCategory";
import {ProjectType} from "../config/ProjectType";
import ProjectDetail from "../pages/Work/ProjectDetail";
import {ScrollWrapperHandle} from "../components/ScrollWrapper";
import measureSize from "../utils/measureSize";

const WorkRouter = () => {
    const location = useLocation();
    const scrollRef = useRef<ScrollWrapperHandle>(null)
    const [scrollX, setScrollX] = React.useState<number>(0); // Because the real scrollX is inside the ProjectDetail, use this to get the real data for the WorkNav

    // Responsive width of canvas for the ellipse distribution
    const { ref, size: canvasSize } = measureSize<HTMLDivElement>()
    const canvasWidth = canvasSize ? canvasSize.width : 0

    const navigateSlide = (index: number) => {
        const offsetToCenter = (canvasWidth - PROJECT_WIDTH) / 2;
        const x = (-64 + PROJECT_COVER_WIDTH + PROJECT_GAP + PROJECT_TITLE_WIDTH + PROJECT_GAP + (PROJECT_WIDTH + PROJECT_GAP) * index - offsetToCenter);
        scrollRef.current?.scrollToX(x);
    }

    // Used in the project canvas. When navigating from one project page to another project page, clean the scroll data
    const cleanScroll = () => {
        scrollRef.current?.scrollToX(0);
    }

    return (

        <div
            style={{
                height: `${ORIGINAL_HEIGHT - NAV_HEIGHT}px`,
                display: 'flex',
                flexDirection: 'column',
                zIndex: 1
            }}
            ref={ref}
        >
            <div style={{ flex: 1, position: 'relative'}}>
                <WorkNav key={location.pathname} navigateSlide={navigateSlide} cleanScroll={cleanScroll} scrollX={scrollX} />
                <Routes>
                    <Route path="product" element={<WorkCategory type={ProjectType.PRODUCT} />} />
                    <Route path="space" element={<WorkCategory type={ProjectType.SPACE} />} />
                    <Route path="visualization" element={<WorkCategory type={ProjectType.VISUALIZATION} />} />
                    <Route path=":projectUrl" element={<ProjectDetail ref={scrollRef} setScrollX={setScrollX} cleanScroll={cleanScroll} />} />
                </Routes>
            </div>
        </div>
    )
}

export default WorkRouter