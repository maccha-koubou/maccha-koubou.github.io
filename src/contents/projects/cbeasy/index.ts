import {createProject, ProjectType, SubProjectType} from "../../../config/ProjectType";
import cover from './cover.png'

const cbeasy = createProject({
    title: 'CBeaSy',
    subtitle: 'CBeaSy',
    cover: cover,
    coverColored: cover,
    landscape: {x: 0.5, y: 0.5},
    portrait: {x: 0.25, y: 0.75},
    types: [ProjectType.PRODUCT],
    subtypes: [SubProjectType.DIGITAL_PRODUCTS],
    slides: []
})

export default cbeasy