import React from 'react'
import Counter from './Counter'
import './CartItemCount.scss'

const CartItemCount = (props) => {

    const {itemId, initialValue, stockQty, cartData, dispatch, handleAlert} = props;
    
    return (
        <div className="cart-counter-wrapper">
            <Counter stockQty={stockQty} initialValue={initialValue} cartData={cartData} itemId={itemId} dispatch={dispatch} handleAlert={handleAlert}/>
        </div>
    )
}

export default CartItemCount
