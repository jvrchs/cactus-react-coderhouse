import React, {useEffect} from 'react';
import CartInfo from '../../widgets/CartInfo/CartInfo';
import CartTotal from '../../widgets/CartTotal/CartTotal';
import Button from '../../widgets/Button/Button';
import { Link } from 'react-router-dom';

const Cart = (props) => {

    const {productsData, cart, cartData, setCartData, total, setTotal, clpCurrencyFormat, dispatch, handleAlert} = props

    useEffect(() => {

        let cartDataArr = [];

        let newTotal = 0;

        for(let i = 0; i < cart.length; i++) {
            let [tempProduct] = productsData.filter(item => item.itemData.itemId === cart[i].itemId);
            tempProduct.itemData.quantity = cart[i].quantity;
            
            !tempProduct.itemData.offer[0] ?
                newTotal += tempProduct.itemData.price * tempProduct.itemData.quantity
                :
                newTotal += tempProduct.itemData.offer[1] * tempProduct.itemData.quantity

            cartDataArr.push(tempProduct)
        }  

        setCartData(cartDataArr)

        setTotal(newTotal)

    }, [cart]);

    return (
        <section className="cart-section section-box">
            <div className="cart-container section-container-box">
                <div className="section-title">
                    <h1>CARRO</h1>
                </div>
                {cartData.length ? 
                <div className="cart-data-container">
                    <div className="cart-table-wrapper">
                        <CartInfo cartData={cartData} clpCurrencyFormat={clpCurrencyFormat} dispatch={dispatch} handleAlert={handleAlert}/>
                    </div>
                    <div className="cart-summary-wrapper">
                        <CartTotal cartData={cartData} total={total} clpCurrencyFormat={clpCurrencyFormat}/>
                        <div className='cart-total-btn'>
                            <Link to='/checkout'><Button>Proceder al pago</Button></Link>
                            <Link to='/'><p>Continuar comprando</p></Link>
                        </div>
                    </div>
                </div>   
                :
                <div className="empty-cart-message">
                    <p>El carro de compras está vacío. Puedes volver y comenzar a agregar productos.</p>
                    <Link to='/'><Button buttonStyle='btn--primary' buttonSize='btn-large'>VOLVER A COMPRAR</Button></Link>
                </div> 
                }
            </div>
        </section>
    )
}

export default Cart
