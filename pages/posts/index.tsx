import Head from 'next/head';
import { GetStaticProps } from 'next';
import { getAllPostsData } from '../../lib/posts';
import { sortByDate } from '../../lib/util';
import { PostType } from '../../types/post';
import Card from '../../components/card';

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
            <div className="posts">
                { posts.map((post, index) => (
                    <Card key={index} post={post} />
                )) }
            </div>
        </>
    )
}
