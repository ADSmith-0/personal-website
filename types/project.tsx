export type ProjectType = {
    slug: string,
    frontmatter: {
        github_link: string,
        live_link: string,
        title: string,
        cover_image: string,
        tags: string[],
        status: string,
        live: string,
        description: string,
        order: number
    }
};