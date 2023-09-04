import React from 'react';
import logo from '../assets/logo-white.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faInstagram } from '@fortawesome/free-brands-svg-icons';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { useTranslation } from "react-i18next";


const Footer = () => {
  const { t } = useTranslation();
  return (
    <footer>
      <div className="footer-container">
        <div className='footer-content'>
          <div className='footer-social'>
            <h2>{t('footer.social')}</h2>
            <div className='contacts'>
              <a href='mailto:thecodestudios@hotmail.com' className='footer-mail'><FontAwesomeIcon icon={faEnvelope} /></a>
              <a href='https://www.instagram.com/thecode.studios/' className='footer-instagram'><FontAwesomeIcon icon={faInstagram} /></a>
              <a href='https://github.com/TheCodeStudios' className='footer-github'><FontAwesomeIcon icon={faGithub} /></a>
            </div>
          </div>
          <div className='footer-text'>
            <img src={logo} alt="The Code Studios" />
            <p>{t('footer.text')}</p>
          </div>
        </div>

        <div className='footer-copyright'>
          <p>&copy; {t('footer.copyright')}</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
