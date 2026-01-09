import {createProject, ProjectType, SubProjectType} from "../../../config/ProjectType";
import cover from "./cover.png";

const queerRadar = createProject({
    title: 'Queer Radar',
    subtitle: 'Queer Radar',
    cover: cover,
    types: [ProjectType.PRODUCT],
    subtypes: [SubProjectType.PHYSICAL_PRODUCTS],
    slides: []
})

export default queerRadar