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
    subType1: SubProjectType;
    subType2: SubProjectType;
    activeSubType: SubProjectType[];
    setActiveSubType: (activeSubType: SubProjectType[]) => void;
    setIsExit: (isExit: '1' | '2' | 'false') => void;
    isExit: '1' | '2' | 'false';
}

const WorkCategoryTitle = ({
                               activeProject,
                               type,
                               subType1,
                               subType2,
                               activeSubType,
                               setActiveSubType,
                               setIsExit,
                               isExit,
                           }: WorkCategoryTitleProps) => {

    // Determine the text of the title
    let titleBeginning: string
    let titleMiddle = '&'
    let titleEnd: string
    let titleGap = 16

    switch (type) {
        case ProjectType.PRODUCT:
            titleBeginning = 'Project'
            titleEnd = 'Service'
            break
        case ProjectType.SPACE:
            titleBeginning = 'Space'
            titleEnd = 'Public life'
            break
        case ProjectType.VISUALIZATION:
            titleBeginning = 'Visualizations'
            titleEnd = 'Thinking'
            break
    }
    if (activeProject) {
        titleBeginning = activeProject.title
        titleMiddle = ''
        titleEnd = ''
        titleGap = 0
    }

    const [isToggle1Active, setIsToggle1Active] = useState(
        activeSubType && activeSubType.includes(subType1)
    );
    const [isToggle2Active, setIsToggle2Active] = useState(
        activeSubType && activeSubType.includes(subType2)
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
                    text={subType1}
                    offIcon={
                        <UnselectedIcon />
                    }
                    onIcon={
                        <SelectedIcon />
                    }
                    onClick={
                        () => {
                            if (isExit === 'false') {
                                setIsExit('1')
                                setIsToggle1Active(!isToggle1Active)
                            }
                    }}
                />
                <Toggle
                    isActive={isToggle2Active}
                    text={subType2}
                    offIcon={
                        <UnselectedIcon />
                    }
                    onIcon={
                        <SelectedIcon />
                    }
                    onClick={
                        () => {
                            if (isExit === 'false') {
                                setIsExit('2')
                                setIsToggle2Active(!isToggle2Active)
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
            pointerEvents: 'none'
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