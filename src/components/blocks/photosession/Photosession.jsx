import s from './Photosession.module.scss';
import Details from '../../details/Details';
import Watch from './../../../assets/img/Photosession/watch.png';
import Camera from './../../../assets/img/Photosession/camera.png';
import Map from './../../../assets/img/Photosession/map.png';
import Chat from './../../../assets/img/Photosession/chat.png';
import RatingBlock from '../../ratingBlock/RatibgBlock';



function Photosession(props) {
    return (
        <div className={s.photosession}>
            <div className={s.container}>
                <h2 className={s.title}>Фотосессия в вертолете</h2>
                <div className={s.video}></div>
                <div className={s.wrap}>
                    <p className={s.text}>Полет на вертолете это прекрасная возможность получить новые ощущения! А наш замечательный фотограф запечатлит лучшие моменты!</p>
                    <Details
                        src={Watch}
                        alt="watch"
                        value="3 часа съемки"
                    />
                    <Details
                        src={Camera}
                        alt="watch"
                        value="Более 50 фотографий"
                    />
                    <Details
                        src={Map}
                        alt="watch"
                        value="Москва"
                    />
                    <Details
                        src={Chat}
                        alt="watch"
                        value="Готовы ответить на любые вопросы"
                    />
                    <RatingBlock/>
                    
                </div>

                

        </div>
        </div>
        
        
    );
}

export default Photosession;