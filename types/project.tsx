export type ProjectType = {
    slug: string,
    frontmatter: {
        link: string,
        title: string,
        cover_image: string,
        status: string,
        live: string,
        order: number
    }
};