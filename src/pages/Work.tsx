import React, {useEffect, useRef, useState} from 'react'
import MainCanvas from "../components/MainCanvas";
import {CanvasItemProps} from "../components/CanvasItem";
import WorkSelector from "../components/Work/WorkSelector";
import {subProjectTypes} from "../config/ProjectType";
import TextMatrix from "../contents/Work/TextMatrix";

const Work = () => {

    // Responsive width of canvas for the ellipse distribution
    const ref = useRef<HTMLDivElement>(null)
    const [canvasHeight, setCanvasHeight] = useState(0)
    const [canvasWidth, setCanvasWidth] = useState(0)

    useEffect(() => {
        if (!ref.current) return
        const observer = new ResizeObserver(entries => {
            setCanvasWidth(entries[0].contentRect.width)
            setCanvasHeight(entries[0].contentRect.height)
        })
        observer.observe(ref.current)
        return () => observer.disconnect()
    }, [])

    const cardWidth = 320
    const cardHeight = 200
    const subCardGap = 10
    const cardGap = canvasWidth / 20

    const centerCardCoord = (canvasWidth - cardWidth) / 2 - subCardGap
    const cardCoordDistance = cardWidth + subCardGap + cardGap


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
                    subTypes1={subProjectTypes.DIGITAL_PRODUCTS}
                    subTypes2={subProjectTypes.PHYSICAL_PRODUCTS}
                    w={cardWidth}
                    h={cardHeight}
                    gap={subCardGap}
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
                    subTypes1={subProjectTypes.ARCHITECTURE_SPACES}
                    subTypes2={subProjectTypes.URBAN_SPACES}
                    w={cardWidth}
                    h={cardHeight}
                    gap={subCardGap}
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
                    subTypes1={subProjectTypes.RESEARCH_VISUALIZATIONS}
                    subTypes2={subProjectTypes.VISUAL_COMMUNICATION}
                    w={cardWidth}
                    h={cardHeight}
                    gap={subCardGap}
                />
            )
        },
        {
            id: 'work-bg-text-matrix',
            x: 0,
            y: 0,
            z: 1,
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