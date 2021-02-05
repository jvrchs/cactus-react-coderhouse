import React, {useContext} from 'react';
import { Link } from 'react-router-dom';
import Button from '../../Button/Button';
import ItemCount from '../../ItemCount/ItemCount';
import ProductImageGallery from '../../ProductImageGallery/ProductImageGallery';
import {FaHeart} from 'react-icons/fa';
import './ItemDetail.scss';
import { contextForFirebase } from '../../../context/contextForFirebase';

const ItemDetail = (props) => {

    const {productsData, id, itemAdded, setItemAdded, onAdd, clpCurrencyFormat, qty, dispatch, addWishlist} = props;

    const {currentUserData, loggedIn} = useContext(contextForFirebase);

    return(
        <section className="item-detail-section section-box">
            {
            productsData.map(item => {
                return(
                    item.itemId === id ?
                        <div className="item-detail-container section-container-box" key={item.itemId}>
                            <ProductImageGallery imageArr={item.images} alt={item.alt} />
                            <div className="item-detail-info-wrapper">
                                <div className="item-detail-header">
                                    <h1>{item.itemName.toUpperCase()}</h1>
                                    <div className={loggedIn && currentUserData.wishlist.includes(item.itemId) ? "heart filled" : "heart"}>
                                       {loggedIn ? <FaHeart onClick={() => addWishlist(item.itemId)}/> : <Link to="/mi-cuenta"><FaHeart/></Link>} 
                                    </div>
                                </div>
                                {item.offer[0] ?
                                <>
                                <p className="old-price-detail">{clpCurrencyFormat(item.price)}</p>
                                <p className="new-price-detail">{clpCurrencyFormat(item.offer[1])}</p>
                                </>
                                :
                                <p className="price-detail">{clpCurrencyFormat(item.price)}</p>
                                }
                                <br/>
                                <hr/>
                                {item.stock !== 0 ?
                                    <>
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
                                            itemId={item.itemId}
                                            dispatch={dispatch}/> 
                                        }
                                        <small><p><i>Stock: {item.stock} unidades</i></p></small>
                                    </>
                                    :
                                    <p className="stock-message"><i>Producto sin stock</i></p>
                                }
                                <br/>
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