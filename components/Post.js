import Link from "next/link";
import styles from 'styles/post.module.css'
import Image from 'next/image';

export default function Posts(props) {
    console.log(props);

    return (
        <div className={styles.gridContainer}>

            {props.posts.map(({ title, slug, eyecatch }) => (
                <article className={styles.post}>
                    <Link
                        href={`/blog/${slug}`}
                    >
                        <figure>
                            <Image
                                src={eyecatch.url}
                                alt=""
                                layout="responsive"
                                width={eyecatch.width}
                                height={eyecatch.height}
                                placeholder='blur'
                                blurDataURL={eyecatch.blurDataURL}
                            />
                        </figure>
                        <h2>{title}</h2>
                    </Link>
                </article>

            ))}

        </div>
    )

}
