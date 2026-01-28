import {createProject, ProjectType, SubProjectType} from "../../../config/ProjectType";
import cover from "./cover.png";
import coverColored from "./cover_colored.png";

const choiceSpace = createProject({
    titleWithLineBreak: 'Choice Space',
    subtitle: 'Gamified Nonlinear Exhibition Hall',
    cover: cover,
    coverColored: coverColored,
    coverAlt: '',
    color: {primary: '#FA6400', primaryLight: '#FF934A', secondary: '#333333', secondaryLight: '#333333', neon: '#66FFFF'},
    landscape: {x: 0.5, y: 0.5},
    portrait: {x: 0.5, y: 0.5},
    types: [ProjectType.SPACE],
    subtypes: [SubProjectType.ARCHITECTURE_SPACES, SubProjectType.URBAN_SPACES],
    slides: []
})

export default choiceSpace