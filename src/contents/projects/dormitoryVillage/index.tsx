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
import final1 from "./img/final1.png";
import final2 from "./img/final2.png";
import final3 from "./img/final3.png";
import final4 from "./img/final4.png";
import final5 from "./img/final5.png";
import final6 from "./img/final6.png";
import final7 from "./img/final7.png";
import video1 from "./img/video1.mp4";
import video2 from "./img/video2.mp4";
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
                            <img src={background1} style={{height: '100%'}} alt={'Diagram showing how lots of people shares limited resources in typical Chinese college dorms. 4 - 8 people shares a 15 - 30 square meter room. 1000 - 2000 people shares a building.'} />
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
                            <img src={background2} style={{height: '100%'}} alt={'Diagram showing students lack both private and enough facilities and social life in both dorms and activity spaces.'} />
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
                        <img src={strategy} style={{width: '100%'}} alt={'Diagram showing large dorms and activity centers are split into small living and interest units, which finally forms unit villages.'} />
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
                                <img src={storyboard1} style={{width: '100%'}} alt={'Image showing students with different interests living together.'} />
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
                                <img src={storyboard2} style={{width: '100%'}} alt={'Image showing 4 students who like games matches each other and form a village.'} />
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
                                <img src={storyboard3} style={{width: '100%'}} alt={'Image showing a student applies a game interest unit on an app.'} />
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
                            <div style={{color: colors.white, width: 20, height: 20}}>
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
                                <img src={storyboard4} style={{width: '100%'}} alt={'Image showing a game interest unit is moved into the village.'} />
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
                                <img src={storyboard5} style={{width: '100%'}} alt={'Image showing students share the game interest unit in the village.'} />
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
                                <img src={storyboard6} style={{width: '100%'}} alt={'Image showing students discussing which interest unit to replace the existing one with.'} />
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
                        <img src={ecosystem} style={{width: '100%'}} alt={'Ecosystem map showing students manage and use facilities according to their own needs, while the college mainly maintains the facilities and spaces, fostering greater student autonomy.'} />
                    </Card>
                )
            },
        ])},

        /*************************************************************************
         *
         *       Overview: Final Design: Intro
         *
         **************************************************************************/
        {stage: 'FINAL DESIGN', render: (animateIn: boolean, animateOut: boolean) => ([
            {
                x: 600,
                y: 56,
                z: 1,
                children: (
                    <Card
                        w={600}
                        padding={36}
                        bg={colors.white}
                        borderWidth={2}
                        borderColor={colors.primary}
                        radius={24}
                        animateIn={animateIn}
                        animateOut={animateOut}
                    >
                    <div style={{
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        gap: '16px',
                    }}>
                        <span style={{
                            color: colors.primary,
                            fontWeight: 600,
                            fontSize: '36px',
                        }}>
                            Typical living unit
                        </span>
                        <span style={{
                            color: colors.secondary,
                            fontSize: '20px',
                            fontWeight: 300,
                        }}>
                            Same footprint, larger bed, more privacy, own bathroom
                        </span>
                        <div style={{
                            display: 'flex',
                            flexDirection: 'row',
                            alignItems: 'flex-start',
                        }}>

                            <div style={{
                                width: 240,
                                display: 'flex',
                                flexDirection: 'column',
                                alignItems: 'center',
                                justifyContent: 'center',
                                textAlign: 'center',
                                fontSize: '20px',
                                gap: '12px',
                            }}>
                                <Card
                                    h={200}
                                    padding={12}
                                    animateIn={animateIn}
                                    animateOut={animateOut}
                                >
                                    <img src={final1} style={{height: '100%'}} alt={'Image showing typical loft bed in college dorms that is only 3.3m high, 2.2m long, and 1.65m wide.'} />
                                </Card>
                                <span style={{
                                    color: colors.primary,
                                    fontWeight: 600,
                                }}>
                                    Typical loft bed
                                </span>
                            </div>
                            <div style={{
                                height: 200,
                                display: 'flex',
                                flexDirection: 'row',
                                alignItems: 'center',
                            }}>
                                <Card
                                    w={28}
                                    h={28}
                                    bg={colors.primary}
                                    radius={20}
                                    animateIn={animateIn}
                                    animateOut={animateOut}
                                >
                                    <div style={{color: colors.white, width: 16, height: 16}}>
                                        <RightArrowLargeIcon size={16} />
                                    </div>
                                </Card>
                            </div>
                            <div style={{
                                width: 240,
                                display: 'flex',
                                flexDirection: 'column',
                                alignItems: 'center',
                                justifyContent: 'center',
                                textAlign: 'center',
                                fontSize: '20px',
                                gap: '12px',
                            }}>
                                <Card
                                    h={200}
                                    padding={12}
                                    animateIn={animateIn}
                                    animateOut={animateOut}
                                >
                                    <img src={final2} style={{height: '100%'}} alt={'Image showing the living unit with the same size as loft beds but with more facilities.'} />
                                </Card>
                                <span style={{
                                    color: colors.primary,
                                    fontWeight: 600,
                                }}>
                                    Changeable living unit
                                </span>
                            </div>
                        </div>
                        <Card
                            h={200}
                            padding={[24, 24, 0, 24]}
                            animateIn={animateIn}
                            animateOut={animateOut}
                        >
                            <img src={final3} style={{height: '100%'}} alt={'Diagram showing the space of a living unit can be changed to adapt to diverse activities, including seating, lying, simple activities, and washing.'} />
                        </Card>
                        <span style={{
                            color: colors.secondary,
                            fontSize: '20px',
                            fontWeight: 300,
                        }}>
                            * Units can be customized for diverse access needs
                        </span>
                    </div>
                    </Card>
                )
            },
            {
                x: 0,
                y: 20,
                z: 0,
                children: (
                    <Card
                        h={740}
                        radius={24}
                        animateIn={animateIn}
                        animateOut={animateOut}
                    >
                        <img src={final4} style={{height: '100%'}} alt={'Scenario showing how students live with units within a village. The adaptable beds and tables, foldable bathrooms, and OLED film doors of living units allow students to study, wash, and sleep. A fitness interest unit is being placed into the village.'} />
                    </Card>
                )
            },
        ])},

        /*************************************************************************
         *
         *       Overview: Final Design: Video 1
         *
         **************************************************************************/
        {stage: 'FINAL DESIGN', render: (animateIn: boolean, animateOut: boolean) => ([
            {
                x: 0,
                y: 240,
                z: 1,
                children: (
                    <Card
                        animateIn={animateIn}
                        animateOut={animateOut}
                    >
                        <span style={{
                            color: colors.primary,
                            fontWeight: 600,
                            fontSize: '36px',
                        }}>
                            Adjustable<br />bed & desk<br /><br />Foldable<br />bathroom
                        </span>
                    </Card>
                )
            },
            {
                x: 280,
                y: 20,
                z: 1,
                children: (
                    <Card
                        radius={24}
                        h={720}
                        padding={36}
                        bg={colors.white}
                        animateIn={animateIn}
                        animateOut={animateOut}
                    >
                        <video src={video1} style={{height: '100%'}} autoPlay loop muted playsInline />
                    </Card>
                )
            },
        ])},

        /*************************************************************************
         *
         *       Overview: Final Design: Video 2
         *
         **************************************************************************/
        {stage: 'FINAL DESIGN', render: (animateIn: boolean, animateOut: boolean) => ([
            {
                x: 0,
                y: 200,
                z: 1,
                children: (
                    <Card
                        animateIn={animateIn}
                        animateOut={animateOut}
                    >
                    <span style={{
                        color: colors.primary,
                        fontWeight: 600,
                        fontSize: '36px',
                    }}>
                        Sliding<br />OLED<br />film door
                    </span>
                    </Card>
                )
            },
            {
                x: 380,
                y: 20,
                z: 0,
                children: (
                    <Card
                        radius={24}
                        h={720}
                        padding={36}
                        bg={colors.white}
                        animateIn={animateIn}
                        animateOut={animateOut}
                    >
                        <video src={video2} style={{height: '100%'}} autoPlay loop muted playsInline />
                    </Card>
                )
            },
            {
                x: 0,
                y: 360,
                z: 0,
                children: (
                    <Card
                        w={420}
                        padding={16}
                        bg={colors.white}
                        borderWidth={2}
                        borderColor={colors.primary}
                        radius={24}
                        animateIn={animateIn}
                        animateOut={animateOut}
                    >
                        <img src={final5} width={'100%'} alt={'Structural diagram of the OLED film door showing 5 layers: protective layer, OLED display film, PI plastic substrate, electrically controlled film, and another protective layer.'} />
                    </Card>
                )
            },
        ])},
        /*************************************************************************
         *
         *       Overview: Final Design - Interest Unit
         *
         **************************************************************************/
        {stage: 'FINAL DESIGN', render: (animateIn: boolean, animateOut: boolean) => ([
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
                                Interest Unit
                            </span>
                        </Card>
                    </div>
                )
            },
            {
                x: 120,
                y: 128,
                z: 1,
                children: (
                    <Card
                        w={960}
                        padding={36}
                        radius={24}
                        bg={colors.white}
                        animateIn={animateIn}
                        animateOut={animateOut}
                    >
                        <img src={final6} style={{width: '100%'}} alt={'Image showing different types of interest units which share the same 3m×3m×3m size, and a large seminar interest unit which can be folded into the 3m×3m×3m size.'} />
                    </Card>
                )
            },
        ])},
        /*************************************************************************
         *
         *       Overview: Final Design - Large Space System
         *
         **************************************************************************/
        {stage: 'FINAL DESIGN', render: (animateIn: boolean, animateOut: boolean) => ([
            {
                x: 0,
                y: 120,
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
                            Large space system
                        </span>
                        </Card>
                    </div>
                )
            },
            {
                x: 140,
                y: 200,
                z: 1,
                children: (
                    <Card
                        w={920}
                        padding={36}
                        radius={24}
                        bg={colors.white}
                        animateIn={animateIn}
                        animateOut={animateOut}
                    >
                        <img src={final7} style={{width: '100%'}} alt={'Sectional view showing a large-span building provides flowing space and large elevators for free unit moving, a shared space where parks unused interest units as a activity center, and infrastructure connections providing energy, water, and ventilation to units.'} />
                    </Card>
                )
            },
        ])},
        /*************************************************************************
         *
         *       Acknowledgement
         *
         **************************************************************************/
        {stage: 'FINAL DESIGN', render: (animateIn: boolean, animateOut: boolean) => ([
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
                            Individual project ／ Jan. - Feb. 2021
                            <br />
                            Supervisor: Assoc. Prof. Jing Wang
                        </span>
                        </div>
                    </Card>
                )
            },
        ])},
    ]
})

export default dormitoryVillage