import { Hero } from 'components/Hero'
import { Contact } from '../components/Contact'
import { Container } from '../components/Container'
import { PostBody } from '../components/PostBody'
import { TwoColumn, TwoColumnMain, TwoColumnSidebar } from '../components/TwoColumn'
import Image from 'next/image'
import thumbnail from 'public/images/about.jpg'
import { Meta } from '../components/Meta'



export default function About() {
    return (
        <Container>
            <Meta
                pageTitle="アバウト"
                pageDesc="アバウトページですhogehogeho"
                pageImg={thumbnail.src}
                pageImgW={thumbnail.width}
                pageImgH={thumbnail.height}
            />
            <Hero
                title="About"
                subtitle="About development activities"
            />
            <figure>
                <Image
                    src={thumbnail}
                    alt=""
                    layout='responsive'
                    sizes='(min-width:1152px) 1152px,100vw'
                    priority
                    placeholder='blur'
                />
            </figure>
            <TwoColumn>
                <TwoColumnMain>
                    <PostBody>
                        <p>
                            テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト
                        </p>
                        <p>
                            テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト
                        </p>
                        <h2>見出し見出し見出し見出し見出し見出し</h2>
                        <p>
                            テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト
                        </p>
                        <h2>見出し見出し見出し見出し見出し見出しß</h2>
                        <p>
                            テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト
                        </p>
                        <p>
                            テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト
                        </p>
                    </PostBody>
                    </TwoColumnMain>
                    <TwoColumnSidebar>
                    <Contact />
                </TwoColumnSidebar>
            </TwoColumn>
        </Container>
        
    )
}