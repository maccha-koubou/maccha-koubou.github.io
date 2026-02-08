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
import outcome1_1 from "./img/outcome1_1.png";
import outcome1_2 from "./img/outcome1_2.png";
import outcome1_3 from "./img/outcome1_3.png";
import outcome1_4 from "./img/outcome1_4.png";
import outcome1_5 from "./img/outcome1_5.png";
import outcome2_1 from "./img/outcome2_1.png";
import outcome2_2 from "./img/outcome2_2.png";
import outcome2_3 from "./img/outcome2_3.png";
import outcome2_4 from "./img/outcome2_4.png";
import outcome2_5 from "./img/outcome2_5.png";
import outcome2_6 from "./img/outcome2_6.png";
import outcome3_1 from "./img/outcome3_1.png";
import outcome3_2 from "./img/outcome3_2.png";
import outcome3_3 from "./img/outcome3_3.png";
import outcome3_4 from "./img/outcome3_4.png";
import outcome3_5 from "./img/outcome3_5.png";
import outcome3_6 from "./img/outcome3_6.png";
import outcome3_7 from "./img/outcome3_7.png";
import outcome3_8 from "./img/outcome3_8.png";
import uiVideo1 from "./img/uivideo1.mp4";
import {RightArrowLargeIcon} from "../../../assets/icons/RightArrowLargeIcon";
import CardSlide from "../../../components/CardSlide";
import InfoLabel from "../../../components/InfoLabel";

