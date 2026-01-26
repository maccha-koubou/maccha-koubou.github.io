import React from 'react'
import {createProject, ProjectType, SubProjectType} from "../../../config/ProjectType";
import cover from "./cover.png";
import coverColored from "./cover_colored.png";
import {colors} from "../../../styles/theme";
import CardStack from "../../../components/CardStack";
import Card from "../../../components/Card";

const exploreInVirtualLight = createProject({
    titleWithLineBreak: 'Explore \nin \nVirtual \nLight',
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
        {stage: 'OVERVIEW', render: (animateIn: boolean, animateOut: boolean) => ([
            {
                x: 0,
                y: 0,
                z: 1,
                children: (
                    <CardStack
                        w={520}
                        initialHiding={true}
                        animateIn={animateIn}
                        animateOut={animateOut}
                    >
                                <span style={{
                                    padding: '40px 40px 40px 160px',
                                    fontWeight: '300',
                                    fontSize: '20px',
                                    color: colors.secondary,
                                }}>
                                    I am a product designer and architect. Whether in digital services or physical spaces, I believe design can connect technology, physical world, society, and people. Through design, I aim to bring warm and inclusive responses to systemic problems.
                                </span>
                    </CardStack>
                )
            },
            {
                x: 200,
                y: 200,
                z: 1,
                children: (
                    <Card
                        w={520}
                        bg={colors.white}
                        borderWidth={2}
                        borderColor={colors.primaryLight}
                        radius={24}
                        initialHiding={true}
                        animateIn={animateIn}
                        animateOut={animateOut}
                    >
                            <span style={{
                                padding: '40px 40px 40px 160px',
                                fontWeight: '300',
                                fontSize: '20px',
                                color: colors.secondary,
                            }}>
                                I am a product designer and architect. Whether in digital services or physical spaces, I believe design can connect technology, physical world, society, and people. Through design, I aim to bring warm and inclusive responses to systemic problems.
                            </span>
                    </Card>
                )
            },
        ])},
        /*************************************************************************
         *
         *       Introduction
         *
         **************************************************************************/
        {stage: 'OVERVIEW', render: (animateIn: boolean, animateOut: boolean) => ([
            {
                x: 0,
                y: 0,
                z: 1,
                children: (
                    <Card
                        w={1200}
                        h={784}
                        bg={colors.primaryLight}
                        initialHiding={true}
                        animateIn={animateIn}
                        animateOut={animateOut}
                    >
                        <></>
                    </Card>
                )
            },
        ])},
        /*************************************************************************
         *
         *       Introduction
         *
         **************************************************************************/
        {stage: 'OVERVIEW', render: (animateIn: boolean, animateOut: boolean) => ([
            {
                x: 0,
                y: 0,
                z: 1,
                children: (
                    <Card
                        w={1200}
                        h={784}
                        bg={colors.primaryLight}
                        initialHiding={true}
                        animateIn={animateIn}
                        animateOut={animateOut}
                    >
                        <></>
                    </Card>
                )
            },
        ])},
        /*************************************************************************
         *
         *       Introduction
         *
         **************************************************************************/
        {stage: 'RESEARCH & IDEATION', render: (animateIn: boolean, animateOut: boolean) => ([
            {
                x: 0,
                y: 0,
                z: 1,
                children: (
                    <Card
                        w={1200}
                        h={784}
                        bg={colors.secondary}
                        initialHiding={true}
                        animateIn={animateIn}
                        animateOut={animateOut}
                    >
                        <></>
                    </Card>
                )
            },
        ])},
        /*************************************************************************
         *
         *       Introduction
         *
         **************************************************************************/
        {stage: 'RESEARCH & IDEATION', render: (animateIn: boolean, animateOut: boolean) => ([
            {
                x: 0,
                y: 0,
                z: 1,
                children: (
                    <Card
                        w={1200}
                        h={784}
                        bg={colors.primaryLight}
                        initialHiding={true}
                        animateIn={animateIn}
                        animateOut={animateOut}
                    >
                        <></>
                    </Card>
                )
            },
        ])},
        /*************************************************************************
         *
         *       Introduction
         *
         **************************************************************************/
        {stage: 'RESEARCH & IDEATION', render: (animateIn: boolean, animateOut: boolean) => ([
            {
                x: 0,
                y: 0,
                z: 1,
                children: (
                    <Card
                        w={1200}
                        h={784}
                        bg={colors.primaryLight}
                        initialHiding={true}
                        animateIn={animateIn}
                        animateOut={animateOut}
                    >
                        <></>
                    </Card>
                )
            },
        ])},

    ]
})

export default exploreInVirtualLight