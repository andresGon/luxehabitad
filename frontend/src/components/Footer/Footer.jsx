import React from 'react';
import './Footer.scss';
import tikTokIcon from '../../assets/tik-tok-icon.svg'; // Importar el icono de TikTok
import xIcon from '../../assets/x-icon.svg'; // Importar el icono de X
import instagramIcon from '../../assets/instagram-icon.svg'; // Importar el icono de Instagram
import Facebook from '../../assets/face-icon.svg'; // Importar el icono de Facebook

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__content">
        <div className="footer__left">
          <h2 className="footer__logo">LuxeHabitat</h2>
          <p>Contact our customer happiness team</p>
          <p>Monday–Friday 9am–5pm</p>
          <p>(02) 6188 8062</p>
        </div>
        <div className="footer__center">
          <h3>Our social</h3>
          <div className="footer__social-icons">
            <a href="#" className="footer__icon">
              <img src={tikTokIcon} alt="TikTok Icon" width="20" height="20" />
            </a>
            <a href="#" className="footer__icon">
              <img src={xIcon} alt="X Icon" width="20" height="20" />
            </a>
            <a href="#" className="footer__icon">
              <img src={instagramIcon} alt="Instagram Icon" width="20" height="20" />
            </a>
            <a href="#" className="footer__icon">
                <img src={Facebook} alt="Facebook Icon" width="20" height="20" />
            </a>
          </div>
        </div>
        <div className="footer__right">
          <p>2024 - tienda. all Rights Reserved.</p>
        </div>
      </div>
      <div className="footer__bottom-line"></div>
    </footer>
  );
};

export default Footer;
