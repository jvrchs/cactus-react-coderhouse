import React from 'react';
import {FaTimes} from 'react-icons/fa';
import { ACTIONS } from '../../context/cartReducer';
import CartItemCount from '../CartItemCount/CartItemCount';

const CartInfoTable = ({cartData, clpCurrencyFormat, dispatch, handleAlert}) => {
    return (
        <table>
            <thead>
                <tr>
                    <th colSpan="2">PRODUCTO</th>
                    <th>CANTIDAD</th>
                    <th>PRECIO</th>
                    <th>SUBTOTAL</th>
                    <th className="delete-item-col"></th>
                </tr>
            </thead>
            <tbody>
                {cartData.map(item => {
                    let data = item.itemData;
                    return(
                    <tr key={data.id}>
                        <td><img width='70' src={`media/img/products/${data.images[0]}`} alt={data.alt}/></td>
                        <td className="name-category-td">{data.itemName}<br/>{data.categoryName}</td>
                        <td><CartItemCount itemId={data.itemId} initialValue={data.quantity} stockQty={data.stock} cartData={cartData} dispatch={dispatch} handleAlert={handleAlert}/></td>
                        <td>{!data.offer[0] ? clpCurrencyFormat(data.price) : clpCurrencyFormat(data.offer[1])}</td>
                        <td>{!data.offer[0] ? clpCurrencyFormat(data.price * data.quantity) : clpCurrencyFormat(data.offer[1] * data.quantity)}</td>
                        <td><FaTimes className="quit-item-cart" onClick={() => dispatch({type: ACTIONS.REMOVE_ITEM, payload:{itemId: data.itemId}})}/></td>
                    </tr>
                    )
                })}
            </tbody>
        </table>
    )
}

export default CartInfoTable
