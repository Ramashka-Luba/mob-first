import s from './Header.module.scss';

import logo from './../../../assets/img/logo.svg';
import userIcon from './../../../assets/img/user.png';


function Header() {
    return (
        <header className={s.header}>
            <div className={s.container}>
                <div className={s.inner}>
                    <div  className={s.wrapper}>
                        <img src={logo} alt="logo" className={s.logo}/>
                        <a href="tel:+88001231212" className={s.phoneMoscow}>Москва</a>
                        <div className={s.phone}>
                            <span>Телефон</span>
                            <a href="tel:+88001231212" className={s.phoneLink}>8(800)-123-12-12</a>
                        </div>
                    </div>
                    <a fref="#" className={s.use}>
                        <img src={userIcon} alt="user icon" className={s.userImg}/>
                    </a>
                </div>            
            </div>                      
        </header>
    );
}

export default Header;