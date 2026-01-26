import React, {useRef} from "react";
import {CanvasItemProps} from "../../components/CanvasItem";
import {Project} from "../../config/ProjectType";
import projects from "../../contents/projects";
import ProjectCard from "../../components/ProjectCard";
import {calculateImgFocus, calculateImgFrameSize} from "../getImgSize";
import Card from "../../components/Card";
import CardStackDeco from "../../components/Home/CardStackDeco";



// Create random ellipse distribution offsets that don't change during the whole lifecycle of the components
export const useRandomizeOffsets = ( count: number ) => {
    const ref = useRef<number[]>([])
    if (ref.current.length === 0) {
        ref.current = Array.from(
            { length: count },
            () => Math.random() * 1.5 - 0.75
        )
    }
    return ref.current
}



// Select random projects
export const useRandomizeProjects = ( count: number ) => {
    const ref = useRef<Project[]>([])
    if (ref.current.length === 0) {
        ref.current = [...projects]
            .sort(() => Math.random() - 0.5)
            .slice(0, count)
    }
    return ref.current
}



// Randomly select 0 or 1 for the decoration
export const useRandomizeDecoPosition = () => {
    const ref = useRef<number>(-1)
    if (ref.current === -1) {
        ref.current = Math.random() < 0.5 ? 0 : 1
    }
    return ref.current
}



// Create random z-index
export const useRandomizeZ = (count: number) => {
    const ref = useRef<number[]>([])
    if (ref.current.length === 0) {
        ref.current = Array.from({ length: count }, () =>
            Math.random() < 0.5 ? 0 : 2
        )
    }
    return ref.current
}



// Main function
const ellipseDistribution = (
    canvasWidth: number,
    canvasHeight: number,
    randomOffsets: number[],
    randomProjects: Project[],
    randomZ: number[],
    randomSize: number[],
    randomRatio: number[],
    isExit: boolean[],
    onClick: (url: string) => void,
): CanvasItemProps[] => {

    const count = 6

    // Calculate the radius of the ellipse distribution
    const ellipseRadiusX = canvasWidth * 2.3 / 7;
    const ellipseRadiusY = canvasHeight * 1.5 / 5;

    return Array.from({ length: count }, (_, i) => {
        const angle = (2 * Math.PI * i + randomOffsets[i]) / count

        const offsetY = -20
        const z = randomZ[i]

        const size = calculateImgFrameSize(randomRatio[i], randomSize[i])
        const focusPoint = calculateImgFocus(randomProjects[i], randomRatio[i])

        const transformOriginHorizontal =
            i === 0 || i === 1 || i === 5 ? 'right' : 'left'
        const transformOriginVertical =
            i < 3 ? 'bottom' : 'top'

        return {
            id: `home-project-${i}`,
            x: ellipseRadiusX * Math.cos(angle) + canvasWidth / 2 - size.width / 2,
            y: ellipseRadiusY * Math.sin(angle) + canvasHeight / 2 + offsetY - size.height / 2,
            z: z,
            children: (
                <ProjectCard
                    onClick={() => {onClick(randomProjects[i].url)}}
                    key={randomProjects[i].title}
                    project={randomProjects[i]}
                    isLabelSecondary={false}
                    w={size.width}
                    h={size.height}
                    focusPoint={focusPoint}
                    index={i}
                    animateOut={isExit[i]}
                    transformOrigin={`${transformOriginVertical} ${transformOriginHorizontal}`}
                />
            ),
        }
    })
}



// For Decoration
export const ellipseDecoDistribution = (
    canvasWidth: number,
    canvasHeight: number,
    randomOffsets: number[],
    randomPosition: number,
    randomLayer: number[],
    randomColor: string[],
    randomRatio: number[],
    randomDirection: {x: number, y: number}[],
    isExit: boolean[],
): CanvasItemProps[] => {

    const count = 4

    // Calculate the radius of the ellipse distribution
    const ellipseRadiusX = canvasWidth * 2.3 / 7 * 0.9;
    const ellipseRadiusY = canvasHeight * 1.5 / 5 * 0.9;

    return Array.from({ length: count }, (_, i) => {
        let indexInEllipse = i
        if (indexInEllipse >= 1 + randomPosition) {
            indexInEllipse += 1
            if (indexInEllipse >= 4 + randomPosition) {
                indexInEllipse += 1
            }
        }

        const angle = (2 * Math.PI * indexInEllipse + randomOffsets[i]) / 6

        const offsetY = -20

        const inter = (180 - 60) * randomRatio[i]
        const size =  {
            width: (180 - inter),
            height: (60 + inter)
        }

        // If there is only one layer, render it as Card
        // If there is two layers, is too ugly so also render it as a single layer Card
        if (randomLayer[i] <= 2) {
            return {
                id: `home-deco-${i}`,
                x: ellipseRadiusX * Math.cos(angle) + canvasWidth / 2 - size.width / 2,
                y: ellipseRadiusY * Math.sin(angle) + canvasHeight / 2 + offsetY - size.height / 2,
                z: -2,
                children: (
                    <Card
                        key={randomRatio[i]}
                        w={size.width}
                        h={size.height}
                        radius={24}
                        borderColor={randomColor[i]}
                        borderWidth={1}
                        bg={'transparent'}
                        animateOut={isExit[i]}
                    >
                        <></>
                    </Card>
                ),
            }
        } else {
            return {
                id: `home-deco-${i}`,
                x: ellipseRadiusX * Math.cos(angle) + canvasWidth / 2 - size.width / 2,
                y: ellipseRadiusY * Math.sin(angle) + canvasHeight / 2 + offsetY - size.height / 2,
                z: -2,
                children: (
                    <div style={{transform: `scaleX(${randomDirection[i].x}) scaleY(${randomDirection[i].y})`}}>
                        <CardStackDeco
                            key={randomRatio[i]}
                            w={size.width}
                            h={size.height}
                            layers={randomLayer[i]}
                            radius={24}
                            borderColor={randomColor[i]}
                            borderWidth={1}
                            animateOut={isExit[i]}
                        />
                    </div>
                ),
            }
        }
    })
}

export default ellipseDistribution;