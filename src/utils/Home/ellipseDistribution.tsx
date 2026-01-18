import React, {useRef} from "react";
import {CanvasItemProps} from "../../components/CanvasItem";
import {Project} from "../../config/ProjectType";
import projects from "../../contents/projects";
import ProjectCard from "../../components/ProjectCard";
import {calculateImgFocus, calculateImgFrameSize} from "../getImgSize";



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
    randomRatio: number[]
): CanvasItemProps[] => {

    const count = 6

    // Calculate the radius of the ellipse distribution
    const ellipseRadiusX = canvasWidth * 2.3 / 7;
    const ellipseRadiusY = canvasHeight * 1.5 / 5;

    return Array.from({ length: count }, (_, i) => {
        const angle = (2 * Math.PI * i + randomOffsets[i]) / count

        const offsetY = -20
        const z = randomZ[i]

        const size = calculateImgFrameSize(randomRatio[i])
        const focusPoint = calculateImgFocus(randomProjects[i], randomRatio[i])

        //const size = getFinalImgSize(randomProjects[i].cover, randomSize[i])
        //console.log(`${i}, size: ${size}, x: ${ellipseRadiusX}, y: ${ellipseRadiusY}`)

        return {
            id: `home-project-${i}`,
            x: ellipseRadiusX * Math.cos(angle) + canvasWidth / 2 - size.width / 2,
            y: ellipseRadiusY * Math.sin(angle) + canvasHeight / 2 + offsetY - size.height / 2,
            z: z,
            children: (
                <ProjectCard
                    project={randomProjects[i]}
                    isLabelSecondary={false}
                    w={size.width}
                    h={size.height}
                    focusPoint={focusPoint}
                    index={i}
                />
            ),
        }
    })
}

export default ellipseDistribution;