import s from "./Description.module.scss";

function Description (props) {
    return (
        <div className={s.descripttion}>
            <h3 className={s.title}></h3>
            <p className={s.text}></p>

        </div>
    );
}

export default Description;