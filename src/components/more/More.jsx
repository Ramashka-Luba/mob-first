import s from './More.module.scss';
import Arrow from './../../assets/img/Gallery/Arrow.png'



function More(props) {
    return (
        <div className={s.more}>
            <div className={s.container}>
                <img className={s.arrow} src={Arrow} alt="arrow"/>
                <a className={s.link}>{props.moreText}</a>
                <img className={s.arrow} src={Arrow} alt="arrow"/>
            </div>
        </div>
    );
}

export default More;