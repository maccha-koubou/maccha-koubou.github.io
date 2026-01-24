import {motion, useAnimation} from "framer-motion";
import {DEFAULT_COLOR, ThemeColors} from "../styles/theme";
import React, {createContext, useContext, useEffect, useState} from "react";
import {useLocation} from "react-router-dom";
import {isUrlProject} from "../router/Router";
import projects from "../contents/projects";

const ThemeContext = createContext<{
    currentColor: ThemeColors;
    setTheme: (theme: Partial<ThemeColors>, duration?: number) => void;
    resetTheme: () => void;
}>(null!);

export const useTheme = () => {
    const context = useContext(ThemeContext);
    if (!context) {
        throw new Error("no useTheme context");
    }
    return context;
};

interface ThemeProviderProps {
    children: React.ReactNode;
}

const ThemeProvider = ({ children }: ThemeProviderProps) => {
    const location = useLocation();
    const controls = useAnimation();
    const [currentColor, setCurrentColor] = useState<ThemeColors>(DEFAULT_COLOR);

    const setTheme = (
        theme: Partial<ThemeColors>,
    ) => {
        const newTheme = { ...currentColor, ...theme }
        setCurrentColor(newTheme);
        controls.start({
            '--color-primary': newTheme.primary,
            '--color-primary-light': newTheme.primaryLight,
            '--color-secondary': newTheme.secondary,
            '--color-secondary-light': newTheme.secondaryLight,
            '--color-neon': newTheme.neon,
            transition: { duration: 0.4, ease: 'easeInOut' },
        });
    };

    const resetTheme = () => setTheme(DEFAULT_COLOR);

    useEffect(() => {
        if (isUrlProject(location.pathname)) {
            const url = location.pathname.replace("/work/", "");
            const project = projects.find(project => project.url === url);
            if (project) setTheme(project.color);
        } else {
            resetTheme();
        }
    }, [location.pathname]);

    return (
        <motion.div
            id={'theme-provider'}
            animate={controls}
            style={{
                '--color-primary': DEFAULT_COLOR.primary,
                '--color-primary-light': DEFAULT_COLOR.primaryLight,
                '--color-secondary': DEFAULT_COLOR.secondary,
                '--color-secondary-light': DEFAULT_COLOR.secondaryLight,
                '--color-neon': DEFAULT_COLOR.neon,
            } as React.CSSProperties}
        >
            <ThemeContext.Provider value={{ currentColor, setTheme, resetTheme }}>
                {children}
            </ThemeContext.Provider>
        </motion.div>
    );
}

export default ThemeProvider;