export interface Project {
    id: string,
    title: string,
    cover: string,
    types: ProjectType[],

    // To-do: add the slide type
    slides: any,
}

export enum ProjectType {
    PRODUCT = 'product',
    SPACE = 'space',
    VISUALIZATION = 'visualization',
}