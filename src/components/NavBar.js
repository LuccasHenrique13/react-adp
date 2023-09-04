import React, {useState, useEffect} from "react";
import logo from '../assets/logo-white.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSpotify } from '@fortawesome/free-brands-svg-icons';
import { useTranslation } from "react-i18next";

const NavBar = () => {
  const { t } = useTranslation();

  // change burger class
  const [ClassMenu, setClassMenu] = useState("menu")
  const [isMenuClicked, setIsMenuClicked] = useState(false)

  // change menu class
  const updateMenu = () => {
      if(!isMenuClicked) {
          setClassMenu("menu show")
      }
      else {
          setClassMenu("menu")
      }
      setIsMenuClicked(!isMenuClicked)
  }

  // behavior navbar (hide / show)

  const [prevScrollPos, setPrevScrollPos] = useState(window.pageYOffset);
  const [visible, setVisible] = useState(true);

  const handleScroll = () => {
    const currentScrollPos = window.pageYOffset;
    const shouldShow = prevScrollPos > currentScrollPos;

    setPrevScrollPos(currentScrollPos);
    setVisible(shouldShow);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [prevScrollPos]);
  

  return (
      <header className={`navbar ${visible ? '' : 'hidden'}`}>
        
        <a href="#home">

          <div className="logo">
          <img src={logo} alt="The Code Studios" />
          </div>
   
        </a>
        
        <div className="menu-icon">
          <input id="checkbox2" type="checkbox" />
          <label className="toggle toggle2" htmlFor="checkbox2" onClick={updateMenu}>
            <div id="bar4" className="bars"></div>
            <div id="bar5" className="bars"></div>
            <div id="bar6" className="bars"></div>
          </label>
        </div>
        <ul className={ClassMenu}>
          <li><a href="#home">{t('navbar.home')}</a></li>
          <li><a href="#sobre">{t('navbar.about')}</a></li>
          <li><a href="#projetos">{t('navbar.projects')}</a></li>
          <li><a href="#contato">{t('navbar.contact')}</a></li>
        </ul>
      </header>
  );
};

export default NavBar;
