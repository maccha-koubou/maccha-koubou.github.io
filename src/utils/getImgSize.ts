import {useRef} from "react";
import {PROJECT_CARD_LONGER_SIDE} from "../config/Size";



export const getImgSize = (url: string) => {
    const img = new Image()
    img.src = url
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
export const getFinalImgSize = (url: string) => {
    const originalSize = getImgSize(url)
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