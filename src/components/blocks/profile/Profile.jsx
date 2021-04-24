import s from './Profile.module.scss';
import Photographer from './../../photographer/Photographer';


function Profile () {
    return (
        <div className={s.profile}>
            <div className={s.container}>
                <Photographer/>
            </div>
        </div>
    );
}

export default Profile;