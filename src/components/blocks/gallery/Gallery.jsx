import s from './Gallery.module.scss';
import Title from '../../title/Title';
import Photo1 from './../../../assets/img/Gallery/photo1.png';
import Photo2 from './../../../assets/img/Gallery/photo2.png';
import Photo3 from './../../../assets/img/Gallery/photo3.png';
import Photo4 from './../../../assets/img/Gallery/photo4.png';
import More from '../../more/More';


function Gallery() {
    return (
        <div className={s.gallery}>
            <div className={s.container}>
                <div className={s.inner}>
                    <Title title="Фотографии пакета"/>
                    <div className={s.wrap}>
                        <img className={s.photo} src={Photo1} alt="photo1"/>
                        <img className={s.photo} src={Photo1} alt="photo2"/>
                        <img className={s.photo} src={Photo2} alt="photo3"/>
                        <img className={s.photo} src={Photo2} alt="photo4"/>
                        <img className={s.photo} src={Photo3} alt="photo5"/>
                        <img className={s.photo} src={Photo3} alt="photo6"/>
                        <img className={s.photo} src={Photo3} alt="photo7"/>
                        <img className={s.photo} src={Photo4} alt="photo8"/>
                    </div>
                    <More moreText="Показать все фото"/>
                </div>
            </div>
        </div>
    );
}

export default Gallery;