import React from 'react'
import { useForm } from 'react-hook-form';
import ContactFormFieldset from './Fieldsets/ContactFormFieldset'
import firebase from "firebase/app";
import "firebase/firestore";
import AddressFormFieldset from './Fieldsets/AddressFormFieldset';
import Button from '../Button/Button';
import './Form.scss'
import { Link } from 'react-router-dom';

const CheckoutForm = (props) => {

    const {currentUserData, currentUserId, loggedIn, setIsSubmited, setOrder, total, orderDetail} = props;

    const {register, errors, handleSubmit}= useForm();

    const onSubmit = data => {
        const itemsInfo =  orderDetail()
        const order = {
            buyer: data,
            items: itemsInfo,
            date: firebase.firestore.Timestamp.fromDate(new Date()),
            total: total
        }
        if(loggedIn) {
            order.buyer.uid = currentUserId;
        }
        setOrder(order)
        setIsSubmited(true)
    }
    
    return (
        <form className="checkout-form" onSubmit={handleSubmit(onSubmit)}>
            <ContactFormFieldset currentUserData={currentUserData} loggedIn={loggedIn} register={register} errors={errors}/>
            <AddressFormFieldset currentUserData={currentUserData} loggedIn={loggedIn} register={register} errors={errors}/>
            <div className="form-btn-container">
                <div className="form-btn-wrapper">
                    <Button type="submit">Comprar</Button>
                    <Link to='/'><Button type="submit" className="btn--outline">Cancelar</Button></Link>
                </div>
            </div>
        </form>
    )
}

export default CheckoutForm