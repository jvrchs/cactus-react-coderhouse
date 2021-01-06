import React from 'react';
import Button from '../../../Button/Button';
import useForm from './useForm';
import validate from './validateForm';

const ContactFormInputs = ({submitForm}) => {
    const { values, errors, handleChange, handleSubmit } = useForm(submitForm,validate);

    return (
        <div className="form-wrapper">
            <form className="contact-form" onSubmit={handleSubmit}>
                <div className="form-inputs">
                    <label htmlFor="name" className="form-label">
                        Nombre (obligatorio)
                    </label>
                    <input type="text" name="name" value={values.name} onChange={handleChange} className="form-input"/>
                    {errors.name && <p className="contact-form-error">{errors.name}</p>}
                </div>
                <br/>
                <div className="form-inputs">
                    <label htmlFor="email" className="form-label">
                        Correo Electrónico (obligatorio)
                    </label>
                    <input type="email" name="email" value={values.email} onChange={handleChange} className="form-input"/>
                    {errors.email && <p className="contact-form-error">{errors.email}</p>}
                </div>
                <br/>
                <div className="form-inputs">
                    <label htmlFor="reason" className="form-label">
                        Motivo 
                    </label>
                    <select name="reason" value={values.reason} onChange={handleChange} className="form-input">
                        <option value="query">Consulta</option>
                        <option value="order-state">Estado de pedido</option>
                        <option value="claim">Reclamo</option>
                    </select>
                </div>
                <br/>
                <div className="form-inputs">
                    <label htmlFor="message" className="form-label">
                        Tu mensaje
                    </label>
                    <textarea name="message" value={values.message} onChange={handleChange} className="form-textarea form-input"/>
                </div>
                <br/>
                <Button type="submit" className="form-input-btn">
                    Enviar
                </Button>
            </form>
        </div>
    )
}

export default ContactFormInputs
