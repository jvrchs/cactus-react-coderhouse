import React, {useEffect} from 'react';
import CartInfo from '../../widgets/CartInfo/CartInfo';
import CartTotal from '../../widgets/CartTotal/CartTotal';
import Button from '../../widgets/Button/Button';
import { Link } from 'react-router-dom';

const Cart = (props) => {

    const {productsData, cart, cartData, setCartData, total, setTotal, onAdd, clpCurrencyFormat, removeItem} = props
  
    useEffect(() => {

        let cartDataArr = [];

        let newTotal = 0;

        for(let i = 0; i < cart.length; i++) {
            let [tempProduct] = productsData.filter(item => item.itemId === cart[i].itemId);
            console.log(tempProduct);
            tempProduct.quantity = cart[i].quantity;
            
            !tempProduct.offer[0] ?
                newTotal += tempProduct.price * tempProduct.quantity
                :
                newTotal += tempProduct.offer[1] * tempProduct.quantity

            cartDataArr.push(tempProduct)
        }  

        setCartData(cartDataArr)

        setTotal(newTotal)

    }, [cart])

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
                        <CartInfo cartData={cartData} onAdd={onAdd} clpCurrencyFormat={clpCurrencyFormat} removeItem={removeItem}/>
                        <CartTotal total={total} clpCurrencyFormat={clpCurrencyFormat}/>
                        <Button>Actualizar el carro</Button>
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
