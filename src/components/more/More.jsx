import s from './More.module.scss';
import Arrow from './../../assets/img/Gallery/Arrow.png'



function More(props) {
    return (
        <div className={s.more}>
            <div className={s.container}>
                <div className={s.inner}>
                    <img className={s.arrow} src={Arrow} alt="arrow" />
                    <a className={s.link}>{props.moreText}</a>
                    <img className={s.arrow} src={Arrow} alt="arrow" />
                </div>
            </div>
        </div>
    );
}

export default More;