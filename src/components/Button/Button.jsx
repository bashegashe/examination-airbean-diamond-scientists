import styles from './Button.module.css';

function Button(props) {
    return (
        <button
            className={props.type === 'light' ? styles['button--light'] : styles['button--dark']}
            onClick={() => props.onClick && props.onClick()}
        >
            {props.children}
        </button>
    );
}

export default Button;