import s from './Footer.module.scss';
import percent from './../../../assets/img/percent.svg'
import ButtonMain from '../../buttonMain/ButtonMain';

import logo from './../../../assets/img/logo.svg';
import Vk from './../../../assets/img/Footer/Vk.svg';
import Facebook from './../../../assets/img/Footer/Facebook.svg';
import Instragram from './../../../assets/img/Footer/Instragram.svg';
import FooterBottomSmall from './footerBottomSmall/FooterBottomSmall';
import FooterBottomLarge from './footerBottomLarge/FooterBottomLarge';





function Footer() {
    return (
        <div className={s.footer}>
            <div className={s.container}>
                <div className={s.inner}>
                    <div className={s.footerTop}>
                        <img src={logo} alt="logo" className={s.logo} />
                        <div className={s.rightBlock}>
                            <div className={s.social}>
                                <img src={Vk} alt="" className={s.socialIcon} />
                                <img src={Facebook} alt="" className={s.socialIcon} />
                                <img src={Instragram} alt="" className={s.socialIcon} />
                            </div>
                            <div className={s.lang}>
                                <select name="lang">
                                    <option className={s.item} value="ru">RU</option>
                                    <option className={s.item} value="en">EN</option>
                                </select>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <FooterBottomSmall />
            <FooterBottomLarge />
        </div>
    );
}

export default Footer;