export type PostType = {
    frontmatter: {
        title: string,
        cover_image: string,
        date: string,
        excerpt: string,
        author: string,
    },
    slug: string,
    content: string
};
