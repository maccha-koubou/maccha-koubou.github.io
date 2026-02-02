import {createProject, ProjectType, SubProjectType} from "../../../config/ProjectType";
import cover from "./cover.png";
import coverColored from "./cover_colored.png";
import CardStack from "../../../components/CardStack";
import React from "react";
import {colors} from "../../../styles/theme";
import Card from "../../../components/Card";
import video from "./img/introduction.mp4";
import background from "./img/background.png";
import research1 from "./img/research1.png";
import research2 from "./img/research2.png";
import ideation1 from "./img/ideation1.png";
import ideation2 from "./img/ideation2.png";
import ideation3 from "./img/ideation3.png";
import InfoLabel from "../../../components/InfoLabel";
import {RightArrowLargeIcon} from "../../../assets/icons/RightArrowLargeIcon";
import ui1 from "./img/ui1.png";
import ui2 from "./img/ui2.png";
import ui3 from "./img/ui3.png";
import ui4 from "./img/ui4.png";
import ui5 from "./img/ui5.png";
import ui6 from "./img/ui6.png";
import ui7 from "./img/ui7.png";
import ui8 from "./img/ui8.png";
import ui9 from "./img/ui9.png";
import ui10 from "./img/ui10.png";
import dev1 from "./img/dev1.png";
import dev2 from "./img/dev2.png";
import dev3 from "./img/dev3.png";
import Button from "../../../components/Button";
import {RightArrowIcon} from "../../../assets/icons/RightArrowIcon";

