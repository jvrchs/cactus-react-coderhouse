import React, {useContext, useState} from 'react'
import { useForm } from 'react-hook-form'
import { context } from '../../context/context';
import Button from '../../widgets/Button/Button';
import OrderCompleted from '../OrderCompleted/OrderCompleted';
import firebase from "firebase/app";
import "firebase/firestore";

const Checkout = () => {

    const {order, setOrder, cartData, total, setCart} = useContext(context);
    
    const {register, handleSubmit, errors} = useForm();

    const [isSubmited, setIsSubmited] = useState(false);

    const onSubmit = data => {
        const itemsInfo =  orderDetail()
        const order = {
            buyer: data,
            items: itemsInfo,
            date: firebase.firestore.Timestamp.fromDate(new Date()),
            total: total
        }
        setOrder(order)
        setIsSubmited(true)
    }

    const orderDetail = () => {
        let itemsInfo = cartData.map(item => {
            return {
                docId: item.docId,
                itemId: item.itemData.itemId,
                itemName: item.itemData.itemName,
                category: item.itemData.categoryName,
                price: item.itemData.price,
                offer: item.itemData.offer,
                quantity: item.itemData.quantity,
                stock: item.itemData.stock
            }
        })
        return itemsInfo
    }

    return (
        !isSubmited ?
        <section className="checkout-section section-box">
            <div className="checkout-container section-container-box">
                <div className="section-title">
                    <span></span>
                    <h1>CHECKOUT</h1>
                    <span></span>
                </div>
                <div className='checkout-form-container'>
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <div>
                            <h3>Contacto</h3>

                            <label htmlFor="email">E-mail*</label>
                            <input name="email" ref={register({required: true, pattern: /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/})}/>
                            {errors.email && errors.email.type === 'required' && (
                                <p>E-mail requerido</p>
                            )}
                            {errors.email && errors.email.type === 'pattern' && (
                                <p>E-mail inválido</p>
                            )}

                            <label htmlFor="phone">Teléfono*</label>
                            <input name="phone" placeholder="9 xxxx xxxx"
                            ref={register({required: true, minLength: 9, maxLength: 9})}/>
                            {errors.phone && errors.phone.type==='required' && (
                                <p>Teléfono requerido</p>
                            )}
                            {errors.phone && errors.phone.type==='minLength' && (
                                <p>El teléfono debe contener 9 números</p>
                            )}
                            {errors.phone && errors.phone.type==='maxLength' && (
                                <p>El teléfono debe contener 9 números</p>
                            )}
                        </div>
                        <div>
                            <h3>Dirección de envío</h3>

                            <label htmlFor="name">Nombre*</label>
                            <input name="name" ref={register({required: true})}/>
                            {errors.name && errors.name.type==='required' && (
                                <p>Nombre requerido</p>
                            )}

                            <label htmlFor="lastName">Apellido*</label>
                            <input name="lastName" ref={register({required: true})}/>
                            {errors.lastName && errors.lastName.type==='required' && (
                                <p>Apellido requerido</p>
                            )}

                            <label htmlFor="rut">RUT*</label>
                            <input name="rut" placeholder="00000000-0" ref={register({required: true, pattern: /^[0-9]+[-|‐]{1}[0-9kK]{1}$/})}/>
                            {errors.rut && errors.rut.type === 'required' && (
                                <p>RUT requerido</p>
                            )}
                            {errors.rut && errors.rut.type === 'pattern' && (
                                <p>RUT inválido</p>
                            )}

                            <label htmlFor="direction">Dirección*</label>
                            <input name="direction" ref={register({required: true})}/>
                            {errors.direction && errors.direction.type === 'required' && (
                                <p>Dirección requerida</p>
                            )}

                            <label htmlFor="city">Ciudad*</label>
                            <input name="city" ref={register({required: true})}/>
                            {errors.city && errors.city.type === 'required' && (
                                <p>Ciudad requerida</p>
                            )}

                            <label htmlFor="zip">Código postal</label>
                            <input name="zip" ref={register({required: false})}/>

                            <label htmlFor="state">Región*</label>
                            <input name="state" ref={register({required: true})}/>
                            {errors.state && errors.state.type === 'required' && (
                                <p>Región requerida</p>
                            )}

                            <label htmlFor="community">Comuna*</label>
                            <input name="community" ref={register({required: true})}/>
                            {errors.community && errors.community.type === 'required' && (
                                <p>Comuna requerida</p>
                            )}
                        </div>
                        <div>
                            <h3>Información Adicional</h3>

                            <label htmlFor="addInfo">Introduzca las instrucciones especiales para su pedido:</label>
                            <textarea name="addInfo" ref={register({required: false})}/>
                        </div>
                        <Button type="submit">Comprar</Button>
                    </form>
                </div>
            </div>
        </section> 
        :
        <>
        <OrderCompleted order={order} setCart={setCart}/>        
        </>
    )
}

export default Checkout
