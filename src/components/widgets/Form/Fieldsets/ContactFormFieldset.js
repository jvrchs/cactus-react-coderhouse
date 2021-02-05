import React from 'react'

const ContactFormFieldset = (props) => {

    const {currentUserData, loggedIn, register, errors} = props;

    return (
        <>
        <h3>Contacto</h3>
        <div className="form-field">
            <label htmlFor="email">E-mail*</label>
            <input name="email" defaultValue={loggedIn ? currentUserData.email : ""} ref={register({required: "E-mail requerido", pattern: {value: /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/, message: "E-mail inválido"}})}/>
            <small>{errors.email && <p>{errors.email.message}</p>}</small>
        </div>
        <div className="form-field">
            <label htmlFor="phone">Teléfono*</label>
            <input name="phone" defaultValue={loggedIn ? currentUserData.phone : ""} ref={register({required: "Teléfono requerido"})}/>                   
            <small>{errors.phone && <p>{errors.phone.message}</p>}</small>
        </div>  
        </>
    )
}

export default ContactFormFieldset
