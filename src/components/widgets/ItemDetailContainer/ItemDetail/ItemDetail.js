import React from 'react';
import { Link } from 'react-router-dom';
import Button from '../../Button/Button';
import ItemCount from '../../ItemCount/ItemCount';
import ProductImageGallery from '../../ProductImageGallery/ProductImageGallery';
import './ItemDetail.scss';

const ItemDetail = (props) => {

    const {productsData, id, itemAdded, setItemAdded, onAdd, clpCurrencyFormat, qty} = props;

    return(
        <section className="item-detail-section section-box">
            {
                productsData.map(item => {
                    return(
                        item.itemId === id ?
                            <div className="item-detail-container section-container-box" key={item.itemId}>
                                <ProductImageGallery imageArr={item.images} alt={item.alt} />
                                <div className="item-detail-info-wrapper">
                                    <h1>{item.itemName.toUpperCase()}</h1>
                                    {item.offer[0] ?
                                    <>
                                    <p className="old-price-detail">{clpCurrencyFormat(item.price)}</p>
                                    <p className="new-price-detail">{clpCurrencyFormat(item.offer[1])}</p>
                                    </>
                                    :
                                    <p>{clpCurrencyFormat(item.price)}</p>
                                    }
                                    <hr/>
                                    <h2>CANTIDAD</h2>
                                    {qty ?
                                    <Link to="/carro"><Button className="checkout-btn">Finalizar compra</Button></Link>   
                                    :
                                    <ItemCount 
                                    className='item-detail-counter' 
                                    stockQty={item.stock}  
                                    itemAdded={itemAdded} 
                                    setItemAdded={setItemAdded}
                                    onAdd={onAdd}
                                    id={item.itemId}/> 
                                    }
                                    <p>Descripción: {item.description}</p>
                                </div>
                            </div>
                        :
                        null
                    )
                })
            }
        </section>
    )
}

export default ItemDetail;