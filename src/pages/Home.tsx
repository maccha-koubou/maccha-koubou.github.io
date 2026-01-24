import React, {useEffect, useRef, useState} from 'react'
import MainCanvas from "../components/MainCanvas";
import { CanvasItemProps } from "../components/CanvasItem";
import IntroCard from "../contents/Home/IntroCard";
import ellipseDistribution, {
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
    //const randomProjects = useRandomizeProjects(COUNT)
    const randomZ = useRandomizeZ(COUNT)
    const randomSize = useRandomizeSize(COUNT)
    //const randomRatio = useRandomizeRatio(COUNT)



    // Select random projects
    const [randomProjects, setRandomProjects] = useState<Project[]>(() =>
        [...projects]
            .sort(() => Math.random() - 0.5)
            .slice(0, COUNT)
    );


    // Create random ratio for the img frame
    const [randomRatio, setRandomRatio] = useState<number[]>(() =>
        Array.from({ length: COUNT }, () =>
            calculateRandomRatio()
        )
    );

    const [isExit, setIsExit] = useState<boolean[]>([false, false, false, false, false, false])
    const lastReplacedIndexRef = useRef<number | null>(null);


    // If the page is switching, play the exit animation for each project card
    useEffect(() => {
        if (pageSwitchPhase === 'exit') {
            console.log('now exiting')
            setIsExit([true, true, true, true, true, true])
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

    const items: CanvasItemProps[] = [
        ...itemWithoutEllipse,
        ...ellipseItems,
    ]
    return (
        <div ref={ref}>
            <MainCanvas items={items} data-component="Home" />
        </div>
    )
}

export default Home