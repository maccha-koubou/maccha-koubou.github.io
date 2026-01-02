import React, {useState} from 'react'
import { BrowserRouter } from 'react-router-dom'
import Router from './router/Router'
import MainNav from "./contents/MainNav";
import {ScalingContainer} from "./components/ScalingContainer";
import {Language} from "./config/Language";
import {fonts} from "./styles/theme";
import {ORIGINAL_HEIGHT} from "./config/Size";

const App = () => {
    const [language, setLanguage] = useState(Language.EN)

    const fontFamily =
        language === Language.EN || language === Language.NL
            ? fonts.alphabet
            : fonts.chineseCharacterKanji

    return (
        <BrowserRouter>
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
        </BrowserRouter>
    )
}

export default App