import Image from 'next/image';
import styles from '../styles/live-traffic-light.module.css';
const getIcon = (live:string) => {
    const colour = (live == "Yes") ? 'green' : 'orange'; 
    const icon = `/images/${colour}_signal.png`;
    return (
        <Image 
            src={icon}
            height={25}
            width={30}
            layout="fixed"
            alt={`${colour} signal icon`}
        />
    )
}
export default function LiveTrafficLight({ live }:{ live:string }) {
    const icon = (live != "No") ? getIcon(live) : <span className={styles.cross}>✖</span>;
    return icon
}
