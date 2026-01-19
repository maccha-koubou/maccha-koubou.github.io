import React, {useState} from 'react'
import {NAV_HEIGHT} from "../../config/Size";
import NavBar from "../../components/NavBar";
import {NavButtonProps} from "../../components/NavButton";
import {colors} from "../../styles/theme";
import {aboutTab} from "../../pages/About";

interface AboutNavProps {
    setActiveTab: (aboutTab: aboutTab) => void;
}

const AboutNav = ({ setActiveTab}: AboutNavProps) => {

    const [highlightNumber, setHighlightNumber] = useState(0);

    const buttons:NavButtonProps[] = [
        {
            id: 'name',
            h: 84,
            padding: 32,
            secondColor: colors.secondary,
            gap: 16,
            firstChildren: (
                <span style={{
                    display: "flex",
                    width: "fit-content",
                    height: "fit-content",
                    fontWeight: 500,
                    fontSize: '52px',
                }}>
                    Evelyn
                </span>
            ),
            secondChildren: (
                <span style={{
                    display: "flex",
                    width: "fit-content",
                    height: "fit-content",
                    alignItems: "flex-start",
                    fontWeight: 300,
                    fontSize: '20px',
                }}>
                    She<br />
                    they
                </span>
            ),
            onClick: () => {
                setActiveTab('intro')
            },
            index: 0
        },
        {
            id: 'gap-1',
            h: 16,
            firstColor: 'transparent',
            padding: 36,
            isGap: true,
            firstChildren: (
                <></>
            ),
            index: 1
        },
        {
            id: 'ux-designer',
            h: 64,
            padding: 32,
            firstChildren: (
                <span style={{
                    display: "flex",
                    width: "fit-content",
                    height: "fit-content",
                    fontWeight: 500,
                    fontSize: '36px',
                }}>
                    UX designer
                </span>
            ),
            onClick: () => {
                setActiveTab('ux')
            },
            index: 2
        },
        {
            id: 'architect',
            h: 64,
            padding: 32,
            firstChildren: (
                <span style={{
                    display: "flex",
                    width: "fit-content",
                    height: "fit-content",
                    fontWeight: 500,
                    fontSize: '36px',
                }}>
                    Architect
                </span>
            ),
            onClick: () => {
                setActiveTab('arch')
            },
            index: 3
        },
        {
            id: 'gap-2',
            h: 60,
            firstColor: 'transparent',
            padding: 36,
            isGap: true,
            firstChildren: (
                <></>
            ),
            index: 4
        },
        {
            id: 'i-design-by',
            h: 64,
            padding: 32,
            firstColor: colors.secondary,
            firstChildren: (
                <span style={{
                    display: "flex",
                    width: "fit-content",
                    height: "fit-content",
                    fontWeight: 500,
                    fontSize: '36px',
                }}>
                    I design by
                </span>
            ),
            onClick: () => {
                setActiveTab('by')
            },
            index: 5
        },
        {
            id: 'i-design-for',
            h: 64,
            padding: 32,
            firstColor: colors.secondary,
            firstChildren: (
                <span style={{
                    display: "flex",
                    width: "fit-content",
                    height: "fit-content",
                    fontWeight: 500,
                    fontSize: '36px',
                }}>
                    I design for
                </span>
            ),
            onClick: () => {
                setActiveTab('for')
            },
            index: 6
        }
    ]
    return (
        <div style={{display: "flex", justifyContent: 'center',height: `${NAV_HEIGHT}px`}}>
            <NavBar
                buttons={buttons}
                direction={'column'}
                gap={0}
                highlightNumber={highlightNumber}
                setHighlightNumber={setHighlightNumber}
            />
        </div>
    )
}

export default AboutNav