import React, {useState} from 'react'
import {Project} from "../config/ProjectType";
import {colors} from "../styles/theme";
import Card from "./Card";
import {genCardLabelCoord} from "../utils/genCardLabelCoord";
import measureSize from "../utils/measureSize";
import {motion} from "framer-motion";
import {PROJECT_CARD_HOVER_HEIGHT, PROJECT_CARD_HOVER_WIDTH} from "../config/Size";

interface ProjectCardProps {
    project: Project
    isLabelSecondary?: boolean
    onClick?: () => void
    onMouseEnter?: () => void
    onMouseLeave?: () => void
    h: number
    w: number
    index?: number
    horizontalPosLimitation?: 'left' | 'right' | 'both'
    focusPoint: {x: number; y: number}
    animateOut?: boolean
    labelAnimateOut?: boolean
    onAnimationComplete?: () => void
    transformOrigin: string
}

const ProjectCard = ({
                project,
                isLabelSecondary = false,
                onClick,
                onMouseEnter,
                onMouseLeave,
                h,
                w,
                index,
                horizontalPosLimitation,
                focusPoint,
                animateOut = false,
                labelAnimateOut = false,
                onAnimationComplete,
                transformOrigin
              }: ProjectCardProps) => {

    /*
    *   Label Part
    * */
    // Get the size of the label
    const { ref, size: labelSize } = measureSize<HTMLDivElement>()
    const [refreshKey, setRefreshKey] = useState(0)

    // Randomize the coordination of the label
    let horizontalPos: 'left' | 'right' | 'both' =
        horizontalPosLimitation ? horizontalPosLimitation : 'both'
    let verticalPos: 'upper' | 'lower' | 'both' = 'both'

    if (index !== undefined) {
        // If this card is used on home page and has an index
        switch (index) {
            case 0:
                horizontalPos = 'right'
                verticalPos = 'both'
                break
            case 1:
                horizontalPos = 'right'
                verticalPos = 'lower'
                break
            case 2:
                horizontalPos = 'left'
                verticalPos = 'lower'
                break
            case 3:
                horizontalPos = 'left'
                verticalPos = 'both'
                break
            case 4:
                horizontalPos = 'left'
                verticalPos = 'upper'
                break
            case 5:
                horizontalPos = 'right'
                verticalPos = 'upper'
                break
        }
    }
    const labelCoord = genCardLabelCoord(
        horizontalPos,
        verticalPos,
        labelSize ? labelSize.width : 0,
        labelSize ? labelSize.height : 0,
        w,
        h
    )

    let labelBg = colors.primary
    if (isLabelSecondary) {
        labelBg = colors.secondary
    }

    /*
    *   Animation Part
    * */
    const [isHover, setIsHover] = useState(false);
    const [isCardSizeChange, setIsCardSizeChange] = useState(false);



    return (
        <div style={{
            width:`${w}px`,
            height:`${h}px`,
            overflow: 'visible',
        }}>
            <motion.div
                style={{position: 'absolute'}}
                onMouseEnter={() => {
                    setIsHover(true)
                    setIsCardSizeChange(true)
                    onMouseEnter?.()
                }}
                onMouseLeave={() => {
                    setIsHover(false)
                    setIsCardSizeChange(true)
                    onMouseLeave?.()
                }}
                initial={{ width: w, height: h, top: 0, left: 0 }}
                animate={{
                    width: isHover ? PROJECT_CARD_HOVER_WIDTH : w,
                    height: isHover ? PROJECT_CARD_HOVER_HEIGHT : h,
                    top: isHover && transformOrigin.includes('bottom')? h - PROJECT_CARD_HOVER_HEIGHT : 0,
                    left: isHover && transformOrigin.includes('right')? w - PROJECT_CARD_HOVER_WIDTH : 0,
                }}
                onAnimationComplete={() => setIsCardSizeChange(false)}
                transition={{ duration: 0.4, ease: "easeInOut" }}
            >
                <Card
                    borderColor={colors.primaryLight}
                    borderWidth={2}
                    w={'100%'}
                    h={'100%'}
                    radius={24}
                    animateIn={true}
                    animateOut={animateOut}
                    onAnimationComplete={onAnimationComplete}
                    isCardSizeChange={isCardSizeChange}
                >
                    <div style={{
                        position: 'relative',
                        overflow: 'hidden',
                        width: '100%',
                        height: '100%'
                    }}>
                        <img
                            src={project.cover}
                            style={{
                                width: '100%',
                                height: '100%',
                                objectFit: 'cover',
                                display: 'block',
                                objectPosition: `${focusPoint.x * 100}% ${focusPoint.y * 100}%`
                            }}
                            alt={project.subtitle}
                        />
                    </div>
                </Card>
            </motion.div>

            {/* The label of card */}
            <div style={{
                position: 'absolute',
                top: `${labelCoord.y}px`,
                left: `${labelCoord.x}px`,
                zIndex: 2,
                width: "fit-content",
                height: "fit-content",
                }}
                ref={ref}
            >
                <Card
                    key={refreshKey}
                    bg={labelBg}
                    radius={14}
                    h={28}
                    padding={[0, 8, 0, 8]}
                    animateIn={true}
                    animateOut={animateOut || labelAnimateOut}
                    onAnimationComplete={() => {
                        if (labelAnimateOut) {
                            setRefreshKey(refreshKey + 1)
                        }
                    }}
                >
                    <span style={{
                        display: "flex",
                        width: "fit-content",
                        height: "fit-content",
                        color: `${colors.white}`,
                        fontWeight: 400,
                        fontSize: '16px',
                        whiteSpace: 'nowrap',
                    }}>
                        {project.title}
                    </span>
                </Card>
            </div>

        </div>
    )
}

export default ProjectCard