"use strict";
exports.id = 266;
exports.ids = [266];
exports.modules = {

/***/ 1266:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "M6": () => (/* binding */ getWork),
/* harmony export */   "cH": () => (/* binding */ getSlugs),
/* harmony export */   "fx": () => (/* binding */ getPage),
/* harmony export */   "v8": () => (/* binding */ getMainMenu),
/* harmony export */   "xl": () => (/* binding */ getPost),
/* harmony export */   "xp": () => (/* binding */ getPortfolio)
/* harmony export */ });
/* unused harmony exports getPosts, getPages */
const BASE_URL = "https://api.jigsaw.digital/wp-json/wp/v2";
process.env.NODE_TLS_REJECT_UNAUTHORIZED = "0";
async function getMainMenu() {
    const menuItemsRes = await fetch(BASE_URL + "/menu");
    const menuItems = await menuItemsRes.json();
    return menuItems;
}
async function getPosts() {
    const postsRes = await fetch(BASE_URL + "/posts?_embed");
    const posts = await postsRes.json();
    return posts;
}
async function getPortfolio() {
    const postsRes = await fetch(BASE_URL + "/work?_embed");
    const posts = await postsRes.json();
    return posts;
}
async function getPost(slug) {
    const posts = await getPosts();
    const postArray = posts.filter((post)=>post.slug == slug);
    const post = postArray.length > 0 ? postArray[0] : null;
    return post;
}
async function getWork(slug) {
    const posts = await getPortfolio();
    const postArray = posts.filter((post)=>post.slug == slug);
    const post = postArray.length > 0 ? postArray[0] : null;
    return post;
}
async function getPages() {
    const eventsRes = await fetch(BASE_URL + "/pages?_embed");
    const events = await eventsRes.json();
    return events;
}
async function getPage(slug) {
    const events = await getPages();
    const eventArray = events.filter((event)=>event.slug == slug);
    const event = eventArray.length > 0 ? eventArray[0] : null;
    return event;
}
async function getSlugs(type) {
    let elements = [];
    switch(type){
        case "posts":
            elements = await getPosts();
            break;
        case "work":
            elements = await getPortfolio();
            break;
    }
    const elementsIds = elements.map((element)=>{
        return {
            params: {
                slug: element.slug
            }
        };
    });
    return elementsIds;
}


/***/ })

};
;