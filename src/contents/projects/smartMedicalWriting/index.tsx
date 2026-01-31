import {createProject, ProjectType, SubProjectType} from "../../../config/ProjectType";
import cover from "./cover.png";
import coverColored from "./cover_colored.png";

const smartMedicalWriting = createProject({
    titleWithLineBreak: 'Smart Medical Writing',
    subtitle: 'UX/UI internship project at WuXi Biologics: A smart medical report writing tool',
    cover: cover,
    coverColored: coverColored,
    coverAlt: '',
    color: {primary: '#672CFF', primaryLight: '#976EFF', secondary: '#5D6576', secondaryLight: '#7C828E', neon: '#FFBEEC'},
    landscape: {x: 0.5, y: 0.5},
    portrait: {x: 0.5, y: 0.5},
    types: [ProjectType.PRODUCT],
    subtypes: [SubProjectType.DIGITAL_PRODUCTS],
    slides: []
})

export default smartMedicalWriting