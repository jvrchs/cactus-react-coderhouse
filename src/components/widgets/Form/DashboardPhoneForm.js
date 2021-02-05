import React from 'react'
import { useForm } from 'react-hook-form';
import Button from '../Button/Button';

const DashboardPhoneForm = (props) => {

    const {handleClick, writePhone} = props;

    const {errors, register, handleSubmit} = useForm();

    const onSubmit = data => {
        const phoneNumber = data.customerPhone;
        writePhone(phoneNumber);
        handleClick(null)
    }

    return (
        <form className="customer-phone-form" onSubmit={handleSubmit(onSubmit)}>
            <h3>Contacto</h3>
            <div className="form-field">
                <label htmlFor="customerPhone">Teléfono</label>
                <input name="customerPhone" ref={register({required: "Teléfono requerido", pattern: {value: /^[0-9]*$/, message: 'Teléfono inválido'}})}/>
                <small>{errors.customerPhone && <p>{errors.customerPhone.message}</p>}</small>
            </div>  
            <div className="form-btn-wrapper">
                <Button type="submit">Guardar</Button>
                <Button className="btn--outline" onClick={() => handleClick(null)}>Cancelar</Button>
            </div>
        </form>
    )
}

export default DashboardPhoneForm
