import {createProject, ProjectType, SubProjectType} from "../../../config/ProjectType";
import cover from './cover.png'
import coverColored from "./cover_colored.png";
import CardStack from "../../../components/CardStack";
import {colors} from "../../../styles/theme";
import React from "react";
import Card from "../../../components/Card";
import background1 from "./img/background1.png";
import background2 from "./img/background2.png";
import strategy from "./img/strategy.png";
import storyboard1 from "./img/storyboard1.png";
import storyboard2 from "./img/storyboard2.png";
import storyboard3 from "./img/storyboard3.png";
import storyboard4 from "./img/storyboard4.png";
import storyboard5 from "./img/storyboard5.png";
import storyboard6 from "./img/storyboard6.png";
import ecosystem from "./img/ecosystem.png";
import {RightArrowLargeIcon} from "../../../assets/icons/RightArrowLargeIcon";

const dormitoryVillage = createProject({
    titleWithLineBreak: 'Dormitory Village',
    subtitle: 'Modular living unit for privacy, community, and flexibility in high-density dormitories',
    cover: cover,
    coverColored: coverColored,
    coverAlt: 'Image showing students living in a village formed by small units that enable diverse activities.',
    color: {primary: '#0074F0', primaryLight: '#0074F0', secondary: '#003768', secondaryLight: '#003768', neon: '#FFCC00'},
    landscape: {x: 0.5, y: 0.5},
    portrait: {x: 0.5, y: 0.5},
    types: [ProjectType.SPACE, ProjectType.PRODUCT],
    subtypes: [SubProjectType.ARCHITECTURE_SPACES, SubProjectType.PHYSICAL_PRODUCTS],
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
                                Modular living unit for privacy, community,<br />and flexibilityin high-density dormitories
                            </span>
                            <span style={{
                                color: colors.primary,
                                fontWeight: 300,
                                fontSize: '20px',
                            }}>
                                Service ／ Changeable space ／ Modular product
                            </span>
                            <span style={{
                                color: colors.secondary,
                                fontWeight: 300,
                                fontSize: '20px',
                            }}>
                                Modular, changeable units enable both personal and social life within limited space and resources.
                                <br /><br />
                                Units form a dynamic village ecosystem where students live based on similar interests, share facilities, and manage their communities autonomously.
                            </span>
                        </div>
                    </CardStack>
                )
            },
        ])},
        /*************************************************************************
         *
         *       Overview: Background & Problem
         *
         **************************************************************************/
        {stage: 'BACKGROUND & PROBLEM', render: (animateIn: boolean, animateOut: boolean) => ([
            {
                x: 0,
                y: 100,
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
                                Background & Problem
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
                                Limited space and facilities lack both personal privacy and social interaction, and are crowded and inaccessible.
                            </span>
                        </Card>
                    </div>
                )
            },
            {
                x: 0,
                y: 220,
                z: 1,
                children: (
                    <div style={{
                        width: 1200,
                        height: 400,
                        display: 'flex',
                        flexDirection: 'row',
                        alignItems: 'center',
                        justifyContent: 'center',
                        gap: '24px',
                    }}>
                        <Card
                            h={'100%'}
                            padding={36}
                            radius={24}
                            bg={colors.white}
                            animateIn={animateIn}
                            animateOut={animateOut}
                        >
                            <img src={background1} style={{height: '100%'}} alt={'Todo'} />
                        </Card>
                        <Card
                            w={40}
                            h={40}
                            bg={colors.primary}
                            radius={20}
                            animateIn={animateIn}
                            animateOut={animateOut}
                        >
                            <div style={{color: colors.white, width: 24, height: 24}}>
                                <RightArrowLargeIcon size={24} />
                            </div>
                        </Card>
                        <Card
                            h={'100%'}
                            padding={36}
                            radius={24}
                            bg={colors.white}
                            animateIn={animateIn}
                            animateOut={animateOut}
                        >
                            <img src={background2} style={{height: '100%'}} alt={'Todo'} />
                        </Card>
                    </div>
                )
            },
        ])},
        /*************************************************************************
         *
         *       Overview: Ideation - Strategy
         *
         **************************************************************************/
        {stage: 'IDEATION', render: (animateIn: boolean, animateOut: boolean) => ([
            {
                x: 0,
                y: 100,
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
                            Strategy
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
                            Split large buildings into changeable & moveable units, moved by student freely to form interest-based villages.
                        </span>
                        </Card>
                    </div>
                )
            },
            {
                x: 0,
                y: 220,
                z: 1,
                children: (
                    <Card
                        w={1200}
                        padding={36}
                        radius={24}
                        bg={colors.white}
                        animateIn={animateIn}
                        animateOut={animateOut}
                    >
                        <img src={strategy} style={{width: '100%'}} alt={'Todo'} />
                    </Card>
                )
            },
        ])},
        /*************************************************************************
         *
         *       Overview: Ideation - Storyboard
         *
         **************************************************************************/
        {stage: 'IDEATION', render: (animateIn: boolean, animateOut: boolean) => ([
            {
                x: -40,
                y: 60,
                z: 1,
                children: (
                    <div style={{
                        width: 1280,
                        height: 400,
                        display: 'flex',
                        flexDirection: 'row',
                        alignItems: 'center',
                        justifyContent: 'center',
                        gap: '24px',
                    }}>
                        <div style={{width: 40, height: 40}}/>
                        <div style={{
                            width: 320,
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'center',
                            justifyContent: 'center',
                            gap: '12px',
                        }}>
                            <Card
                                w={'100%'}
                                radius={24}
                                bg={colors.white}
                                animateIn={animateIn}
                                animateOut={animateOut}
                            >
                                <img src={storyboard1} style={{width: '100%'}} alt={'Todo'} />
                            </Card>
                            <span style={{
                                color: colors.primary,
                                fontWeight: 600,
                                fontSize: '24px',
                            }}>
                                Initial mixed dorm
                            </span>
                        </div>
                        <Card
                            w={32}
                            h={32}
                            bg={colors.primary}
                            radius={20}
                            animateIn={animateIn}
                            animateOut={animateOut}
                        >
                            <div style={{color: colors.white, width: 20, height: 20}}>
                                <RightArrowLargeIcon size={20} />
                            </div>
                        </Card>
                        <div style={{
                            width: 320,
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'center',
                            justifyContent: 'center',
                            gap: '12px',
                        }}>
                            <Card
                                w={'100%'}
                                radius={24}
                                bg={colors.white}
                                animateIn={animateIn}
                                animateOut={animateOut}
                            >
                                <img src={storyboard2} style={{width: '100%'}} alt={'Todo'} />
                            </Card>
                            <span style={{
                                color: colors.primary,
                                fontWeight: 600,
                                fontSize: '24px',
                            }}>
                                Hobby/habit-based match
                            </span>
                        </div>
                        <Card
                            w={32}
                            h={32}
                            bg={colors.primary}
                            radius={20}
                            animateIn={animateIn}
                            animateOut={animateOut}
                        >
                            <div style={{color: colors.white, width: 20, height: 20}}>
                                <RightArrowLargeIcon size={20} />
                            </div>
                        </Card>
                        <div style={{
                            width: 320,
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'center',
                            justifyContent: 'center',
                            gap: '12px',
                        }}>
                            <Card
                                w={'100%'}
                                radius={24}
                                bg={colors.white}
                                animateIn={animateIn}
                                animateOut={animateOut}
                            >
                                <img src={storyboard3} style={{width: '100%'}} alt={'Todo'} />
                            </Card>
                            <span style={{
                                color: colors.primary,
                                fontWeight: 600,
                                fontSize: '24px',
                            }}>
                                Apply for interest unit
                            </span>
                        </div>
                        <Card
                            w={32}
                            h={32}
                            bg={colors.primary}
                            radius={20}
                            animateIn={animateIn}
                            animateOut={animateOut}
                        >
                            <div style={{color: colors.white, width: 20, height: 20, rotate: '135deg'}}>
                                <RightArrowLargeIcon size={20} />
                            </div>
                        </Card>
                    </div>
                )
            },
            {
                x: -40,
                y: 340,
                z: 1,
                children: (
                    <div style={{
                        width: 1280,
                        height: 400,
                        display: 'flex',
                        flexDirection: 'row',
                        alignItems: 'center',
                        justifyContent: 'center',
                        gap: '24px',
                    }}>
                        <Card
                            w={32}
                            h={32}
                            bg={colors.primary}
                            radius={20}
                            animateIn={animateIn}
                            animateOut={animateOut}
                        >
                            <div style={{color: colors.white, width: 20, height: 20}}>
                                <RightArrowLargeIcon size={20} />
                            </div>
                        </Card>
                        <div style={{
                            width: 320,
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'center',
                            justifyContent: 'center',
                            gap: '12px',
                        }}>
                            <Card
                                w={'100%'}
                                radius={24}
                                bg={colors.white}
                                animateIn={animateIn}
                                animateOut={animateOut}
                            >
                                <img src={storyboard4} style={{width: '100%'}} alt={'Todo'} />
                            </Card>
                            <span style={{
                                color: colors.primary,
                                fontWeight: 600,
                                fontSize: '24px',
                            }}>
                                Provide interest unit
                            </span>
                        </div>
                        <Card
                            w={32}
                            h={32}
                            bg={colors.primary}
                            radius={20}
                            animateIn={animateIn}
                            animateOut={animateOut}
                        >
                            <div style={{color: colors.white, width: 20, height: 20}}>
                                <RightArrowLargeIcon size={20} />
                            </div>
                        </Card>
                        <div style={{
                            width: 320,
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'center',
                            justifyContent: 'center',
                            gap: '12px',
                        }}>
                            <Card
                                w={'100%'}
                                radius={24}
                                bg={colors.white}
                                animateIn={animateIn}
                                animateOut={animateOut}
                            >
                                <img src={storyboard5} style={{width: '100%'}} alt={'Todo'} />
                            </Card>
                            <span style={{
                                color: colors.primary,
                                fontWeight: 600,
                                fontSize: '24px',
                            }}>
                                Share interest unit
                            </span>
                        </div>
                        <Card
                            w={32}
                            h={32}
                            bg={colors.primary}
                            radius={20}
                            animateIn={animateIn}
                            animateOut={animateOut}
                        >
                            <div style={{color: colors.white, width: 20, height: 20}}>
                                <RightArrowLargeIcon size={20} />
                            </div>
                        </Card>
                        <div style={{
                            width: 320,
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'center',
                            justifyContent: 'center',
                            gap: '12px',
                        }}>
                            <Card
                                w={'100%'}
                                radius={24}
                                bg={colors.white}
                                animateIn={animateIn}
                                animateOut={animateOut}
                            >
                                <img src={storyboard6} style={{width: '100%'}} alt={'Todo'} />
                            </Card>
                            <span style={{
                                color: colors.primary,
                                fontWeight: 600,
                                fontSize: '24px',
                            }}>
                                Dynamically regroup
                            </span>
                        </div>
                        <div style={{width: 40, height: 40}}/>
                    </div>
                )
            },
        ])},
        /*************************************************************************
         *
         *       Overview: Ideation - Ecosystem
         *
         **************************************************************************/
        {stage: 'IDEATION', render: (animateIn: boolean, animateOut: boolean) => ([
            {
                x: 0,
                y: 12,
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
                        Ecosystem
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
                        Freely socialize and allocate limited resources through units, reducing dorms' neglect of student needs.
                    </span>
                        </Card>
                    </div>
                )
            },
            {
                x: 60,
                y: 112,
                z: 1,
                children: (
                    <Card
                        w={1080}
                        padding={36}
                        radius={24}
                        bg={colors.white}
                        animateIn={animateIn}
                        animateOut={animateOut}
                    >
                        <img src={ecosystem} style={{width: '100%'}} alt={'Todo'} />
                    </Card>
                )
            },
        ])},
    ]
})

export default dormitoryVillage