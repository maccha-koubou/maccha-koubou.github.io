import {createProject, ProjectType} from "../../../config/ProjectType";
import cover from "./cover.png";

const houseWithGlassYard = createProject({
    title: 'House with Glass Yard',
    subtitle: 'House with Glass Yard',
    cover: cover,
    types: [ProjectType.SPACE],
    slides: []
})

export default houseWithGlassYard