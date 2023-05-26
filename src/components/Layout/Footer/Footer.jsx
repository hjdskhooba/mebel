import { AiOutlineInstagram, AiOutlineMail } from "react-icons/ai";
import { BsTelephone } from "react-icons/bs";
import "../../../scss/footer.scss";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer__body">
          <div className="footer__left">
            <h3 className="footer__left-title">НАВИГАЦИЯ</h3>
            <div className="footer__left_lists">
              <ul className="footer__left_lists-list">
                <li className="footer__left-item">Кухни</li>
                <li className="footer__left-item">Спальни</li>
                <li className="footer__left-item">Гостинные</li>
              </ul>
              <ul className="footer__left_lists-list">
                <li className="footer__left-item">Прихожие</li>
                <li className="footer__left-item">Офисная мебель</li>
                <li className="footer__left-item">Детская</li>
              </ul>
              <ul className="footer__left_lists-list">
                <li className="footer__left-item">Шкафы</li>
                <li className="footer__left-item">Матрасы</li>
                <li className="footer__left-item">Мягкая мебель</li>
              </ul>
            </div>
            <div className="df">
              <span className="akcii">Акции</span>
              <p className="novinki">Новинки</p>
            </div>
          </div>
          <div className="footer__right">
            <h2 className="footer__right-logo title-logo">LM</h2>
            <p className="footer__right-address">
              г. Анапа, Анапское шоссе, 30 Ж/К Черное море
            </p>
            <div className="footer__right-links">
              <div className="footer__right-link">
                <span>
                  <BsTelephone />
                </span>
                <a href="tel (996) 89 99 119">+996 89 99 119</a>
              </div>
              <div className="footer__right-link">
                <span>
                  <AiOutlineInstagram />
                </span>
                <a href="https://www.instagram.com/">INSTAGRAM</a>
              </div>
              <div className="footer__right-link">
                <span>
                  <AiOutlineMail />
                </span>
                <a href="mebel_loft_anapa@mail.ru">mebel_loft_anapa@mail.ru</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
