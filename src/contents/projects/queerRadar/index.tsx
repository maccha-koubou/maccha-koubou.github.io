import {createProject, ProjectType, SubProjectType} from "../../../config/ProjectType";
import cover from "./cover.png";
import coverColored from "./cover_colored.png";

const queerRadar = createProject({
    titleWithLineBreak: 'Queer \nRadar',
    subtitle: 'Queer Radar',
    cover: cover,
    coverColored: coverColored,
    coverAlt: '',
    color: {primary: '#575C63', primaryLight: '#575C63', secondary: '#797D84', secondaryLight: '#797D84', neon: '#66FFFF'},
    landscape: {x: 0.5, y: 0.5},
    portrait: {x: 0.5, y: 0.5},
    types: [ProjectType.PRODUCT],
    subtypes: [SubProjectType.PHYSICAL_PRODUCTS],
    slides: []
})

export default queerRadar