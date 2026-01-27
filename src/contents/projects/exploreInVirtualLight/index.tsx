import React from 'react'
import {createProject, ProjectType, SubProjectType} from "../../../config/ProjectType";
import cover from "./cover.png";
import coverColored from "./cover_colored.png";
import {colors} from "../../../styles/theme";
import CardStack from "../../../components/CardStack";
import Card from "../../../components/Card";
import overview from "./img/overview.png";
import strategy1 from "./img/strategy_1.png";
import strategy2 from "./img/strategy_2.png";
import strategy3 from "./img/strategy_3.png";
import flow from "./img/flow.png";
import {RightArrowLargeIcon} from "../../../assets/icons/RightArrowLargeIcon";

const exploreInVirtualLight = createProject({
    titleWithLineBreak: 'Explore in \nVirtual Light',
    subtitle: 'A Gamified Digital Exhibition Service for Nanjing\'s Local Culture',
    cover: cover,
    coverColored: coverColored,
    coverAlt: '',
    color: {primary: '#FA6400', primaryLight: '#FF934A', secondary: '#333333', secondaryLight: '#666666', neon: '#66FFFF'},
    landscape: {x: 0.5, y: 0.5},
    portrait: {x: 0.7, y: 0.5},
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
                y: 140,
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
                                A gamified digital exhibition service<br />for personal cultural narratives
                            </span>
                            <span style={{
                                color: colors.primary,
                                fontWeight: 300,
                                fontSize: '20px',
                            }}>
                                Service ／ Gamification ／ Mobile app ／ Interactive programming
                            </span>
                            <span style={{
                                color: colors.secondary,
                                fontWeight: 300,
                                fontSize: '20px',
                            }}>
                                Instead of forcing visitors through a fixed exhibition route, this project reimagines Qinhuai culture as a network of personal narratives.
                                <br /><br />
                                By combining a networked space and a virtual lantern system, visitors can choose their own paths, turning cultural exploration into an active, gamified, role-based experience.
                            </span>
                        </div>
                    </CardStack>
                )
            }
        ])},
        /*************************************************************************
         *
         *       Overview: problem & strategy
         *
         **************************************************************************/
        {stage: 'OVERVIEW', render: (animateIn: boolean, animateOut: boolean) => ([
            {
                x: 720,
                y: 100,
                z: 0,
                children: (
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
                            padding: '36px 36px 48px 36px',
                            width: '100%',
                            display: 'flex',
                            flexDirection: 'column',
                            gap: '12px',
                        }}>
                            <span style={{
                                color: colors.secondary,
                                fontWeight: 300,
                                fontSize: '20px',
                            }}>
                                Problem
                            </span>
                            <span style={{
                                color: colors.primary,
                                fontWeight: 500,
                                fontSize: '24px',
                            }}>
                                How to design an exhibition hall in limited space, but for diverse visitor perspectives on a rich culture?
                            </span>
                        </div>
                    </Card>
                )
            },
            {
                x: 0,
                y: 480,
                z: 0,
                children: (
                    <Card
                        w={540}
                        bg={colors.white}
                        borderWidth={2}
                        borderColor={colors.primaryLight}
                        radius={24}
                        animateIn={animateIn}
                        animateOut={animateOut}
                    >
                        <div style={{
                            padding: '36px 36px 48px 36px',
                            width: '100%',
                            display: 'flex',
                            flexDirection: 'column',
                            gap: '12px',
                        }}>
                        <span style={{
                            color: colors.secondary,
                            fontWeight: 300,
                            fontSize: '20px',
                        }}>
                            Strategy
                        </span>
                            <span style={{
                                color: colors.primary,
                                fontWeight: 500,
                                fontSize: '24px',
                            }}>
                                Integrate digital media to enable rich personal narratives in limited space, empowering visitors to explore freely
                            </span>
                        </div>
                    </Card>
                )
            },
            {
                x: 25,
                y: 0,
                z: 1,
                children: (
                    <Card
                        animateIn={animateIn}
                        animateOut={animateOut}
                    >
                        <img src={overview} style={{width: 1150}} alt='Diagram showing diverse visitor perspectives on Qinhuai culture within a 0.9-hectare site, highlighting visitor uncertainty: "Can I find what I want?", leading to the final strategy "Personalized digital media exhibition", and design outcomes "Digital media in space" and "Digital media in app".' />
                    </Card>
                )
            },
        ])},
        /*************************************************************************
         *
         *       Overview: strategy
         *
         **************************************************************************/
        {stage: 'STRATEGIES', render: (animateIn: boolean, animateOut: boolean) => ([
            {
                x: 0,
                y: 140,
                z: 1,
                children: (
                    <Card
                        w={1200}
                        animateIn={animateIn}
                        animateOut={animateOut}
                    >
                        <span style={{
                            color: colors.primary,
                            fontWeight: 600,
                            fontSize: '36px',
                        }}>
                            Strategies
                        </span>
                    </Card>
                )
            },
            {
                x: 0,
                y: 220,
                z: 0,
                children: (
                    <Card
                        w={360}
                        h={384}
                        bg={colors.white}
                        borderWidth={2}
                        borderColor={colors.primaryLight}
                        radius={24}
                        animateIn={animateIn}
                        animateOut={animateOut}
                    >
                        <div style={{
                            padding: '16px 36px 48px 36px',
                            width: '100%',
                            height: '100%',
                            display: 'flex',
                            flexDirection: 'column',
                            justifyContent: 'flex-start',
                            alignItems: 'center',
                            gap: '12px',
                        }}>
                            <img src={strategy1} width={'100%'} alt={''} />
                            <span style={{
                                color: colors.primary,
                                fontWeight: 500,
                                fontSize: '24px',
                                textAlign: 'center'
                            }}>
                                Networked space
                            </span>
                            <span style={{
                                color: colors.secondary,
                                fontWeight: 300,
                                fontSize: '20px',
                                textAlign: 'center'
                            }}>
                                Within the same exhibition, freely explore different scenarios.
                            </span>
                        </div>
                    </Card>
                )
            },
            {
                x: 370,
                y: 360,
                z: 0,
                children: (
                    <Card
                        w={40}
                        h={40}
                        bg={colors.primary}
                        radius={24}
                        animateIn={animateIn}
                        animateOut={animateOut}
                    >
                        <div style={{color: colors.white, width: 24, height: 24}}>
                            <RightArrowLargeIcon size={24} />
                        </div>
                    </Card>
                )
            },
            {
                x: 420,
                y: 220,
                z: 0,
                children: (
                    <Card
                        w={360}
                        h={384}
                        bg={colors.white}
                        borderWidth={2}
                        borderColor={colors.primaryLight}
                        radius={24}
                        animateIn={animateIn}
                        animateOut={animateOut}
                    >
                        <div style={{
                            padding: '16px 36px 48px 36px',
                            width: '100%',
                            height: '100%',
                            display: 'flex',
                            flexDirection: 'column',
                            justifyContent: 'flex-start',
                            alignItems: 'center',
                            gap: '12px',
                        }}>
                            <img src={strategy2} width={'100%'} alt={''} />
                            <span style={{
                                color: colors.primary,
                                fontWeight: 500,
                                fontSize: '24px',
                                textAlign: 'center'
                            }}>
                                Digital media in space
                            </span>
                            <span style={{
                                color: colors.secondary,
                                fontWeight: 300,
                                fontSize: '20px',
                                textAlign: 'center'
                            }}>
                                Within the same scenario, have personalized experiences.
                            </span>
                        </div>
                    </Card>
                )
            },
            {
                x: 790,
                y: 360,
                z: 0,
                children: (
                    <Card
                        w={40}
                        h={40}
                        bg={colors.primary}
                        radius={24}
                        animateIn={animateIn}
                        animateOut={animateOut}
                    >
                        <div style={{color: colors.white, width: 24, height: 24}}>
                            <RightArrowLargeIcon size={24} />
                        </div>
                    </Card>
                )
            },
            {
                x: 840,
                y: 220,
                z: 0,
                children: (
                    <Card
                        w={360}
                        h={384}
                        bg={colors.white}
                        borderWidth={2}
                        borderColor={colors.primaryLight}
                        radius={24}
                        animateIn={animateIn}
                        animateOut={animateOut}
                    >
                        <div style={{
                            padding: '16px 36px 48px 36px',
                            width: '100%',
                            height: '100%',
                            display: 'flex',
                            flexDirection: 'column',
                            justifyContent: 'flex-start',
                            alignItems: 'center',
                            gap: '12px',
                        }}>
                            <img src={strategy3} width={'100%'} alt={''} />
                            <span style={{
                                color: colors.primary,
                                fontWeight: 500,
                                fontSize: '24px',
                                textAlign: 'center'
                            }}>
                                Digital media in app
                            </span>
                            <span style={{
                                color: colors.secondary,
                                fontWeight: 300,
                                fontSize: '20px',
                                textAlign: 'center'
                            }}>
                                Gamified guidance connects separate experiences into a personalized narrative.
                            </span>
                        </div>
                    </Card>
                )
            }
        ])},
        /*************************************************************************
         *
         *       Overview: Overcome - Flow
         *
         **************************************************************************/
        {stage: 'USER FLOW', render: (animateIn: boolean, animateOut: boolean) => ([
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
                                Gamified user flow
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
                                Digital media guides users explore the exhibition, toward personalized experiences and memories
                            </span>
                        </Card>
                    </div>
                )
            },
            {
                x: 0,
                y: 500,
                z: 1,
                children: (
                    <Card
                        h={72}
                        w={256}
                        padding={16}
                        bg={colors.primary}
                        radius={24}
                        animateIn={animateIn}
                        animateOut={animateOut}
                    >
                        <span style={{
                            fontWeight: 300,
                            fontSize: '20px',
                            width: '100%',
                            color: colors.white,
                            textAlign: 'center'
                        }}>
                            Get a random role & point of view
                        </span>
                    </Card>
                )
            },
            {
                x: 316,
                y: 500,
                z: 1,
                children: (
                    <Card
                        h={72}
                        w={256}
                        padding={16}
                        bg={colors.primary}
                        radius={24}
                        animateIn={animateIn}
                        animateOut={animateOut}
                    >
                        <span style={{
                            fontWeight: 300,
                            fontSize: '20px',
                            width: '100%',
                            color: colors.white,
                            textAlign: 'center'
                        }}>
                            Interact with media across space & app
                        </span>
                    </Card>
                )
            },
            {
                x: 628,
                y: 500,
                z: 1,
                children: (
                    <Card
                        h={72}
                        w={260}
                        padding={16}
                        bg={colors.primary}
                        radius={24}
                        animateIn={animateIn}
                        animateOut={animateOut}
                    >
                        <span style={{
                            fontWeight: 300,
                            fontSize: '20px',
                            width: '100%',
                            color: colors.white,
                            textAlign: 'center'
                        }}>
                            Complete quests & write your own story
                        </span>
                    </Card>
                )
            },
            {
                x: 944,
                y: 500,
                z: 1,
                children: (
                    <Card
                        h={72}
                        w={260}
                        padding={16}
                        bg={colors.primary}
                        radius={24}
                        animateIn={animateIn}
                        animateOut={animateOut}
                    >
                        <span style={{
                            fontWeight: 300,
                            fontSize: '20px',
                            width: '100%',
                            color: colors.white,
                            textAlign: 'center'
                        }}>
                            Your journey generates a unique souvenir
                        </span>
                    </Card>
                )
            },
            {
                x: 0,
                y: 280,
                z: -1,
                children: (
                    <div style={{display: 'flex', flexDirection: 'row'}}>
                        <div style={{
                            width: 316,
                            fontWeight: 600,
                            fontSize: '80px',
                            color: colors.primaryLight,
                        }}>
                            1
                        </div>
                        <div style={{
                            width: 316,
                            fontWeight: 600,
                            fontSize: '80px',
                            color: colors.primaryLight,
                        }}>
                            2
                        </div>
                        <div style={{
                            width: 316,
                            fontWeight: 600,
                            fontSize: '80px',
                            color: colors.primaryLight,
                        }}>
                            3
                        </div>
                        <div style={{
                            fontWeight: 600,
                            fontSize: '80px',
                            color: colors.primaryLight,
                        }}>
                            4
                        </div>
                    </div>
                )
            },
            {
                x: 0,
                y: 280,
                z: 0,
                children: (
                    <Card
                        animateIn={animateIn}
                        animateOut={animateOut}
                    >
                        <img src={flow} style={{width: 1200}} alt='Diagram showing diverse visitor perspectives on Qinhuai culture within a 0.9-hectare site, highlighting visitor uncertainty: "Can I find what I want?", leading to the final strategy "Personalized digital media exhibition", and design outcomes "Digital media in space" and "Digital media in app".' />
                    </Card>
                )
            },
        ])},
        /*************************************************************************
         *
         *       Overview: outcome
         *
         **************************************************************************/
        {stage: 'OUTCOME', render: (animateIn: boolean, animateOut: boolean) => ([
            {
                x: 0,
                y: 180,
                z: 0,
                children: (
                    <Card
                        w={360}
                        h={400}
                        bg={colors.white}
                        borderWidth={2}
                        borderColor={colors.primaryLight}
                        radius={24}
                        animateIn={animateIn}
                        animateOut={animateOut}
                    >
                        <div style={{
                            padding: '36px 36px 48px 36px',
                            width: '100%',
                            height: '100%',
                            display: 'flex',
                            flexDirection: 'column',
                            justifyContent: 'flex-start',
                            alignItems: 'center',
                            gap: '12px',
                        }}>
                            <img src={strategy1} width={'100%'} alt={''} />
                            <span style={{
                                color: colors.primary,
                                fontWeight: 500,
                                fontSize: '24px',
                                textAlign: 'center'
                            }}>
                            Networked space
                        </span>
                            <span style={{
                                color: colors.secondary,
                                fontWeight: 300,
                                fontSize: '20px',
                                textAlign: 'center'
                            }}>
                            Within the same exhibition, freely explore different scenarios.
                        </span>
                        </div>
                    </Card>
                )
            },
            {
                x: 370,
                y: 360,
                z: 0,
                children: (
                    <Card
                        w={40}
                        h={40}
                        bg={colors.primary}
                        radius={24}
                        animateIn={animateIn}
                        animateOut={animateOut}
                    >
                        <div style={{color: colors.white, width: 24, height: 24}}>
                            <RightArrowLargeIcon size={24} />
                        </div>
                    </Card>
                )
            },
            {
                x: 420,
                y: 180,
                z: 0,
                children: (
                    <Card
                        w={360}
                        h={400}
                        bg={colors.white}
                        borderWidth={2}
                        borderColor={colors.primaryLight}
                        radius={24}
                        animateIn={animateIn}
                        animateOut={animateOut}
                    >
                        <div style={{
                            padding: '36px 36px 48px 36px',
                            width: '100%',
                            height: '100%',
                            display: 'flex',
                            flexDirection: 'column',
                            justifyContent: 'flex-start',
                            alignItems: 'center',
                            gap: '12px',
                        }}>
                            <img src={strategy2} width={'100%'} alt={''} />
                            <span style={{
                                color: colors.primary,
                                fontWeight: 500,
                                fontSize: '24px',
                                textAlign: 'center'
                            }}>
                            Digital media in space
                        </span>
                            <span style={{
                                color: colors.secondary,
                                fontWeight: 300,
                                fontSize: '20px',
                                textAlign: 'center'
                            }}>
                            Within the same scenario, have personalized experiences.
                        </span>
                        </div>
                    </Card>
                )
            },
            {
                x: 790,
                y: 360,
                z: 0,
                children: (
                    <Card
                        w={40}
                        h={40}
                        bg={colors.primary}
                        radius={24}
                        animateIn={animateIn}
                        animateOut={animateOut}
                    >
                        <div style={{color: colors.white, width: 24, height: 24}}>
                            <RightArrowLargeIcon size={24} />
                        </div>
                    </Card>
                )
            },
            {
                x: 840,
                y: 180,
                z: 0,
                children: (
                    <Card
                        w={360}
                        h={400}
                        bg={colors.white}
                        borderWidth={2}
                        borderColor={colors.primaryLight}
                        radius={24}
                        animateIn={animateIn}
                        animateOut={animateOut}
                    >
                        <div style={{
                            padding: '36px 36px 48px 36px',
                            width: '100%',
                            height: '100%',
                            display: 'flex',
                            flexDirection: 'column',
                            justifyContent: 'flex-start',
                            alignItems: 'center',
                            gap: '12px',
                        }}>
                            <img src={strategy3} width={'100%'} alt={''} />
                            <span style={{
                                color: colors.primary,
                                fontWeight: 500,
                                fontSize: '24px',
                                textAlign: 'center'
                            }}>
                            Digital media in app
                        </span>
                            <span style={{
                                color: colors.secondary,
                                fontWeight: 300,
                                fontSize: '20px',
                                textAlign: 'center'
                            }}>
                            Gamified guidance connects separate experiences into a personalized narrative.
                        </span>
                        </div>
                    </Card>
                )
            }
        ])},

        /*************************************************************************
         *
         *       Research & Ideation
         *       To-do: Add the project details in the following pages, and change all the previous pages' stage name into "OVERVIEW"
         *
         **************************************************************************/
        /*{stage: 'RESEARCH & IDEATION', render: (animateIn: boolean, animateOut: boolean) => ([
            {
                x: 0,
                y: 0,
                z: 1,
                children: (
                    <Card
                        w={1200}
                        h={784}
                        bg={'transparent'}
                        animateIn={animateIn}
                        animateOut={animateOut}
                    >
                        <span style={{
                            color: colors.primary,
                            fontWeight: 500,
                            fontSize: '80px',
                            textAlign: 'left',
                            whiteSpace: 'pre-line',
                            padding: '0px 0px 60px 0px',
                        }}>
                            Research<br />&<br />Ideation
                        </span>
                    </Card>
                )
            },
        ])},*/


    ]
})

export default exploreInVirtualLight