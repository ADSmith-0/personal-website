export type ProjectType = {
    slug: string,
    frontmatter: {
        title: string,
        cover_image: string,
        status: string,
        live: string,
        order: number
    }
};