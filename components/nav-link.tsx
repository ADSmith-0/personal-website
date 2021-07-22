import { useRouter } from 'next/router';
import styles from '../styles/nav-link.module.css';
export default function NavLink({ children, href }:{children:any, href:string }) {
    const router = useRouter();
    const active = (router.asPath === href) ? styles.active : styles.inactive;
    const handleClick = (e:any) => {
        e.preventDefault();
        router.push(href);
    }
    return (
        <a href={href} className={`${styles.link} ${active}`} onClick={handleClick}>
            {children}
        </a>
    )
}
