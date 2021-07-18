import { ProjectType } from '../types/project';
import Image from 'next/image';
export default function projectCard({ project:{slug, frontmatter}}:{project: ProjectType}) {
    return (
        <div>
            <a href={frontmatter.link}>
                <Image 
                    src={frontmatter.cover_image}
                    height={300}
                    width={420}
                    alt={frontmatter.title+" cover image"}
                />
                <h3>{frontmatter.title}</h3>
                <p>{frontmatter.status}</p>
                <p>{frontmatter.live}</p>
            </a>
        </div>
    )
}
