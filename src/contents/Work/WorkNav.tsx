import React from 'react'
import {NAV_HEIGHT} from "../../config/Size";
import NavBar from "../../components/NavBar";
import {NavButtonProps} from "../../components/NavButton";
import {useNavigate} from 'react-router-dom'
import {useHistory} from "../../router/HistoryContainer";

const WorkNav = () => {
    const navigate = useNavigate()
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
                navigate(pop() ?? '/work')
            }
        }
    ]
    return (
        <div style={{display: "flex", justifyContent: 'center', alignItems: 'flex-end', height: `${NAV_HEIGHT}px`}}>
            <NavBar buttons={buttons} direction={'row'} gap={40} />
        </div>
    )
}

export default WorkNav