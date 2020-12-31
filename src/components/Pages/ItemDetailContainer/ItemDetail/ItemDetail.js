import React from 'react';
import ItemCount from '../../../ItemCount/ItemCount';

const ItemDetail = ({ productsData, id }) => {
    return(
        <>
            {
                productsData.map(product => {
                   
                    return(
                        product.id === id.itemId ?
                        <section className="item-detail-container" key={product.id}>
                            <img src={"../media/img/products/" + product.images[0]} alt={product.alt}/>
                            <h1>{product.title}</h1>
                            <ul>
                                <li>Precio: {product.price}</li>
                                <li>Descripción: {product.description}</li>
                            </ul>
                            <ItemCount initial={0} stock={15}/>
                        </section>
                        :
                        null
                    )
                })
            }
        </>
    )
}

export default ItemDetail;