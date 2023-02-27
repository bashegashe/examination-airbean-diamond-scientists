import './Button.css';

function Button(props) {
    return (
        <button class={props.type === 'light' ? 'button--light' : 'button--dark' }>{props.children}</button>
    );
}

export default Button;