import React from 'react';
import abijaudi from '../assets/p7.jpeg';
import cruzeiro from '../assets/cruzeiro.jpg';
import planalto from '../assets/planalto.jpg';
import Valegre from '../assets/vista.jpg';
import recreativa from '../assets/recreativa.jpg';
import { useTranslation } from "react-i18next";

const Projects = () => {
  const { t } = useTranslation();
  return (
    <div className="projects" id="projetos">
        <h2 id="t" className="titulos">{t('projects.title')}</h2>
        <p id="p" className="text popup">{t('projects.description')}</p>
        <div className="projects-content">

            <div className="project-item">
                <div className="project-image">
                    <img src={abijaudi} alt=""/>
                </div>
                <div  className="project-description popup">
                    <h3 id="t">{t('project.abijaudi')}</h3>
                    {/* <p className="text">{t('project.dl.description')}</p> */}
                    <div className="project-buttons">
                        <a href="https://photos.google.com/album/AF1QipPDFTnH1spWPCyKciKNyNv1J6iZaAabT7TiXKMz" className="visit">{t('project.visit')}</a>
                    </div>
                </div>
            </div>

            <div className="project-item">
                <div className="project-image">
                    <img src={cruzeiro} alt=""/>
                </div>
                <div  className="project-description popup">
                    <h3 id="t">{t('project.cruzeiro')}</h3>
                    {/* <p className="text">{t('project.dl.description')}</p> */}
                    <div className="project-buttons">
                        <a href="https://photos.google.com/album/AF1QipOpVwK_XMxhFyBwX4LUhH4OdnFcXzc1aj-ar6VQ" className="visit">{t('project.visit')}</a>
                    </div>
                </div>
            </div>


            
            <div className="project-item">
                <div className="project-image">
                    <img src={planalto} alt=""/>
                </div>
                <div  className="project-description popup">
                    <h3 id="t">{t('project.planalto')}</h3>
                    {/* <p className="text">{t('project.dl.description')}</p> */}
                    <div className="project-buttons">
                        <a href="https://photos.google.com/album/AF1QipNKyJIdxjIIbkmyOyZEUCR8XNBW4ZJsn5XTSDSg" className="visit">{t('project.visit')}</a>
                    </div>
                </div>
            </div>


    
            <div className="project-item">
                <div className="project-image">
                    <img src={Valegre} alt=""/>
                </div>
                <div  className="project-description popup">
                    <h3 id="t">{t('project.Valegre')}</h3>
                    {/* <p className="text">{t('project.dl.description')}</p> */}
                    <div className="project-buttons">
                        <a href="https://photos.google.com/album/AF1QipP1UAfATMgHMLOHSZvX4lbYCwNY9rTPIRYLU74s" className="visit">{t('project.visit')}</a>
                    </div>
                </div>
            </div>

            <div className="project-item">
                <div className="project-image">
                    <img src={recreativa} alt=""/>
                </div>
                <div  className="project-description popup">
                    <h3 id="t">{t('project.recreativa')}</h3>
                    {/* <p className="text">{t('project.dl.description')}</p> */}
                    <div className="project-buttons">
                        <a href="https://photos.google.com/album/AF1QipO1TM4spq2aGQdwZZNFMGVSaNhqg8yjBkWzNH4d" className="visit">{t('project.visit')}</a>
                    </div>
                </div>
            </div>

        </div>
    </div>
  );
};

export default Projects;
