import {createProject, ProjectType, SubProjectType} from "../../../config/ProjectType";
import cover from "./cover.png";

const stoneHouseGlassYard = createProject({
    titleWithLineBreak: 'Stone House & Glass Yard',
    subtitle: 'Todo',
    cover: cover,
    coverColored: cover,
    coverAlt: '',
    color: {primary: '#007CAD', primaryLight: '#66CCFF', secondary: '#333333', secondaryLight: '#333333', neon: '#66FFFF'},
    landscape: {x: 0.5, y: 0.5},
    portrait: {x: 0.5, y: 0.5},
    types: [ProjectType.PRODUCT],
    subtypes: [SubProjectType.DIGITAL_PRODUCTS],
    slides: []
})

export default stoneHouseGlassYard