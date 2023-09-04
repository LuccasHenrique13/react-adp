import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faInstagram } from '@fortawesome/free-brands-svg-icons';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { useTranslation } from "react-i18next";


const Embed = () => {
  const { t } = useTranslation();
  return (
    <div className="about" id="sobre">
        <div>
            <h2 className="titulos">{t('title.abijaudi')}</h2>
        <p id="p" className="text popup">{t('text.abijaudi')}</p>
        </div>
    </div>
  );
};

export default Embed;
