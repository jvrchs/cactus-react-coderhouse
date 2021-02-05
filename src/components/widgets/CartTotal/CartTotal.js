import React from 'react';

const CartTotal = ({cartData, total, clpCurrencyFormat}) => {

    return (
        <div className="order-summary">
            <h3>Resumen</h3>
            <br/>
            <table>
                <thead>
                    <tr>
                        <th></th>
                        <th></th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    {cartData.map(item => {
                        let itemData = item.itemData;
                        let subtotal = itemData.offer[0] ? itemData.quantity * itemData.offer[1] : itemData.quantity * itemData.price;
                        return(
                            <tr key={itemData.itemId}>
                                <td>{itemData.itemName}</td>
                                <td className="count-td">{`x ${itemData.quantity}`}</td>
                                <td className="price-td">{clpCurrencyFormat(subtotal)}</td>
                            </tr>
                        ) 
                    })}
                </tbody>
            </table>
            <p className="total-amount">{`TOTAL: ${clpCurrencyFormat(total)}`}</p>
        </div>
    )
}

export default CartTotal
