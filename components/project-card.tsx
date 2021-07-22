import { ProjectType } from '../types/project';
import Image from 'next/image';
import styles from '../styles/project-card.module.css';
import StatusTrafficLight from './status-traffic-light';
import LiveTrafficLight from './live-traffic-light';
export default function projectCard({ project:{frontmatter}}:{project: ProjectType}) {
    return (
        <div className={styles.card}>
            <a className={styles.image_link} href={frontmatter.github_link}>
                <Image 
                    src={frontmatter.cover_image}
                    height={250}
                    width={400}
                    layout="intrinsic"
                    alt={frontmatter.title+" cover image"}
                />
            </a>
            <h3 className={styles.title}>{frontmatter.title}</h3>
            <div className="pills">
                { frontmatter.tags.map((tag, index) => (
                    <span key={index} className={styles.pill}>{tag}</span>
                )) }
            </div>
            <div className={styles.container}>
                <p className={styles.label}>Status: </p>
                <StatusTrafficLight status={frontmatter.status} />
                <p className={styles.statusText}>{frontmatter.status}</p>
            </div>
            <div className={styles.container}>
                <p className={styles.label}>Live: </p>
                <LiveTrafficLight live={frontmatter.live} />
                <p className={styles.statusText}>{frontmatter.live}</p>
            </div>
            <div className={styles.links}>
                <a id={styles.githubLink} className={styles.link} href={frontmatter.github_link}>Link to Github &rarr;</a>
                <a 
                    id={styles.liveLink}
                    className={(frontmatter.live_link == '#') ? `${styles.link} ${styles.disabled}` : `${styles.link} ${styles.enabled}`}
                    href={frontmatter.live_link}>
                        Link to live project &rarr;
                </a>
            </div>
        </div>
    )
}
