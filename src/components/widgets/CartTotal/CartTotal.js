import React, { useContext } from 'react';


const CartTotal = ({total, context}) => {

    const {clpCurrencyFormat} = useContext(context) 

    return (
        <div className="order-summary">
            <h3>Resumen</h3>
            <table>
                <tbody>
                    <tr>
                        <td>Total</td>
                        <td>{clpCurrencyFormat(total)}</td>
                    </tr>
                </tbody>
            </table>
        </div>
    )
}

export default CartTotal
