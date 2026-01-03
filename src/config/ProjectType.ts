export interface Project {
    id: string,
    url: string,
    title: string,
    subtitle: string,
    types: ProjectType[],
    cover: string,

    // To-do: add the slide type
    slides: any[],
}

export enum ProjectType {
    PRODUCT = 'product',
    SPACE = 'space',
    VISUALIZATION = 'visualization',
}

export enum subProjectTypes {
    DIGITAL_PRODUCTS = 'Digital products',
    PHYSICAL_PRODUCTS = 'Physical products',

    ARCHITECTURE_SPACES = 'Architecture spaces',
    URBAN_SPACES = 'Urban spaces',

    VISUAL_COMMUNICATION = 'Visual communication',
    RESEARCH_VISUALIZATIONS = 'Research visualizations',
}

export const createProject = (input: {
    title: string
    subtitle: string
    types: ProjectType[]
    cover: string
    slides: any[] // <- To be updated
}) => {

    // Title to id (Kebab)
    const id = input.title
        .trim()
        .toLowerCase()
        .replace(/[^a-z0-9]+/g, '-')
        .replace(/(^-|-$)/g, '')

    // Title to folder url (Camel)
    const url = input.title
        .trim()
        .replace(/[^a-zA-Z0-9 ]+/g, '')
        .split(/\s+/) // Become a string[]
        .map((w, i) =>
            i === 0
                ? w.toLowerCase()
                : w.charAt(0).toUpperCase() + w.slice(1).toLowerCase()
        )
        .join('')

    const project: Project = {
        id: id,
        url: url,
        title: input.title,
        subtitle: input.subtitle,
        cover: input.cover,
        types: input.types,
        slides: input.slides
    }

    return project
}