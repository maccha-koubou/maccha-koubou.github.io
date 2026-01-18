import Card from "../../components/Card";
import {colors} from "../../styles/theme";
import React, {useState} from "react";
import {Project, ProjectType, SubProjectType} from "../../config/ProjectType";
import Button from "../../components/Button";
import Toggle from "../../components/Toggle";
import {SelectedIcon} from "../../assets/icons/SelectedIcon";
import {UnselectedIcon} from "../../assets/icons/UnselectedIcon";

interface WorkCategoryTitleProps {
    activeProject: Project | null;
    type: ProjectType;
    activeSubType: SubProjectType[];
    setActiveSubType: (activeSubType: SubProjectType[]) => void;
}

const WorkCategoryTitle = ({
                               activeProject,
                               type,
                               activeSubType,
                               setActiveSubType,
                           }: WorkCategoryTitleProps) => {

    // Determine the text of the title
    let titleBeginning: string
    let titleMiddle = '&'
    let titleEnd: string
    let toggle1: SubProjectType
    let toggle2: SubProjectType
    let titleGap = 16

    switch (type) {
        case ProjectType.PRODUCT:
            titleBeginning = 'Project'
            titleEnd = 'Service'
            toggle1 = SubProjectType.DIGITAL_PRODUCTS
            toggle2 = SubProjectType.PHYSICAL_PRODUCTS
            break
        case ProjectType.SPACE:
            titleBeginning = 'Space'
            titleEnd = 'Public life'
            toggle1 = SubProjectType.ARCHITECTURE_SPACES
            toggle2 = SubProjectType.URBAN_SPACES
            break
        case ProjectType.VISUALIZATION:
            titleBeginning = 'Visualizations'
            titleEnd = 'Thinking'
            toggle1 = SubProjectType.VISUAL_COMMUNICATION
            toggle2 = SubProjectType.RESEARCH_VISUALIZATIONS
            break
    }
    if (activeProject) {
        titleBeginning = activeProject.title
        titleMiddle = ''
        titleEnd = ''
        titleGap = 0
    }

    const [isToggle1Active, setIsToggle1Active] = useState(
        activeSubType && activeSubType.includes(toggle1)
    );
    const [isToggle2Active, setIsToggle2Active] = useState(
        activeSubType && activeSubType.includes(toggle2)
    );

    // Shows toggles when no project is active, show the project's subtitle when it's active
    let bottomItem: React.ReactNode
    if (activeProject) {
        bottomItem = (
            <div style={{
                position: 'relative',
                display: 'flex',
                justifyContent: 'center',
                width: '100%',
                height: '48px'
            }}>
                <Button
                    text={`${activeProject.subtitle}`}
                />
            </div>
        )
    } else {
        bottomItem = (
            <div style={{
                position: 'relative',
                display: 'flex',
                flexDirection: 'row',
                justifyContent: 'center',
                gap: '24px',
                width: '100%',
                height: '48px'
            }}>
                <Toggle
                    isActive={isToggle1Active}
                    text={toggle1}
                    offIcon={
                        <UnselectedIcon />
                    }
                    onIcon={
                        <SelectedIcon />
                    }
                    onClick={
                        () => {
                            setIsToggle1Active(!isToggle1Active)
                            if (activeSubType.includes(toggle1)) {
                                setActiveSubType(activeSubType.filter(type => type !== toggle1))
                            } else {
                                setActiveSubType([...activeSubType, toggle1])
                            }
                    }}
                />
                <Toggle
                    isActive={isToggle2Active}
                    text={toggle2}
                    offIcon={
                        <UnselectedIcon />
                    }
                    onIcon={
                        <SelectedIcon />
                    }
                    onClick={
                        () => {
                            setIsToggle2Active(!isToggle2Active)
                            if (activeSubType.includes(toggle2)) {
                                setActiveSubType(activeSubType.filter(type => type !== toggle2))
                            } else {
                                setActiveSubType([...activeSubType, toggle2])
                            }
                        }}
                />
            </div>
        )
    }


    return (
        <div style={{
            width: '100%',
            height: '100%',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            padding: '0px 0px 80px 0px',
            gap: '24px',
        }}>
            <Card>
                <div style={{
                    display: 'flex',
                    flexDirection: 'row',
                    gap: `${titleGap}px`,
                }}>
                    <span style={{
                        color: colors.primary,
                        fontWeight: 500,
                        fontSize: '80px',
                    }}>
                        {titleBeginning}
                    </span>
                    <span style={{
                        color: colors.primary,
                        fontWeight: 200,
                        fontSize: '80px',
                    }}>
                        {titleMiddle}
                    </span>
                    <span style={{
                        color: colors.primary,
                        fontWeight: 500,
                        fontSize: '80px',
                    }}>
                        {titleEnd}
                    </span>
                </div>
            </Card>
            {bottomItem}
        </div>
    )
}

export default WorkCategoryTitle;