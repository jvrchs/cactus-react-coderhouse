import React, {useContext, useState, useEffect} from 'react';
import {context} from '../../context/context';
import products from '../../data/products';
import CartInfo from '../../widgets/CartInfo/CartInfo';
import CartTotal from '../../widgets/CartTotal/CartTotal';
import Button from '../../widgets/Button/Button';
import { Link } from 'react-router-dom';

const Cart = () => {
    
    const {cart} = useContext(context);

    const [cartData, setCartData] = useState([]);

    const[total, setTotal] = useState(0);
  
    useEffect(() => {

        let cartDataArr = [];

        let newTotal = 0;

        for(let i = 0; i < cart.length; i++) {
            let [tempProduct] = products.filter(item => item.id === cart[i].itemId);

            tempProduct.quantity = cart[i].quantity;
            
            !tempProduct.offer[0] ?
                newTotal += tempProduct.price * tempProduct.quantity
                :
                newTotal += tempProduct.offer[1] * tempProduct.quantity

            cartDataArr.push(tempProduct)
        }    

        setCartData(cartDataArr)

        setTotal(newTotal)

    },[cart])

    return (
        <section className="cart-section section-box">
            <div className="cart-container section-container-box">
                <div className="section-title">
                    <span></span>
                    <h1>CARRO</h1>
                    <span></span>
                </div>
                <br/>
                <br/>
                {cartData.length ? 
                    <>
                        <CartInfo cartData={cartData} context={context}/>
                        <CartTotal total={total} context={context}/>
                    </>   
                    :
                    <>
                        <p>El carro de compras está vacío. Puedes volver y comenzar a agregar productos.</p>
                        <Link to='/'><Button buttonStyle='btn--primary' buttonSize='btn-large'>VOLVER A COMPRAR</Button></Link>
                    </> 
                }
            </div>
        </section>
    )
}

export default Cart