const cbeasy = createProject({
    titleWithLineBreak: 'CBeaSy',
    subtitle: 'Easy, efficient and insightful GUI for the Cardiac BioSimulator',
    cover: cover,
    coverColored: coverColored,
    coverAlt: 'Photo of a heart simulation device and a PC connected to it. The PC displays a flat UI with a device controller and pressure monitor.',
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
                        <img src={background} width={'100%'} alt={'Diagram showing the PC software (our focus) controls the cadaveric heart by controlling pumps and motors, and gets data from sensors and image devices.'} />
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
                                <img src={painpoint1} style={{width: '100%', height: '100%', objectFit: 'cover'}} alt={'Old setting page with complex and chaotic parameters.'} />
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
                                <img src={painpoint2} style={{width: '100%', height: '100%', objectFit: 'cover'}} alt={'Old pump controller without precise value input and current value display.'} />
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
                                <img src={painpoint3} style={{width: '100%', height: '100%', objectFit: 'cover'}} alt={'Old saving feature UI which is confusing and without saved data review.'} />
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
                            <img src={research1} width={'100%'} alt={'Photo showing users sticking sticky notes on a user flow diagram.'} />
                        ),(
                            <img src={research2} width={'100%'} alt={'Photo showing a user thinking aloud when testing a prototype.'} />
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
        /*************************************************************************
         *
         *       Overview: Outcome 1 - Details
         *
         **************************************************************************/
        {stage: 'OUTCOME', render: (animateIn: boolean, animateOut: boolean) => ([
            {
                x: 0,
                y: 40,
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
                    Setting page
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
                        In-context, grouped, and progressive settings for easy understanding. Constantly visible graph for direct setting feedbacks.
                    </span>
                        </Card>
                    </div>
                )
            },
            {
                x: -40,
                y: 160,
                z: 1,
                children: (
                    <Card
                        w={280}
                        bg={colors.white}
                        radius={24}
                        animateIn={animateIn}
                        animateOut={animateOut}
                    >
                        <img src={outcome1_1} width={'100%'} alt={'Old setting page with complex and chaotic parameters.'} />
                    </Card>
                )
            },
            {
                x: 220,
                y: 220,
                z: 1,
                children: (
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
                )
            },
            {
                x: 280,
                y: 160,
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
                            <img src={outcome1_2} width={'100%'} alt={'New setting page with elements grouped based on the graph and displayed progressively.'} />
                        ),(
                            <img src={outcome1_3} width={'100%'} alt={'New setting page with elements grouped based on the graph and displayed progressively.'} />
                        ),(
                            <img src={outcome1_4} width={'100%'} alt={'New setting page with elements grouped based on the graph and displayed progressively.'} />
                        )]}
                    />
                )
            },
        ])},
        /*************************************************************************
         *
         *       Overview: Outcome 1 - Details
         *
         **************************************************************************/
        {stage: 'OUTCOME', render: (animateIn: boolean, animateOut: boolean) => ([
            {
                x: 0,
                y: 40,
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
                Main page
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
                    Precise control with error prevention.
                </span>
                        </Card>
                    </div>
                )
            },
            {
                x: 760,
                y: 260,
                z: 1,
                children: (
                    <Card
                        radius={24}
                        borderColor={colors.primary}
                        borderWidth={2}
                        animateIn={animateIn}
                        animateOut={animateOut}
                    >
                        <video src={uiVideo1} style={{width: 480}} autoPlay loop muted playsInline />
                    </Card>
                )
            },
            {
                x: -40,
                y: 160,
                z: 0,
                children: (
                    <Card
                        w={960}
                        h={540}
                        bg={colors.white}
                        borderWidth={0}
                        borderColor={'transparent'}
                        radius={24}
                        animateIn={animateIn}
                        animateOut={animateOut}
                    >
                        <img src={outcome1_5} width={'100%'} alt={'New main page showing pump and motor controllers with value inputter, increment/decrement steppers, and double-check and undo buttons.'} />
                    </Card>
                )
            },
        ])},
        /*************************************************************************
         *
         *       Overview: Outcome 2
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
                            Outcome 2
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
                            Data analysis
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
                                    During<br />the research
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
                                    After<br />the research
                                </span>
                                </Card>
                            </div>
                        </div>
                    </div>
                )
            },
        ])},
        /*************************************************************************
         *
         *       Overview: Outcome 2 - Details
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
                                Time line
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
                                Shows the saved data with context and enables data reviewing during the research.
                            </span>
                        </Card>
                    </div>
                )
            },
            {
                x: 0,
                y: 260,
                z: 1,
                children: (
                    <CardSlide
                        interval={2000}
                        w={1200}
                        bg={'transparent'}
                        borderWidth={0}
                        borderColor={'transparent'}
                        animateIn={animateIn}
                        animateOut={animateOut}
                        delayOut={true}
                        visiblePlaceholder={0}
                        children={[(
                            <img src={outcome2_1} width={'100%'} alt={'Timeline in the main page showing saved data with values and images at that time point.'} />
                        ),(
                            <img src={outcome2_2} width={'100%'} alt={'Timeline in the main page showing saved data with values and images at that time point.'} />
                        )]}
                    />
                )
            },
        ])},
        /*************************************************************************
         *
         *       Overview: Outcome 2 - Details
         *
         **************************************************************************/
        {stage: 'OUTCOME', render: (animateIn: boolean, animateOut: boolean) => ([
            {
                x: 0,
                y: 40,
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
                                Data analysis module
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
                                New feature visualizating the recorded data and calculating the trends for data reviewing, analysis, and report writing
                            </span>
                        </Card>
                    </div>
                )
            },
            {
                x: 120,
                y: 160,
                z: 1,
                children: (
                    <CardSlide
                        interval={2500}
                        w={960}
                        bg={colors.white}
                        borderWidth={0}
                        borderColor={'transparent'}
                        radius={24}
                        animateIn={animateIn}
                        animateOut={animateOut}
                        children={[(
                            <img src={outcome2_3} width={'100%'} alt={'Dashboard showing history research.'} />
                        ),(
                            <img src={outcome2_4} width={'100%'} alt={'Data analysis page visualizing and calculating data trends during a selected time period'} />
                        ),(
                            <img src={outcome2_5} width={'100%'} alt={'Data analysis page comparing data from three time points visually.'} />
                        ),(
                            <img src={outcome2_6} width={'100%'} alt={'Data analysis page comparing images from three time points.'} />
                        )]}
                    />
                )
            },
        ])},
        /*************************************************************************
         *
         *       Overview: Outcome 3
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
                                Outcome 3
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
                                Information support
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
                                        Before<br />the research
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
                                    During<br />the research
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
        /*************************************************************************
         *
         *       Overview: Outcome 3 - Details
         *
         **************************************************************************/
        {stage: 'OUTCOME', render: (animateIn: boolean, animateOut: boolean) => ([
            {
                x: 20,
                y: 80,
                z: 1,
                children: (
                    <div style={{
                        display: 'flex',
                        flexDirection: 'row',
                        alignItems: 'flex-end',
                    }}>
                        <CardSlide
                            interval={2000}
                            w={520}
                            bg={'transparent'}
                            borderWidth={0}
                            borderColor={'transparent'}
                            animateIn={animateIn}
                            animateOut={animateOut}
                            delayOut={true}
                            visiblePlaceholder={0}
                            children={[(
                                <img src={outcome3_1} width={'100%'} alt={'Progress stepper of the tutorial'} />
                            ),(
                                <img src={outcome3_2} width={'100%'} alt={'Progress stepper of the tutorial'} />
                            )]}
                        />
                        <div style={{width: 28, height: 56, display: 'flex', justifyContent: 'flex-end'}}>
                            <InfoLabel animateIn={animateIn} animateOut={animateOut} text={'Step-by-step interactive tutorials'} />
                        </div>
                    </div>
                )
            },
            {
                x: 632,
                y: 80,
                z: 1,
                children: (
                    <div style={{
                        display: 'flex',
                        flexDirection: 'row',
                        alignItems: 'flex-end',
                    }}>
                        <CardSlide
                            interval={2000}
                            w={520}
                            bg={'transparent'}
                            borderWidth={0}
                            borderColor={'transparent'}
                            animateIn={animateIn}
                            animateOut={animateOut}
                            delayOut={true}
                            visiblePlaceholder={1}
                            children={[(
                                <img src={outcome3_3} width={'100%'} alt={'Tutorial video list page'} />
                            ),(
                                <img src={outcome3_4} width={'100%'} alt={'Tutorial video list page'} />
                            )]}
                        />
                        <div style={{width: 28, height: 56, display: 'flex', justifyContent: 'flex-end'}}>
                            <InfoLabel animateIn={animateIn} animateOut={animateOut} text={'Tutorial videos that are accessible during research'} />
                        </div>
                    </div>
                )
            },
            {
                x: 20,
                y: 400,
                z: 1,
                children: (
                    <div style={{
                        display: 'flex',
                        flexDirection: 'row',
                        alignItems: 'flex-end',
                    }}>
                        <CardSlide
                            interval={2000}
                            w={520}
                            bg={'transparent'}
                            borderWidth={0}
                            borderColor={'transparent'}
                            animateIn={animateIn}
                            animateOut={animateOut}
                            delayOut={true}
                            visiblePlaceholder={0}
                            children={[(
                                <img src={outcome3_5} width={'100%'} alt={'Warning message showing "Turn off the pumps and motors before zeroing".'} />
                            ),(
                                <img src={outcome3_6} width={'100%'} alt={'Warning message showing "Turn off the pumps and motors before zeroing".'} />
                            )]}
                        />
                        <div style={{width: 28, height: 56, display: 'flex', justifyContent: 'flex-end'}}>
                            <InfoLabel animateIn={animateIn} animateOut={animateOut} text={'Warning messages'} />
                        </div>
                    </div>
                )
            },
            {
                x: 632,
                y: 400,
                z: 1,
                children: (
                    <div style={{
                        display: 'flex',
                        flexDirection: 'row',
                        alignItems: 'flex-end',
                    }}>
                        <CardSlide
                            interval={2000}
                            w={520}
                            bg={'transparent'}
                            borderWidth={0}
                            borderColor={'transparent'}
                            animateIn={animateIn}
                            animateOut={animateOut}
                            delayOut={true}
                            visiblePlaceholder={0}
                            children={[(
                                <img src={outcome3_7} width={'100%'} alt={'Tooltip showing "add new preset" when a button is hovered.'} />
                            ),(
                                <img src={outcome3_8} width={'100%'} alt={'Tooltip showing "add new preset" when a button is hovered.'} />
                            )]}
                        />
                        <div style={{width: 28, height: 56, display: 'flex', justifyContent: 'flex-end'}}>
                            <InfoLabel animateIn={animateIn} animateOut={animateOut} text={'Hovering tooltips'} />
                        </div>
                    </div>
                )
            },
        ])},
        /*************************************************************************
         *
         *       Acknowledgement
         *
         **************************************************************************/
        {stage: 'OUTCOME', render: (animateIn: boolean, animateOut: boolean) => ([
            {
                x: 100,
                y: 200,
                z: 0,
                children: (
                    <Card
                        w={1000}
                        bg={colors.white}
                        radius={24}
                        animateIn={animateIn}
                        animateOut={animateOut}
                    >
                        <div style={{
                            padding: '36px 36px 48px 36px',
                            width: '100%',
                            display: 'flex',
                            flexDirection: 'column',
                            gap: '24px',
                        }}>
                            <span style={{
                                color: colors.primary,
                                fontWeight: 500,
                                fontSize: '36px',
                            }}>
                                Credits
                            </span>
                            <span style={{
                                color: colors.secondary,
                                fontWeight: 300,
                                fontSize: '20px',
                            }}>
                                Team project ／ Sep. - Dec. 2025
                                <br />
                                My role: Led UX design (overall structure & key strategies), built before-during-after framework
                                <br /><br />
                                Teammates: Yinglan Deng, Nuoxi Li, Lieke Rooijackers (TU/e)
                                <br />
                                Coach: Asst. Prof. Juliette van Haren
                                <br />
                                Client: LifeTec Group
                            </span>
                        </div>
                    </Card>
                )
            },
        ])},
    ]
})

export default cbeasy