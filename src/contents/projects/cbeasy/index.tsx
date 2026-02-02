import {createProject, ProjectType, SubProjectType} from "../../../config/ProjectType";
import cover from './cover.png'
import coverColored from "./cover_colored.png";
import CardStack from "../../../components/CardStack";
import {colors} from "../../../styles/theme";
import Card from "../../../components/Card";
import video from "./img/video.mp4";
import React from "react";
import Button from "../../../components/Button";
import {RightArrowIcon} from "../../../assets/icons/RightArrowIcon";
import background from "./img/background.png";

const cbeasy = createProject({
    titleWithLineBreak: 'CBeaSy',
    subtitle: 'Easy, efficient and insightful GUI for the Cardiac BioSimulator',
    cover: cover,
    coverColored: coverColored,
    coverAlt: '',
    color: {primary: '#0062FF', primaryLight: '#39ADFF', secondary: '#333333', secondaryLight: '#333333', neon: '#66FFFF'},
    landscape: {x: 0.5, y: 0.5},
    portrait: {x: 0.25, y: 0.75},
    types: [ProjectType.PRODUCT],
    subtypes: [SubProjectType.DIGITAL_PRODUCTS],
    slides: [
        /*************************************************************************
         *
         *       Introduction
         *
         **************************************************************************/
        {stage: 'INTRODUCTION', render: (animateIn: boolean, animateOut: boolean) => ([
            {
                x: 200,
                y: 112,
                z: 1,
                children: (
                    <CardStack
                        w={800}
                        animateIn={animateIn}
                        animateOut={animateOut}
                    >
                        <div style={{
                            padding: '36px 36px 100px 36px',
                            width: '100%',
                            display: 'flex',
                            flexDirection: 'column',
                            gap: '36px',
                        }}>
                            <span style={{
                                color: colors.primary,
                                fontWeight: 500,
                                fontSize: '36px',
                            }}>
                                Easy, efficient and insightful GUI<br />for the Cardiac BioSimulator
                            </span>
                            <span style={{
                                color: colors.primary,
                                fontWeight: 300,
                                fontSize: '20px',
                            }}>
                                Research tool ／ Complex system ／ Workflow optimization
                            </span>
                            <span style={{
                                color: colors.secondary,
                                fontWeight: 300,
                                fontSize: '20px',
                            }}>
                                Cardiac BioSimulator (CBS) is a heart simulation platform, whose unintuitive GUI limited efficiency and accuracy.
                                <br /><br />
                                We redesigned the GUI to be more intuitive and error-resistant for users of different experience levels, turning it from a device control tool into a comprehensive research data management platform.
                            </span>
                        </div>
                    </CardStack>
                )
            },
            {
                x: 580,
                y: 512,
                z: 1,
                children: (
                    <Button
                        text={'View this project on TU/e\'s ID Projects platform'}
                        icon={<RightArrowIcon />}
                        animateIn={animateIn}
                        animateOut={animateOut}
                        onClick={() => {
                            window.open('https://projects.id.tue.nl/demoday/6vIaR1 ', '_blank')
                        }}
                    />
                )
            },
        ])},
        /*************************************************************************
         *
         *       Introduction (video)
         *
         **************************************************************************/
        {stage: 'INTRODUCTION', render: (animateIn: boolean, animateOut: boolean) => ([
            {
                x: 0,
                y: 40,
                z: 1,
                children: (
                    <Card
                        radius={24}
                        animateIn={animateIn}
                        animateOut={animateOut}
                        bg={'#ECEEF0'}
                    >
                        <video src={video} style={{width: 1200}} controls preload="metadata" />
                    </Card>
                )
            },
        ])},
        /*************************************************************************
         *
         *       Overview: Background
         *
         **************************************************************************/
        {stage: 'BACKGROUND', render: (animateIn: boolean, animateOut: boolean) => ([
            {
                x: 0,
                y: 60,
                z: 1,
                children: (
                    <div style={{
                        width: 1200,
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        gap: '12px',
                    }}>
                        <Card
                            animateIn={animateIn}
                            animateOut={animateOut}
                        >
                    <span style={{
                        color: colors.primary,
                        fontWeight: 600,
                        fontSize: '36px',
                    }}>
                        Background & pain point
                    </span>
                        </Card>
                        <Card
                            h={28}
                            padding={[0, 16, 2, 16]}
                            radius={14}
                            bg={colors.white}
                            animateIn={animateIn}
                            animateOut={animateOut}
                        >
                        <span style={{
                            color: colors.primary,
                            fontWeight: 300,
                            fontSize: '20px',
                        }}>
                            A simulation control tool with challenges in control accuracy & efficiency and data monitoring & saving
                        </span>
                        </Card>
                    </div>
                )
            },
            {
                x: 0,
                y: 180,
                z: 1,
                children: (
                    <Card
                        w={1200}
                        bg={colors.white}
                        radius={24}
                        animateIn={animateIn}
                        animateOut={animateOut}
                    >
                        <img src={background} width={'100%'} alt={'Todo'} />
                    </Card>
                )
            },
        ])},
    ]
})

export default cbeasy