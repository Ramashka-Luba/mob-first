import s from "./Photographer.module.scss";
import User from "./../../assets/img/Profile/Ellipse.png";
import Like from "./../../assets/img/Profile/Vector.png";


function Photographer (props) {
    return (
        <div className={s.photographer}>
            <div className={s.photo} >
                <img src={User} alt="photo"/>
            </div>
            
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