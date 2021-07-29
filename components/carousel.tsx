import styles from '../styles/carousel.module.css';
import { useState } from 'react';
export default function Carousel({ children }:any){
    const [ currentlySelected, setCurrentlySelected ] = useState(0);
    const updateCurrentlySelected:any = (number:number) => {
        if(currentlySelected+number >= 0 && currentlySelected+number < children.length){
            setCurrentlySelected(currentlySelected+number);
            // document.getElementById(styles.carousel);
        }
    }
    return (
        <>
            <div id={styles.carousel}>
                <button id={styles.left_btn} className={styles.btn} onClick={()=>updateCurrentlySelected(-1)}>➜</button>
                { children.filter((child:any, index:number) => {
                    if(index == currentlySelected) return child;
                }) }
                <button id={styles.right_btn} className={styles.btn} onClick={()=>updateCurrentlySelected(1)}>➜</button>
            </div>
            <div style={{height: "1000px"}}></div>
        </>
    )
}
