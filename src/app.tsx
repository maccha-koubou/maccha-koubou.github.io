import React, {useState} from 'react'
import { HashRouter } from 'react-router-dom'
import Router from './router/Router'
import MainNav from "./contents/MainNav";
import {ScalingContainer} from "./components/ScalingContainer";
import {Language} from "./config/Language";
import {fonts} from "./styles/theme";
import {ORIGINAL_HEIGHT} from "./config/Size";
import projects from './contents/projects'
import {HistoryContainer} from "./router/HistoryContainer";

const App = () => {

    // Import and use the projects once to make them initialized
    console.log(projects.length)

    const [language, setLanguage] = useState(Language.EN)

    const fontFamily =
        language === Language.EN || language === Language.NL
            ? fonts.alphabet
            : fonts.chineseCharacterKanji

    return (
        <HashRouter>
            <HistoryContainer>
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
            </HistoryContainer>
        </HashRouter>
    )
}

export default App