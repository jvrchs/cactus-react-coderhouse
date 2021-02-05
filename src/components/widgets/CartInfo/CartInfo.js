import React, { useState } from 'react';
import CartInfoMobileTable from './CartInfoMobileTable';
import CartInfoTable from './CartInfoTable';

const CartInfo = (props) => {

    const {cartData, clpCurrencyFormat, dispatch, handleAlert} = props;

    const [size, setSize] = useState(window.innerWidth);

    const windowWidthChange = () => {
        setSize(window.innerWidth)
     }
    window.addEventListener('resize', windowWidthChange)

    return (
        <>
        {
            size > 600 ?
            <CartInfoTable cartData={cartData} clpCurrencyFormat={clpCurrencyFormat} dispatch={dispatch} handleAlert={handleAlert}/>
            :
            <CartInfoMobileTable cartData={cartData} dispatch={dispatch} handleAlert={handleAlert}/>
        }
        </>
    )
}

export default CartInfo
