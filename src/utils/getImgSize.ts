import {useRef} from "react";
import {PROJECT_CARD_LONGER_SIDE} from "../config/Size";



export const getImgSize = (id: string) => {
    const img = new Image()
    img.src = `/src/contents/projects/${id}/cover.png`
    return {
        width: img.naturalWidth,
        height: img.naturalHeight,
    }
}



// Create random scaling factor of img size
export const randomizeSize = () => {
    const randomSizeRef = useRef<number | null>(null)
    if (!randomSizeRef.current) {
        randomSizeRef.current = Math.random() * 0.2 + 0.9
    }
    return randomSizeRef.current
}



// Calculate the final size of the img
export const getFinalImgSize = (id: string) => {
    const originalSize = getImgSize(id)
    const longerSideLength = PROJECT_CARD_LONGER_SIDE * randomizeSize()
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