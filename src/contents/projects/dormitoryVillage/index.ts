import {createProject, ProjectType, SubProjectType} from "../../../config/ProjectType";
import cover from './cover.png'
import coverColored from "./cover_colored.png";

const dormitoryVillage = createProject({
    titleWithLineBreak: 'Dormitory \nVillage',
    subtitle: 'Dormitory Village',
    cover: cover,
    coverColored: coverColored,
    coverAlt: '',
    color: {primary: '#0074F0', primaryLight: '#0074F0', secondary: '#003768', secondaryLight: '#003768', neon: '#FFCC00'},
    landscape: {x: 0.5, y: 0.5},
    portrait: {x: 0.5, y: 0.5},
    types: [ProjectType.SPACE, ProjectType.PRODUCT],
    subtypes: [SubProjectType.ARCHITECTURE_SPACES, SubProjectType.PHYSICAL_PRODUCTS],
    slides: []
})

export default dormitoryVillage