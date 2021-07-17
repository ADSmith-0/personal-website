import Link from 'next/link';
import styles from '../styles/header.module.css';

export default function header() {
    return (
        <nav id={styles.container}>
            <Link href="/"><a className={styles.link}>Home</a></Link>
            <Link href="/projects"><a className={styles.link}>Projects</a></Link>
            <Link href="/posts"><a className={styles.link}>Posts</a></Link>
            <Link href="/about"><a className={styles.link}>About</a></Link>
        </nav>
    )
}
