import { getPostBySlug,getAllSlugs } from 'lib/Api';
import { Container } from '../../components/Container';
import PostHeader from '../../components/PostHeader';
import Image from 'next/image';
import { TwoColumn, TwoColumnMain, TwoColumnSidebar } from '../../components/TwoColumn';
import { PostBody } from '../../components/PostBody';
import ConvertBody from '../../components/ConvertDody';
import PostCategories from '../../components/PostCategories';
import { extractText } from '../../lib/ExtractText';
import { Meta } from 'components/Meta'
import {eyecatchLocal} from 'lib/constants'
import { getPlaiceholder } from "plaiceholder";
import { prevNextPost } from '../../lib/prev-next-post';
import Pagination from '../../components/Pagination';



export default function Post(props){
    return (
        <Container>
            <article>
                <Meta
                pageTitle = {props.title}
                pageDesc = {props.description}
                pageImg={props.eyecatch.url}
                pageImgW={props.eyecatch.width}
                pageImgH={props.eyecatch.height}
                />
                <PostHeader title={props.title} subtitle="Blog Article" publish={props.publish}/>
                <figure>
                    <Image
                        src={props.eyecatch.url}
                        alt=""
                        layout="responsive"
                        width={props.eyecatch.width}
                        height={props.eyecatch.height}
                        sizes="(min-width:1152px) 1152px,100vw"
                        priority
                        placeholder='blur'
                        blurDataURL={props.eyecatch.blurDataURL}
                    />
                </figure>
                <TwoColumn>
                    <TwoColumnMain>
                        <PostBody>
                            <ConvertBody contentHTML={props.content}/>
                        
                        </PostBody>
                    </TwoColumnMain>
                    <TwoColumnSidebar>
                        <PostCategories categories={props.categories}/>
                    </TwoColumnSidebar>
                </TwoColumn>
                <Pagination prevText={props.prevPost.title} prevUrl={`/blog/${props.prevPost.slug}`} nextText={props.nextPost.title} nextUrl={`/blog/${props.nextPost.slug}`}></Pagination>
               
            </article>
        </Container>
    )
}

export async function getStaticPaths(){
    const allSlugs = await getAllSlugs()
    return{
        paths:allSlugs.map(({slug})=>`/blog/${slug}`),
        fallback:false,
    }
}
export async function getStaticProps(context) {
    const slug = context.params.slug
    const post = await getPostBySlug(slug)
    const description = extractText(post.content)
    const eyecatch = post.eyecatch ?? eyecatchLocal;
    const {base64} = await getPlaiceholder(eyecatch.url)
    eyecatch.blurDataURL = base64

    const allSlugs = await getAllSlugs()
    const [prevPost,nextPost] = prevNextPost(allSlugs,slug)
    
    return{
        props:{
            title:post.title,
            publish:post.publishDate,
            content:post.content,
            categories:post.categories,
            description:description,
            eyecatch:eyecatch,
            prevPost:prevPost,
            nextPost:nextPost
        }
    }
    
}