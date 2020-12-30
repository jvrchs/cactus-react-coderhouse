import React from 'react';
import ItemCount from '../../../ItemCount/ItemCount';

const ItemDetail = ({productsData, id}) => {
    return(
        <section className="item-detail-container">
            {
                productsData.filter(item => item.id === id)
                .map(product => {
                    return(
                        <>
                            <img src={"media/img/products/" + product.images[0]} alt={product.alt}/>
                            <h1>{product.title}</h1>
                            <ul>
                                <li>Precio: {product.price}</li>
                                <li>Descripción: {product.description}</li>
                            </ul>
                            <ItemCount initial={0} stock={15}/>
                        </>
                    )
                })
            }
        </section>
    )
}

export default ItemDetail;