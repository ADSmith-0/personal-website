import { ProjectType } from '../types/project';
import Image from 'next/image';
import cardStyle from '../styles/card.module.css';
import styles from '../styles/project-card.module.css';
import StatusTrafficLight from './status-traffic-light';
import LiveTrafficLight from './live-traffic-light';
export default function projectCard({ project:{frontmatter}}:{project: ProjectType}) {
    return (
        <article className={`${styles.card} ${cardStyle.card}`}>
            <Image 
                src={frontmatter.cover_image}
                className={styles.cover_image}
                height={300}
                width={500}
                objectFit="cover"
                alt={frontmatter.title+" cover image"}
            />
            <h3 className={styles.title}>{frontmatter.title}</h3>
            <div className="pills">
                { frontmatter.tags.map((tag, index) => (
                    <span key={index} className={styles.pill}>{tag}</span>
                )) }
            </div>
            <div className={styles.container}>
                <p className={styles.label}>Status: </p>
                <StatusTrafficLight status={frontmatter.status} />
                <p className={styles.status_text}>{frontmatter.status}</p>
            </div>
            <div className={styles.container}>
                <p className={styles.label}>Live: </p>
                <LiveTrafficLight live={frontmatter.live} />
                <p className={styles.live_text}>{frontmatter.live}</p>
            </div>
            <div id={styles.description_container}className={styles.container}>
                <p className={styles.label}>Description: </p>
                <p id={styles.description}>{frontmatter.description}</p>
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
        </article>
    )
}
