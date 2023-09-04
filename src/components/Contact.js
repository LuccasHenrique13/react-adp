import React, { useRef } from "react";
import { useState } from 'react';
import emailjs from '@emailjs/browser';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPaperPlane } from "@fortawesome/free-regular-svg-icons"; 
import { faCircleCheck } from "@fortawesome/free-solid-svg-icons";
import { useTranslation } from "react-i18next";


const Contact = () => {
    const { t } = useTranslation();

    const [emailSent, setEmailSent] = useState(false);

    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();
    
        emailjs.sendForm('service_d89ekp5', 'template_yxmgr98', form.current, 'o52g7FS23SosqCDlX')
          .then((result) => {
              console.log(result.text);
              setEmailSent(true); // Set the emailSent state to true
          }, (error) => {
              console.log(error.text);
          });
          e.target.reset();
      };

    return (
        <div className="contact" id="contato">
            <div>
                <h2 className="titulos">{t('contact.title')}</h2>
                <p className="text popup">{t('contact.description')}</p>
            </div>

            <div className="contact-form">
                <form ref={form} onSubmit={sendEmail}>
                {emailSent && <div className="EmailConfirmation"><h3>Mensagem Enviada! <FontAwesomeIcon icon={faCircleCheck} /></h3></div>}
                    <div className="contact-input">
                        <label>{t('contact.form.name')}</label>
                        <input type="text" placeholder={t('contact.form.name.description')} name="user_name" required/>
                    </div>
                    <div className="contact-input">
                        <label>{t('contact.form.email')}</label>
                        <input type="email" placeholder={t('contact.form.email.description')} name="user_email" required/>
                    </div>
                    <div className="contact-input">
                        <label>{t('contact.form.phone')}</label>
                        <input type="tel" placeholder={t('contact.form.phone.description')} name="user_number"/>
                    </div>
                    <div className="contact-input">
                        <label>{t('contact.form.message')}</label>
                        <textarea type="text" placeholder={t('contact.form.message.description')} name="message" required/>
                    </div>
                    <button type="submit" className="contact-send">{t('contact.form.send.button')} <FontAwesomeIcon icon={faPaperPlane} /></button>
                </form>
            </div>
        </div>

    );

}

export default Contact;