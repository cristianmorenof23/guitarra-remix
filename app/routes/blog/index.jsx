import { useLoaderData } from "@remix-run/react"
import ListadoPosts from "~/components/listado-posts"
import { getPosts } from "~/models/posts.server"


export function meta() {
    return {
        title: 'Guitar-LA - Nuestro Blog',
        description: 'Guitar-LA - Blog de musica y venta de guitarras'
    }
}

export async function loader() {
    const posts = await getPosts()
    console.log(posts);
    return posts.data
}


function Blog() {
    const posts = useLoaderData()
    return (
        <ListadoPosts
            posts={posts} />
    )
}

export default Blog