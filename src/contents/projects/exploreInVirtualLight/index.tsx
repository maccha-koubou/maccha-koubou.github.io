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
import ui1 from "./img/ui1.png";
import ui2 from "./img/ui2.png";
import ui3 from "./img/ui3.png";
import ui4 from "./img/ui4.png";
import ui5 from "./img/ui5.png";
import uiVideo from "./img/ui1.mp4";
import scenario1 from "./img/scenario1.png";
import scenario2 from "./img/scenario2.png";
import team from "./img/team.png";
import {RightArrowLargeIcon} from "../../../assets/icons/RightArrowLargeIcon";
import {RightArrowIcon} from "../../../assets/icons/RightArrowIcon";
import Button from "../../../components/Button";
import InfoLabel from "../../../components/InfoLabel";

const exploreInVirtualLight = createProject({
    titleWithLineBreak: 'Explore in \nVirtual Light',
    subtitle: 'Gamified digital exhibition service for personal cultural narratives',
    cover: cover,
    coverColored: coverColored,
    coverAlt: 'Image showing a visitor interacting with a body game with the help of a mobile phone app, and five UI of the app. The UI include a luminous interactive pattern for interaction and story-telling.',
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
        {stage: 'INTRODUCTION', render: (animateIn: boolean, animateOut: boolean, onNavigate?: (to: string) => void) => ([
            {
                x: 200,
                y: 120,
                z: 1,
                children: (
                    <CardStack
                        w={800}
                        animateIn={animateIn}
                        animateOut={animateOut}
                    >
                        <section style={{
                            padding: '36px 36px 100px 36px',
                            width: '100%',
                            display: 'flex',
                            flexDirection: 'column',
                            gap: '36px',
                        }}>
                            <h2 style={{
                                color: colors.primary,
                                fontWeight: 500,
                                fontSize: '36px',
                            }}>
                                Gamified digital exhibition service<br />for personal cultural narratives
                            </h2>
                            <p style={{
                                color: colors.primary,
                                fontWeight: 300,
                                fontSize: '20px',
                            }}>
                                Service ／ Gamification ／ Mobile app ／ Interactive programming
                            </p>
                            <p style={{
                                color: colors.secondary,
                                fontWeight: 300,
                                fontSize: '20px',
                            }}>
                                Reimagining cultural exhibition as a personal narratives network, rather than a fixed route.
                                <br /><br />
                                Digital media combined with the physical exhibition lets visitors explore along their own paths, turning the exhibition into a gamified journey.
                            </p>
                        </section>
                    </CardStack>
                )
            },
            {
                x: 640,
                y: 500,
                z: 1,
                children: (
                    <Button
                        text={'View the related space design project'}
                        icon={<RightArrowIcon />}
                        animateIn={animateIn}
                        animateOut={animateOut}
                        onClick={() => {
                            onNavigate?.('/work/choiceSpace')
                        }}
                    />
                )
            },
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
                        <section style={{
                            padding: '36px 36px 48px 36px',
                            width: '100%',
                            display: 'flex',
                            flexDirection: 'column',
                            gap: '12px',
                        }}>
                            <h2 style={{
                                color: colors.secondary,
                                fontWeight: 300,
                                fontSize: '20px',
                            }}>
                                Problem
                            </h2>
                            <p style={{
                                color: colors.primary,
                                fontWeight: 500,
                                fontSize: '24px',
                            }}>
                                How to design an exhibition hall in limited space, but for diverse visitor perspectives on a rich culture?
                            </p>
                        </section>
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
                        <section style={{
                            padding: '36px 36px 48px 36px',
                            width: '100%',
                            display: 'flex',
                            flexDirection: 'column',
                            gap: '12px',
                        }}>
                            <h2 style={{
                                color: colors.secondary,
                                fontWeight: 300,
                                fontSize: '20px',
                            }}>
                                Strategy
                            </h2>
                            <p style={{
                                color: colors.primary,
                                fontWeight: 500,
                                fontSize: '24px',
                            }}>
                                Integrate digital media to enable rich personal narratives in limited space, empowering visitors to explore freely
                            </p>
                        </section>
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
                y: 120,
                z: 1,
                children: (
                    <Card
                        w={1200}
                        animateIn={animateIn}
                        animateOut={animateOut}
                    >
                        <h2 style={{
                            color: colors.primary,
                            fontWeight: 600,
                            fontSize: '36px',
                        }}>
                            Strategies
                        </h2>
                    </Card>
                )
            },
            {
                x: 0,
                y: 200,
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
                        <section style={{
                            padding: '16px 36px 48px 36px',
                            width: '100%',
                            height: '100%',
                            display: 'flex',
                            flexDirection: 'column',
                            justifyContent: 'flex-start',
                            alignItems: 'center',
                            gap: '12px',
                        }}>
                            <img src={strategy1} width={'100%'} alt={'Diagram showing a network with multiple nodes. Two users pass through different nodes through different paths.'} />
                            <h3 style={{
                                color: colors.primary,
                                fontWeight: 500,
                                fontSize: '24px',
                                textAlign: 'center'
                            }}>
                                Networked space
                            </h3>
                            <p style={{
                                color: colors.secondary,
                                fontWeight: 300,
                                fontSize: '20px',
                                textAlign: 'center'
                            }}>
                                Within the same exhibition, freely explore different scenarios.
                            </p>
                        </section>
                    </Card>
                )
            },
            {
                x: 370,
                y: 364,
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
                y: 200,
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
                        <section style={{
                            padding: '16px 36px 48px 36px',
                            width: '100%',
                            height: '100%',
                            display: 'flex',
                            flexDirection: 'column',
                            justifyContent: 'flex-start',
                            alignItems: 'center',
                            gap: '12px',
                        }}>
                            <img src={strategy2} width={'100%'} alt={'Diagram showing digital media in the space that reacts differently to different people.'} />
                            <h3 style={{
                                color: colors.primary,
                                fontWeight: 500,
                                fontSize: '24px',
                                textAlign: 'center'
                            }}>
                                Digital media in space
                            </h3>
                            <p style={{
                                color: colors.secondary,
                                fontWeight: 300,
                                fontSize: '20px',
                                textAlign: 'center'
                            }}>
                                Within the same scenario, have personalized experiences.
                            </p>
                        </section>
                    </Card>
                )
            },
            {
                x: 790,
                y: 364,
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
                y: 200,
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
                        <section style={{
                            padding: '16px 36px 48px 36px',
                            width: '100%',
                            height: '100%',
                            display: 'flex',
                            flexDirection: 'column',
                            justifyContent: 'flex-start',
                            alignItems: 'center',
                            gap: '12px',
                        }}>
                            <img src={strategy3} width={'100%'} alt={'Diagram showing an app that connects different exhibition contents into a line.'} />
                            <h3 style={{
                                color: colors.primary,
                                fontWeight: 500,
                                fontSize: '24px',
                                textAlign: 'center'
                            }}>
                                Digital media in app
                            </h3>
                            <p style={{
                                color: colors.secondary,
                                fontWeight: 300,
                                fontSize: '20px',
                                textAlign: 'center'
                            }}>
                                Gamified guidance connects separate experiences into a personalized narrative.
                            </p>
                        </section>
                    </Card>
                )
            }
        ])},
        /*************************************************************************
         *
         *       Overview: Outcome - Flow
         *
         **************************************************************************/
        {stage: 'USER FLOW', render: (animateIn: boolean, animateOut: boolean) => ([
            {
                x: 0,
                y: 140,
                z: 1,
                children: (
                    <section style={{
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
                            <h2 style={{
                                color: colors.primary,
                                fontWeight: 600,
                                fontSize: '36px',
                            }}>
                                Gamified user flow
                            </h2>
                        </Card>
                        <Card
                            h={28}
                            padding={[0, 16, 2, 16]}
                            radius={14}
                            bg={colors.white}
                            animateIn={animateIn}
                            animateOut={animateOut}
                        >
                            <p style={{
                                color: colors.primary,
                                fontWeight: 300,
                                fontSize: '20px',
                            }}>
                                Digital media guides users explore the exhibition, toward personalized experiences and memories
                            </p>
                        </Card>
                    </section>
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
                        <p style={{
                            fontWeight: 300,
                            fontSize: '20px',
                            width: '100%',
                            color: colors.white,
                            textAlign: 'center'
                        }}>
                            Get a random role & point of view
                        </p>
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
                        <p style={{
                            fontWeight: 300,
                            fontSize: '20px',
                            width: '100%',
                            color: colors.white,
                            textAlign: 'center'
                        }}>
                            Interact with media across space & app
                        </p>
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
                        <p style={{
                            fontWeight: 300,
                            fontSize: '20px',
                            width: '100%',
                            color: colors.white,
                            textAlign: 'center'
                        }}>
                            Complete quests & write your own story
                        </p>
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
                        <p style={{
                            fontWeight: 300,
                            fontSize: '20px',
                            width: '100%',
                            color: colors.white,
                            textAlign: 'center'
                        }}>
                            Your journey generates a unique souvenir
                        </p>
                    </Card>
                )
            },
            {
                x: 0,
                y: 280,
                z: -1,
                children: (
                    <Card animateIn={animateIn} animateOut={animateOut}>
                        <div style={{
                            display: 'flex',
                            flexDirection: 'row',
                            fontWeight: 600,
                            fontSize: '80px',
                            color: colors.primaryLight,
                        }}>
                            <div style={{width: 316}} aria-hidden={'true'}>
                                1
                            </div>
                            <div style={{width: 316}} aria-hidden={'true'}>
                                2
                            </div>
                            <div style={{width: 316,}} aria-hidden={'true'}>
                                3
                            </div>
                            <div aria-hidden={'true'}>
                                4
                            </div>
                        </div>
                    </Card>
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
                        <img src={flow} style={{width: 1200}} alt='Diagram showing the user flow within 4 stages. Firstly, the user gets a role on the app at the reception. Then, the user interacts with digital media in the space directly or via the app. Further, the user receives quests on the app and led to different spaces. Finally, the pattern on the app upgrades.' />
                    </Card>
                )
            },
        ])},
        /*************************************************************************
         *
         *       Overview: Outcome - App
         *
         **************************************************************************/
        {stage: 'KEY TOUCHPOINT', render: (animateIn: boolean, animateOut: boolean) => ([
            {
                x: 0,
                y: 140,
                z: 0,
                children: (
                    <CardStack
                        w={640}
                        bg={colors.white}
                        borderWidth={2}
                        borderColor={colors.primaryLight}
                        radius={24}
                        animateIn={animateIn}
                        animateOut={animateOut}
                    >
                        <section style={{
                            padding: '36px 36px 100px 36px',
                            width: '100%',
                            height: '100%',
                            display: 'flex',
                            flexDirection: 'column',
                            gap: '36px',
                        }}>
                            <h2 style={{
                                color: colors.primary,
                                fontWeight: 500,
                                fontSize: '36px',
                            }}>
                                Key touchpoint:<br />virtual lantern app
                            </h2>
                            <p style={{
                                color: colors.secondary,
                                fontWeight: 300,
                                fontSize: '20px',
                            }}>
                                A luminous pattern inspired by iconic Qinhuai lanterns.
                                <br />
                                <br />
                                Users explore with the app as if walking through a lantern fair.
                                <br />
                                <br />
                                The pattern provides quests, supports interactions, and upgrades through exploration, finally becoming a unique pattern shaped by each user's journey.
                            </p>
                        </section>
                    </CardStack>
                )
            },
            {
                x: 320,
                y: 500,
                z: 1,
                children: (
                    <Button
                        text={'View the interactive pattern code'}
                        icon={<RightArrowIcon />}
                        animateIn={animateIn}
                        animateOut={animateOut}
                        onClick={() => {
                            window.open('https://github.com/maccha-koubou/lantern', '_blank')
                        }}
                    />
                )
            },
            {
                x: 800,
                y: 20,
                z: 1,
                children: (
                    <Card
                        radius={56}
                        animateIn={animateIn}
                        animateOut={animateOut}
                    >
                        <div>
                            <video src={uiVideo} poster={ui1} style={{height: 720}} autoPlay loop muted playsInline />
                            <img
                                src={ui1}
                                style={{position: 'absolute', left: 0, top: 0, zIndex: -1, height: 720}}
                                alt={'App home screen showing a compass with a dynamic pattern inside. A bottom bar is used to switch patterns with different interactions. When touched, the pattern form texts or ripples.'}
                            />
                        </div>
                    </Card>
                )
            },
            {
                x: 1156,
                y: 712,
                z: 2,
                children: (
                    <div style={{width: 28, display: 'flex', justifyContent: 'flex-end'}}>
                        <InfoLabel animateIn={animateIn} animateOut={animateOut} text={'Interact through the pattern'} />
                    </div>
                )
            },
        ])},
        /*************************************************************************
         *
         *       Overview: Outcome - App (Scenario)
         *
         **************************************************************************/
        {stage: 'KEY TOUCHPOINT', render: (animateIn: boolean, animateOut: boolean) => ([
            {
                x: 340,
                y: 40,
                z: 0,
                children: (
                    <Card
                        animateIn={animateIn}
                        animateOut={animateOut}
                        radius={24}
                    >
                        <img
                            src={scenario1}
                            width={440}
                            alt={'A visitor engages with a "poss and guess" riddle, an interactive activity in the exhibition.'}
                        />
                    </Card>
                )
            },
            {
                x: 700,
                y: 160,
                z: 1,
                children: (
                    <Card
                        animateIn={animateIn}
                        animateOut={animateOut}
                        radius={24}
                    >
                        <img
                            src={scenario2}
                            width={380}
                            alt={'The visitor touches the pattern on the app, and the touched pattern reveals part of the riddle\'s answer.'}
                        />
                    </Card>
                )
            },
            {
                x: 180,
                y: 420,
                z: 2,
                children: (
                    <section style={{
                        display: 'flex',
                        flexDirection: 'row',
                        gap: 16
                    }}>
                        <Card animateIn={animateIn} animateOut={animateOut}>
                            <h2 style={{
                                fontWeight: 600,
                                fontSize: '48px',
                                color: colors.primary,
                            }}>
                                1
                            </h2>
                        </Card>
                        <Card
                            w={360}
                            padding={[12, 16, 16, 16]}
                            bg={colors.primary}
                            borderWidth={2}
                            borderColor={colors.white}
                            radius={24}
                            animateIn={animateIn}
                            animateOut={animateOut}
                        >
                            <p style={{
                                color: colors.white,
                                fontWeight: 300,
                                fontSize: '20px',
                            }}>
                                I can't figure out the answer to this "pose & guess" riddle.<br />Let me ask the app for hints!
                            </p>
                        </Card>
                    </section>
                )
            },
            {
                x: 900,
                y: 560,
                z: 2,
                children: (
                    <section style={{
                        display: 'flex',
                        flexDirection: 'row',
                        gap: 16
                    }}>
                        <Card
                            w={180}
                            padding={[12, 16, 16, 16]}
                            bg={colors.primary}
                            borderWidth={2}
                            borderColor={colors.white}
                            radius={24}
                            animateIn={animateIn}
                            animateOut={animateOut}
                        >
                            <p style={{
                                color: colors.white,
                                fontWeight: 300,
                                fontSize: '20px',
                            }}>
                                Oh! The answer ends with "er"!
                            </p>
                        </Card>
                        <Card animateIn={animateIn} animateOut={animateOut}>
                            <h2 style={{
                                fontWeight: 600,
                                fontSize: '48px',
                                color: colors.primary,
                            }}>
                                2
                            </h2>
                        </Card>
                    </section>
                )
            },
        ])},
        /*************************************************************************
         *
         *       Overview: Outcome - App
         *
         **************************************************************************/
        {stage: 'KEY TOUCHPOINT', render: (animateIn: boolean, animateOut: boolean) => ([
            {
                x: -120,
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
                                src={ui2}
                                style={{height: 600}}
                                alt={'App pattern switching screen showing 6 patterns with their levels and introductions.'}
                            />
                        </Card>
                        <div style={{position: 'absolute', bottom: 0, left: 296, width: 28, display: 'flex', justifyContent: 'flex-end'}}>
                            <InfoLabel animateIn={animateIn} animateOut={animateOut} text={'Select a pattern'} />
                        </div>
                    </div>
                )
            },
            {
                x: 260,
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
                                src={ui3}
                                style={{height: 600}}
                                alt={'App quest completed screen with a illustration based on the pattern and a story.'}
                            />
                        </Card>
                        <div style={{position: 'absolute', bottom: 0, left: 296, width: 28, display: 'flex', justifyContent: 'flex-end'}}>
                            <InfoLabel animateIn={animateIn} animateOut={animateOut} text={'Complete a quest'} />
                        </div>
                    </div>
                )
            },
            {
                x: 640,
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
                                src={ui4}
                                style={{height: 600}}
                                alt={'App AR scanning screen showing the current quest and the interactive elements in the exhibition hall.'}
                            />
                        </Card>
                        <div style={{position: 'absolute', bottom: 0, left: 296, width: 28, display: 'flex', justifyContent: 'flex-end'}}>
                            <InfoLabel animateIn={animateIn} animateOut={animateOut} text={'Interact with space by AR'} />
                        </div>
                    </div>
                )
            },
            {
                x: 1020,
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
                                src={ui5}
                                style={{height: 600}}
                                alt={''}
                            />
                        </Card>
                        <div style={{position: 'absolute', bottom: 0, left: 296, width: 28, display: 'flex', justifyContent: 'flex-end'}}>
                            <InfoLabel animateIn={animateIn} animateOut={animateOut} text={'Review the journey'} />
                        </div>
                    </div>
                )
            },
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

        /*************************************************************************
         *
         *       Acknowledgement
         *
         **************************************************************************/
        {stage: 'KEY TOUCHPOINT', render: (animateIn: boolean, animateOut: boolean) => ([
            {
                x: -60,
                y: 60,
                z: 0,
                children: (
                    <CardStack
                        w={800}
                        bg={colors.white}
                        borderWidth={2}
                        borderColor={colors.primaryLight}
                        radius={24}
                        animateIn={animateIn}
                        animateOut={animateOut}
                    >
                        <section style={{
                            padding: '36px 36px 48px 36px',
                            width: '100%',
                            display: 'flex',
                            flexDirection: 'column',
                            gap: '24px',
                        }}>
                            <h2 style={{
                                color: colors.primary,
                                fontWeight: 500,
                                fontSize: '36px',
                            }}>
                                Team & credits
                            </h2>
                            <p style={{
                                color: colors.secondary,
                                fontWeight: 300,
                                fontSize: '20px',
                            }}>
                                Team project ／ Mar. - Jun. 2022 & Jul. - Aug. 2024
                                <br />
                                My role: Led concept development and service & UX design
                                <br /><br />
                                Teammates: Haoyue Lei, Shaojian Deng, Yaran He, Er Zhuo (Tianjin University)
                                <br />
                                Supervisor: Assoc. Prof. Jing Wang, Haoran Li
                            </p>
                        </section>
                    </CardStack>
                )
            },
            {
                x: 160,
                y: 320,
                z: 1,
                children: (
                    <CardStack
                        w={1100}
                        bg={colors.white}
                        borderWidth={2}
                        borderColor={colors.primaryLight}
                        radius={24}
                        padding={36}
                        animateIn={animateIn}
                        animateOut={animateOut}
                    >
                        <section style={{
                            width: '100%',
                            display: 'flex',
                            flexDirection: 'column',
                            gap: '36px',
                        }}>
                            <h3 style={{
                                position: "absolute",
                                zIndex: 1,
                                color: colors.primary,
                                fontWeight: 500,
                                fontSize: '20px',
                            }}>
                                How we cooperated?
                            </h3>
                            <img src={team} width={'100%'} alt={'Diagram showing role distribution between teamwork (2022) and individual extension (2024), highlighting my responsibility for concept and architectural & urban design in the 2022, and service & UX design in 2024.'} />
                        </section>
                    </CardStack>
                )
            },
        ])},
    ]
})

export default exploreInVirtualLight