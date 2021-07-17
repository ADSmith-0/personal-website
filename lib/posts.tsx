import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

const postsDirectory = path.join(process.cwd(), 'posts');

export const getAllPostsData = ():object[] => {
    const files = fs.readdirSync(postsDirectory);
    const posts = files.map(file => {
        const slug = file.replace(/\.md/, '');
        
        const markdownWithMeta = fs.readFileSync(path.join(postsDirectory, file), 'utf-8');

        const { data: frontmatter } = matter(markdownWithMeta);

        return {
            slug,
            frontmatter
        }
    });

    return posts;
}