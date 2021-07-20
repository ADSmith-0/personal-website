import Head from 'next/head';
import { GetStaticProps } from 'next';
import { getAllProjectsData } from '../../lib/projects';
import { sortByOrder } from '../../lib/util';
import { ProjectType } from '../../types/project';
import Project from '../../components/project-card';
import styles from '../../styles/projects-archive.module.css';

export const getStaticProps:GetStaticProps = async () => {
    const projects = getAllProjectsData();

    return{
        props: {
            projects: projects.sort(sortByOrder)
        }
    }
}
export default function index({ projects }:{ projects:ProjectType[]}) {
    return (
        <>
            <Head>
                <title>Projects</title>
            </Head>
            <main id={styles.container}>
                { projects.map((project:ProjectType, index:number) => (
                    <Project key={index} project={project} />
                )) }
                <div className={styles.buffer}></div>
            </main>
        </>
    )
}
