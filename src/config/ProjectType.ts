import {ThemeColors} from "../styles/theme";
import {CanvasItemProps} from "../components/CanvasItem";

export interface Project {
    id: string,
    url: string,
    title: string,
    titleWithLineBreak: string,
    subtitle: string,
    types: ProjectType[],
    subtypes: SubProjectType[],
    cover: string,
    coverColored: string,
    coverAlt: string,
    color: ThemeColors,
    landscape: {x: number, y: number},
    portrait: {x: number, y: number},
    slides: Array<{ stage: string, render: (animateIn: boolean, animateOut: boolean) => CanvasItemProps[] }>
}

export enum ProjectType {
    PRODUCT = 'product',
    SPACE = 'space',
    VISUALIZATION = 'visualization',
}

export enum SubProjectType {
    DIGITAL_PRODUCTS = 'Digital products',
    PHYSICAL_PRODUCTS = 'Physical products',

    ARCHITECTURE_SPACES = 'Architecture spaces',
    URBAN_SPACES = 'Urban spaces',

    VISUAL_COMMUNICATION = 'Visual communication',
    RESEARCH_VISUALIZATIONS = 'Research visualizations',
}

export const createProject = (input: {
    titleWithLineBreak: string
    subtitle: string
    types: ProjectType[]
    subtypes: SubProjectType[]
    cover: string
    coverColored: string,
    coverAlt: string,
    color: ThemeColors,
    landscape: {x: number, y: number},
    portrait: {x: number, y: number},
    slides: Array<{ stage: string, render: (animateIn: boolean, animateOut: boolean) => CanvasItemProps[] }>
}) => {

    const title = input.titleWithLineBreak.replace(/\n/g, '');

    // Title to id (Kebab)
    const id = title
        .trim()
        .toLowerCase()
        .replace(/[^a-z0-9]+/g, '-')
        .replace(/(^-|-$)/g, '')

    // Title to folder url (Camel)
    const url = title
        .trim()
        .replace(/[^a-zA-Z0-9 ]+/g, '')
        .split(/\s+/) // Become a string[]
        .map((w, i) =>
            i === 0
                ? w.toLowerCase()
                : w.charAt(0).toUpperCase() + w.slice(1).toLowerCase()
        )
        .join('')

    const project: Project = {id, url, title, ...input}

    return project
}