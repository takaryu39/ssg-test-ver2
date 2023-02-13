import { Hero } from 'components/Hero'
import { getPlaiceholder } from 'plaiceholder'
import { Container } from '../../components/Container'
import { Meta } from '../../components/Meta'
import Posts from '../../components/Post'
import { getAllPosts } from '../../lib/Api'
import { eyecatchLocal } from '../../lib/constants'

export default function Blog(props) {
    
    return (
        <Container>
            <Meta
            pageTitle="ブログ"
            />
            <Hero
                title="Blog"
                subtitle="Recent Posts"
            />
            <Hero />
            <Posts posts = {props.posts} />
        </Container>
    )
}

export async function getStaticProps(context) {
    const posts = await getAllPosts()
    for (const post of posts) {
        if(!post.hasOwnProperty('eyecatch')){
            post.eyecatch = eyecatchLocal
        }
        const{base64} = await getPlaiceholder(post.eyecatch.url)
        post.eyecatch.blurDataURL = base64;
    }
    return{
        props:{
            posts:posts
        }
    }
    
    
}