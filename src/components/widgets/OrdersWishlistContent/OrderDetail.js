import React, {useContext, useState} from 'react';
import { contextForCart } from '../../context/contextForCart';

const OrderDetail = ({order, convertTimestamp}) => {

    const {clpCurrencyFormat} = useContext(contextForCart);

    const [seeDetails, setSeeDetails] = useState(false);

    const handleSeeDetails = () => {
        setSeeDetails(!seeDetails)
    };

    return (
        <>
            <div className="order-info-wrapper">
                <div className="order-header">
                    <p>
                        <strong>Orden: {order.oid}</strong>
                        <br/>
                        Fecha: {convertTimestamp(order.date.seconds)}
                        <br/>
                        Total: {clpCurrencyFormat(order.total)}
                        <br/>
                        <span className="see-order-details" onClick={handleSeeDetails}>
                            {!seeDetails ? 'Ver detalles de la orden' : 'Ocultar detalles de la orden'}
                        </span>
                    </p>
                </div>
                <div className={seeDetails ? 'order-table' : 'hide'}>
                    <div>
                        <p><strong>La orden contiene los siguientes items:</strong></p>
                        <div className="order-table-wrapper">
                            <table>
                                <thead>
                                    <tr>
                                        <th><p className="product-detail-th">Detalle del producto</p></th>
                                        <th><p>Cantidad</p></th>
                                        <th><p>Precio</p></th>
                                        <th><p>Oferta</p></th>
                                        <th><p>Total</p></th>
                                    </tr>
                                </thead>
                                <tbody>
                                {order['items'].map(item => {
                                    return(
                                        <tr key={item.itemId}>
                                            <td>
                                                <p className="order-item-name">
                                                    {item.itemName} - {item.category}
                                                </p>
                                            </td>
                                            <td><p>{item.quantity}</p></td>
                                            <td><p>{clpCurrencyFormat(item.price)}</p></td>
                                            <td><p>{item.offer[0] ? clpCurrencyFormat(item.offer[1]) : '-'}</p></td>
                                            <td><p>{item.offer[0] ? clpCurrencyFormat(item.offer[1]*item.quantity) : clpCurrencyFormat(item.price*item.quantity)}</p></td>
                                        </tr>
                                    )
                                })}
                                </tbody>
                            </table>
                        </div>
                        <p className="order-table-total">Total orden: {clpCurrencyFormat(order.total)}</p>
                    </div>
                </div>
            </div>
            <hr/>
        </>
    )
}

export default OrderDetail
