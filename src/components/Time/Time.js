import styles from "./Time.module.scss";

const Time = props => {
    const formatTime = time => {
        let ms = time % 1000;
        let seconds = Math.floor(time / 1000);
        let minutes = Math.floor(seconds / 60);
        let hours = Math.floor(minutes / 60);

        seconds = seconds - minutes * 60;
        minutes = minutes - hours * 60;

        const pad = (num) => String(num).padStart(2, '0');
    
        return pad(hours) + ":" + pad(minutes) + ":" + pad(seconds) + ":" + pad(ms);
    };

    return (<label className={styles.label}>{formatTime(props.children)}</label>);
};

export default Time;