import React from 'react';
import {FaTimes} from 'react-icons/fa';
import { ACTIONS } from '../../context/cartReducer';
import CartItemCount from '../CartItemCount/CartItemCount';

const CartInfoMobileTable = ({cartData, dispatch, handleAlert}) => {
    return (
        <table>
            <thead>
                <tr>
                    <th>PRODUCTO</th>
                    <th>CANTIDAD</th>
                    <th className="delete-item-mobile"></th>
                </tr>
            </thead>
            <tbody>
                {cartData.map(item => {
                let data = item.itemData;
                return(
                <tr key={data.id}>
                    <td className="name-category-td mobile-name-category">{data.itemName}<br/>{data.categoryName}</td>
                    <td><CartItemCount itemId={data.itemId} initialValue={data.quantity} stockQty={data.stock} cartData={cartData} dispatch={dispatch} handleAlert={handleAlert}/></td>
                    <td className="delete-item-mobile-td"><FaTimes onClick={() => dispatch({type: ACTIONS.REMOVE_ITEM, payload:{itemId: data.itemId}})}/></td>
                </tr>
                )
                })}
            </tbody>
        </table>
    )
}

export default CartInfoMobileTable
