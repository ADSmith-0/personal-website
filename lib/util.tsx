export const sortByDate = (a:object, b:object):number => {
    // @ts-ignore
    return new Date(b.frontmatter.date) - new Date(a.frontmatter.date);
}
