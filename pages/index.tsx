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
        <aside id={styles.side_bar}>
          <Image
            src='/images/profile.jpg'
            height={250}
            width={250}
            alt="Picture of Adam"
          />
          <div id={styles.links}>
            <h3 id={styles.author_name}>Adam Smith</h3>
          </div>
        </aside>
        <section id="text">
          <h1 id={styles.title}>Welcome to [my website]</h1>
          <p id={styles.intro}>Hello, My name is Adam and I&apos;m a 23 year old web developer. 
            I enjoy building websites and web apps and learning new technologies. Find out more about me in my <Link href="/about"><a className={styles.link}>about page</a></Link>.
          </p>
          <section className="posts">
            <h2>Posts</h2>
          </section>
          <section className="projects">
            <h2>Projects</h2>
          </section>
        </section>
        <div className={styles.buffer}></div>
      </main>
    </>
  )
}
