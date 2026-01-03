import {createProject, ProjectType} from "../../../config/ProjectType";
import cover from './cover.png'

const campusCorridor = createProject({
    title: 'Campus Corridor',
    subtitle: 'Campus Corridor',
    cover: cover,
    types: [ProjectType.SPACE],
    slides: []
})

export default campusCorridor