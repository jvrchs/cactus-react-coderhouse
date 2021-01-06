import React, {useState} from 'react';
import ContactFormInputs from './ContactFormInputs';
import ContactFormSuccess from './ContactFormSuccess';

const ContactForm = () => {

    const [isSubmitted, setIsSubmitted] = useState(false)

    const submitForm = () => {
        setIsSubmitted(true);
    }

    return (
        <div style={{marginTop: '8rem'}}>
            {!isSubmitted ? <ContactFormInputs submitForm={submitForm}/> : <ContactFormSuccess/> }
        </div>
    )
}

export default ContactForm