const transitionGuidepost = createProject({
    titleWithLineBreak: 'Transition Guidepost',
    subtitle: 'Transition Guidepost',
    cover: cover,
    coverColored: coverColored,
    coverAlt: 'GAHT tracking and support platform leveraging community mutual aid',
    color: {primary: '#EA005F', primaryLight: '#F7468A', secondary: '#006AEA', secondaryLight: '#0074E8', neon: '#66FFFF'},
    landscape: {x: 0.5, y: 0.5},
    portrait: {x: 0.5, y: 0.5},
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
                y: 160,
                z: 1,
                children: (
                    <CardStack
                        w={800}
                        animateIn={animateIn}
                        animateOut={animateOut}
                    >
                        <div style={{
                            padding: '36px 36px 48px 36px',
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
                            GAHT tracking and support platform<br />leveraging community mutual aid
                        </span>
                            <span style={{
                                color: colors.primary,
                                fontWeight: 300,
                                fontSize: '20px',
                            }}>
                            Service ／ Mobile app ／ App development (Kotlin)
                        </span>
                            <span style={{
                                color: colors.secondary,
                                fontWeight: 300,
                                fontSize: '20px',
                            }}>
                                As GAHT (gender-affirming hormone therapy) knowledge is often inaccessible, users rely on scattered community experiences.
                                <br /><br />
                                This app helps users track and visualize their GAHT, turning personal tracking into a shared community medical guide for mutual support.
                            </span>
                        </div>
                    </CardStack>
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
                        bg={colors.white}
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
        {stage: 'BACKGROUND & RESEARCH', render: (animateIn: boolean, animateOut: boolean) => ([
            {
                x: 0,
                y: 200,
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
                                Vital but challenging community information support under systemic inaccessibility
                            </span>
                        </Card>
                    </div>
                )
            },
            {
                x: 0,
                y: 360,
                z: 1,
                children: (
                    <Card
                        w={1200}
                        animateIn={animateIn}
                        animateOut={animateOut}
                    >
                            <img src={background} width={'100%'} alt={'Diagram showing GAHT\'s systemic inaccessibility pushes trans people seek self-managed GAHT information from online communities, which may be scattered, incomparable, and stigmatized'} />
                    </Card>
                )
            },
        ])},
        /*************************************************************************
         *
         *       Overview: Research Findings
         *
         **************************************************************************/
        {stage: 'BACKGROUND & RESEARCH', render: (animateIn: boolean, animateOut: boolean) => ([
            {
                x: 0,
                y: 80,
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
                            Research findings
                        </span>
                        </Card>
                        <div style={{width: 1200, display: 'flex', justifyContent: 'center'}}>
                            <InfoLabel text={'Semi-structural interview with 8 people with diverse genders, communities, GAHT & surgery stages, parents\' attitudes, and ages'} animateIn={animateIn} animateOut={animateOut} />
                        </div>
                    </div>
                )
            },
            {
                x: 80,
                y: 200,
                z: 0,
                children: (
                    <div style={{
                        display: 'flex',
                        flexDirection: 'column',
                        justifyContent: 'flex-start',
                        alignItems: 'center',
                        gap: '4px',
                    }}>
                        <Card
                            w={480}
                            bg={colors.white}
                            borderWidth={2}
                            borderColor={colors.primaryLight}
                            radius={24}
                            animateIn={animateIn}
                            animateOut={animateOut}
                        >
                            <div style={{
                                padding: '36px 36px 36px 36px',
                                width: '100%',
                                height: '100%',
                                display: 'flex',
                                flexDirection: 'column',
                                justifyContent: 'flex-start',
                                alignItems: 'center',
                                gap: '24px',
                            }}>
                                <img src={research1} width={'100%'} alt={'Diagram showing lack of reliable knowledge can deter trans people from starting GAHT and lead to impulsive and risky GAHT. Community experience can reduce this risk.'} />
                                <span style={{
                                    color: colors.primary,
                                    fontWeight: 500,
                                    fontSize: '24px',
                                    textAlign: 'center'
                                }}>
                                    Impulsive & risky GAHT from fear
                                </span>
                            </div>
                        </Card>
                        <Card
                            w={40}
                            h={40}
                            animateIn={animateIn}
                            animateOut={animateOut}
                        >
                            <div style={{color: colors.primary, width: 24, height: 24, rotate: '90deg'}}>
                                <RightArrowLargeIcon size={24} />
                            </div>
                        </Card>
                        <Card
                            w={480}
                            bg={colors.primary}
                            radius={24}
                            padding={8}
                            animateIn={animateIn}
                            animateOut={animateOut}
                        >
                            <span style={{
                                color: colors.white,
                                fontWeight: 500,
                                fontSize: '24px',
                                textAlign: 'center'
                            }}>
                                Experience sharing<br />as important knowledge
                            </span>
                        </Card>
                    </div>
                )
            },
            {
                x: 640,
                y: 200,
                z: 0,
                children: (
                    <div style={{
                        display: 'flex',
                        flexDirection: 'column',
                        justifyContent: 'flex-start',
                        alignItems: 'center',
                        gap: '4px',
                    }}>
                        <Card
                            w={480}
                            bg={colors.white}
                            borderWidth={2}
                            borderColor={colors.primaryLight}
                            radius={24}
                            animateIn={animateIn}
                            animateOut={animateOut}
                        >
                            <div style={{
                                padding: '36px 36px 36px 36px',
                                width: '100%',
                                height: '100%',
                                display: 'flex',
                                flexDirection: 'column',
                                justifyContent: 'flex-start',
                                alignItems: 'center',
                                gap: '24px',
                            }}>
                                <img src={research2} width={'100%'} alt={'Diagram showing trans people pay more attention to GAHT because of unstable dosage and anxiety, but become forgetful as time goes by. '} />
                                <span style={{
                                    color: colors.primary,
                                    fontWeight: 500,
                                    fontSize: '24px',
                                    textAlign: 'center'
                                }}>
                                    From adjusting to forgetting
                                </span>
                            </div>
                        </Card>
                        <Card
                            w={40}
                            h={40}
                            animateIn={animateIn}
                            animateOut={animateOut}
                        >
                            <div style={{color: colors.primary, width: 24, height: 24, rotate: '90deg'}}>
                                <RightArrowLargeIcon size={24} />
                            </div>
                        </Card>
                        <Card
                            w={480}
                            bg={colors.primary}
                            radius={24}
                            padding={8}
                            animateIn={animateIn}
                            animateOut={animateOut}
                        >
                            <span style={{
                                color: colors.white,
                                fontWeight: 500,
                                fontSize: '24px',
                                textAlign: 'center'
                            }}>
                                Importance of<br />personal experience tracking
                            </span>
                        </Card>
                    </div>
                )
            },
        ])},
        /*************************************************************************
         *
         *       Overview: Ideation
         *
         **************************************************************************/
        {stage: 'IDEATION', render: (animateIn: boolean, animateOut: boolean) => ([
            {
                x: 0,
                y: 160,
                z: 1,
                children: (
                    <CardStack
                        w={520}
                        padding={[24, 36, 36, 36]}
                        bg={colors.white}
                        borderWidth={2}
                        borderColor={colors.primaryLight}
                        radius={24}
                        animateIn={animateIn}
                        animateOut={animateOut}
                    >
                        <div style={{
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'left',
                            gap: '24px',
                        }}>
                            <span style={{
                                color: colors.primary,
                                fontWeight: 600,
                                fontSize: '36px',
                            }}>
                                Ideation
                            </span>
                            <span style={{
                                color: colors.secondary,
                                fontWeight: 300,
                                fontSize: '20px',
                            }}>
                                Leverage personal tracking and community mutual support.
                                <br />
                                <br />
                                Turn individual experience into community medical guidance to support and empower more people.
                            </span>
                        </div>
                    </CardStack>
                )
            },
            {
                x: 400,
                y: 40,
                z: 1,
                children: (
                    <Card
                        h={700}
                        animateIn={animateIn}
                        animateOut={animateOut}
                    >
                        <img src={ideation1} height={'100%'} alt={'Diagram showing a loop: data tracking enables information consulting and gathering, which in turn supports further tracking. Social media provides initial awareness to start the loop.'} />
                    </Card>
                )
            },
        ])},
        /*************************************************************************
         *
         *       Overview: Ideation (Ecosystem)
         *
         **************************************************************************/
        {stage: 'IDEATION', render: (animateIn: boolean, animateOut: boolean) => ([
            {
                x: 0,
                y: 80,
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
                        Ecosystem map
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
                            textAlign: 'center'
                        }}>
                            An app integrating personal tracking and community sharing as the key touchpoint
                        </span>
                        </Card>
                    </div>
                )
            },
            {
                x: 0,
                y: 200,
                z: 1,
                children: (
                    <Card
                        w={1200}
                        padding={36}
                        bg={colors.white}
                        radius={24}
                        animateIn={animateIn}
                        animateOut={animateOut}
                    >
                        <img src={ideation2} width={'100%'} alt={'Ecosystem map showing a GAHT support app and social media, as touchpoints, use the data shared by users (front end) and external supporter (back end) to help more users.'} />
                    </Card>
                )
            },
        ])},
        /*************************************************************************
         *
         *       Overview: Ideation (Architecture)
         *
         **************************************************************************/
        {stage: 'IDEATION', render: (animateIn: boolean, animateOut: boolean) => ([
            {
                x: 0,
                y: 40,
                z: 1,
                children: (
                    <Card
                        animateIn={animateIn}
                        animateOut={animateOut}
                    >
                        <div style={{
                            width: 1200,
                            display: 'flex',
                            flexDirection: 'row',
                            justifyContent: 'center',
                            gap: '12px',
                        }}>
                            <span style={{
                                color: colors.secondary,
                                fontWeight: 600,
                                fontSize: '36px',
                            }}>
                                App architecture
                            </span>
                            <span style={{
                                color: colors.primary,
                                fontWeight: 200,
                                fontSize: '36px',
                            }}>
                                &
                            </span>
                            <span style={{
                                color: colors.primary,
                                fontWeight: 600,
                                fontSize: '36px',
                            }}>
                                Key innovation
                            </span>
                        </div>
                    </Card>
                )
            },
            {
                x: 0,
                y: 120,
                z: 1,
                children: (
                    <Card
                        w={1200}
                        padding={36}
                        bg={colors.white}
                        radius={24}
                        animateIn={animateIn}
                        animateOut={animateOut}
                    >
                        <img src={ideation3} width={'100%'} alt={'Diagram showing the app\'s guideline, track, forum, and library features help users learn, track, share, and seek information. Features including comparative cards and community data overview support this process.'} />
                    </Card>
                )
            },
        ])},
        /*************************************************************************
         *
         *       Overview: Outcome - App 1-2
         *
         **************************************************************************/
        {stage: 'OUTCOME', render: (animateIn: boolean, animateOut: boolean) => ([
            {
                x: 0,
                y: 300,
                z: 1,
                children: (
                    <Card
                        animateIn={animateIn}
                        animateOut={animateOut}
                    >
                        <div style={{
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'flex-start',
                            gap: '16px',
                        }}>
                            <span style={{
                                color: colors.primary,
                                fontWeight: 600,
                                fontSize: '52px',
                            }}>
                                Track
                            </span>
                            <span style={{
                                color: colors.primary,
                                fontWeight: 600,
                                fontSize: '24px',
                            }}>
                                Track & compare trends<br />across multiple data
                            </span>
                        </div>
                    </Card>
                )
            },
            {
                x: 360,
                y: 20,
                z: 0,
                children: (
                    <div style={{
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        gap: '16px',
                    }}>
                        <Card
                            animateIn={animateIn}
                            animateOut={animateOut}
                        >
                            <img
                                src={ui1}
                                style={{height: 720}}
                                alt={'App home screen showing a hormone chart card and a medication logging card.'}
                            />
                        </Card>
                        <div style={{position: 'absolute', bottom: 0, left: 360, width: 28, display: 'flex', justifyContent: 'flex-end'}}>
                            <InfoLabel animateIn={animateIn} animateOut={animateOut} text={'Log medications & see hormone trends'} />
                        </div>
                    </div>
                )
            },
            {
                x: 840,
                y: 20,
                z: 1,
                children: (
                    <div style={{
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        gap: '16px',
                    }}>
                        <Card
                            animateIn={animateIn}
                            animateOut={animateOut}
                        >
                            <img
                                src={ui2}
                                style={{height: 720}}
                                alt={'App home screen showing a hormone chart and a medication chart with a timeline marking two charts\' data on a specific date.'}
                            />
                        </Card>
                        <div style={{position: 'absolute', bottom: 0, left: 360, width: 28, display: 'flex', justifyContent: 'flex-end'}}>
                            <InfoLabel animateIn={animateIn} animateOut={animateOut} text={'Compare medication and hormone trends'} />
                        </div>
                    </div>
                )
            },
        ])},
        /*************************************************************************
         *
         *       Overview: Outcome - App 3-5
         *
         **************************************************************************/
        {stage: 'OUTCOME', render: (animateIn: boolean, animateOut: boolean) => ([
                {
                    x: 0,
                    y: 80,
                    z: 0,
                    children: (
                        <div style={{
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'center',
                            gap: '16px',
                        }}>
                            <Card
                                animateIn={animateIn}
                                animateOut={animateOut}
                            >
                                <img
                                    src={ui3}
                                    style={{height: 600}}
                                    alt={'App home screen showing a axes setting card and a body change chart card.'}
                                />
                            </Card>
                            <div style={{position: 'absolute', bottom: 0, left: 296, width: 28, display: 'flex', justifyContent: 'flex-end'}}>
                                <InfoLabel animateIn={animateIn} animateOut={animateOut} text={'Adjust axes'} />
                            </div>
                        </div>
                    )
                },
                {
                    x: 452,
                    y: 80,
                    z: 1,
                    children: (
                        <div style={{
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'center',
                            gap: '16px',
                        }}>
                            <Card
                                animateIn={animateIn}
                                animateOut={animateOut}
                            >
                                <img
                                    src={ui4}
                                    style={{height: 600}}
                                    alt={'App medication detail editing screen with basic info, reminder setting, and dose adjustment calculator.'}
                                />
                            </Card>
                            <div style={{position: 'absolute', bottom: 0, left: 296, width: 28, display: 'flex', justifyContent: 'flex-end'}}>
                                <InfoLabel animateIn={animateIn} animateOut={animateOut} text={'Edit medication'} />
                            </div>
                        </div>
                    )
                },
                {
                    x: 904,
                    y: 80,
                    z: 0,
                    children: (
                        <div style={{
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'center',
                            gap: '16px',
                        }}>
                            <Card
                                animateIn={animateIn}
                                animateOut={animateOut}
                            >
                                <img
                                    src={ui5}
                                    style={{height: 600}}
                                    alt={'App scanned data checking screen allowing users to adjust wrong data, remove needless data, or input new data.'}
                                />
                            </Card>
                            <div style={{position: 'absolute', bottom: 0, left: 296, width: 28, display: 'flex', justifyContent: 'flex-end'}}>
                                <InfoLabel animateIn={animateIn} animateOut={animateOut} text={'Check OCR scan results'} />
                            </div>
                        </div>
                    )
                },
            ])},
        /*************************************************************************
         *
         *       Overview: Outcome - App 6-7
         *
         **************************************************************************/
        {stage: 'OUTCOME', render: (animateIn: boolean, animateOut: boolean) => ([
                {
                    x: 0,
                    y: 300,
                    z: 1,
                    children: (
                        <Card
                            animateIn={animateIn}
                            animateOut={animateOut}
                        >
                            <div style={{
                                display: 'flex',
                                flexDirection: 'column',
                                alignItems: 'flex-start',
                                gap: '16px',
                            }}>
                            <span style={{
                                color: colors.primary,
                                fontWeight: 600,
                                fontSize: '52px',
                            }}>
                                Library
                            </span>
                                <span style={{
                                    color: colors.primary,
                                    fontWeight: 600,
                                    fontSize: '24px',
                                }}>
                                Gain insight from<br />community data sharing
                            </span>
                            </div>
                        </Card>
                    )
                },
            {
                x: 360,
                y: 20,
                z: 0,
                children: (
                    <div style={{
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        gap: '16px',
                    }}>
                        <Card
                            animateIn={animateIn}
                            animateOut={animateOut}
                        >
                            <img
                                src={ui6}
                                style={{height: 720}}
                                alt={'App library screen showing a community data card that displays most common dosages and average hormone levels in the community.'}
                            />
                        </Card>
                        <div style={{position: 'absolute', bottom: 0, left: 360, width: 28, display: 'flex', justifyContent: 'flex-end'}}>
                            <InfoLabel animateIn={animateIn} animateOut={animateOut} text={'Community data reference'} />
                        </div>
                    </div>
                )
            },
            {
                x: 840,
                y: 20,
                z: 1,
                children: (
                    <div style={{
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        gap: '16px',
                    }}>
                        <Card
                            animateIn={animateIn}
                            animateOut={animateOut}
                        >
                            <img
                                src={ui7}
                                style={{height: 720}}
                                alt={'App dosage calculator feature calculating dosage adjustment chart by input adjustment plan, with a slide-down data card showing the hormone chart for comparison.'}
                            />
                        </Card>
                        <div style={{position: 'absolute', bottom: 0, left: 360, width: 28, display: 'flex', justifyContent: 'flex-end'}}>
                            <InfoLabel animateIn={animateIn} animateOut={animateOut} text={'Dosage adjustment calculator'} />
                        </div>
                    </div>
                )
            },
        ])},
        /*************************************************************************
         *
         *       Overview: Outcome - App 8-10
         *
         **************************************************************************/
        {stage: 'OUTCOME', render: (animateIn: boolean, animateOut: boolean) => ([
            {
                x: 0,
                y: 56,
                z: 1,
                children: (
                    <Card
                        animateIn={animateIn}
                        animateOut={animateOut}
                    >
                        <span style={{
                            color: colors.primary,
                            fontWeight: 600,
                            fontSize: '24px',
                        }}>
                            Forum: discuss & compare with others' data
                        </span>
                    </Card>
                )
            },
            {
                x: 0,
                y: 100,
                z: 0,
                children: (
                    <div style={{
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        gap: '16px',
                    }}>
                        <Card
                            animateIn={animateIn}
                            animateOut={animateOut}
                        >
                            <img
                                src={ui8}
                                style={{height: 600}}
                                alt={'App forum screen showing a post discussing the medication with a folded hormone chart shared by the poster.'}
                            />
                        </Card>
                        <div style={{position: 'absolute', bottom: 0, left: 296, width: 28, display: 'flex', justifyContent: 'flex-end'}}>
                            <InfoLabel animateIn={animateIn} animateOut={animateOut} text={'Share data in Forum'} />
                        </div>
                    </div>
                )
            },
            {
                x: 452,
                y: 100,
                z: 1,
                children: (
                    <div style={{
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        gap: '16px',
                    }}>
                        <Card
                            animateIn={animateIn}
                            animateOut={animateOut}
                        >
                            <img
                                src={ui9}
                                style={{height: 600}}
                                alt={'App forum screen showing the hormone chart shared by the poster was unfolded, with a slide-down data card showing your own hormone chart for comparison.'}
                            />
                        </Card>
                        <div style={{position: 'absolute', bottom: 0, left: 296, width: 28, display: 'flex', justifyContent: 'flex-end'}}>
                            <InfoLabel animateIn={animateIn} animateOut={animateOut} text={'Compare with data shared by others'} />
                        </div>
                    </div>
                )
            },
            {
                x: 904,
                y: 56,
                z: 1,
                children: (
                    <Card
                        animateIn={animateIn}
                        animateOut={animateOut}
                    >
                    <span style={{
                        color: colors.primary,
                        fontWeight: 600,
                        fontSize: '24px',
                    }}>
                        Step-by-step guideline
                    </span>
                    </Card>
                )
            },
            {
                x: 904,
                y: 100,
                z: 0,
                children: (
                    <div style={{
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        gap: '16px',
                    }}>
                        <Card
                            animateIn={animateIn}
                            animateOut={animateOut}
                        >
                            <img
                                src={ui10}
                                style={{height: 600}}
                                alt={'App guideline screen showing the start page of a basic knowledge article with some frequently asked questions.'}
                            />
                        </Card>
                        <div style={{position: 'absolute', bottom: 0, left: 296, width: 28, display: 'flex', justifyContent: 'flex-end'}}>
                            <InfoLabel animateIn={animateIn} animateOut={animateOut} text={'Introduce basic knowledge'} />
                        </div>
                    </div>
                )
            },
        ])},
        /*************************************************************************
         *
         *       Overview: Outcome - App dev
         *
         **************************************************************************/
        {stage: 'OUTCOME', render: (animateIn: boolean, animateOut: boolean) => ([
            {
                x: 0,
                y: 200,
                z: 0,
                children: (
                    <CardStack
                        w={440}
                        bg={colors.white}
                        borderWidth={2}
                        borderColor={colors.primaryLight}
                        radius={24}
                        animateIn={animateIn}
                        animateOut={animateOut}
                    >
                        <div style={{
                            padding: '36px 36px 100px 36px',
                            width: '100%',
                            height: '100%',
                            display: 'flex',
                            flexDirection: 'column',
                            gap: '36px',
                        }}>
                        <span style={{
                            color: colors.primary,
                            fontWeight: 500,
                            fontSize: '36px',
                        }}>
                            Realization
                        </span>
                            <span style={{
                                color: colors.secondary,
                                fontWeight: 300,
                                fontSize: '20px',
                            }}>
                                This app is in development with Kotlin and Jetpack Compose.
                            </span>
                        </div>
                    </CardStack>
                )
            },
            {
                x: 180,
                y: 400,
                z: 1,
                children: (
                    <Button
                        text={'View the GitHub repository'}
                        icon={<RightArrowIcon />}
                        animateIn={animateIn}
                        animateOut={animateOut}
                        onClick={() => {
                            window.open('https://github.com/maccha-koubou/Transition-Guidepost', '_blank')
                        }}
                    />
                )
            },
            {
                x: 520,
                y: 20,
                z: 0,
                children: (
                    <Card
                        animateIn={animateIn}
                        animateOut={animateOut}
                    >
                        <img
                            src={dev1}
                            style={{height: 600}}
                            alt={'App home screen showing a bottom sheet with an "undo medication log" button.'}
                        />
                    </Card>
                )
            },
            {
                x: 720,
                y: 80,
                z: 0,
                children: (
                    <Card
                        animateIn={animateIn}
                        animateOut={animateOut}
                    >
                        <img
                            src={dev2}
                            style={{height: 600}}
                            alt={'App home screen showing a hormone chart and a medication card in empty state.'}
                        />
                    </Card>
                )
            },
            {
                x: 920,
                y: 140,
                z: 0,
                children: (
                    <Card
                        animateIn={animateIn}
                        animateOut={animateOut}
                    >
                        <img
                            src={dev3}
                            style={{height: 600}}
                            alt={'App home screen showing a hormone chart with a timeline marking data on a specific date, and a medication logging card.'}
                        />
                    </Card>
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
                x: 360,
                y: 240,
                z: 0,
                children: (
                    <Card
                        w={480}
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
                                Individual project ／ Feb. - Mar. 2024
                                <br />
                                Supervisor: Lei Zhang
                            </span>
                        </div>
                    </Card>
                )
            },
        ])},
    ]
})

export default transitionGuidepost