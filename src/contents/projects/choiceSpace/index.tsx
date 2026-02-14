import {createProject, ProjectType, SubProjectType} from "../../../config/ProjectType";
import cover from "./cover.png";
import coverColored from "./cover_colored.png";
import CardStack from "../../../components/CardStack";
import {colors} from "../../../styles/theme";
import Button from "../../../components/Button";
import {RightArrowIcon} from "../../../assets/icons/RightArrowIcon";
import React from "react";
import Card from "../../../components/Card";
import render1 from "./img/render1.jpg";
import render2 from "./img/render2.jpg";
import render3 from "./img/render3.jpg";
import render4 from "./img/render4.jpg";
import render5 from "./img/render5.jpg";
import render6 from "./img/render6.jpg";
import render7 from "./img/render7.jpg";
import render8 from "./img/render8.jpg";
import details from "./img/details.png";

const choiceSpace = createProject({
    titleWithLineBreak: 'Choice Space',
    subtitle: 'Gamified and nonlinear exhibition hall activating urban participation',
    cover: cover,
    coverColored: coverColored,
    coverAlt: 'Exterior rendering of a the night view of a cave-like building with vibrant interior activities visible through windows. The riverside public spaces outside the building host a variety of activities.',
    color: {primary: '#FA6400', primaryLight: '#FF934A', secondary: '#333333', secondaryLight: '#333333', neon: '#66FFFF'},
    landscape: {x: 0.5, y: 0.5},
    portrait: {x: 0.5, y: 0.5},
    types: [ProjectType.SPACE],
    subtypes: [SubProjectType.ARCHITECTURE_SPACES, SubProjectType.URBAN_SPACES],
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
                        <div style={{
                            padding: '36px 36px 100px 36px',
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
                                Gamified and nonlinear exhibition hall<br />activating urban participation
                            </span>
                            <span style={{
                                color: colors.primary,
                                fontWeight: 300,
                                fontSize: '20px',
                            }}>
                                Architectural design ／ Urban design ／ Exhibition hall ／ Gamification
                            </span>
                            <span style={{
                                color: colors.secondary,
                                fontWeight: 300,
                                fontSize: '20px',
                            }}>
                                By framing the city and the building itself as exhibition, this exhibition hall shows real public life and activates urban space through participation.
                                <br /><br />
                                A spatial network replaces conventional linear exhibition circulation, enabling visitors to navigate freely and create personalized, gamified journeys.
                            </span>
                        </div>
                    </CardStack>
                )
            },
            {
                x: 640,
                y: 500,
                z: 1,
                children: (
                    <Button
                        text={'View the related product design project'}
                        icon={<RightArrowIcon />}
                        animateIn={animateIn}
                        animateOut={animateOut}
                        onClick={() => {
                            onNavigate?.('/work/exploreInVirtualLight')
                        }}
                    />
                )
            },
        ])},
        /*************************************************************************
         *
         *       Overview: Final Design
         *
         **************************************************************************/
        {stage: 'FINAL DESIGN', render: (animateIn: boolean, animateOut: boolean) => ([
            {
                x: 0,
                y: 48,
                z: 0,
                children: (
                    <Card
                        w={1200}
                        radius={24}
                        bg={colors.white}
                        animateIn={animateIn}
                        animateOut={animateOut}
                    >
                        <img src={render1} style={{width: '100%'}} alt={'Todo'} />
                    </Card>
                )
            },
        ])},
        /*************************************************************************
         *
         *       Overview: Final Design
         *
         **************************************************************************/
        {stage: 'FINAL DESIGN', render: (animateIn: boolean, animateOut: boolean) => ([
                {
                    x: 0,
                    y: 96,
                    z: 0,
                    children: (
                        <Card
                            w={1200}
                            radius={24}
                            bg={colors.white}
                            animateIn={animateIn}
                            animateOut={animateOut}
                        >
                            <img src={render2} style={{width: '100%'}} alt={'Todo'} />
                        </Card>
                    )
                },
            ])},
        /*************************************************************************
         *
         *       Overview: Final Design
         *
         **************************************************************************/
        {stage: 'FINAL DESIGN', render: (animateIn: boolean, animateOut: boolean) => ([
                {
                    x: 0,
                    y: 48,
                    z: 0,
                    children: (
                        <Card
                            w={1200}
                            radius={24}
                            bg={colors.white}
                            animateIn={animateIn}
                            animateOut={animateOut}
                        >
                            <img src={render3} style={{width: '100%'}} alt={'Todo'} />
                        </Card>
                    )
                },
            ])},
        /*************************************************************************
         *
         *       Overview: Final Design
         *
         **************************************************************************/
        {stage: 'FINAL DESIGN', render: (animateIn: boolean, animateOut: boolean) => ([
                {
                    x: 0,
                    y: 48,
                    z: 0,
                    children: (
                        <Card
                            w={1200}
                            radius={24}
                            bg={colors.white}
                            animateIn={animateIn}
                            animateOut={animateOut}
                        >
                            <img src={render4} style={{width: '100%'}} alt={'Todo'} />
                        </Card>
                    )
                },
            ])},
        /*************************************************************************
         *
         *       Overview: Final Design
         *
         **************************************************************************/
        {stage: 'FINAL DESIGN', render: (animateIn: boolean, animateOut: boolean) => ([
                {
                    x: 0,
                    y: 48,
                    z: 0,
                    children: (
                        <Card
                            w={1200}
                            radius={24}
                            bg={colors.white}
                            animateIn={animateIn}
                            animateOut={animateOut}
                        >
                            <img src={render5} style={{width: '100%'}} alt={'Todo'} />
                        </Card>
                    )
                },
            ])},
        /*************************************************************************
         *
         *       Overview: Final Design
         *
         **************************************************************************/
        {stage: 'FINAL DESIGN', render: (animateIn: boolean, animateOut: boolean) => ([
                {
                    x: 0,
                    y: 48,
                    z: 0,
                    children: (
                        <Card
                            w={1200}
                            radius={24}
                            bg={colors.white}
                            animateIn={animateIn}
                            animateOut={animateOut}
                        >
                            <img src={render6} style={{width: '100%'}} alt={'Todo'} />
                        </Card>
                    )
                },
            ])},
        /*************************************************************************
         *
         *       Overview: Final Design
         *
         **************************************************************************/
        {stage: 'FINAL DESIGN', render: (animateIn: boolean, animateOut: boolean) => ([
                {
                    x: 0,
                    y: 48,
                    z: 0,
                    children: (
                        <Card
                            w={1200}
                            radius={24}
                            bg={colors.white}
                            animateIn={animateIn}
                            animateOut={animateOut}
                        >
                            <img src={render7} style={{width: '100%'}} alt={'Todo'} />
                        </Card>
                    )
                },
            ])},
        /*************************************************************************
         *
         *       Overview: Final Design
         *
         **************************************************************************/
        {stage: 'FINAL DESIGN', render: (animateIn: boolean, animateOut: boolean) => ([
                {
                    x: 0,
                    y: 48,
                    z: 0,
                    children: (
                        <Card
                            w={1200}
                            radius={24}
                            bg={colors.white}
                            animateIn={animateIn}
                            animateOut={animateOut}
                        >
                            <img src={render8} style={{width: '100%'}} alt={'Todo'} />
                        </Card>
                    )
                },
            ])},
        /*************************************************************************
         *
         *       Overview: Final Design
         *
         **************************************************************************/
        {stage: 'FINAL DESIGN', render: (animateIn: boolean, animateOut: boolean) => ([
                {
                    x: 0,
                    y: 48,
                    z: 0,
                    children: (
                        <Card
                            w={1200}
                            padding={24}
                            radius={24}
                            bg={colors.white}
                            animateIn={animateIn}
                            animateOut={animateOut}
                        >
                            <img src={details} style={{width: '100%'}} alt={'Todo'} />
                        </Card>
                    )
                },
            ])},
        /*************************************************************************
         *
         *       Details coming soon
         *
         **************************************************************************/
        {stage: 'COMING SOON', render: (animateIn: boolean, animateOut: boolean) => ([
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
                        <div style={{
                            padding: '36px 36px 100px 36px',
                            width: '100%',
                            display: 'flex',
                            flexDirection: 'column',
                            gap: '36px',
                            textAlign: 'left',
                            whiteSpace: 'pre-line',
                            color: colors.primary,
                        }}>
                            <span style={{
                                fontWeight: 500,
                                fontSize: '80px',
                            }}>
                                Details<br />coming<br />soon
                            </span>
                            <span style={{
                                fontWeight: 300,
                                fontSize: '48px',
                            }}>
                                Space design part in progress
                            </span>
                        </div>
                    </Card>
                )
            },
        ])},
    ]
})

export default choiceSpace