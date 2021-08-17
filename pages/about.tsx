import Head from 'next/head';
import styles from '../styles/about.module.css';
const { title, subtitle, list, favourite, skill, to_learn, main, block, CV_download, experience, experience_list, main_wrapper, background_text
} = styles;
import Details from '../components/details';
export default function about() {
    return (
        <>
            <Head>
                <title>About</title>
            </Head>
            <div id={main_wrapper}>
                <main id={main}>
                    <h1 id={title}>About me:</h1>
                    <a id={CV_download} href="/CV.pdf" download>Download my CV here</a>
                    <div className={block}>
                        <h2 className={subtitle}>My background:</h2>
                        <p>
                            I started programming when I was 13 years old, learning Java through YouTube tutorials.
                            I then pursued it as a hobby throughout my teenage years making small programs, phone apps and
                            even minecraft mods.
                        </p>
                        <br/>
                        <p>
                            I then took computing, maths and further maths at college to further my passion. 
                        </p>
                        <br/>
                        <p> 
                            I started doing maths at university, but soon switched over to computer science,
                            where I graduated from Cardiff University with a 2:1.
                        </p>
                    </div>
                    <div className={block}>
                        <h2 className={subtitle}>My experience:</h2>
                        <ul id={experience_list} className={list}>
                            <li className={experience}>
                                <Details 
                                    summary = "Web Developer - Tillison Consulting:"
                                    content = "Designing and building websites of all different shapes and varieties, mostly using wordpress and PHP, but occassionally when I get to choose, it&apos;s fullstack JavaScript (MERN)."
                                />
                            </li>
                            <li className={experience}>
                                <Details 
                                    summary = "Lead android developer, Full stack developer - Power of Music:"
                                    content = "A startup based around a dating app. I designed and developed the front end Android application and backend authorisation pipeline and matching algorithm."
                                />
                            </li>
                        </ul>
                    </div>
                    <div className={block}>
                        <h2 className={subtitle}>My Favourite Technologies:</h2>
                        <ul className={list}>
                            <li className={favourite}>React</li>
                            <li className={favourite}>Next.js</li>
                            <li className={favourite}>Apollo</li>
                            <li className={favourite}>TypeScript</li>
                            <li className={favourite}>Express</li>
                            <li className={favourite}>Node.js</li>
                            <li className={favourite}>MongoDB</li>
                        </ul>
                    </div>
                    <div className={block}>
                        <h2 className={subtitle}>Proficient In:</h2>
                        <ul className={list}>
                            <li className={skill}>HTML</li>
                            <li className={skill}>CSS</li>
                            <li className={skill}>ES6+ JavaScript</li>
                            <li className={skill}>Web Components API</li>
                            <li className={skill}>Git</li>
                            <li className={skill}>Page speed Optimisation</li>
                            <li className={skill}>PHP</li>
                            <li className={skill}>WordPress</li>
                            <li className={skill}>SQL & MySQL/PostgreSQL</li>
                            <li className={skill}>Cypher & Neo4j</li>
                            <li className={skill}>OAuth 2.0</li>
                            <li className={skill}>APIs</li>
                            <li className={skill}>Python3</li>
                            <li className={skill}>C++</li>
                            <li className={skill}>Sorting/Searching Algorithms</li>
                            <li className={skill}>Data structures: Linked List, Binary Tree, Hashmaps, etc.</li>
                            <li className={skill}>Big O and optimisation</li>
                        </ul>
                    </div>
                    <div className={block}>
                        <h2 className={subtitle}>On My List to Learn:</h2>
                        <ul className={list}>
                            <li className={to_learn}>Rust/WASM</li>
                            <li className={to_learn}>Nest.js</li>
                            <li className={to_learn}>Jest.js</li>
                            <li className={to_learn}>Cypress.js</li>
                            <li className={to_learn}>Redis</li>
                            <li className={to_learn}>AWS/Cloud hosting</li>
                            <li className={to_learn}>Three.js/WebGL</li>
                            <li className={to_learn}>Websockets</li>
                            <li className={to_learn}>Improve at Accessibility/WCAG</li>
                            <li className={to_learn}>Improve at more difficult Algorithms/Data structures</li>
                            <li className={to_learn}>Improve at CI/CD & DevOps</li>
                        </ul>
                    </div>
                </main>
            </div>
        </>
    )
}
