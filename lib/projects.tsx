import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

const projectsDirectory = path.join(process.cwd(), 'projects');

export const getAllProjectsData = (): object[] => {
    const files = fs.readdirSync(projectsDirectory);
    const posts = files.map(file => {
        const slug = file.replace(/\.md/, '');

        const markdownWithMeta = fs.readFileSync(path.join(projectsDirectory, file), 'utf-8');

        const { data: frontmatter } = matter(markdownWithMeta);

        return {
            slug,
            frontmatter
        }
    });

    return posts;
}