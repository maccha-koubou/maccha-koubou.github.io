import {createProject, ProjectType, SubProjectType} from "../../../config/ProjectType";
import cover from "./cover.png";
import coverColored from "./cover_colored.png";

const exploreInVirtualLight = createProject({
    titleWithLineBreak: 'Explore in Virtual Light',
    subtitle: 'Explore in Virtual Light',
    cover: cover,
    coverColored: coverColored,
    coverAlt: '',
    color: {primary: '#FA6400', primaryLight: '#FF934A', secondaryLight: '#333333', secondary: '#333333', neon: '#66FFFF'},
    landscape: {x: 0.5, y: 0.5},
    portrait: {x: 0.7, y: 0.5},
    types: [ProjectType.PRODUCT],
    subtypes: [SubProjectType.DIGITAL_PRODUCTS],
    slides: []
})

export default exploreInVirtualLight