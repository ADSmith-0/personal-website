import styles from '../styles/carousel.module.css';
import { useState, useEffect } from 'react';
export default function Carousel({ children }:any){
    const [ scrollAmount, setScrollAmount ] = useState(0);
    const scrollLeft = () => setScrollAmount(Math.max(0, scrollAmount - 460));
    const scrollRight = () => {
        let displayNumber = (window.innerWidth < 1300) ? 1 : 2;
        setScrollAmount(Math.min(scrollAmount + 460, ((children.length-displayNumber)*460)));
    }
    useEffect(() => {
        document.getElementById(styles.carousel)?.scroll({
            left: scrollAmount, 
            top: 0,
            behavior: 'smooth'
        });
    }, [scrollAmount]);
    return (
        <div id={styles.container}>
            <button id={styles.left_btn} className={styles.btn} onClick={scrollLeft}>➜</button>
            <div id={styles.carousel}>
                { children }
            </div>
            <button id={styles.right_btn} className={styles.btn} onClick={scrollRight}>➜</button>
        </div>
    )
}
