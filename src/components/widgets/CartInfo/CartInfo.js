import React, {useContext} from 'react';
import {FaTimes} from 'react-icons/fa';
import ItemCount from '../CounterNew/ItemCount';

const CartInfo = ({cartData, onAdd, clpCurrencyFormat, removeItem, newCart, setNewCart}) => {
 
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
                        <tr key={item.itemData.id}>
                            <td><img width='50' src={`media/img/products/${item.itemData.images[0]}`} alt={item.itemData.alt}/></td>
                            <td>{item.itemData.itemName}<span>{item.itemData.categoryName}</span></td>
                            <td><ItemCount stockQty={item.itemData.stock} onAdd={onAdd} itemId={item.itemData.itemId} quantity={item.itemData.quantity} newCart={newCart} setNewCart={setNewCart}/></td>
                            <td>{!item.itemData.offer[0] ? clpCurrencyFormat(item.itemData.price) : clpCurrencyFormat(item.itemData.offer[1])}</td>
                            <td>{!item.itemData.offer[0] ? clpCurrencyFormat(item.itemData.price * item.itemData.quantity) : clpCurrencyFormat(item.itemData.offer[1] * item.itemData.quantity)}</td>
                            <td><FaTimes onClick={() => removeItem(item.itemData.itemId, item.itemData.quantity)}/></td>
                        </tr>
                        )
                    })}
                </tbody>
            </table>
        </div>
    )
}

export default CartInfo
