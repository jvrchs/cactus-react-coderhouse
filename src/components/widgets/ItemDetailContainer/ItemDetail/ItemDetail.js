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
                productsData.map(product => {
                    return(
                        product.id === id ?
                            <div className="item-detail-container section-container-box" key={product.id}>
                                <ProductImageGallery imageArr={product.images} alt={product.alt} />
                                <div className="item-detail-info-wrapper">
                                    <h1>{product.title.toUpperCase()}</h1>
                                    {product.offer[0] ?
                                    <>
                                    <p className="old-price-detail">{clpCurrencyFormat(product.price)}</p>
                                    <p className="new-price-detail">{clpCurrencyFormat(product.offer[1])}</p>
                                    </>
                                    :
                                    <p>{clpCurrencyFormat(product.price)}</p>
                                    }
                                    <hr/>
                                    <h2>CANTIDAD</h2>
                                    {qty ?
                                    <Link to="/carro"><Button className="checkout-btn">Finalizar compra</Button></Link>   
                                    :
                                    <ItemCount 
                                    className='item-detail-counter' 
                                    stockQty={product.stock}  
                                    itemAdded={itemAdded} 
                                    setItemAdded={setItemAdded}
                                    onAdd={onAdd}
                                    id={product.id}/> 
                                    }
                                    <p>Descripción: {product.description}</p>
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