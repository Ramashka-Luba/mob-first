import s from './ButtonMain.module.scss';

function Button(props) {
    return (
        <button className={s.btn} style={props.style}>
            {props.title}
        </button>
    );
}

export default Button;