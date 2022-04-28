import { ReactComponent as LogoIcon } from '../assets/images/icons/logo.svg';
import { ReactComponent as VkIcon } from '../assets/images/icons/vk.svg';
import { ReactComponent as TelegramIcon } from '../assets/images/icons/telegram.svg';
import { ReactComponent as TwitterIcon } from '../assets/images/icons/twitter.svg';
import { ReactComponent as SocialIcon } from '../assets/images/icons/social.svg';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__wrapper">
        <a className="logo footer__logo" href="/">
          <LogoIcon width={198} height={74} />
        </a>
        <nav className="footer__nav">
          <a className="footer__nav-item" href="/">
            Решение
          </a>
          <a className="footer__nav-item" href="/">
            Оборудование
          </a>
          <a className="footer__nav-item" href="/">
            О Компании
          </a>
          <a className="footer__nav-item" href="/">
            Блог
          </a>
        </nav>
        <div className="footer__copyrights">
          <p className="footer__copyrights-text">© ООО «Лого», 2008—2022</p>
          <p className="footer__copyrights-text">
            Лицензия на телематические услуги № 176267
          </p>
        </div>
        <nav className="footer__social">
          <a className="footer__social-item" href="/">
            <TelegramIcon />
          </a>
          <a className="footer__social-item" href="/">
            <VkIcon />
          </a>
          <a className="footer__social-item" href="/">
            <TwitterIcon />
          </a>
          <a className="footer__social-item" href="/">
            <SocialIcon />
          </a>
        </nav>
      </div>
    </footer>
  );
};

export default Footer;
