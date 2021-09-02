import s from './FooterBottomSmall.module.scss';

import MasterCard from '../../../../assets/img/Footer/MC.svg';
import Visa from '../../../../assets/img/Footer/VISA.svg';


function FooterBottomSmall() {
    return (
        <div className={s.footerBottomSmall}>
            <div className={s.container}>
                <div className={s.inner}>
                    <div className={s.payment}>
                        <img src={MasterCard} alt="MasterCard" className={s.imgPayment} />
                        <img src={Visa} alt="Visa" className={s.imgPayment} />
                    </div>

                    <div className={s.lang}>
                        <select name="lang">
                            <option value="ru">RU</option>
                            <option value="en">EN</option>
                        </select>
                    </div>
                </div>

                <div className={s.footerInfo}>
                    <span className={s.footerPhoneNumber}>Тех. поддержка: 8(800)700-00-00</span>
                    <small className={s.footerCopyright}>
                        © 2018 HELYFLY. All Rights Reserved.
                    </small>
                </div>
            </div>
        </div>


    );
}

export default FooterBottomSmall;