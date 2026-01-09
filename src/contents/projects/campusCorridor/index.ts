import {createProject, ProjectType, SubProjectType} from "../../../config/ProjectType";
import cover from './cover.png'

const campusCorridor = createProject({
    title: 'Campus Corridor',
    subtitle: 'Campus Corridor',
    cover: cover,
    types: [ProjectType.SPACE],
    subtypes: [SubProjectType.URBAN_SPACES],
    slides: []
})

export default campusCorridor