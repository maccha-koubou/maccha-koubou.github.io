import React from 'react'
import {CanvasItem} from "../CanvasItem";
import Card from "../Card";

export interface SlideItemProps {
    x: number
    y: number
    z: number
    w?: number | 'fit-content' | '100%'
    h?: number | 'fit-content' | '100%'
    children: React.ReactNode
    radius?: number
    borderColor?: string
    borderWidth?: number
    bg?: string
    padding?: number | [number, number, number, number] // [top, right, bottom, left]
    horizon?: 'flex-start' | 'center' | 'flex-end'
    vertical?: 'flex-start' | 'center' | 'flex-end'
    animateIn: boolean
    animateOut: boolean
}

export const SlideItem: React.FC<SlideItemProps> = ({
     x, y, z, children, w = 'fit-content', h = 'fit-content',
    radius, borderColor, borderWidth, bg, padding, horizon, vertical, animateIn, animateOut
}) => {
    return (
        <CanvasItem x={x} y={y} z={z} w={'fit-content'} h={'fit-content'}>
            <Card w={w} h={h} radius={radius} borderColor={borderColor} borderWidth={borderWidth} bg={bg} padding={padding} horizon={horizon} vertical={vertical} animateIn={animateIn} animateOut={animateOut}>
                {children}
            </Card>
        </CanvasItem>
    )
}