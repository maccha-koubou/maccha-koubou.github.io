import {createProject, ProjectType, SubProjectType} from "../../../config/ProjectType";
import cover from "./cover.png";
import coverColored from "./cover_colored.png";
import CardStack from "../../../components/CardStack";
import {colors} from "../../../styles/theme";
import React from "react";
import Card from "../../../components/Card";
import {RightArrowLargeIcon} from "../../../assets/icons/RightArrowLargeIcon";
import background1 from "./img/background1.png";
import background2 from "./img/background2.png";
import background3 from "./img/background3.png";
import background4 from "./img/background4.png";
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

const queerRadar = createProject({
    titleWithLineBreak: 'Queer Radar',
    subtitle: 'Digital modular keychain to show diverse LGBTQIA+ pride safely',
    cover: cover,
    coverColored: coverColored,
    coverAlt: 'Image showing a keychain composed of multiple luminous tetrahedral units showing the color of the pride flag.',
    color: {primary: '#575C63', primaryLight: '#575C63', secondary: '#797D84', secondaryLight: '#797D84', neon: '#66FFFF'},
    landscape: {x: 0.5, y: 0.5},
    portrait: {x: 0.5, y: 0.5},
    types: [ProjectType.PRODUCT],
    subtypes: [SubProjectType.PHYSICAL_PRODUCTS],
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
                                Digital modular keychain<br />to show diverse LGBTQIA+ pride safely
                            </span>
                            <span style={{
                                color: colors.primary,
                                fontWeight: 300,
                                fontSize: '20px',
                            }}>
                                Interactive product ／ Modular product
                            </span>
                            <span style={{
                                color: colors.secondary,
                                fontWeight: 300,
                                fontSize: '20px',
                            }}>
                                Queer Radar is a modular keychain that can be freely assembled, with unit colors customizable to show various pride flags.
                                <br /><br />
                                With the help of a companion app, users can show diverse identities, connect to nearby allies with safe, and map the presence of queers.
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
                            Accessories can help queers show identities and find peers, but may also bring visibility and safety problems.
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
                        height: 360,
                        display: 'flex',
                        flexDirection: 'row',
                        alignItems: 'center',
                        justifyContent: 'center',
                        gap: '24px',
                    }}>
                        <Card
                            h={'100%'}
                            animateIn={animateIn}
                            animateOut={animateOut}
                        >
                            <img src={background1} style={{height: '100%'}} alt={'Image showing different kinds of queer accessories with pride flags, pronouns, or slogans.'} />
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
                        <div style={{
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'center',
                            justifyContent: 'flex-start',
                            gap: '12px',
                            color: colors.primary,
                            fontWeight: 600,
                            fontSize: '24px',
                        }}>
                            <Card
                                animateIn={animateIn}
                                animateOut={animateOut}
                            >
                                <span style={{
                                    color: colors.primary,
                                    fontWeight: 600,
                                    fontSize: '20px',
                                }}>
                                    Significance
                                </span>
                            </Card>
                            <Card
                                padding={8}
                                radius={60}
                                bg={colors.white}
                                animateIn={animateIn}
                                animateOut={animateOut}
                            >
                                <div style={{
                                    width: 240,
                                    height: 72,
                                    display: 'flex',
                                    flexDirection: 'row',
                                    alignItems: 'center',
                                    justifyContent: 'flex-start',
                                    gap: '12px',
                                }}>
                                    <img src={background2} style={{height: '100%'}} alt={''} />
                                    <span>
                                        Build<br />connection
                                    </span>
                                </div>
                            </Card>
                            <Card
                                padding={8}
                                radius={60}
                                bg={colors.white}
                                animateIn={animateIn}
                                animateOut={animateOut}
                            >
                                <div style={{
                                    width: 240,
                                    height: 72,
                                    display: 'flex',
                                    flexDirection: 'row',
                                    alignItems: 'center',
                                    justifyContent: 'flex-start',
                                    gap: '12px',
                                }}>
                                    <img src={background3} style={{height: '100%'}} alt={''} />
                                    <span>
                                        Improve<br />visibility
                                    </span>
                                </div>
                            </Card>
                            <Card
                                padding={8}
                                radius={60}
                                bg={colors.white}
                                animateIn={animateIn}
                                animateOut={animateOut}
                            >
                                <div style={{
                                    width: 240,
                                    height: 72,
                                    display: 'flex',
                                    flexDirection: 'row',
                                    alignItems: 'center',
                                    justifyContent: 'flex-start',
                                    gap: '12px',
                                }}>
                                    <img src={background4} style={{height: '100%'}} alt={''} />
                                    <span>
                                        Affirm<br />identity
                                    </span>
                                </div>
                            </Card>
                        </div>
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
                        <div style={{
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'center',
                            justifyContent: 'flex-start',
                            gap: '12px',
                            color: colors.primary,
                            fontWeight: 600,
                            fontSize: '24px',
                            textAlign: 'center'
                        }}>
                            <Card
                                animateIn={animateIn}
                                animateOut={animateOut}
                            >
                                <span style={{
                                    color: colors.primary,
                                    fontWeight: 600,
                                    fontSize: '20px',
                                }}>
                                    Problems
                                </span>
                            </Card>
                            <Card
                                padding={8}
                                radius={60}
                                w={220}
                                h={88}
                                bg={colors.white}
                                animateIn={animateIn}
                                animateOut={animateOut}
                            >
                                <span>
                                    Difficulty in<br />finding peers
                                </span>
                            </Card>
                            <Card
                                padding={8}
                                radius={60}
                                w={220}
                                h={88}
                                bg={colors.white}
                                animateIn={animateIn}
                                animateOut={animateOut}
                            >
                                <span>
                                    Censorship<br />& safety
                                </span>
                            </Card>
                            <Card
                                padding={8}
                                radius={60}
                                w={220}
                                h={88}
                                bg={colors.white}
                                animateIn={animateIn}
                                animateOut={animateOut}
                            >
                                <span>
                                    Limited<br />choices
                                </span>
                            </Card>
                        </div>
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
                y: 140,
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
                                Strategy
                            </span>
                        </Card>
                    </div>
                )
            },
            {
                x: 100,
                y: 220,
                z: 1,
                children: (
                    <Card
                        w={1000}
                        padding={36}
                        radius={24}
                        bg={colors.white}
                        animateIn={animateIn}
                        animateOut={animateOut}
                    >
                        <img src={strategy} style={{width: '100%'}} alt={'Diagram showing an app-controlled modular accessory can address tha challenges of finding peers, limited choices, and safety by color-changeable and controllable modules and sensing nearby users.'} />
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
                                <img src={storyboard1} style={{width: '100%'}} alt={'Image showing the user adjust the color of each unit to form a pride flag pattern on the app.'} />
                            </Card>
                            <span style={{
                                color: colors.primary,
                                fontWeight: 600,
                                fontSize: '24px',
                            }}>
                            Set colors in the app
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
                                <img src={storyboard2} style={{width: '100%'}} alt={'Image showing the queer radar light up when there is another user nearby.'} />
                            </Card>
                            <span style={{
                                color: colors.primary,
                                fontWeight: 600,
                                fontSize: '24px',
                            }}>
                            Light up near peers
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
                                <img src={storyboard3} style={{width: '100%'}} alt={'Image showing the user can see the other user\'s radar color, but cannot see the other user\'s name or position on the app.'} />
                            </Card>
                            <span style={{
                                color: colors.primary,
                                fontWeight: 600,
                                fontSize: '24px',
                            }}>
                            Privacy protected
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
                                <img src={storyboard4} style={{width: '100%'}} alt={'Image showing the user asks the other user a question to see whether the other user is trustworthy on the app.'} />
                            </Card>
                            <span style={{
                                color: colors.primary,
                                fontWeight: 600,
                                fontSize: '24px',
                            }}>
                                Verify by secret questions
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
                                <img src={storyboard5} style={{width: '100%'}} alt={'Image showing the user turns off the light display of the queer radar.'} />
                            </Card>
                            <span style={{
                                color: colors.primary,
                                fontWeight: 600,
                                fontSize: '24px',
                            }}>
                            Turn off when unsafe
                        </span>
                        </div>
                        <Card
                            w={40}
                            animateIn={animateIn}
                            animateOut={animateOut}
                        >
                            <div style={{background: colors.secondaryLight, width: 2, height: 220}} />
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
                                <img src={storyboard6} style={{width: '100%'}} alt={'Image showing places that users have been can be colored by queer colors.'} />
                            </Card>
                            <span style={{
                                color: colors.primary,
                                fontWeight: 600,
                                fontSize: '24px',
                            }}>
                                Queer color mapping
                            </span>
                        </div>
                        <div style={{width: 40, height: 40}}/>
                    </div>
                )
            },
        ])},
        /*************************************************************************
         *
         *       Overview: Final Design - 1
         *
         **************************************************************************/
        {stage: 'FINAL DESIGN', render: (animateIn: boolean, animateOut: boolean) => ([
            {
                x: 120,
                y: 180,
                z: 1,
                children: (
                    <Card
                        padding={36}
                        radius={14}
                        bg={colors.white}
                        animateIn={animateIn}
                        animateOut={animateOut}
                    >
                        <div style={{
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'flex-start',
                            gap: '12px',
                        }}>
                            <span style={{
                                color: colors.primary,
                                fontWeight: 600,
                                fontSize: '36px',
                            }}>
                                Modular keychain
                            </span>
                            <span style={{
                                color: colors.primary,
                                fontWeight: 300,
                                fontSize: '20px',
                            }}>
                                Freely assembled tetrahedral units<br />form customizable pride flag patterns.
                            </span>
                        </div>
                    </Card>
                )
            },
            {
                x: 480,
                y: 20,
                z: 0,
                children: (
                    <Card
                        w={592}
                        radius={24}
                        bg={colors.white}
                        animateIn={animateIn}
                        animateOut={animateOut}
                    >
                        <img src={final1} style={{width: '100%'}} alt={'Image showing the queer radar (a keychain composed of multiple luminous tetrahedral units) showing the color of pride flag.'} />
                    </Card>
                )
            },
        ])},
        /*************************************************************************
         *
         *       Overview: Final Design - 2
         *
         **************************************************************************/
        {stage: 'FINAL DESIGN', render: (animateIn: boolean, animateOut: boolean) => ([
            {
                x: 100,
                y: 20,
                z: 0,
                children: (
                    <Card
                        w={1000}
                        radius={24}
                        bg={colors.white}
                        animateIn={animateIn}
                        animateOut={animateOut}
                    >
                        <img src={final2} style={{width: '100%'}} alt={'Image showing a flower-shaped queer radar showing trans pride flag colors is hang on a bag. A queer radar showing pansexual pride flag and several unconnected units are placed on the table.'} />
                    </Card>
                )
            },
        ])},
        /*************************************************************************
         *
         *       Overview: Final Design - Structure
         *
         **************************************************************************/
        {stage: 'FINAL DESIGN', render: (animateIn: boolean, animateOut: boolean) => ([
            {
                x: 100,
                y: 152,
                z: 0,
                children: (
                    <Card
                        w={1000}
                        radius={24}
                        padding={36}
                        bg={colors.white}
                        animateIn={animateIn}
                        animateOut={animateOut}
                    >
                        <img src={final3} style={{width: '100%'}} alt={'Diagram showing the structure of the head, illumination, and tail units of a queer radar. Head Unit acts as a hang hole and closes the circuit. Connectors on units help each unit be energized and receive signals from the control module on the tail unit.'} />
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
                        Individual project ／ Feb. 2024
                        <br />
                        No supervisor
                    </span>
                        </div>
                    </Card>
                )
            },
        ])},
    ]
})

export default queerRadar