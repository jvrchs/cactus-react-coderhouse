import React, {useState, useEffect} from 'react';
import Button from '../../../Button/Button';
import ItemCount from '../../../ItemCount/ItemCount';

const ItemDetail = ({ productsData, id }) => {

    const [qty, setQty] = useState(0);
    const [itemAdded, setItemAdded] = useState(0);

    const onAdd = e => {
        setQty(itemAdded)
    }

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
                            {qty ?
                            <Button className="checkout-btn">Finalizar compra</Button>   
                            :
                            <ItemCount stockQty={product.stock} onAdd={onAdd} itemAdded={itemAdded} setItemAdded={setItemAdded}/> 
                            }
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