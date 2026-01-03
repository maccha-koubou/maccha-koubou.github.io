import React, {useRef} from "react";
import {CanvasItemProps} from "../../components/CanvasItem";
import {Project} from "../../config/ProjectType";
import projects from "../../contents/projects";
import ProjectCard from "../../components/ProjectCard";
import {getFinalImgSize} from "../getImgSize";



// Create random ellipse distribution offsets that don't change during the whole lifecycle of the components
const randomizeOffsets = ( count: number ) => {
    const randomOffsetsRef = useRef<number[] | null>(null)
    if (!randomOffsetsRef.current) {
        randomOffsetsRef.current = Array.from(
            { length: count },
            () => Math.random() * 1.5 - 0.75
        )
    }
    return randomOffsetsRef.current
}



// Select random projects
const randomizeProjects = ( count: number ) => {
    const randomProjectsRef = useRef<Project[] | null>(null)
    if (!randomProjectsRef.current) {
        const shuffled = [...projects].sort(() => Math.random() - 0.5)
        randomProjectsRef.current = shuffled.slice(0, count)
    }
    return randomProjectsRef.current
}



// Create random z-index
export const randomizeZ = () => {
    const randomZRef = useRef<number | null>(null)
    if (!randomZRef.current) {
        randomZRef.current = Math.random() < 0.5 ? 0 : 2
    }
    return randomZRef.current
}



// Main function
const ellipseDistribution = (
    canvasWidth: number,
    canvasHeight: number,
): CanvasItemProps[] => {

    const count = 6
    const randomOffsets = randomizeOffsets(count)
    const randomProjects = randomizeProjects(count)

    // Calculate the radius of the ellipse distribution
    const ellipseRadiusX = canvasWidth * 2.3 / 7;
    const ellipseRadiusY = canvasHeight * 1.5 / 5;

    return Array.from({ length: count }, (_, i) => {
        const angle = (2 * Math.PI * i + randomOffsets[i]) / count

        const offsetY = -20
        const z = randomizeZ()

        const size = getFinalImgSize(randomProjects[i].cover)

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
                    index={i}
                />
            ),
        }
    })
}

export default ellipseDistribution;