import Title from '../../title/Title';
import s from './Photosession.module.scss';
import photosession from './../../../assets/img/photosession.jpeg'

function Photosession(props) {
    return (
        <div className={s.photosession}>
            <div className={s.container}>
                <h2 className={s.title}>Фотосессия в вертолете</h2>
                <div className={s.video}></div>
                <div className={s.wrap}>
                    <p className={s.text}>Полет на вертолете это прекрасная возможность получить новые ощущения! А наш замечательный фотограф запечатлит лучшие моменты!</p>

                </div>

                

        </div>
        </div>
        
        
    );
}

export default Photosession;