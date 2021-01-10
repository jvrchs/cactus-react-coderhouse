import React, {useState} from 'react';
import { Link } from 'react-router-dom';
import Button from '../../Button/Button';
import ItemCount from '../../ItemCount/ItemCount';
import ProductImageGallery from '../../ProductImageGallery/ProductImageGallery';
import './ItemDetail.scss';

const ItemDetail = (props) => {

    const {productsData, id, addItem, removeItem, clearCart, isInCart} = props;

    const [itemId, setItemId] = useState(id.itemId)

    const [qty, setQty] = useState(0);

    const [itemAdded, setItemAdded] = useState(1);

    const onAdd = e => {
        setQty(itemAdded);
    };

    const setItems = () => {
        addItem(itemId, qty)
    }

    return(
        <>
            {
                productsData.map(product => {
                    return(
                        product.id === id.itemId ?
                        <section className="item-detail-section section-box">
                            <div className="item-detail-container section-container-box" key={product.id}>
                                <ProductImageGallery imageArr={product.images} alt={product.alt} />
                                <div className="item-detail-info-wrapper">
                                    <h1>{product.title.toUpperCase()}</h1>
                                    {product.offer[0] ?
                                    <>
                                    <p className="old-price-detail">{new Intl.NumberFormat("es-CL", {style: "currency", currency: "CLP"}).format(product.price)}</p>
                                    <p className="new-price-detail">{new Intl.NumberFormat("es-CL", {style: "currency", currency: "CLP"}).format(product.offer[1])}</p>
                                    </>
                                    :
                                    <p>{new Intl.NumberFormat("es-CL", {style: "currency", currency: "CLP"}).format(product.price)}</p>
                                    }
                                    <hr/>
                                    <h2>CANTIDAD</h2>
                                    {qty ?
                                    <Link to="/cart"><Button className="checkout-btn" onClick={setItems}>Finalizar compra</Button></Link>   
                                    :
                                    <ItemCount 
                                    className='item-detail-counter' 
                                    stockQty={product.stock} 
                                    onAdd={onAdd} 
                                    itemAdded={itemAdded} 
                                    setItemAdded={setItemAdded}
                                    addItem={addItem}/> 
                                    }
                                    <p>Descripción: {product.description}</p>
                                </div>
                            </div>
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