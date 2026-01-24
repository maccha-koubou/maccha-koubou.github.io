import React, {useState} from 'react'
import {HashRouter} from 'react-router-dom'
import Router from './router/Router'
import MainNav from "./contents/MainNav";
import {ScalingContainer} from "./components/ScalingContainer";
import {Language} from "./config/Language";
import {fonts} from "./styles/theme";
import {ORIGINAL_HEIGHT} from "./config/Size";
import projects from './contents/projects'
import {HistoryContainer} from "./router/HistoryContainer";
import ThemeProvider from "./components/ThemeProvider";

interface PageSwitchContextType {
    pageSwitchPhase: 'idle' | 'enter' | 'exit';
    setPageSwitchPhase: (phase: 'idle' | 'enter' | 'exit') => void;
}

const PageSwitchContext = React.createContext<PageSwitchContextType | null>(null);

export const usePageSwitch = () => {
    const context = React.useContext(PageSwitchContext);
    if (!context) throw new Error('no page switch context');
    return context;
};

const App = () => {

    // Import and use the projects once to make them initialized
    console.log(projects.length)

    // Handle the animation relating to project detail pages
    const [pageSwitchPhase, setPageSwitchPhase] = useState<'idle' | 'enter' | 'exit'>('idle');

    const [language, setLanguage] = useState(Language.EN)

    const fontFamily =
        language === Language.EN || language === Language.NL
            ? fonts.alphabet
            : fonts.chineseCharacterKanji

    return (
        <PageSwitchContext.Provider value={{ pageSwitchPhase, setPageSwitchPhase }}>
            <HashRouter>
                <HistoryContainer>
                    <ThemeProvider>
                        <ScalingContainer>
                            <div style={{
                                height: `${ORIGINAL_HEIGHT}px`,
                                fontFamily: `${fontFamily}`,
                                display: 'flex',
                                flexDirection: 'column',
                            }}>
                                <div style={{ flex: 1, position: 'relative' }}>
                                    <Router />
                                </div>
                                <MainNav />
                            </div>
                        </ScalingContainer>
                    </ThemeProvider>
                </HistoryContainer>
            </HashRouter>
        </PageSwitchContext.Provider>
    )
}

export default App