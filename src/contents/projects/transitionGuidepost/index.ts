import {createProject, ProjectType, SubProjectType} from "../../../config/ProjectType";
import cover from "./cover.png";

const transitionGuidepost = createProject({
    titleWithLineBreak: 'Transition \nGuidepost',
    subtitle: 'Transition Guidepost',
    cover: cover,
    coverColored: cover,
    coverAlt: '',
    color: {primary: '#EA005F', primaryLight: '#F7468A', secondaryLight: '#0074E8', secondary: '#006AEA', neon: '#66FFFF'},
    landscape: {x: 0.5, y: 0.5},
    portrait: {x: 0.5, y: 0.5},
    types: [ProjectType.PRODUCT],
    subtypes: [SubProjectType.DIGITAL_PRODUCTS],
    slides: []
})

export default transitionGuidepost