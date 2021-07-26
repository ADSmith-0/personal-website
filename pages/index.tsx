import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import styles from '../styles/home.module.css';
export default function Home() {
  return (
    <>
      <Head>
        <title>Home</title>
      </Head>
      <main className={styles.container}>
        {/* <aside id={styles.side_bar}>
          <Image
            src='/images/profile-picture.jpg'
            height={150}
            width={150}
            alt="Picture of Adam"
            id={styles.profile_picture}
          />
          <div id={styles.links}>
            <h3 id={styles.dev_name}>Adam Smith</h3>
            <a className={styles.link} href="https://www.linkedin.com/in/adam-smith-9728511ba/">LinkedIn Profile</a>
          </div>
        </aside> */}
        <section id="text">
          <h1 id={styles.title}>Welcome to my website</h1>
          <p id="intro" className={styles.description}>Hello, My name is Adam and I&apos;m a 23 year old web developer. 
            I enjoy building websites and web apps and learning new technologies. Find out more about me in my <Link href="/about"><a className={styles.link}>about page</a></Link>.
          </p>
          <section id={styles.projects} className={styles.link_section}>
            <Link href="/projects">
              <a className={styles.link}>
                <h2 className={styles.subtitle}>Projects <span className={styles.arrow}>&rarr;</span></h2>
              </a>
            </Link>
            <p className={styles.description}>
              If you&apos;re interested in looking at the projects that I&apos;ve made then head over
              to the projects page, here&apos;s some of the highlights:
            </p>
          </section>
          <section id={styles.posts} className={styles.link_section}>
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
        <div className={styles.buffer}></div>
      </main>
    </>
  )
}
