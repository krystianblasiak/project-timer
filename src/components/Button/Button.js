import styles from "./Button.module.scss";

const Button = props => {
    const func = () => {
        props.func();
    };
    return (<button onClick={func} className={styles.button}>{props.children}</button>)
};

export default Button;