import React, {useEffect} from 'react';
import CartInfo from '../../widgets/CartInfo/CartInfo';
import CartTotal from '../../widgets/CartTotal/CartTotal';
import Button from '../../widgets/Button/Button';
import { Link } from 'react-router-dom';

const Cart = (props) => {

    const {productsData, cart, newCart, setNewCart, cartData, setCartData, total, setTotal, onAdd, clpCurrencyFormat, removeItem, cartUpdate} = props

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
                        <div>
                            <CartInfo cartData={cartData} newCart={newCart} setNewCart={setNewCart} onAdd={onAdd} clpCurrencyFormat={clpCurrencyFormat} removeItem={removeItem}/>
                            <Button onClick={cartUpdate}>Actualizar el carro</Button>
                        </div>
                        <div>
                            <CartTotal total={total} clpCurrencyFormat={clpCurrencyFormat}/>
                            <Link to='/checkout'><Button>Proceder al pago</Button></Link>
                            <Link to='/'><p>Continuar comprando</p></Link>
                        </div>
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
