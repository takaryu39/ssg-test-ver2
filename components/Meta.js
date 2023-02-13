import Head from "next/head";
import { useRouter } from "next/router";
import siteImage from 'public/images/ogp.jpg'
import { siteMeta } from "../lib/constants";

const { siteTitle, siteDesc, siteUrl, siteLocale, siteType, siteIcon } = siteMeta

export function Meta(props) {
    const title = props.pageTitle ? `${props.pageTitle}｜${siteTitle}` : siteTitle;
    const desc = props.pageDesc ? props.pageDesc : siteDesc
    const router = useRouter()
    const url = `${siteUrl}${router.asPath}`
    const img = props.pageImg || siteImage.src
    const imgW = props.pageImgW || siteImage.width
    const imgH = props.pageImgH || siteImage.height
    const imgUrl = img.startsWith('https')? img:`${siteUrl}${img}`;
    return (
        <Head>
            <title>{title}</title>
            <meta property="og:title" content={title}></meta>
            <meta name="description" content={desc}></meta>
            <meta property="og:description" content={desc}></meta>
            <link rel="canonical" href={url}></link>
            <meta property="og:url" content={url}></meta>
            <meta property="og:site_name" content={siteTitle}></meta>
            <meta property="og:type" content={siteType}></meta>
            <meta property="og:locale" content={siteLocale}></meta>
            <link rel="icon" href={siteIcon}></link>
            <link rel="apple-touch-icon" href={siteIcon}></link>

            <meta property="og:image" content={imgUrl}></meta>
            <meta property="og:image:width" content={imgW}></meta>
            <meta property="og:image:height" content={imgH}></meta>
            <meta name="twitter:card" content="summary_large_image"></meta>

        </Head>

    )

}
