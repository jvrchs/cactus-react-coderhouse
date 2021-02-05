import React from 'react'
import { useForm } from 'react-hook-form'
import Button from '../Button/Button';
import AddressFormFieldset from './Fieldsets/AddressFormFieldset';

const DashboardAddressForm = (props) => {

    const {handleClick, writeAddress} = props;

    const {errors, register, handleSubmit} = useForm();

    const onSubmit = data => {
        const address = {
            name: data.addressName,
            lastName: data.addressLastName,
            rut: data.addressRut,
            direction: data.addressDirection,
            direction2: data.addressDirection2,
            region: data.addressRegion,
            community: data.addressCommunity,
            zip: data.addressZip
        }
        writeAddress(address);
        handleClick(null);
    }


    return (
            <form onSubmit={handleSubmit(onSubmit)}>
                <AddressFormFieldset register={register} errors={errors}/>
                <div className="form-btn-wrapper">
                    <Button type="submit">Guardar</Button>
                    <Button onClick={() => handleClick(null)} className="btn--outline">Cancelar</Button>
                </div>
            </form>
    )
}

export default DashboardAddressForm
