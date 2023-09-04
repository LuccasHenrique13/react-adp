import React from 'react';
import backgroundVideo from '../assets/background.mp4';
import Typewriter from 'typewriter-effect';
import abijaudi from '../assets/panoramica.jpeg'
import { useTranslation } from 'react-i18next';
import { useLocation } from 'react-router-dom';

const Home = () => {
  const { t } = useTranslation();
  const location = useLocation();

  // Função para determinar o título com base na URL
  const getTitle = () => {
    if (location.pathname === '/abijaudi') {
      return 'Praça Abi Jaudi';
    } else {
      return 'ADOTE UMA PRAÇA';
    }
  };

  return (
    <div id="home">
      <div className="back-video">
        <img src={abijaudi} alt="The Code Studios" /><img/>
        <div id="typing">
          <h1>{getTitle()}</h1>
        </div>
      </div>
      <div className='scroll'>
        <div className="icon-scroll"></div>
      </div>
    </div>
  );
};

export default Home;
