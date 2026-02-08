import {createProject, ProjectType, SubProjectType} from "../../../config/ProjectType";
import cover from './cover.png'
import coverColored from "./cover_colored.png";
import CardStack from "../../../components/CardStack";
import {colors} from "../../../styles/theme";
import React from "react";

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
                                Units form a village system where students live based on similar interests, share facilities, and manage their communities autonomously.
                            </span>
                        </div>
                    </CardStack>
                )
            },
        ])},
    ]
})

export default dormitoryVillage