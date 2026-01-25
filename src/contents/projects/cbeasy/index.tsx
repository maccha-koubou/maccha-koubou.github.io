import {createProject, ProjectType, SubProjectType} from "../../../config/ProjectType";
import cover from './cover.png'
import coverColored from "./cover_colored.png";

const cbeasy = createProject({
    titleWithLineBreak: 'CBeaSy',
    subtitle: 'CBeaSy',
    cover: cover,
    coverColored: coverColored,
    coverAlt: '',
    color: {primary: '#0062FF', primaryLight: '#39ADFF', secondary: '#333333', secondaryLight: '#333333', neon: '#66FFFF'},
    landscape: {x: 0.5, y: 0.5},
    portrait: {x: 0.25, y: 0.75},
    types: [ProjectType.PRODUCT],
    subtypes: [SubProjectType.DIGITAL_PRODUCTS],
    slides: []
})

export default cbeasy