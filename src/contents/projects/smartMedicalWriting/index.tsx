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
import ui5 from "./img/ui5.png";
import ui6 from "./img/ui6.png";
import ui7 from "./img/ui7.png";
import ui8 from "./img/ui8.png";
import ui9 from "./img/ui9.png";
import ui10 from "./img/ui10.png";
import highlight1a from "./img/highlight1a.png";
//import highlight1b from "./img/highlight1b.png";
import highlight2 from "./img/highlight2.png";
import React from "react";
import Card from "../../../components/Card";
import CardSlide from "../../../components/CardSlide";
import InfoLabel from "../../../components/InfoLabel";
import Highlight1A from "./component/Highlight1A";
import {RightArrowLargeIcon} from "../../../assets/icons/RightArrowLargeIcon";

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
         *       Overview: Highlight1A - Variable Import
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
                            <img src={highlight1a} width={600} alt={'Diagram showing a single modification helped reduce the steps, mouse movement, and interruptions of this feature.'} />
                        </div>
                    </Card>
                )
            },
        ])},
        /*************************************************************************
         *
         *       Overview: Highlight1A - Variable Import
         *
         **************************************************************************/
        {stage: 'WORD PLUGIN', render: (animateIn: boolean, animateOut: boolean) => ([
            {
                x: 0,
                y: 0,
                z: 1,
                children: (
                    <Highlight1A animateOut={animateOut} />
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
                y: 192,
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
                            Variable<br />position<br />pconfig
                        </span>
                    </Card>
                )
            },
            {
                x: 0,
                y: 352,
                z: 1,
                children: (
                    <Card
                        w={272}
                        padding={24}
                        bg={colors.white}
                        radius={24}
                        animateIn={animateIn}
                        animateOut={animateOut}
                    >
                        <span style={{
                            color: colors.secondary,
                            fontWeight: 300,
                            fontSize: '20px',
                        }}>
                            Detail improvements:<br />＞integrated flow<br />＞low interruption<br />＞consequence-aware
                        </span>
                    </Card>
                )
            },
            {
                x: 360,
                y: 60,
                z: 1,
                children: (
                    <div style={{
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        gap: '24px',
                    }}>
                        <Card
                            animateIn={true}
                            animateOut={animateOut}
                        >
                            <span style={{
                                color: colors.primary,
                                fontWeight: 600,
                                fontSize: '24px',
                                textAlign: 'center'
                            }}>
                                Original design
                            </span>
                        </Card>
                        <CardSlide
                            interval={3000}
                            borderColor={'transparent'}
                            bg={colors.white}
                            borderWidth={0}
                            animateIn={true}
                            animateOut={animateOut}
                            children={[(
                                <img src={ui1} width={360} alt={'Variable list without position display, with an "Add Position" at the top-right corner.'} />
                            ),(
                                <img src={ui2} width={360} alt={'Separate position list in the variable detail page, showing position contexts and the detach and delete buttons'} />
                            ),(
                                <img src={ui3} width={360} alt={'Variable list with a disabled delete button, showing a tooltip indicating only variables without positions and dependent variables can be deleted.'} />
                            )]}
                        />
                    </div>
                )
            },
            {
                x: 766,
                y: 380,
                z: 1,
                children: (
                    <Card
                        w={28}
                        h={28}
                        bg={colors.primary}
                        radius={24}
                        animateIn={true}
                        animateOut={animateOut}
                    >
                        <div style={{color: colors.white, width: 16, height: 16}}>
                            <RightArrowLargeIcon size={16} />
                        </div>
                    </Card>
                )
            },
            {
                x: 840,
                y: 60,
                z: 1,
                children: (
                    <div style={{
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        gap: '24px',
                    }}>
                        <Card
                            animateIn={true}
                            animateOut={animateOut}
                        >
                            <span style={{
                                color: colors.primary,
                                fontWeight: 600,
                                fontSize: '24px',
                                textAlign: 'center'
                            }}>
                                Final version
                            </span>
                        </Card>
                        <CardSlide
                            interval={3000}
                            borderColor={'transparent'}
                            bg={colors.white}
                            borderWidth={0}
                            animateIn={true}
                            animateOut={animateOut}
                            children={[(
                                <img src={ui4} width={360} alt={'Variable list directly shoring foldable position list with a large "Add Position" button.'} />
                            ),(
                                <img src={ui5} width={360} alt={'The position list transforms into a position search-and-add feature.'} />
                            ),(
                                <img src={ui6} width={360} alt={'Warning pop-up showing a list of dependencies and indicating deleting this variable will delete all of them.'} />
                            )]}
                        />
                    </div>
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
                            <img src={highlight2} width={'100%'} alt={'Diagram showing three originally separate features were integrated into a loop, reducing development effort and enabling a roles and stages-based control.'} />
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
                            <img src={ui7} width={1200} alt={'Report detail page showing a version history sidebar and a approval process diagram side card with a withdraw button for the author.'} />
                        ), (
                            <img src={ui8} width={1200} alt={'Report detail page showing only a page details side card with a "Go to Review" button for the reviewer.'} />
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
                            <img src={ui9} width={1200} alt={'Access control page with a drop-down list allowing searching and configuring user roles.'} />
                        ), (
                            <img src={ui10} width={1200} alt={'Access control page with drag-and-drop user cards that can be moved into another group.'} />
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
        /*************************************************************************
         *
         *       Acknowledgement
         *
         **************************************************************************/
        {stage: 'WEB PLATFORM', render: (animateIn: boolean, animateOut: boolean) => ([
            {
                x: 300,
                y: 240,
                z: 0,
                children: (
                    <Card
                        w={600}
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
                            UX/UI intern ／ Mar. - Jun. 2025
                            <br /><br />
                            All sensitive information has been anonymized or removed with PM consent.
                        </span>
                        </div>
                    </Card>
                )
            },
        ])},
    ]
})

export default smartMedicalWriting