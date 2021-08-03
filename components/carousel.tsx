import styles from '../styles/carousel.module.css';
import { useState, useEffect, useRef } from 'react';
export default function Carousel({ children }:any){
    const carouselRef = useRef(null);
    const [width, setWidth] = useState(0);
    const [ scrollAmount, setScrollAmount ] = useState(0);
    const scrollLeft = () => setScrollAmount(Math.max(0, scrollAmount - width));
    const scrollRight = () => {
        let displayNumber = (window.innerWidth < 1300) ? 1 : 2; 
        setScrollAmount(Math.min(scrollAmount + width, ((children.length-displayNumber)*width)));
    }
    useEffect(() => {
        let width = (window.innerWidth < 500) ? 0.85*window.innerWidth+10 : ((window.innerWidth < 1300)? 460 : 910);
        setWidth(width);
    }, []);
    useEffect(() => {
        // @ts-ignore
        carouselRef.current.scrollTo({
            top: 0,
            left: scrollAmount, 
            behavior: 'smooth'
        });
    }, [scrollAmount, carouselRef]);
    return (
        <div className={styles.container}>
            <button id={styles.left_btn} className={styles.btn} onClick={scrollLeft}>➜</button>
            <div ref={carouselRef} className={styles.carousel}>
                { children }
            </div>
            <button id={styles.right_btn} className={styles.btn} onClick={scrollRight}>➜</button>
        </div>
    )
}
