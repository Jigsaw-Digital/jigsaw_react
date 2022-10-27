const BASE_URL = "https://api.jigsaw.digital/wp-json/wp/v2";
process.env.NODE_TLS_REJECT_UNAUTHORIZED = "0";

export async function getMainMenu() {
  const menuItemsRes = await fetch(BASE_URL + "/menu");
  const menuItems = await menuItemsRes.json();
  return menuItems;
}

export async function getPosts() {
  const postsRes = await fetch(BASE_URL + "/posts?_embed");
  const posts = await postsRes.json();
  return posts;
}

export async function getPortfolio() {
  const postsRes = await fetch(BASE_URL + "/work?_embed");
  const posts = await postsRes.json();
  return posts;
}

export async function getPost(slug) {
  const posts = await getPosts();
  const postArray = posts.filter((post) => post.slug == slug);
  const post = postArray.length > 0 ? postArray[0] : null;
  return post;
}

export async function getWork(slug) {
  const posts = await getPortfolio();
  const postArray = posts.filter((post) => post.slug == slug);
  const post = postArray.length > 0 ? postArray[0] : null;
  return post;
}

export async function getPages() {
  const eventsRes = await fetch(BASE_URL + "/pages?_embed");
  const events = await eventsRes.json();
  return events;
}

export async function getPage(slug) {
  const events = await getPages();
  const eventArray = events.filter((event) => event.slug == slug);
  const event = eventArray.length > 0 ? eventArray[0] : null;
  return event;
}

export async function getSlugs(type) {
  let elements = [];
  switch (type) {
    case "posts":
      elements = await getPosts();
      break;
    case "work":
      elements = await getPortfolio();
      break;
  }
  const elementsIds = elements.map((element) => {
    return {
      params: {
        slug: element.slug,
      },
    };
  });
  return elementsIds;
}
