import React from 'react';
import ContactForm from './ContactForm/ContactForm';
import './Contact.scss';

const Contact = () => {
    return (
        <section className="contact-section section-box">
            <div className="contact-container section-container-box">
                <div className="section-title">
                    <span></span>
                    <h1>CONTACTO</h1>
                    <span></span>
                </div>
                <br/>
                <br/>
                <div className="contact-info">
                    <p>ventas@cactus.com</p>
                    <br/>
                    <p>Fonos: (+56 2) 1234 5678 | (+56 2) 8765 4321</p>
                    <br/>
                    <p>Horarios: Lunes a Viernes de 10:00 hrs a 18:00 hrs</p>
                    <br/>
                    <p>Calle ###, Viña del Mar, Valparaíso, Chile</p>
                </div>
                <br/>
                <ContactForm/>
            </div>
        </section>
    )
}

export default Contact
