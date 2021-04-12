import s from './Title.module.scss';

function Title(props) {
    return (
        <h2 style={props.style} 
            className={s.title}>
                {props.title}</h2>
    );
}

export default Title;