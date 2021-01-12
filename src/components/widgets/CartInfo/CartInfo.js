import React, {useContext} from 'react';
import {FaTimes} from 'react-icons/fa';

const CartInfo = ({cartData, context}) => {

    const {clpCurrencyFormat, removeItem} = useContext(context);

    return (
        <div className="cart-info">
            <table>
                <thead>
                    <tr>
                        <th>PRODUCTO</th>
                        <th></th>
                        <th>CANTIDAD</th>
                        <th>PRECIO UNITARIO</th>
                        <th>SUBTOTAL</th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    {cartData.map(item => {
                        return(
                        <tr key={item.id}>
                            <td><img width='50' src={`media/img/products/${item.images[0]}`} alt={item.alt}/></td>
                            <td>{item.title}<span>{item.category}</span></td>
                            <td>{item.quantity}</td>
                            <td>{!item.offer[0] ? clpCurrencyFormat(item.price) : clpCurrencyFormat(item.offer[1])}</td>
                            <td>{!item.offer[0] ? clpCurrencyFormat(item.price * item.quantity) : clpCurrencyFormat(item.offer[1] * item.quantity)}</td>
                            <td><FaTimes onClick={() => removeItem(item.id, item.quantity)}/></td>
                        </tr>
                        )
                    })}
                </tbody>
            </table>
        </div>
    )
}

export default CartInfo
