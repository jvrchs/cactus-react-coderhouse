import React from 'react'
import { Link } from 'react-router-dom';
import Button from '../Button/Button';
import OrderDetail from './OrderDetail';

const MyOrders = ({ordersData}) => {
    
    const convertTimestamp = seconds => {
        let date = new Date(seconds * 1000);
        let day = date.getDate();
        let month = (date.getMonth() + 1).toLocaleString('es-CL', {minimumIntegerDigits: 2});
        let year = date.getFullYear();
        let hours = date.getHours().toLocaleString('es-CL', {minimumIntegerDigits: 2});
        let minutes = date.getMinutes().toLocaleString('es-CL', {minimumIntegerDigits: 2});
        let formattedDate = `${day}/${month}/${year} ${hours}:${minutes}`;
        return formattedDate;
    }

    return (
        <div className="orders-content">
            {
            ordersData.length !== 0 ?
            <>
            {ordersData.map(order => {
                return(
                    <OrderDetail order={order} key={order.oid} convertTimestamp={convertTimestamp}/>
                )
            })}
            </>
            :
            <div className="empty-order-wishlist">
                <p>No has realizado compras</p>
                <Link to='/'><Button>Ir a comprar</Button></Link>
            </div>
            }
        </div>
    )
}

export default MyOrders
