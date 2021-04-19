import s from './More.module.scss';



function More() {
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
                </div>
            </div>
        </div>
    );
}

export default More;