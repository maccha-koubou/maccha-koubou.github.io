import {createProject, ProjectType, SubProjectType} from "../../../config/ProjectType";
import cover from "./cover.png";
import coverColored from "./cover_colored.png";

const transitionGuidepost = createProject({
    titleWithLineBreak: 'Transition \nGuidepost',
    subtitle: 'Transition Guidepost',
    cover: cover,
    coverColored: coverColored,
    coverAlt: '',
    color: {primary: '#EA005F', primaryLight: '#F7468A', secondary: '#006AEA', secondaryLight: '#0074E8', neon: '#66FFFF'},
    landscape: {x: 0.5, y: 0.5},
    portrait: {x: 0.5, y: 0.5},
    types: [ProjectType.PRODUCT],
    subtypes: [SubProjectType.DIGITAL_PRODUCTS],
    slides: []
})

export default transitionGuidepost