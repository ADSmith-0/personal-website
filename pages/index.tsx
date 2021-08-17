import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import styles from '../styles/home.module.css';
import { GetStaticProps } from 'next';
import { getAllProjectsData } from '../lib/projects';
import { getAllPostsData } from '../lib/posts';
import { ProjectType } from '../types/project';
import { PostType } from '../types/post';
import Carousel from '../components/carousel';
import ProjectCard from '../components/project-card';
import PostCard from '../components/post-card';
import { sortByOrder, sortByDate } from '../lib/util';
export const getStaticProps:GetStaticProps = async () => {
  const Projects = getAllProjectsData();
  const Posts = getAllPostsData();
  //@ts-ignore 
  const featured_projects = Projects.filter(project => project.frontmatter.featured);
  //@ts-ignore 
  const featured_posts = Posts.filter(post => post.frontmatter.featured);
  return {
    props: {
      projects: featured_projects.sort(sortByOrder),
      posts: featured_posts.sort(sortByDate)
    }
  }
}
export default function Home({ projects, posts }:{ projects:ProjectType[], posts:PostType[] }) {
  return (
    <>
      <Head>
        <title>Home</title>
      </Head>
      <main className={styles.container}>
        <section id={styles.head}>
          <aside id={styles.side_bar}>
            <Image
              src='/images/profile-picture.jpg'
              height={150}
              width={150}
              alt="Picture of Adam"
              id={styles.profile_picture}
            />
            <h3 id={styles.dev_name}>Adam Smith</h3>
            <div id={styles.social_links}>
              <a href="https://www.linkedin.com/in/adam-smith-9728511ba/" className={styles.social_link}>
                <Image
                  src={`/images/linkedin-light.png`}
                  height={35}
                  width={35}
                  alt="LinkedIn Icon"
                  className={styles.social_icon}
                />
              </a>
              <a href="https://github.com/ADSmith-0" className={styles.social_link}>
                <Image
                  src={`/images/github-logo-light.png`}
                  height={35}
                  width={35}
                  alt="Github Icon"
                  className={styles.social_icon}
                />
              </a>
            </div>
          </aside>
          <div id={styles.head_intro}>
            <h1 id={styles.title}>Welcome to my website</h1>
            <p id={styles.intro_text} className={styles.description}>Hello, My name is Adam and I&apos;m a 23 year old web developer. 
              I enjoy building websites and web apps and learning new technologies. Find out more about me in my <Link href="/about"><a className={styles.link}>about page</a></Link>.
            </p>
          </div>
        </section>
        <section className={styles.blocks}>
            <section id={styles.projects_description} className={styles.description_section}>
                <div id={styles.projects_text}>
                    <Link href="/projects">
                        <a className={styles.link}>
                            <h2 className={styles.subtitle}>Projects <span className={styles.arrow}>&rarr;</span></h2>
                        </a>
                    </Link>
                    <p className={styles.description}>
                        If you&apos;re interested in looking at the projects that I&apos;ve made then head over
                        to the projects page, here&apos;s some of the highlights:
                    </p>
                </div>
                <Image 
                    className={styles.block_image}
                    src="/images/projects.jpg"
                    height={350}
                    width={350}
                    alt="Image representing projects"
                />
            </section>
            <div className={styles.carousel_container}>
                <Carousel className={styles.carousel_section}>
                    {projects.map((project, index) => (
                        <ProjectCard key={index} project={project}/>
                    ))}
                </Carousel>
            </div>
        </section>
        <section className={styles.blocks}>
            <section id={styles.posts_description} className={styles.description_section}>
                <Image
                    className={styles.block_image}
                    src="/images/posts.jpg"
                    height={350}
                    width={350}
                    objectFit="cover"
                    alt="Image representing posts by Miguel Á. Padriñán from Pexels"
                />
                <section id={styles.posts_text}>
                    <Link href="/projects">
                        <a className={styles.link}>
                            <h2 className={styles.subtitle}>Posts <span className={styles.arrow}>&rarr;</span></h2>
                        </a>
                    </Link>
                    <p className={styles.description}>
                        I sometimes find something that I want to write about, if you&apos;re interesting
                        in seeing what I write about then head over to the posts page. Here are some
                        highlights:
                    </p>
                </section>
            </section>
            <div className={styles.carousel_container}>
                <Carousel className={styles.carousel_section}>
                    {posts.map((post, index) => (
                        <PostCard key={index} post={post}/>
                    ))}
                </Carousel>
            </div>
        </section>
      </main>
    </>
  )
}
