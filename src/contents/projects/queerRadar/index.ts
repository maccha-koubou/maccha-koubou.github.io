import {createProject, ProjectType, SubProjectType} from "../../../config/ProjectType";
import cover from "./cover.png";

const queerRadar = createProject({
    titleWithLineBreak: 'Queer Radar',
    subtitle: 'Queer Radar',
    cover: cover,
    coverColored: cover,
    coverAlt: '',
    color: {primary: '#575C63', primaryLight: '#575C63', secondaryLight: '#797D84', secondary: '#797D84', neon: '#66FFFF'},
    landscape: {x: 0.5, y: 0.5},
    portrait: {x: 0.5, y: 0.5},
    types: [ProjectType.PRODUCT],
    subtypes: [SubProjectType.PHYSICAL_PRODUCTS],
    slides: []
})

export default queerRadar