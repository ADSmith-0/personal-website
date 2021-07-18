import Link from 'next/link';
import path from 'path';
import { PostType } from '../types/post';
export default function PostCard({ post:{
        slug, 
        frontmatter:{
            title, 
            date, 
            author, 
            excerpt
        }
    }}: {post: PostType}) {
    return (
        <div className="card">
            <h3>{title}</h3>
            <p>{date}</p>
            <h4>{author}</h4>
            <p>{excerpt}</p>
            <Link href={path.join(process.cwd(), 'posts', slug)}>
                <a>Read more &rarr;</a>
            </Link>
        </div>
    )
}
