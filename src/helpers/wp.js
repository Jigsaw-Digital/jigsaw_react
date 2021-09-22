import HeroLayout from "../layouts/Hero";
import SpacerLayout from "../layouts/Core/Spacer";
import ImageLayout from "../layouts/Image";
import OneColumnTextLayout from "../layouts/Core/OneColumnText";
import TwoColumnTextLayout from "../layouts/Core/TwoColumnText";

export const getNavigation = (navbar) => {
    return new Promise((resolve, reject) => {
        const siteURL = 'https://jigsaw-frontend.test';
        const endpoint = `${siteURL}/wp-json/jigsawdigital/` + navbar
        fetch(endpoint)
            .then(response => response.json())
            .then(pages => {
                resolve(pages);
                window[navbar.replaceAll('-', '_')] = pages;
            })
            .catch(error => console.error(error))
    })
}

export const getPages = (post_type = 'pages') => {
    return new Promise((resolve, reject) => {
        const siteURL = 'https://jigsaw-frontend.test';
        const endpoint = `${siteURL}/wp-json/better-rest-endpoints/v1/` + post_type + `?content=false&acf=false&media=false&per_page=99`
        fetch(endpoint)
            .then(response => response.json())
            .then(pages => {
                resolve(pages);
                window.site_pages = pages;
            })
            .catch(error => console.error(error))
    })
}

export const getPage = (pageID, post_type = 'pages') => {
    return new Promise((resolve, reject) => {
        const siteURL = 'https://jigsaw-frontend.test';
        const endpoint = `${siteURL}/wp-json/wp/v2/` + post_type + `/` + pageID

        fetch(endpoint)
            .then(response => response.json())
            .then(pages => {
                resolve(pages);
            })
            .catch(error => console.error(error))
    })
}

export const renderLayouts = (layout) => {
    if (layout.blockName === 'acf/layout-hero') {
        return (
            HeroLayout(layout)
        );
    } else if (layout.blockName === 'acf/layout-spacing') {
        return SpacerLayout(layout);
    } else if (layout.blockName === 'acf/layout-image') {
        return ImageLayout(layout);
    } else if (layout.blockName === 'acf/layout-one-column-text') {
        return OneColumnTextLayout(layout);
    } else if (layout.blockName === 'acf/layout-two-column-text') {
        return TwoColumnTextLayout(layout);
    }

    return '';
}

export const onSetResult = (result, key) => {
    localStorage.setItem(key, result);
}

