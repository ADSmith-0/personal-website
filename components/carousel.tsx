import styles from '../styles/carousel.module.css';
import { useState, useEffect, useRef } from 'react';
export default function Carousel({ children }:any){
    const carouselRef = useRef(null);
    const [cardWidth, setCardWidth] = useState(0);
    const [ scrollAmount, setScrollAmount ] = useState(0);
    const scrollLeft = () => setScrollAmount(Math.max(0, scrollAmount - cardWidth));
    const scrollRight = () => {
        let displayNumber = (window.innerWidth < 500) ? 1 : ((window.innerWidth < 1300)? 2 : 3); 
        setScrollAmount(Math.min(scrollAmount + cardWidth, ((children.length-displayNumber)*cardWidth)));
    }
    useEffect(() => {
        let cardWidth = (window.innerWidth < 500) ? 0.85*window.innerWidth+10 : ((window.innerWidth < 1300) ? 460 : 910);
        setCardWidth(cardWidth);
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
            <button id={styles.right_btn} className={styles.btn} onClick={scrollRight}>➜</button>
            <div ref={carouselRef} className={styles.carousel}>
                { children }
            </div>
        </div>
    )
}
