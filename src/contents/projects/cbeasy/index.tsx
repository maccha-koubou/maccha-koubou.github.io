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
import painpoint1 from "./img/painpoint1.png";
import painpoint2 from "./img/painpoint2.png";
import painpoint3 from "./img/painpoint3.png";
import research1 from "./img/research1.png";
import research2 from "./img/research2.png";
import {RightArrowLargeIcon} from "../../../assets/icons/RightArrowLargeIcon";
import CardSlide from "../../../components/CardSlide";

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
                        Background
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

        /*************************************************************************
         *
         *       Overview: Background: Painpoints
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
                        gap: '36px',
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
                                Pain points
                            </span>
                        </Card>
                        <div style={{
                            width: 1200,
                            height: 160,
                            display: 'flex',
                            flexDirection: 'row',
                            alignItems: 'center',
                            justifyContent: 'center',
                            gap: '24px',
                        }}>
                            <Card
                                w={300}
                                h={'100%'}
                                radius={24}
                                bg={colors.white}
                                animateIn={animateIn}
                                animateOut={animateOut}
                            >
                                <img src={painpoint1} style={{width: '100%', height: '100%', objectFit: 'cover'}} alt={'Todo'} />
                            </Card>
                            <Card
                                w={300}
                                h={'100%'}
                                radius={24}
                                bg={colors.white}
                                borderWidth={2}
                                borderColor={colors.primary}
                                animateIn={animateIn}
                                animateOut={animateOut}
                            >
                                <span style={{
                                    color: colors.primary,
                                    fontWeight: 600,
                                    fontSize: '32px',
                                    textAlign: 'center'
                                }}>
                                    Complex<br />& chaotic layout
                                </span>
                            </Card>
                            <Card
                                w={40}
                                h={40}
                                bg={colors.white}
                                borderWidth={2}
                                borderColor={colors.primary}
                                radius={20}
                                animateIn={animateIn}
                                animateOut={animateOut}
                            >
                                <div style={{color: colors.primary, width: 24, height: 24}}>
                                    <RightArrowLargeIcon size={24} />
                                </div>
                            </Card>
                            <Card
                                w={520}
                                h={'100%'}
                                radius={24}
                                bg={colors.primary}
                                animateIn={animateIn}
                                animateOut={animateOut}
                            >
                                <div style={{
                                    width: 1200,
                                    display: 'flex',
                                    flexDirection: 'column',
                                    alignItems: 'center',
                                    color: colors.white,
                                }}>
                                    <span style={{
                                        fontWeight: 300,
                                        fontSize: '24px',
                                    }}>
                                        Before the research
                                    </span>
                                    <span style={{
                                        fontWeight: 600,
                                        fontSize: '36px',
                                    }}>
                                        Hard to get started
                                    </span>
                                </div>
                            </Card>
                        </div>
                        <div style={{
                            width: 1200,
                            height: 160,
                            display: 'flex',
                            flexDirection: 'row',
                            alignItems: 'center',
                            justifyContent: 'center',
                            gap: '24px',
                        }}>
                            <Card
                                w={300}
                                h={'100%'}
                                radius={24}
                                bg={colors.white}
                                animateIn={animateIn}
                                animateOut={animateOut}
                            >
                                <img src={painpoint2} style={{width: '100%', height: '100%', objectFit: 'cover'}} alt={'Todo'} />
                            </Card>
                            <Card
                                w={300}
                                h={'100%'}
                                radius={24}
                                bg={colors.white}
                                borderWidth={2}
                                borderColor={colors.primary}
                                animateIn={animateIn}
                                animateOut={animateOut}
                            >
                                <span style={{
                                    color: colors.primary,
                                    fontWeight: 600,
                                    fontSize: '32px',
                                    textAlign: 'center'
                                }}>
                                    Inaccurate<br />control
                                </span>
                            </Card>
                            <Card
                                w={40}
                                h={40}
                                bg={colors.white}
                                borderWidth={2}
                                borderColor={colors.primary}
                                radius={20}
                                animateIn={animateIn}
                                animateOut={animateOut}
                            >
                                <div style={{color: colors.primary, width: 24, height: 24}}>
                                    <RightArrowLargeIcon size={24} />
                                </div>
                            </Card>
                            <Card
                                w={520}
                                h={'100%'}
                                radius={24}
                                bg={colors.primary}
                                animateIn={animateIn}
                                animateOut={animateOut}
                            >
                                <div style={{
                                    width: 1200,
                                    display: 'flex',
                                    flexDirection: 'column',
                                    alignItems: 'center',
                                    color: colors.white,
                                }}>
                                    <span style={{
                                        fontWeight: 300,
                                        fontSize: '24px',
                                    }}>
                                        During the research
                                    </span>
                                    <span style={{
                                        fontWeight: 600,
                                        fontSize: '36px',
                                    }}>
                                        Hard to control & monitor
                                    </span>
                                </div>
                            </Card>
                        </div>
                        <div style={{
                            width: 1200,
                            height: 160,
                            display: 'flex',
                            flexDirection: 'row',
                            alignItems: 'center',
                            justifyContent: 'center',
                            gap: '24px',
                        }}>
                            <Card
                                w={300}
                                h={'100%'}
                                radius={24}
                                bg={colors.white}
                                animateIn={animateIn}
                                animateOut={animateOut}
                            >
                                <img src={painpoint3} style={{width: '100%', height: '100%', objectFit: 'cover'}} alt={'Todo'} />
                            </Card>
                            <Card
                                w={300}
                                h={'100%'}
                                radius={24}
                                bg={colors.white}
                                borderWidth={2}
                                borderColor={colors.primary}
                                animateIn={animateIn}
                                animateOut={animateOut}
                            >
                                <span style={{
                                    color: colors.primary,
                                    fontWeight: 600,
                                    fontSize: '32px',
                                    textAlign: 'center'
                                }}>
                                    Difficult saving<br />& no review
                                </span>
                            </Card>
                            <Card
                                w={40}
                                h={40}
                                bg={colors.white}
                                borderWidth={2}
                                borderColor={colors.primary}
                                radius={20}
                                animateIn={animateIn}
                                animateOut={animateOut}
                            >
                                <div style={{color: colors.primary, width: 24, height: 24}}>
                                    <RightArrowLargeIcon size={24} />
                                </div>
                            </Card>
                            <Card
                                w={520}
                                h={'100%'}
                                radius={24}
                                bg={colors.primary}
                                animateIn={animateIn}
                                animateOut={animateOut}
                            >
                                <div style={{
                                    width: 1200,
                                    display: 'flex',
                                    flexDirection: 'column',
                                    alignItems: 'center',
                                    color: colors.white,
                                }}>
                                    <span style={{
                                        fontWeight: 300,
                                        fontSize: '24px',
                                    }}>
                                        After the research
                                    </span>
                                    <span style={{
                                        fontWeight: 600,
                                        fontSize: '36px',
                                    }}>
                                        Hard to record & analyse
                                    </span>
                                </div>
                            </Card>
                        </div>
                    </div>
                )
            },
        ])},

        /*************************************************************************
         *
         *       Overview: Research
         *
         **************************************************************************/
        {stage: 'RESEARCH', render: (animateIn: boolean, animateOut: boolean) => ([
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
                                Research
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
                        We improved the usability of the GUI through insights from a user flow workshop, a usability test, and a heuristic evaluation
                    </span>
                        </Card>
                    </div>
                )
            },
            {
                x: 120,
                y: 180,
                z: 1,
                children: (
                    <CardSlide
                        interval={2000}
                        w={960}
                        h={540}
                        bg={colors.white}
                        borderWidth={0}
                        borderColor={'transparent'}
                        radius={24}
                        animateIn={animateIn}
                        animateOut={animateOut}
                        children={[(
                            <img src={research1} width={'100%'} alt={'Todo'} />
                        ),(
                            <img src={research2} width={'100%'} alt={'Todo'} />
                        )]}
                    />
                )
            },
        ])},
        /*************************************************************************
         *
         *       Overview: Outcome 1
         *
         **************************************************************************/
        {stage: 'OUTCOME', render: (animateIn: boolean, animateOut: boolean) => ([
            {
                x: 0,
                y: 160,
                z: 1,
                children: (
                    <div style={{
                        width: 1200,
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
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
                                Outcome 1
                            </span>
                        </Card>
                        <Card
                            animateIn={animateIn}
                            animateOut={animateOut}
                        >
                            <span style={{
                                color: colors.primary,
                                fontWeight: 600,
                                fontSize: '80px',
                            }}>
                                Intuitive Interface
                            </span>
                        </Card>
                        <div style={{
                            padding: '36px 0px 0px 0px',
                            display: 'flex',
                            flexDirection: 'row',
                            justifyContent: 'center',
                            alignItems: 'flex-end',
                            gap: '12px',
                            color: colors.primary,
                            fontWeight: 600,
                            fontSize: '32px',
                            textAlign: 'center'
                        }}>
                            <Card
                                h={100}
                                padding={36}
                                radius={60}
                                bg={colors.white}
                                borderWidth={2}
                                borderColor={colors.primary}
                                animateIn={animateIn}
                                animateOut={animateOut}
                            >
                                <span>
                                    Before<br />the research
                                </span>
                            </Card>
                            <Card
                                h={100}
                                animateIn={animateIn}
                                animateOut={animateOut}
                            >
                                <div style={{color: colors.primary, width: 40, height: 40}}>
                                    <RightArrowLargeIcon size={24} />
                                </div>
                            </Card>
                            <div style={{
                                display: 'flex',
                                flexDirection: 'column',
                                alignItems: 'center',
                                gap: '60px',
                                color: colors.white
                            }}>
                                <Card
                                    bg={colors.primary}
                                    radius={20}
                                    animateIn={animateIn}
                                    animateOut={animateOut}
                                >
                                    <div style={{width: 40, height: 40, rotate: '90deg'}}>
                                        <RightArrowLargeIcon size={24} />
                                    </div>
                                </Card>
                                <Card
                                    h={100}
                                    padding={36}
                                    radius={60}
                                    bg={colors.primary}
                                    animateIn={animateIn}
                                    animateOut={animateOut}
                                >
                                    <span style={{}}>
                                        During<br />the research
                                    </span>
                                </Card>
                            </div>
                            <Card
                                h={100}
                                animateIn={animateIn}
                                animateOut={animateOut}
                            >
                                <div style={{color: colors.primary, width: 40, height: 40}}>
                                    <RightArrowLargeIcon size={24} />
                                </div>
                            </Card>
                            <Card
                                h={100}
                                padding={36}
                                radius={60}
                                bg={colors.white}
                                borderWidth={2}
                                borderColor={colors.primary}
                                animateIn={animateIn}
                                animateOut={animateOut}
                            >
                                <span>
                                    After<br />the research
                                </span>
                            </Card>
                        </div>
                    </div>
                )
            },
        ])},
    ]
})

export default cbeasy