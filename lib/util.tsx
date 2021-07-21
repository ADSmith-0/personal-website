export const sortByDate = (a:object, b:object):number => {
    // @ts-ignore
    return new Date(b.frontmatter.date) - new Date(a.frontmatter.date);
}
export const sortByOrder = (a:object, b:object):number => {
    // @ts-ignore
    return b.frontmatter.order - a.frontmatter.order;
}
export const sortByStatus = (a: object, b: object):number => {
    //@ts-ignore
    return a.frontmatter.status > b.frontmatter.status;
}
