import {createProject, ProjectType, SubProjectType} from "../../../config/ProjectType";
import cover from "./cover.png";

const queerRadar = createProject({
    title: 'Queer Radar',
    subtitle: 'Queer Radar',
    cover: cover,
    coverColored: cover,
    landscape: {x: 0.5, y: 0.5},
    portrait: {x: 0.5, y: 0.5},
    types: [ProjectType.PRODUCT],
    subtypes: [SubProjectType.PHYSICAL_PRODUCTS],
    slides: []
})

export default queerRadar