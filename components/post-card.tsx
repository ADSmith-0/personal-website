import Link from 'next/link';
import path from 'path';
import { PostType } from '../types/post';
import cardStyle from '../styles/card.module.css';
import styles from '../styles/post-card.module.css';
import Image from 'next/image';

export default function PostCard({ post:{
        slug, 
        frontmatter:{
            title, 
            cover_image,
            date, 
            author, 
            excerpt
        }
    }}: {post: PostType}) {
    return (
        <article className={`${styles.card} ${cardStyle.card}`}>
            <Image
                src={cover_image}
                className={styles.cover_image}
                height={1150}
                width={1500}
                alt={title+" cover image"}
            />
            <p className={styles.date}>Posted on {date}</p>
            <h3 className={styles.title}>{title}</h3>
            <h4 className={styles.author}>Written by {author}</h4>
            <p className={styles.excerpt}>{excerpt}</p>
            <Link href={path.join(process.cwd(), 'posts', slug)}>
                <a className={styles.btn_readmore}>Read more &rarr;</a>
            </Link>
        </article>
    )
}
