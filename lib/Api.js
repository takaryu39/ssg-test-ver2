import { createClient } from "microcms-js-sdk";

export const client = createClient({
    serviceDomain: process.env.SERVICE_DOMAIN,
    apiKey: process.env.API_KEY,
})

export async function getPostBySlug(slug) {
    try {
        const post = await client.get({
            endpoint: "blog",
            queries: { filters: `slug[equals]${slug}` },
        })
        return post.contents[0]

    } catch (err) {
        console.log('~~ getPostBySlug ~~');
        console.log(err);
    }
}

export async function getAllSlugs(limit = 100) {
    try {

        const slugs = await client.get({
            endpoint: 'blog',
            query: { fields: 'title,slug', orders: '-publishDate', limit: limit },
        })

        return slugs.contents
    } catch (error) {
        console.log("~~ getAllSlugs ~~");
        console.log(error);

    }
}

export async function getAllPosts(limit = 100) {
    try {
        const posts = await client.get({
            endpoint: 'blog',
            queries: {
                fields: 'title,eyecatch,slug', orders: '-publishDate',
                limit: limit
            }
        })
        return posts.contents
    } catch (error) {
        console.log("~~ getAllPost ~~");
        console.log(error);

    }
}