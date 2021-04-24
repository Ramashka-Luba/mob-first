import s from "./Photographer.module.scss";


function Photographer (props) {
    return (
        <div className={s.photographer}>
            <img className={s.user} src="" alt=""/>
            <div className={s.info}></div>
        </div>





        // <div className={s.wrap} style={props.style}>
        //     <img className={s.icon}  src={Cup} alt="cup"/>
        //     <div className={s.content}>
        //         <p className={s.text}>Более <span>50</span> отзывов с оценкой</p>
        //         <img className={s.star}  src={Star} alt="cup"/>
        //     </div>           
        // </div>  
    );
}

export default Photographer;