import Head from 'next/head';
import { GetStaticProps } from 'next';
import { getAllPostsData } from '../../lib/posts';
import { sortByDate } from '../../lib/util';
import { PostType } from '../../types/post';
import PostCard from '../../components/post-card';
import styles from '../../styles/posts-archive.module.css';

export const getStaticProps: GetStaticProps = async () => {
    const posts = getAllPostsData();

    return {
        props: {
            posts: posts.sort(sortByDate)
        }
    }
}
export default function index({ posts }:{ posts: PostType[]}) {
    return (
        <>
            <Head>
                <title>Dev Blog</title>
            </Head>
            <div id={styles.container}>
                { posts.map((post, index) => (
                    <PostCard key={index} post={post} />
                )) }
            </div>
        </>
    )
}
