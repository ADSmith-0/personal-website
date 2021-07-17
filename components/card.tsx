import Link from 'next/link';
import path from 'path';
export default function Card({ post:{
        slug, 
        frontmatter:{
            title, 
            date, 
            author, 
            excerpt
        }
    }}: { 
    post: { 
        slug: string,
        frontmatter: { 
            title: string, 
            date: string, 
            author: string, 
            excerpt: string
        }
    }}) {
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
