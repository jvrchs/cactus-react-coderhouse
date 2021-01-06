import React, {useState} from 'react';
import ContactFormInputs from './ContactFormInputs';
import ContactFormSuccess from './ContactFormSuccess';
import './ContactForm.scss'

const ContactForm = () => {

    const [isSubmitted, setIsSubmitted] = useState(false)

    const submitForm = () => {
        setIsSubmitted(true);
    }

    return (
        <div>
            {!isSubmitted ? <ContactFormInputs submitForm={submitForm}/> : <ContactFormSuccess/> }
        </div>
    )
}

export default ContactForm
