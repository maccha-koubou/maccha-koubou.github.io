import React, {useState} from 'react'
import MainCanvas from "../components/MainCanvas";
import {CanvasItemProps} from "../components/CanvasItem";
import WorkSelector from "../components/Work/WorkSelector";
import {ProjectType, subProjectTypes} from "../config/ProjectType";
import TextMatrix from "../contents/Work/TextMatrix";
import TextRing from "../components/TextRing";
import measureSize from "../utils/measureSize";
import ProjectSlide from "../components/Work/ProjectSlide";

const Work = () => {

    // Responsive width of canvas for the ellipse distribution
    const { ref, size: canvasSize } = measureSize<HTMLDivElement>()
    const canvasWidth = canvasSize ? canvasSize.width : 0
    const canvasHeight = canvasSize ? canvasSize.height : 0

    const cardWidth = 320
    const cardHeight = 200
    const subCardGap = 10
    const cardGap = canvasWidth / 20

    const centerCardCoord = (canvasWidth - cardWidth) / 2 - subCardGap
    const cardCoordDistance = cardWidth + subCardGap + cardGap

    // Change the bg elements based on mouse hovering
    const [ringText, setRingText] = useState<string>('Evelyn\'s Work - ')
    const [slide, setSlide] = useState<ProjectType | null>(null)


    const items: CanvasItemProps[] = [
        {
            id: 'work-product-entrance',
            x: centerCardCoord - cardCoordDistance,
            y: 280,
            z: 2,
            children: (
                <WorkSelector
                    title1={'Product'}
                    title2={'Service'}
                    type={ProjectType.PRODUCT}
                    subTypes1={subProjectTypes.DIGITAL_PRODUCTS}
                    subTypes2={subProjectTypes.PHYSICAL_PRODUCTS}
                    w={cardWidth}
                    h={cardHeight}
                    gap={subCardGap}
                    setRingText={setRingText}
                    setSlide={setSlide}
                />
            )
        },
        {
            id: 'work-space-entrance',
            x: centerCardCoord,
            y: 200,
            z: 2,
            children: (
                <WorkSelector
                    title1={'Space'}
                    title2={'Public life'}
                    type={ProjectType.SPACE}
                    subTypes1={subProjectTypes.ARCHITECTURE_SPACES}
                    subTypes2={subProjectTypes.URBAN_SPACES}
                    w={cardWidth}
                    h={cardHeight}
                    gap={subCardGap}
                    setRingText={setRingText}
                    setSlide={setSlide}
                />
            )
        },
        {
            id: 'work-visualization-entrance',
            x: centerCardCoord + cardCoordDistance,
            y: 380,
            z: 2,
            children: (
                <WorkSelector
                    title1={'Visualizations'}
                    title2={'Thinking'}
                    type={ProjectType.VISUALIZATION}
                    subTypes1={subProjectTypes.RESEARCH_VISUALIZATIONS}
                    subTypes2={subProjectTypes.VISUAL_COMMUNICATION}
                    w={cardWidth}
                    h={cardHeight}
                    gap={subCardGap}
                    setRingText={setRingText}
                    setSlide={setSlide}
                />
            )
        },
        {
            id: 'work-bg-text-ring',
            x: 0,
            y: 0,
            z: 1,
            children: (
                <TextRing
                    radius={360}
                    fontSize={20}
                    text={ringText}
                    width={canvasWidth}
                    height={canvasHeight - 20}
                />
            )
        },
        {
            id: 'work-bg-project-slide',
            x: 0,
            y: 0,
            z: 1,
            children: (
                <ProjectSlide
                    width={canvasWidth}
                    height={canvasHeight - 20}
                    type={slide}
                />
            )
        },
        {
            id: 'work-bg-text-matrix',
            x: 0,
            y: 0,
            z: 0,
            children: (
                <TextMatrix width={canvasWidth} />
            )
        }
    ]

    return (
        <div ref={ref}>
            <MainCanvas items={items} data-component="Work" />
        </div>
    )
}

export default Work