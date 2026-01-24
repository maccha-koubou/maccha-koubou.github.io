import {createProject, ProjectType, SubProjectType} from "../../../config/ProjectType";
import cover from './cover.png'

const campusCorridor = createProject({
    titleWithLineBreak: 'Campus Corridor',
    subtitle: 'Campus Corridor',
    cover: cover,
    coverColored: cover,
    coverAlt: '',
    color: {primary: '#222222', primaryLight: '#333333', secondaryLight: '#666666', secondary: '#666666', neon: '#66FFFF'},
    landscape: {x: 0.5, y: 0.5},
    portrait: {x: 0.6, y: 0.5},
    types: [ProjectType.SPACE],
    subtypes: [SubProjectType.URBAN_SPACES],
    slides: []
})

export default campusCorridor