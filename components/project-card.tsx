import { ProjectType } from '../types/project';
import Image from 'next/image';
import styles from '../styles/project-card.module.css';
import StatusTrafficLight from './status-traffic-light';
export default function projectCard({ project:{slug, frontmatter}}:{project: ProjectType}) {
    return (
        <div className={styles.card}>
            <a href={frontmatter.link}>
                <Image 
                    src={frontmatter.cover_image}
                    height={600}
                    width={800}
                    layout="intrinsic"
                    alt={frontmatter.title+" cover image"}
                />
                <h3>{frontmatter.title}</h3>
                <div className={styles.status}>
                    <p className={styles.label}>Status: </p>
                    <StatusTrafficLight status={frontmatter.status} />
                    <p className={styles.statusText}>{frontmatter.status}</p>
                </div>
                <div className="live">

                    <p>{frontmatter.live}</p>
                </div>
            </a>
        </div>
    )
}
