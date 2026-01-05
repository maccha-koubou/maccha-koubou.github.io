import React from 'react'
import {NAV_HEIGHT} from "../../config/Size";
import NavBar from "../../components/NavBar";
import {NavButtonProps} from "../../components/NavButton";
import { useNavigate } from 'react-router-dom'
import {colors} from "../../styles/theme";

const AboutNav = () => {
    const navigate = useNavigate()

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
                navigate('/')
            }
        },
        {
            id: 'gap-1',
            h: 16,
            firstColor: 'transparent',
            padding: 36,
            isGap: true,
            firstChildren: (
                <></>
            )
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
                navigate('/')
            }
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
                navigate('/')
            }
        },
        {
            id: 'gap-2',
            h: 60,
            firstColor: 'transparent',
            padding: 36,
            isGap: true,
            firstChildren: (
                <></>
            )
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
                navigate('/')
            }
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
                navigate('/')
            }
        }
    ]
    return (
        <div style={{display: "flex", justifyContent: 'center',height: `${NAV_HEIGHT}px`}}>
            <NavBar buttons={buttons} direction={'column'} gap={0} />
        </div>
    )
}

export default AboutNav