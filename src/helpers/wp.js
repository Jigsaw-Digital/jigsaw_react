import PagepileLayout from "../layouts/Pagepile";

export const getNavigation = () => {
    return new Promise((resolve, reject) => {
        const siteURL = 'https://neatsmith.jdsx.app';
        const endpoint = `${siteURL}/wp-json/jigsawdigital/main-menu`
        fetch(endpoint)
            .then(response => response.json())
            .then(pages => {
                resolve(pages);
                window.site_navigation = pages;
            })
            .catch(error => console.error(error))
    })
}

export const getPages = () => {
    return new Promise((resolve, reject) => {
        const siteURL = 'https://neatsmith.jdsx.app';
        const endpoint = `${siteURL}/wp-json/better-rest-endpoints/v1/pages?content=false&acf=false&media=false&per_page=99`
        fetch(endpoint)
            .then(response => response.json())
            .then(pages => {
                resolve(pages);
                window.site_pages = pages;
            })
            .catch(error => console.error(error))
    })
}

export const getPage = (pageID) => {
    return new Promise((resolve, reject) => {
        const siteURL = 'https://neatsmith.jdsx.app';
        const endpoint = `${siteURL}/wp-json/better-rest-endpoints/v1/page/` + pageID
        fetch(endpoint)
            .then(response => response.json())
            .then(pages => {
                resolve(pages);
            })
            .catch(error => console.error(error))
    })
}

export const renderLayouts = (layout) => {
    if (layout.acf_fc_layout === 'hero') {
        return PagepileLayout(layout);
    }

    return '';
}

