import {createProject, ProjectType, SubProjectType} from "../../../config/ProjectType";
import cover from "./cover.png";
import coverColored from "./cover_colored.png";
import CardStack from "../../../components/CardStack";
import {colors} from "../../../styles/theme";
import background from "./img/background.png";
import ui1 from "./img/ui1.png";
import ui2 from "./img/ui2.png";
import ui3 from "./img/ui3.png";
import ui4 from "./img/ui4.png";
import highlight1a from "./img/highlight1a.png";
//import highlight1b from "./img/highlight1b.png";
import highlight2 from "./img/highlight2.png";
import React from "react";
import Card from "../../../components/Card";
import CardSlide from "../../../components/CardSlide";
import InfoLabel from "../../../components/InfoLabel";
import Highlight1 from "./component/Highlight1";

const smartMedicalWriting = createProject({
    titleWithLineBreak: 'Smart Medical Writing',
    subtitle: 'UX/UI internship project: A smart medical report writing tool',
    cover: cover,
    coverColored: coverColored,
    coverAlt: '',
    color: {primary: '#672CFF', primaryLight: '#976EFF', secondary: '#5D6576', secondaryLight: '#7C828E', neon: '#FFBEEC'},
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
         *       Overview: Highlight1A - Version Control & Access Management
         *
         **************************************************************************/
        {stage: 'WORD PLUGIN', render: (animateIn: boolean, animateOut: boolean) => ([
            {
                x: 0,
                y: 296,
                z: 1,
                children: (
                    <Card
                        animateIn={animateIn}
                        animateOut={animateOut}
                    >
                        <div style={{
                            display: 'flex',
                            flexDirection: 'column',
                            justifyContent: 'flex-start',
                            gap: '24px',
                        }}>
                            <span style={{
                                color: colors.primary,
                                fontWeight: 500,
                                fontSize: '24px',
                            }}>
                                Highlight 1<br />(word plugin)
                            </span>
                            <span style={{
                                color: colors.primary,
                                fontWeight: 600,
                                fontSize: '36px',
                            }}>
                                Variable import
                            </span>
                        </div>
                    </Card>
                )
            },
            {
                x: 400,
                y: 132,
                z: 1,
                children: (
                    <Card
                        w={800}
                        padding={36}
                        bg={colors.white}
                        radius={24}
                        animateIn={animateIn}
                        animateOut={animateOut}
                    >
                        <div style={{
                            width: '100%',
                            height: '100%',
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'center',
                            gap: '36px',
                        }}>
                            <span style={{
                                color: colors.secondary,
                                fontWeight: 300,
                                fontSize: '20px',
                            }}>
                                Users are required to confirm each imported variable. However, the original design brought unnecessary actions and interruptions.
                                <br /><br />
                                I improved this feature, halving steps with minimal development effort.
                            </span>
                            <img src={highlight1a} width={600} alt={'Diagram showing'} />
                        </div>
                    </Card>
                )
            },
        ])},
        /*************************************************************************
         *
         *       Overview: Highlight1A - Version Control & Access Management
         *
         **************************************************************************/
        {stage: 'WORD PLUGIN', render: (animateIn: boolean, animateOut: boolean) => ([
            {
                x: 0,
                y: 0,
                z: 1,
                children: (
                    <Highlight1 animateOut={animateOut} />
                )
            },
        ])},
        /*************************************************************************
         *
         *       Overview: Highlight1B - Position Config
         *
         **************************************************************************/
        {stage: 'WORD PLUGIN', render: (animateIn: boolean, animateOut: boolean) => ([
            {
                x: 0,
                y: 296,
                z: 1,
                children: (
                    <Card
                        animateIn={animateIn}
                        animateOut={animateOut}
                    >
                        <div style={{
                            display: 'flex',
                            flexDirection: 'column',
                            justifyContent: 'flex-start',
                            gap: '24px',
                        }}>
                        <span style={{
                            color: colors.primary,
                            fontWeight: 500,
                            fontSize: '24px',
                        }}>
                            Highlight 1<br />(word plugin)
                        </span>
                            <span style={{
                                color: colors.primary,
                                fontWeight: 600,
                                fontSize: '36px',
                            }}>
                            Position config
                        </span>
                        </div>
                    </Card>
                )
            },
            {
                x: 400,
                y: 152,
                z: 1,
                children: (
                    <Card
                        w={800}
                        padding={36}
                        bg={colors.white}
                        radius={24}
                        animateIn={animateIn}
                        animateOut={animateOut}
                    >
                        <div style={{
                            width: '100%',
                            height: '100%',
                            display: 'flex',
                            flexDirection: 'column',
                            gap: '36px',
                        }}>
                        <span style={{
                            color: colors.secondary,
                            fontWeight: 300,
                            fontSize: '20px',
                        }}>
                            I owned these UX, integrating them into the template/report detail pages.
                            <br /><br />
                            I also discussed edge cases with the PM (e.g. if the first version is withdrawn), and clarified which actions are available to different roles at different stages.
                        </span>
                            <img src={highlight1a} width={'100%'} alt={'Diagram showing'} />
                        </div>
                    </Card>
                )
            },
        ])},
        /*************************************************************************
         *
         *       Overview: Highlight2 - Version Control & Access Management
         *
         **************************************************************************/
        {stage: 'WEB PLATFORM', render: (animateIn: boolean, animateOut: boolean) => ([
            {
                x: 0,
                y: 240,
                z: 1,
                children: (
                    <Card
                        animateIn={animateIn}
                        animateOut={animateOut}
                    >
                        <div style={{
                            display: 'flex',
                            flexDirection: 'column',
                            justifyContent: 'flex-start',
                            gap: '24px',
                        }}>
                            <span style={{
                                color: colors.primary,
                                fontWeight: 500,
                                fontSize: '24px',
                            }}>
                                Highlight 2<br />(web platform)
                            </span>
                            <span style={{
                                color: colors.primary,
                                fontWeight: 600,
                                fontSize: '36px',
                            }}>
                                Version control<br />Approval process<br />Access control
                            </span>
                        </div>
                    </Card>
                )
            },
            {
                x: 400,
                y: 152,
                z: 1,
                children: (
                    <Card
                        w={800}
                        padding={36}
                        bg={colors.white}
                        radius={24}
                        animateIn={animateIn}
                        animateOut={animateOut}
                    >
                        <div style={{
                            width: '100%',
                            height: '100%',
                            display: 'flex',
                            flexDirection: 'column',
                            gap: '36px',
                        }}>
                            <span style={{
                                color: colors.secondary,
                                fontWeight: 300,
                                fontSize: '20px',
                            }}>
                                I owned their UX, integrating them into the template/report detail pages.
                                <br /><br />
                                I also discussed edge cases with the PM (e.g. if the first version is withdrawn), and clarified which actions are available to different roles at different stages.
                            </span>
                            <img src={highlight2} width={'100%'} alt={'Diagram showing'} />
                        </div>
                    </Card>
                )
            },
        ])},
        /*************************************************************************
         *
         *       Overview: Highlight2 - Version Control & Access Management
         *
         **************************************************************************/
        {stage: 'WEB PLATFORM', render: (animateIn: boolean, animateOut: boolean) => ([
            {
                x: 0,
                y: 36,
                z: 1,
                children: (
                    <CardSlide
                        interval={3000}
                        borderColor={'transparent'}
                        borderWidth={0}
                        children={[(
                            <img src={ui1} width={1200} alt={'Diagram showing'} />
                        ), (
                            <img src={ui2} width={1200} alt={'Diagram showing'} />
                        )
                        ]}
                        animateIn={animateIn}
                        animateOut={animateOut}
                    />
                )
            },
        ])},
        /*************************************************************************
         *
         *       Overview: Highlight2 - Version Control & Access Management
         *
         **************************************************************************/
        {stage: 'WEB PLATFORM', render: (animateIn: boolean, animateOut: boolean) => ([
            {
                x: 0,
                y: 36,
                z: 1,
                children: (
                    <CardSlide
                        interval={2000}
                        borderColor={'transparent'}
                        borderWidth={0}
                        children={[(
                            <img src={ui3} width={1200} alt={'Diagram showing'} />
                        ), (
                            <img src={ui4} width={1200} alt={'Diagram showing'} />
                        )
                        ]}
                        animateIn={animateIn}
                        animateOut={animateOut}
                    />
                )
            },
            {
                x: 0,
                y: 724,
                z: 2,
                children: (
                    <div style={{width: 1200, display: 'flex', justifyContent: 'center'}}>
                        <InfoLabel animateIn={animateIn} animateOut={animateOut} text={'From separate to together users & roles configuration, I bridged the cognitive gap and reduced steps & mistakes in access control.'} />
                    </div>
                )
            },
        ])},
    ]
})

export default smartMedicalWriting