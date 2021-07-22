import Link from 'next/link';
import styles from '../styles/header.module.css';
import NavLink from '../components/nav-link';
export default function header() {
    return (
        <nav id={styles.container}>
            <NavLink href="/">Home</NavLink>
            <NavLink href="/projects">Projects</NavLink>
            <NavLink href="/posts">Posts</NavLink>
            <NavLink href="/about">About</NavLink>
        </nav>
    )
}
