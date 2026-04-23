import React, {useEffect, useMemo, useState} from "react";
import {ProjectType} from "../../config/ProjectType";
import projects from "../../contents/projects";
import {getImgSize} from "../../utils/getImgSize";
import {colors} from "../../styles/theme";
import texture from "../../assets/img/texture.png";

interface ProjectSlideProps {
    type: ProjectType | null;
    width: number
    height: number
}

const ProjectSlide = ({ type, width, height }: ProjectSlideProps) => {

    if (!type) return

    const slideSize = 680


    // If there is not filtered project, use the entire list
    const filteredProjects = useMemo(
        () => {
            const filtered = projects.filter(project => project.types.includes(type))
            return filtered.length > 0 ? filtered : projects
        }, [projects, type]
    )


    // Calculate the time interval of slide
    const [index, setIndex] = useState(0)

    useEffect(() => {
        setIndex(0)
    }, [filteredProjects])

    useEffect(() => {
        if (filteredProjects.length === 0) return
        const timer = setInterval(() => {
            setIndex(i => (i + 1) % filteredProjects.length)
        }, 800)
        return () => clearInterval(timer)
    }, [filteredProjects.length])


    const current = filteredProjects[index]
    const next =
        filteredProjects[(index + 1) % filteredProjects.length]


    // Use preloaded imgs
    useEffect(() => {
        if (!next?.cover) return
        const img = new Image()
        img.src = next?.cover
    }, [next?.cover])


    // Judge which side's size is larger
    let imgWidth: number
    let imgHeight: number

    const [imgSize, setImgSize] = useState({width: 0, height: 0})
    useEffect(() => {
        if (!current?.cover) return
        setImgSize(getImgSize(current.cover))
    }, [current.cover])

    if (imgSize.width > imgSize.height) {
        const scale = slideSize / imgSize.height
        imgWidth = imgSize.width * scale
        imgHeight = slideSize
    } else {
        const scale = slideSize / imgSize.width
        imgWidth = slideSize
        imgHeight = imgSize.height * scale
    }


    return (
        <div
            style={{
                width: `${width}px`,
                height: `${height}px`,
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center'
            }}
            aria-hidden="true"
        >
            <div style={{
                position: "relative",
                width: `${slideSize}px`,
                height: `${slideSize}px`,
                borderRadius: `${slideSize / 2}px`,
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                overflow: "hidden",
                backgroundColor: colors.secondary,
            }}>
                <img
                    src={current.cover}
                    alt={''}
                    style={{
                        width: `${imgWidth}px`,
                        height: `${imgHeight}px`,
                        objectFit: 'contain'
                    }}
                />
                <img
                    src={texture}
                    alt={''}
                    style={{
                        position: "absolute",
                        objectFit: 'contain'
                    }}
                />
            </div>
        </div>
    )
}

export default ProjectSlide