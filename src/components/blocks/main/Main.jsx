import s from './Main.module.scss';
import percent from './../../../assets/img/percent.svg'
import ButtonMain from '../../buttonMain/ButtonMain';


function Main() {
    return (
        <div className={s.main}>
            <div className={s.container}>
                <div className={s.inner}>
                    <h1 className={s.title}>Эксклюзивная <span>фотосессия</span> при полете на вертолете</h1>
                    <div className={s.priceBox}>
                        <div className={s.wrapper}>
                            <span className={s.priceLabel}>Стоимость:</span>
                            <span className={s.price}>1500₽</span>
                        </div>
                        <img className={s.percent} src={percent} alt="percent"/>
                    </div>
                    <ButtonMain style= {{marginBottom:"15px"}} title="Забронировать место"/>
                </div>
            </div>
        </div>
    );
}

export default Main;