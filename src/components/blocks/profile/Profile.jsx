import s from './Profile.module.scss';
import Photographer from './../../photographer/Photographer';
import Description from '../../description/Description';


function Profile () {
    return (
        <div className={s.profile}>
            <div className={s.container}>
                <Photographer/>
                <Description
                    title="Об организаторе:"
                    text1="Всем привет! Я фотограф Мария! И по мимо фотосъемки я так же являюсь членом группы экспертов туристической отрасли, которые хорошо разбираются 
                            в маркетинге, операциях 
                            и услугах обслуживания клиентов, специализирующихся 
                            на совместном использовании 
                            и частных турах."
                    text2="Сначала мы (я и моя команда) изучаем интересы клиентов, а затем придумываем подходящее решение, которое соответствует бюджету и планам клиента. 
                            Мы никогда не зависим 
                            от субпоставщиков 
                            и не свяжемся…"
                />
            </div>
        </div>
    );
}

export default Profile;