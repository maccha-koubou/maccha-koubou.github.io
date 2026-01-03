import {createProject, ProjectType} from "../../../config/ProjectType";
import cover from "./cover.png";

const choiceSpace = createProject({
    title: 'Choice Space',
    subtitle: 'Gamified Nonlinear Exhibition Hall',
    cover: cover,
    types: [ProjectType.SPACE],
    slides: []
})

export default choiceSpace