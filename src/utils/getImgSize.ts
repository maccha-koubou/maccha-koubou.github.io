import {useRef} from "react";
import {PROJECT_CARD_LONGER_SIDE, PROJECT_CARD_SHORTER_SIDE} from "../config/Size";
import {Project} from "../config/ProjectType";



export const getImgSize = (url: string) => {
    const img = new Image()
    img.src = url
    return {
        width: img.naturalWidth,
        height: img.naturalHeight,
    }
}


// Create random scaling factor of img size
export const useRandomizeSize = (count: number) => {
    const ref = useRef<number[]>([])
    if (ref.current.length === 0) {
        ref.current = Array.from({ length: count }, () =>
            Math.random() * 0.2 + 0.9
        )
    }
    return ref.current
}



// Create random ratio for the img frame
export const useRandomizeRatio = (count: number) => {
    const ref = useRef<number[]>([])
    if (ref.current.length === 0) {
        ref.current = Array.from({ length: count }, () =>
            Math.random() < 0.5
                ? Math.random() * 0.4
                : 0.6 + Math.random() * 0.4
        )
    }
    return ref.current
}



// Calculate the img frame size based on the ratio
export const calculateImgFrameSize = (ratio: number, size: number) => {
    const inter = (PROJECT_CARD_LONGER_SIDE - PROJECT_CARD_SHORTER_SIDE) * ratio
    return {
        width: (PROJECT_CARD_LONGER_SIDE - inter) * size,
        height: (PROJECT_CARD_SHORTER_SIDE + inter) * size
    }
}



// Calculate the focus point based on the ratio
export const calculateImgFocus = (
    project: Project,
    ratio: number
) => {
    const landscape = project.landscape
    const portrait = project.portrait
    return {
        x: landscape.x + (portrait.x - landscape.x) * ratio,
        y: landscape.y + (portrait.y - landscape.y) * ratio,
    }
}



// Calculate the final size of the img
export const getFinalImgSize = (
    url: string,
    randomizeSize: number
) => {
    const originalSize = getImgSize(url)
    const longerSideLength = PROJECT_CARD_LONGER_SIDE * randomizeSize
    let width: number
    let height: number

    // Judge which side's size is larger
    if (originalSize.width > originalSize.height) {
        const scale = longerSideLength / originalSize.width
        width = longerSideLength
        height = originalSize.height * scale
    } else {
        const scale = longerSideLength / originalSize.height
        width = originalSize.width * scale
        height = longerSideLength
    }
    return {
        width: width,
        height: height,
    }
}