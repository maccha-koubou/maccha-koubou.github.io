import React, {useEffect, useState} from 'react'
import {NAV_HEIGHT, PROJECT_COVER_WIDTH, PROJECT_GAP, PROJECT_TITLE_WIDTH, PROJECT_WIDTH} from "../../config/Size";
import NavBar from "../../components/NavBar";
import {NavButtonProps} from "../../components/NavButton";
import {useLocation, useNavigate} from 'react-router-dom'
import {useHistory} from "../../router/HistoryContainer";
import Card from "../../components/Card";
import {usePageSwitch} from "../../app";
import {isUrlProject} from "../../router/Router";
import projects from "../projects";
import {LeftArrowSmallIcon} from "../../assets/icons/LeftArrowSmallIcon";
import {Project} from "../../config/ProjectType";
import {colors} from "../../styles/theme";

interface WorkNavProps {
    navigateSlide: (index: number) => void;
    scrollX: number;
}

const WorkNav = ({navigateSlide, scrollX}: WorkNavProps) => {
    const navigate = useNavigate()
    const location = useLocation();
    const { pageSwitchPhase, setPageSwitchPhase } = usePageSwitch();
    const { pop } = useHistory()

    const [highlightNumber, setHighlightNumber] = useState(1);

    const isProject = isUrlProject(location.pathname)
    let url: string | undefined
    let project: Project | undefined
    if (isProject) {
        url = location.pathname.replace("/work/", "");
        project = projects.find(project => project.url === url);
    }

    // The back button for category pages
    const categoryButtons:NavButtonProps[] = [
        {
            id: 'back',
            h: 28,
            padding: [8, 8, 8, 4],
            firstChildren: (
                <span style={{
                    display: "flex",
                    width: "fit-content",
                    height: "fit-content",
                    fontWeight: 400,
                    fontSize: '16px',
                    gap: '4px'
                }}>
                    <LeftArrowSmallIcon />
                    BACK
                </span>
            ),
            onClick: () => {
                if (isUrlProject(location.pathname)) {
                    setPageSwitchPhase('exit')
                    setTimeout(() => navigate(pop() ?? '/work'), 400)
                } else {
                    navigate(pop() ?? '/work')
                }
            },
            index: 0
        },
        {
            // If the page is a category page, the highlight will always on this invisible place
            id: 'cancel-highlight',
            h: 28,
            firstColor: 'transparent',
            padding: 0,
            isGap: true,
            bgColor: 'transparent',
            firstChildren: (
                <></>
            ),
            index: 1
        },
    ]

    // The back button and the divider for project detail pages
    const projectBackButton:NavButtonProps[] = [
        {
            id: 'back',
            h: 28,
            padding: 4,
            firstChildren: (
                <span style={{
                    display: "flex",
                    width: "fit-content",
                    height: "fit-content",
                    fontWeight: 400,
                    fontSize: '16px',
                    gap: '4px'
                }}>
                    <LeftArrowSmallIcon />
                </span>
            ),
            onClick: () => {
                if (isUrlProject(location.pathname)) {
                    setPageSwitchPhase('exit')
                    setTimeout(() => navigate(pop() ?? '/work'), 400)
                } else {
                    navigate(pop() ?? '/work')
                }
            },
            index: 0
        },
        {
            id: 'divider',
            h: 28,
            firstColor: 'transparent',
            padding: 1,
            isGap: true,
            bgColor: colors.primary,
            firstChildren: (
                <></>
            ),
            index: 1
        },
    ]

    // Extract stages from the project
    const stages = project
        ? project.slides.reduce((acc, slide, i) => {
            if (!acc.some(s => s.stage === slide.stage)) {
                acc.push({
                    stage: slide.stage,
                    firstSlideIndex: i,
                })
            }
            return acc
        }, [] as { stage: string; firstSlideIndex: number }[])
        : [];

    const projectButtons:NavButtonProps[] = stages?.map((slide, i) => ({
        id: slide.stage,
        h: 28,
        padding: 8,
        firstChildren: (
            <span>
                {slide.stage}
            </span>
        ),
        onClick: () => {
            navigateSlide(slide.firstSlideIndex);
        },
        index: i + 2
    })) ?? [];

    // Control the highlight based on the scroll position
    useEffect(() => {
        const currentSlideIndex = Math.floor((scrollX - (-64 + PROJECT_COVER_WIDTH + PROJECT_GAP + PROJECT_TITLE_WIDTH)) / (PROJECT_WIDTH + PROJECT_GAP))
        let currentStageIndex = 0
        if (stages.length && currentSlideIndex >= stages[0].firstSlideIndex) {
            for (let i = 0; i < stages.length; i++) {
                if (currentSlideIndex >= stages[i].firstSlideIndex) {
                    currentStageIndex = i;
                } else {
                    break;
                }
            }
        }
        setHighlightNumber(currentStageIndex + 2);
    }, [scrollX]);

    return (
        <div style={{display: "flex", justifyContent: 'center', alignItems: 'flex-end', height: `${NAV_HEIGHT}px`}}>
            <Card radius={14} animateIn={true} animateOut={pageSwitchPhase === 'exit'}>
                <NavBar
                    buttons={isProject ? [...projectBackButton, ...projectButtons] : categoryButtons}
                    direction={'row'}
                    gap={isProject ? 40 : 0}
                    highlightNumber={highlightNumber}
                    setHighlightNumber={() => {}} // Highlight is directly controlled by the scroll position
                />
            </Card>
        </div>
    )
}

export default WorkNav