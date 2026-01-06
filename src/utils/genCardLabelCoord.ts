import {useRef} from "react";



// Randomize the coordination of the label
// It is always on the left/right side of the img card
// 0.4: The label will not be put at the middle of the side of the img card
export const randomizeCoordScale = (
    horizontalPos: 'left' | 'right' | 'both',
    verticalPos: 'upper' | 'lower' | 'both'
) => {
    const randomCoordRef = useRef<{x: number, y: number} | null>(null)
    if (!randomCoordRef.current) {
        // The label will not be put at the middle of the side of the img card
        // 0.4 means is always at the upper (0~0.4) or lower part (0.6~1, 0.6=1-0.4)
        let coordScaleY = Math.random() * 0.4

        switch (verticalPos) {
            case 'upper':
                break
            case 'lower':
                coordScaleY = 1 - coordScaleY
                break
            case 'both':
                // If true, the label will be on the lower part
                if (Math.random() > 0.5) {
                    coordScaleY = 1 - coordScaleY
                }
                break
        }


        let coordScaleX = 0

        switch (horizontalPos) {
            case 'left':
                break
            case 'right':
                coordScaleX = 1
                break
            case 'both':
                coordScaleX = Math.random() > 0.5 ? 0 : 1
        }

        randomCoordRef.current = {x: coordScaleX, y: coordScaleY}
    }
    return randomCoordRef.current
}



// Calculate the coordination of the label
export const genCardLabelCoord = (
    horizontalPos: 'left' | 'right' | 'both',
    verticalPos: 'upper' | 'lower' | 'both',
    labelWidth: number,
    labelHeight: number,
    imgWidth: number,
    imgHeight: number,
) => {
    const offsetX = 40
    const coordScale = randomizeCoordScale(horizontalPos, verticalPos)

    const labelX = imgWidth * coordScale.x + offsetX * (coordScale.x * -2 + 1) - labelWidth / 2
    const labelY = imgHeight * coordScale.y - labelHeight / 2

    return { x: labelX, y: labelY }
}
