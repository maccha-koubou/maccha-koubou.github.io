import {createProject, ProjectType, SubProjectType} from "../../../config/ProjectType";
import cover from "./cover.png";
import coverColored from "./cover_colored.png";
import CardStack from "../../../components/CardStack";
import {colors} from "../../../styles/theme";
import React from "react";

const queerRadar = createProject({
    titleWithLineBreak: 'Queer Radar',
    subtitle: 'Digital modular keychain to show diverse LGBTQIA+ pride safely',
    cover: cover,
    coverColored: coverColored,
    coverAlt: 'Image showing a keychain composed of multiple luminous tetrahedral units.',
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
    ]
})

export default queerRadar