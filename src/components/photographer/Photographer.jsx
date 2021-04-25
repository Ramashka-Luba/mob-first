import s from "./Photographer.module.scss";
import User from "./../../assets/img/Profile/Ellipse.png";
import Like from "./../../assets/img/Profile/Vector.png";


function Photographer (props) {
    return (
        <div className={s.photographer}>
            <img className={s.photo} src={User} alt="photo"/>
            <div className={s.info}>
                <p className={s.mane}>Марина Иванова</p>
                <span className={s.text}>Фотограф</span>
                <a className={s.link} >Показать больше информации о фотографе</a>
            </div>
            <img className={s.like} src={Like} alt="like"/>
        </div> 
    );
}

export default Photographer;