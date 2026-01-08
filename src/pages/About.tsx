import React, {useEffect, useRef, useState} from 'react'
import {CanvasItemProps} from "../components/CanvasItem";
import AboutNav from "../contents/About/AboutNav";
import AboutCanvas from "../components/About/AboutCanvas";
import IntroTab from "../contents/About/IntroTab";
import UXTab from "../contents/About/UXTab";
import ArchTab from "../contents/About/ArchTab";
import ByTab from "../contents/About/ByTab";
import ForTab from "../contents/About/ForTab";

export type aboutTab = 'intro' | 'ux' | 'arch' | 'by' | 'for'

const About = () => {

    // Responsive width of canvas for the ellipse distribution
    const ref = useRef<HTMLDivElement>(null)
    const [canvasHeight, setCanvasHeight] = useState(0)
    const [canvasWidth, setCanvasWidth] = useState(0)

    // Control the tab switching
    const [activeTab, setActiveTab] = useState<aboutTab>('intro')

    useEffect(() => {
        if (!ref.current) return
        const observer = new ResizeObserver(entries => {
            setCanvasWidth(entries[0].contentRect.width)
            setCanvasHeight(entries[0].contentRect.height)
        })
        observer.observe(ref.current)
        return () => observer.disconnect()
    }, [])

    let tabContent = <IntroTab />
    switch (activeTab) {
        case 'intro':
            tabContent = <IntroTab />
            break;
        case 'ux':
            tabContent = <UXTab />
            break;
        case 'arch':
            tabContent = <ArchTab />
            break;
        case 'by':
            tabContent = <ByTab />
            break;
        case 'for':
            tabContent = <ForTab />
            break;
    }


    const items: CanvasItemProps[] = [
        {
            id: 'about-nav',
            x: 0,
            y: 200,
            z: 2,
            children: (
                <AboutNav setActiveTab={setActiveTab}/>
            )
        },
        {
            id: 'about-tab',
            x: 280,
            y: 0,
            z: 1,
            children: tabContent,
        }
    ]

    return (
        <div ref={ref}>
            <AboutCanvas items={items} width={canvasWidth} data-component="About" />
        </div>
    )
}

export default About