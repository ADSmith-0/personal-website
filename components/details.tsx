import styles from '../styles/details.module.css';
const { container, plus, minus } = styles;
import { useState } from 'react';
export default function Details({summary, content }:{summary:string, content:string}) {
    const [ open, setOpen ] = useState(false); 
    const changeState = () => setOpen(!open);
    return (
        <details id={container} onClick={changeState}>
            <summary id={styles.summary} className={(open)?minus:plus}>{ summary }</summary>
            <p>{ content }</p>
        </details>
    )
}
