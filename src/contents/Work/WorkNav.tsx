import React from 'react'
import {NAV_HEIGHT} from "../../config/Size";
import NavBar from "../../components/NavBar";
import {NavButtonProps} from "../../components/NavButton";
import {useLocation, useNavigate} from 'react-router-dom'
import {useHistory} from "../../router/HistoryContainer";
import Card from "../../components/Card";
import {usePageSwitch} from "../../app";
import {isUrlProject} from "../../router/Router";

const WorkNav = () => {
    const navigate = useNavigate()
    const location = useLocation();
    const { pageSwitchPhase, setPageSwitchPhase } = usePageSwitch();
    const { pop } = useHistory()

    const buttons:NavButtonProps[] = [
        {
            id: 'back',
            h: 28,
            padding: 8,
            firstChildren: (
                <span style={{
                    display: "flex",
                    width: "fit-content",
                    height: "fit-content",
                    fontWeight: 400,
                    fontSize: '16px',
                }}>
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
        }
    ]
    return (
        <div style={{display: "flex", justifyContent: 'center', alignItems: 'flex-end', height: `${NAV_HEIGHT}px`}}>
            <Card radius={14} animateIn={true} animateOut={pageSwitchPhase === 'exit'}>
                <NavBar buttons={buttons} direction={'row'} gap={40} highlightNumber={0} setHighlightNumber={() => {}}/>
            </Card>
        </div>
    )
}

export default WorkNav