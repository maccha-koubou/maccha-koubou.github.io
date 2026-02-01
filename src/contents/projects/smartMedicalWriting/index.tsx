import {createProject, ProjectType, SubProjectType} from "../../../config/ProjectType";
import cover from "./cover.png";
import coverColored from "./cover_colored.png";
import CardStack from "../../../components/CardStack";
import {colors} from "../../../styles/theme";
import background from "./img/background.png";
import React from "react";
import Card from "../../../components/Card";

const smartMedicalWriting = createProject({
    titleWithLineBreak: 'Smart Medical Writing',
    subtitle: 'UX/UI internship project: A smart medical report writing tool',
    cover: cover,
    coverColored: coverColored,
    coverAlt: '',
    color: {primary: '#672CFF', primaryLight: '#976EFF', secondary: '#5D6576', secondaryLight: '#7C828E', neon: '#FFBEEC'},
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
                                UX/UI internship work:<br />A smart medical report writing system
                            </span>
                            <span style={{
                                color: colors.primary,
                                fontWeight: 300,
                                fontSize: '20px',
                            }}>
                                Enterprise UX ／ Complex Systems
                            </span>
                            <span style={{
                                color: colors.secondary,
                                fontWeight: 300,
                                fontSize: '20px',
                            }}>
                                As a UX/UI intern on a smart medical report writing system, I focused on how to use clear logic within the usage process and the detailed design of component interaction within interconnected features, providing higher efficiency with lower risk of errors.
                            </span>
                        </div>
                    </CardStack>
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
                                textAlign: 'center'
                            }}>
                                Background:<br />Reduce repetitive writing work by a variable system
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
                            A Word plug-in is used to config and generate variables, and a web platform is used to manage this process.
                        </span>
                        </Card>
                    </div>
                )
            },
            {
                x: 0,
                y: 320,
                z: 1,
                children: (
                    <Card
                        w={1200}
                        animateIn={animateIn}
                        animateOut={animateOut}
                    >
                        <img src={background} width={'100%'} alt={'Diagram showing the system workflow, from template variables configuration to report generation based on input data in the Word plugin and approval management in the web platform, shortening the time from days to hours.'} />
                    </Card>
                )
            },
        ])},
        /*************************************************************************
         *
         *       Overview: Highlight1 - Version Control & Access Management
         *
         **************************************************************************/
        {stage: 'WEB PLATFORM', render: (animateIn: boolean, animateOut: boolean) => ([
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
                            textAlign: 'center'
                        }}>
                            Background:<br />Reduce repetitive writing work by a variable system
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
                        A Word plug-in is used to config and generate variables, and a web platform is used to manage this process.
                    </span>
                        </Card>
                    </div>
                )
            },
            {
                x: 0,
                y: 320,
                z: 1,
                children: (
                    <Card
                        w={1200}
                        animateIn={animateIn}
                        animateOut={animateOut}
                    >
                        <img src={background} width={'100%'} alt={'Diagram showing the system workflow, from template variables configuration to report generation based on input data in the Word plugin and approval management in the web platform, shortening the time from days to hours.'} />
                    </Card>
                )
            },
        ])},
    ]
})

export default smartMedicalWriting