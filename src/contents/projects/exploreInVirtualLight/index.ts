import {createProject, ProjectType, SubProjectType} from "../../../config/ProjectType";
import cover from "./cover.png";

const exploreInVirtualLight = createProject({
    title: 'Explore in Virtual Light',
    subtitle: 'Explore in Virtual Light',
    cover: cover,
    types: [ProjectType.PRODUCT],
    subtypes: [SubProjectType.DIGITAL_PRODUCTS],
    slides: []
})

export default exploreInVirtualLight