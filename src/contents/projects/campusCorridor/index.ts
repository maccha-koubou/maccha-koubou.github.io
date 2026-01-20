import {createProject, ProjectType, SubProjectType} from "../../../config/ProjectType";
import cover from './cover.png'

const campusCorridor = createProject({
    titleWithLineBreak: 'Campus Corridor',
    subtitle: 'Campus Corridor',
    cover: cover,
    coverColored: cover,
    coverAlt: '',
    landscape: {x: 0.5, y: 0.5},
    portrait: {x: 0.6, y: 0.5},
    types: [ProjectType.SPACE],
    subtypes: [SubProjectType.URBAN_SPACES],
    slides: []
})

export default campusCorridor