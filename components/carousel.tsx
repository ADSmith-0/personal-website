import styles from '../styles/carousel.module.css';
import { useState, useEffect, useRef } from 'react';
export default function Carousel({ children }:any){
    const carouselRef = useRef(null);
    const [ position, setPosition ] = useState(0);
    //@ts-ignore
    const scrollLeft = () => setPosition(Math.max(0, (carouselRef.current.scrollLeft - carouselRef.current.clientWidth)));
    //@ts-ignore
    const scrollRight = () => setPosition(Math.min((carouselRef.current.scrollLeft + carouselRef.current.clientWidth), carouselRef.current.scrollWidth));
    useEffect(() => {
        //@ts-ignore
        carouselRef.current.scroll({
            top: 0,
            left: position,
            behavior: 'smooth'
        });
    }, [ position ]);
    return (
        <div className={styles.container}>
            <button id={styles.left_btn} className={styles.btn} onClick={scrollLeft}>➜</button>
            <button id={styles.right_btn} className={styles.btn} onClick={scrollRight}>➜</button>
            <div ref={carouselRef} className={styles.carousel}>
                { children }
            </div>
        </div>
    )
}
