import React, {useEffect, useRef, useState} from 'react'
import MainCanvas from "../components/MainCanvas";
import { CanvasItemProps } from "../components/CanvasItem";
import IntroCard from "../contents/Home/IntroCard";
import ellipseDistribution, {
    ellipseDecoDistribution,
    useRandomizeDecoPosition,
    useRandomizeOffsets,
    useRandomizeZ
} from "../utils/Home/ellipseDistribution";
import measureSize from "../utils/measureSize";
import {calculateRandomRatio, useRandomizeSize} from "../utils/getImgSize";
import {Project} from "../config/ProjectType";
import projects from "../contents/projects";
import {useLocation, useNavigate} from "react-router-dom";
import {usePageSwitch} from "../app";
import {useHistory} from "../router/HistoryContainer";
import {colors} from "../styles/theme";

const Home = () => {

    // Navigate function for project cards, change the phase state and navigate 0.4 seconds later
    const navigate = useNavigate();
    const location = useLocation()
    const { push } = useHistory()
    const { pageSwitchPhase, setPageSwitchPhase } = usePageSwitch();

    const projectCardOnClick = (url: string) => {
        setPageSwitchPhase('exit')
        push(location.pathname)
        setTimeout(() => navigate(`/work/${url}`), 400)
    }

    // Responsive width of canvas for the ellipse distribution
    const { ref, size: canvasSize } = measureSize<HTMLDivElement>()
    const canvasWidth = canvasSize ? canvasSize.width : 0
    const canvasHeight = canvasSize ? canvasSize.height : 0

    const itemWithoutEllipse: CanvasItemProps[] = [
        {
            id: 'home-intro-card',
            x: 0,
            y: 0,
            z: 1,
            w: '100%',
            h: '100%',
            isPassThrough: true,
            children: (
                <IntroCard />
            ),
        }
    ]



    const COUNT = 6
    const randomOffsets = useRandomizeOffsets(COUNT)
    const randomZ = useRandomizeZ(COUNT)
    const randomSize = useRandomizeSize(COUNT)

    const DECO_COUNT = 4
    // Position: 0 means that the spacing are at the index 1 and 4 (top-right & bottom-left), 1 means 2 and 5 (top-left & bottom-right)
    const randomDecoPosition = useRandomizeDecoPosition()
    console.log('position'+randomDecoPosition)
    const randomDecoOffsets =
        randomOffsets
            .filter((_, i) =>
                i !== (1 + randomDecoPosition) && i !== (4+ randomDecoPosition))
            .map((offset, i) => {
                let offsetDirection = (randomDecoPosition * 2 - 1)
                // The direction of the offset depends on whether the index is odd or even
                if (i % 2 === 0) {
                    return offset - offsetDirection * 2
                } else {
                    return offset + offsetDirection
                }
            })



    // Select random projects & create random ratio for the img frame
    const [randomProjects, setRandomProjects] = useState<Project[]>(() =>
        [...projects]
            .sort(() => Math.random() - 0.5)
            .slice(0, COUNT)
    );
    const [randomRatio, setRandomRatio] = useState<number[]>(() =>
        Array.from({ length: COUNT }, () =>
            calculateRandomRatio()
        )
    );

    // Select random type of deco & create random ratio and color for them
    const randomizeDecoLayer = () => Math.floor(Math.random() * 5) + 1 // Max layer: 5, min layer : 1
    const [randomDecoLayer, setRandomDecoLayer] = useState<number[]>(() => {
            // One-layer or two-layer decorations are ugly, so the count of them shouldn't larger than 2
            let arr: number[]
            do {
                arr = Array.from({ length: DECO_COUNT }, () => randomizeDecoLayer());
            } while (arr.filter(layers => layers <= 2).length > 2);
            return arr
        }
    );
    const randomizeDecoColor = () => Math.random() < 0.5 ? colors.primaryLight : colors.secondaryLight
    const [randomDecoColor, setRandomDecoColor] = useState<string[]>(() => {
            // Avoid every item being in the same color
            let arr: string[]
            do {
                arr = Array.from({ length: DECO_COUNT }, () => randomizeDecoColor());
            } while (arr.every(colors => colors === arr[0]));
            return arr
        }
    );
    const [randomDecoRatio, setRandomDecoRatio] = useState<number[]>(() =>
        Array.from({ length: DECO_COUNT }, () =>
            calculateRandomRatio()
        )
    );
    const randomizeDecoDirection = () => ({
        x: Math.random() < 0.5 ? -1 : 1,
        y: Math.random() < 0.5 ? -1 : 1
    })
    const [randomDecoDirection, setRandomDirection] = useState<{x: number, y: number}[]>(() =>
        Array.from({ length: DECO_COUNT }, () =>
            randomizeDecoDirection()
        )
    );


    const [isExit, setIsExit] = useState<boolean[]>([false, false, false, false, false, false])
    const lastReplacedIndexRef = useRef<number | null>(null);

    const [isDecoExit, setIsDecoExit] = useState<boolean[]>([false, false, false, false])
    const lastReplacedDecoIndexRef = useRef<number | null>(null);


    // If the page is switching, play the exit animation for each project card
    useEffect(() => {
        if (pageSwitchPhase === 'exit') {
            setIsExit([true, true, true, true, true, true])
            setIsDecoExit([true, true, true, true])
        }
    }, [pageSwitchPhase]);


    // Reselect one project every 1-8 seconds
    useEffect(() => {
        let timer: number;

        const selectNext = () => {
            const delay = Math.random() * 7000 + 1000;

            timer = window.setTimeout(() => {
                let indexToReplace: number;
                do {
                    indexToReplace = Math.floor(Math.random() * COUNT);
                } while (indexToReplace === lastReplacedIndexRef.current);

                lastReplacedIndexRef.current = indexToReplace;


                setIsExit([
                    ...isExit.slice(0, indexToReplace),
                    true,
                    ...isExit.slice(indexToReplace + 1),
                ])

                setTimeout(() => {
                    setIsExit([false, false, false, false, false, false])
                    setRandomProjects(prev => {
                        const remaining = projects.filter(
                            p => !prev.some(dp => dp.id === p.id)
                        );
                        if (remaining.length === 0) return prev;

                        const newProject =
                            remaining[Math.floor(Math.random() * remaining.length)];

                        const next = [...prev];
                        next[indexToReplace] = newProject;
                        return next;
                    });

                    setRandomRatio(prev => {
                        const next = [...prev];
                        next[indexToReplace] = calculateRandomRatio();
                        return next;
                    });

                    selectNext();
                }, 400)
            }, delay);
        };
        selectNext();
        return () => clearTimeout(timer);
    }, []);

    // Reselect one deco every 1-8 seconds
    useEffect(() => {
        let timer: number;

        const selectNext = () => {
            const delay = Math.random() * 7000 + 1000;

            timer = window.setTimeout(() => {
                let indexToReplace: number;
                do {
                    indexToReplace = Math.floor(Math.random() * DECO_COUNT);
                } while (indexToReplace === lastReplacedDecoIndexRef.current);

                lastReplacedDecoIndexRef.current = indexToReplace;


                setIsDecoExit([
                    ...isDecoExit.slice(0, indexToReplace),
                    true,
                    ...isDecoExit.slice(indexToReplace + 1),
                ])

                setTimeout(() => {
                    setIsDecoExit([false, false, false, false, false, false])
                    setRandomDecoLayer(prev => {
                        const next = [...prev];
                        let nextItem = randomizeDecoLayer();
                        // One-layer or two-layer decorations are ugly, so the count of them shouldn't larger than 2
                        while (nextItem <= 2 && next.filter(layers => layers <= 2).length > 1) {
                            nextItem = randomizeDecoLayer();
                        }
                        next[indexToReplace] = nextItem;
                        return next;
                    });
                    setRandomDecoColor(prev => {
                        const next = [...prev];
                        const otherItems = next.filter((_, i) => i !== indexToReplace)
                        let nextItem = randomizeDecoColor();
                        // Avoid every item being in the same color
                        while (
                            otherItems.every(colors => colors === otherItems[0])
                            && nextItem === otherItems[0]) {
                            nextItem = randomizeDecoColor();
                        }
                        next[indexToReplace] = nextItem;
                        return next;
                    });
                    setRandomDecoRatio(prev => {
                        const next = [...prev];
                        next[indexToReplace] = calculateRandomRatio();
                        return next;
                    });
                    setRandomDirection(prev => {
                        const next = [...prev];
                        next[indexToReplace] = randomizeDecoDirection();
                        return next;
                    })

                    selectNext();
                }, 400)
            }, delay);
        };
        selectNext();
        return () => clearTimeout(timer);
    }, []);


    const ellipseItems =
        ellipseDistribution(
            canvasWidth,
            canvasHeight,
            randomOffsets,
            randomProjects,
            randomZ,
            randomSize,
            randomRatio,
            isExit,
            projectCardOnClick
        )

    const ellipseDecoItems = ellipseDecoDistribution(
        canvasWidth,
        canvasHeight,
        randomDecoOffsets,
        randomDecoPosition,
        randomDecoLayer,
        randomDecoColor,
        randomDecoRatio,
        randomDecoDirection,
        isDecoExit,
    )

    const items: CanvasItemProps[] = [
        ...itemWithoutEllipse,
        ...ellipseItems,
        ...ellipseDecoItems,
    ]
    return (
        <div ref={ref}>
            <MainCanvas items={items} data-component="Home" />
        </div>
    )
}

export default Home