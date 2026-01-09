import {createProject, ProjectType, SubProjectType} from "../../../config/ProjectType";
import cover from "./cover.png";

const transitionGuidepost = createProject({
    title: 'Transition Guidepost',
    subtitle: 'Transition Guidepost',
    cover: cover,
    types: [ProjectType.PRODUCT],
    subtypes: [SubProjectType.DIGITAL_PRODUCTS],
    slides: []
})

export default transitionGuidepost