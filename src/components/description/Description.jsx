import s from "./Description.module.scss";
import Arrow from "./../../assets/img/Gallery/Arrow.png"

function Description (props) {
    return (
        <div className={s.descripttion} style={props.style}>
            <h3 className={s.title}>{props.title}</h3>
            <p className={s.text1}>{props.text1}</p>
            <p className={s.text2}>{props.text2}</p>
            <div className={s.wrap}>
                <a className={s.link}>Читать еще</a>
                <img className={s.arrow} src={Arrow} alt="arrow" ></img>
            </div>
            
        </div>
    );
}

export default Description;