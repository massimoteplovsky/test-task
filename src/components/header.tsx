import { ReactComponent as PhoneIcon } from '../assets/images/icons/tel.svg';
import { ReactComponent as MailIcon } from '../assets/images/icons/mail.svg';
import { ReactComponent as LogoIcon } from '../assets/images/icons/logo.svg';

const Header = () => {
  return (
    <header className="header">
      <div className="header__container">
        <a className="header__logo" href="/">
          <LogoIcon />
        </a>
        <ul className="contacts">
          <li className="contacts__item">
            <a className="contacts__link" href="tel:8 800 000 00 00">
              <PhoneIcon width={28} height={22} />
              <span className="contacts__text">8 800 000 00 00</span>
            </a>
          </li>
          <li className="contacts__item">
            <a className="contacts__link" href="mailto:sales@logo.ru">
              <MailIcon width={28} height={22} />
              <span className="contacts__text">sales@logo.ru</span>
            </a>
          </li>
        </ul>
      </div>
    </header>
  );
};

export default Header;
