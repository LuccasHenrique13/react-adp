import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

import LanguageDetector from "i18next-browser-languagedetector";
import PTBR from './locales/pt/pt-br.json';
import ENUS from './locales/en/en-us.json';

const languages = ["en", "pt"];


const resources = {
    'pt' : PTBR,
    'en' : ENUS
}

i18n
    .use(initReactI18next)
    .use(LanguageDetector)
    .init({
        detection: { order: ["path", "navigator"] },
        fallbackLng: 'pt',
        resources,
        whitelist: languages,
        interpolation: {
            escapeValue: false
        }
    })

export default i18n;