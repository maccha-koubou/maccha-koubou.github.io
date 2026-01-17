import React, {useState} from 'react'
import {CanvasItemProps} from "../components/CanvasItem";
import AboutNav from "../contents/About/AboutNav";
import AboutCanvas from "../components/About/AboutCanvas";
import IntroTab from "../contents/About/IntroTab";
import UXTab from "../contents/About/UXTab";
import ArchTab from "../contents/About/ArchTab";
import ByTab from "../contents/About/ByTab";
import ForTab from "../contents/About/ForTab";
import TextRing from "../components/TextRing";
import {CANVAS_HEIGHT} from "../config/Size";
import measureSize from "../utils/measureSize";

export type aboutTab = 'intro' | 'ux' | 'arch' | 'by' | 'for'

const About = () => {

    // Responsive width of canvas for the ellipse distribution
    const { ref, size: canvasSize } = measureSize<HTMLDivElement>()
    const canvasWidth = canvasSize ? canvasSize.width : 0

    // Control the tab switching
    const [activeTab, setActiveTab] = useState<aboutTab>('intro')

    const [nextTab, setNextTab] = useState<aboutTab | null>(null)
    const [isExiting, setIsExiting] = useState(false) // For the exit animation

    const handleTabChange = (tab: aboutTab) => {
        if (tab === activeTab || isExiting) return
        setNextTab(tab)
        console.log('1')
        setIsExiting(true)
        console.log('2')
    }

    const resetTabStatus = () => {
        setActiveTab(nextTab!)
        console.log('3')
        setNextTab(null)
        console.log('4')
        setIsExiting(false)
        console.log('5')
    }


    let tabContent =
        <IntroTab animateIn={!isExiting} animateOut={isExiting} onAnimationComplete={resetTabStatus} />
    switch (activeTab) {
        case 'intro':
            tabContent =
                <IntroTab animateIn={!isExiting} animateOut={isExiting} onAnimationComplete={resetTabStatus} />
            break;
        case 'ux':
            tabContent =
                <UXTab animateIn={!isExiting} animateOut={isExiting} onAnimationComplete={resetTabStatus} />
            break;
        case 'arch':
            tabContent =
                <ArchTab animateIn={!isExiting} animateOut={isExiting} onAnimationComplete={resetTabStatus} />
            break;
        case 'by':
            tabContent =
                <ByTab animateIn={!isExiting} animateOut={isExiting} onAnimationComplete={resetTabStatus} />
            break;
        case 'for':
            tabContent =
                <ForTab animateIn={!isExiting} animateOut={isExiting} onAnimationComplete={resetTabStatus} />
            break;
    }


    const items: CanvasItemProps[] = [
        {
            id: 'about-nav',
            x: 0,
            y: 200,
            z: 2,
            children: (
                <AboutNav setActiveTab={handleTabChange}/>
            )
        },
        {
            id: 'about-tab',
            x: 280,
            y: 0,
            z: 1,
            children: tabContent,
        },
        {
            id: 'about-bg-text-ring',
            x: 280,
            y: 0,
            z: 0,
            children: <TextRing
                radius={280}
                fontSize={20}
                text={'About Evelyn - '}
                width={960}
                height={CANVAS_HEIGHT - 32}
            />,
        }
    ]

    return (
        <div ref={ref}>
            <AboutCanvas items={items} width={canvasWidth} data-component="About" />
        </div>
    )
}

export default About