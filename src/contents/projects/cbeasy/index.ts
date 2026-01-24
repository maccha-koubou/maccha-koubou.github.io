import {createProject, ProjectType, SubProjectType} from "../../../config/ProjectType";
import cover from './cover.png'

const cbeasy = createProject({
    titleWithLineBreak: 'CBeaSy',
    subtitle: 'CBeaSy',
    cover: cover,
    coverColored: cover,
    coverAlt: '',
    color: {primary: '#0062FF', primaryLight: '#39ADFF', secondaryLight: '#333333', secondary: '#333333', neon: '#66FFFF'},
    landscape: {x: 0.5, y: 0.5},
    portrait: {x: 0.25, y: 0.75},
    types: [ProjectType.PRODUCT],
    subtypes: [SubProjectType.DIGITAL_PRODUCTS],
    slides: []
})

export default cbeasy