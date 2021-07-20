import styles from '../styles/status-traffic-light.module.css';
const getColour = (status:string):string => {
    switch(status){
        case 'Completed': return 'limegreen';
        case 'In Progress': return 'orange';
        case 'Not Yet Started': return 'red';
        default: return '#00f';
    }
}
const getSymbol = (status:string):string => {
    switch(status){
        case 'Completed': return '✔';
        case 'In Progress': return '➖';
        case 'Not Yet Started': return '✖';
        default: return '❔';
    }
}
const getClass = (status:string):string => {
    if(status === 'In Progress') return styles.subtract;
    return styles.normalSymbol;
}
export default function TrafficLight({ status }:{ status:string }) {
    const colour = getColour(status);
    const className = getClass(status);
    const symbol = getSymbol(status);
    return (
        <div>
            <div className={styles.container}>
                <svg height="25" width="25">
                    <circle cx="12.5" cy="12.5" r="12.5" stroke="black" strokeWidth="0" fill={colour} />
                </svg>
                <span className={`${styles.symbol} ${className}`}>{symbol}</span>
            </div>
        </div>
    )
}
