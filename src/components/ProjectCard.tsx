import React from 'react'
import {Project} from "../config/ProjectType";
import {colors} from "../styles/theme";
import Card from "./Card";

interface ProjectCardProps {
    project: Project
    isLabelSecondary: boolean
    onClick?: () => void
    onMouseEnter?: () => void
    onMouseLeave?: () => void
    h: number
    w: number
}

const ProjectCard = ({
                project,
                onClick,
                onMouseEnter,
                onMouseLeave,
                h,
                w
              }: ProjectCardProps) => {

    return (
        <Card
            borderColor={colors.primary}
            borderWidth={2}
            w={w}
            h={h}
            radius={24}
        >
            <img
                src={`/src/contents/projects/${project.id}/cover.png`}
                width={w}
                height={h}
                alt={project.title}
            />
        </Card>
    )
}

export default ProjectCard