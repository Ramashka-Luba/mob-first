import s from "./Details.module.scss";


function Details (props) {
    return (
        <div className={s.wrap}>
            <img className={s.icon}  src={props.src} alt={props.alt}/>
            <p className={s.text}>{props.value}</p>
        </div>  
    );
}

export default Details;