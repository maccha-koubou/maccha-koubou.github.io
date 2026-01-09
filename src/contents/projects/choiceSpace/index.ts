import {createProject, ProjectType, SubProjectType} from "../../../config/ProjectType";
import cover from "./cover.png";

const choiceSpace = createProject({
    title: 'Choice Space',
    subtitle: 'Gamified Nonlinear Exhibition Hall',
    cover: cover,
    types: [ProjectType.SPACE],
    subtypes: [SubProjectType.ARCHITECTURE_SPACES, SubProjectType.URBAN_SPACES],
    slides: []
})

export default choiceSpace