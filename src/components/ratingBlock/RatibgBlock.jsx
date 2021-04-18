import s from "./RatibgBlock.module.scss";
import Cup from "./../../assets/img/cup.png";
import Star from "./../../assets/img/star.png"



function RatingBlock (props) {
    return (
        <div className={s.wrap} style={props.style}>
            <img className={s.icon}  src={Cup} alt="cup"/>
            <div className={s.content}>
                <p className={s.text}>Более <span>50</span> отзывов с оценкой</p>
                <img className={s.star}  src={Star} alt="cup"/>
            </div>           
        </div>  
    );
}

export default RatingBlock;