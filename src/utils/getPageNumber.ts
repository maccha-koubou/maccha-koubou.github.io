import {ProjectType} from "../config/ProjectType";

function getPageNumber(pathname: string): number {

    if (pathname === '/') return 0

    if (pathname.startsWith('/work')) {

        // Work category pages
        if ([`${ProjectType.PRODUCT}`, `${ProjectType.SPACE}`, `${ProjectType.VISUALIZATION}`]
            .includes(pathname.replace('/work/', ''))) {
            return 1.2
        }

        // Project pages
        if (pathname.startsWith('/work/'))
            return 1.8

        // Work page
        return 1
    }

    return 2
}

export default getPageNumber