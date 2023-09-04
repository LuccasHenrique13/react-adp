import React from 'react';
import { useTranslation } from "react-i18next";


const About = () => {
  const { t } = useTranslation();
  return (
    <div className="about" id="sobre">
        <div>
            <h2 className="titulos">{t('about.title')}</h2>
        <p id="p" className="text popup">{t('about.description')}</p>
        </div>

        <div className="stack">
            <h2 className="titulos">{t('stack.title')}</h2>
            <div className="skills">
                <ul>

                    <li className="popup">Melhoria do ambiente</li>
                    <li className="popup">Espaço de lazer</li>
                    <li className="popup">Fomento à comunidade</li>
                    <li className="popup">Segurança</li>
                    <li className="popup">Promoção cultural</li>
                    <li className="popup">Educação ambiental</li>
                    <li className="popup">Exemplo para outros</li>
                   

                </ul>
            </div>
        </div>

    </div>
  );
};

export default About;
