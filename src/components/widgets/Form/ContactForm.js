import React, { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import Button from '../Button/Button';

const ContactForm = () => {

    const {errors, register, handleSubmit, reset} = useForm();
    
    const onSubmit = (data, e) => {
        e.target.reset();
        alert('Mensaje enviado')
    }

    useEffect(async function reset() {
        const result = await fetch('./api/formValues.json');
        reset(result)
    }, [reset])

    return (
        <form className="contact-form" onSubmit={handleSubmit(onSubmit)}>
            <div className="form-field">
                <label htmlFor="addressName">Nombre*</label>
                <input name="addressName" ref={register({required: "Nombre requerido"})}/>
                <small>{errors.addressName && <p>{errors.addressName.message}</p>}</small>
            </div>
            <div className="form-field">
                <label htmlFor="email">E-mail*</label>
                <input name="email" ref={register({required: "E-mail requerido", pattern: {value: /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/, message: "E-mail inválido"}})}/>
                <small>{errors.email && <p>{errors.email.message}</p>}</small>
            </div>
            <div className="form-field">
                <label htmlFor="message">Mensaje*</label>
                <textarea name="message" ref={register({required: 'Mensaje requerido'})}/>
                <small>{errors.message && <p>{errors.message.message}</p>}</small>
            </div>
            <div className="form-btn-wrapper">
                <Button type="submit">Enviar</Button>
            </div>
        </form>
    )
}

export default ContactForm
