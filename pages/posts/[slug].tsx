import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import Image from 'next/image';
//@ts-ignore
import marked from 'marked';
import { PostType } from '../../types/post';
import { SlugContext } from '../../types/slugContext';

export async function getStaticPaths() {
    const files = fs.readdirSync(path.join('posts'));

    const paths = files.map((filename) => ({
        params: {
            slug: filename.replace('.md', ''),
        },
    }))

    return {
        paths,
        fallback: false,
    }
}
export async function getStaticProps({ params: { slug } }:SlugContext) {
    const markdownWithMeta = fs.readFileSync(path.join('posts', slug + '.md'),'utf-8');

    const { data: frontmatter, content } = matter(markdownWithMeta);

    return {
        props: {
            frontmatter,
            slug,
            content,
        },
    }
}
export default function Post({ frontmatter:{title, cover_image, date, author}, content }:PostType) {
    return (
        <div>
            <Image 
                src={cover_image}
                height={300}
                width={420}
                alt="cover image for post"
            />
            <h1>{title}</h1>
            <p>{date}</p>
            <p>{author}</p>
            <div dangerouslySetInnerHTML={{ __html: marked(content) }}></div>
        </div>
    )
}
