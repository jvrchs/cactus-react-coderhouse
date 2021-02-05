import React, {useContext, useState} from 'react';
import "./ItemCard.scss";
import ItemCount from '../ItemCount/ItemCount';
import {Link} from 'react-router-dom';
import {MdLocalOffer} from 'react-icons/md';
import {FaHeart} from 'react-icons/fa';
import { RiCactusLine } from "react-icons/ri";
import { contextForCart } from '../../context/contextForCart';
import { contextForFirebase } from '../../context/contextForFirebase';

const ItemCard = (props) => {

    const {id, title, category, price, offer, image, stock, handleAlert} = props

    const [itemAdded, setItemAdded] = useState(1);

    const {dispatch, clpCurrencyFormat} = useContext(contextForCart)

    const {addWishlist, loggedIn, currentUserData} = useContext(contextForFirebase)
    
    return (
        <div className="item-card">
            <div className="wrapper">
                <div className={`color-bg`}></div>
                <div className="card-img" style={{"backgroundImage": `url(media/img/products/${image})`}}></div>
                <div className={offer != null ? 'offer-icon' : 'no-offer'}>
                    <MdLocalOffer/>
                    <RiCactusLine className='cactus-offer'/>
                </div>
                <div className="card-info">
                    <h3><Link to={`/item/${id}`}>{title}</Link></h3>
                    <p className="category">{category}</p>
                    <div className="action">
                        <div className="price-group">
                            <p className={offer != null ? 'price old-price' : 'price' }>{clpCurrencyFormat(price)}</p>
                            <p className={offer != null ? 'price new-price' : 'no-offer' }>{clpCurrencyFormat(offer)}</p>
                        </div>
                        <div className={loggedIn && currentUserData.wishlist.includes(id) ? "heart filled" : "heart"}>
                            {loggedIn ?
                            <FaHeart onClick={() => addWishlist(id)}/>
                            :
                            <FaHeart onClick={() => window.location.hash = '/mi-cuenta'}/>
                            }
                        </div>
                    </div>
                    {stock === 0 ?
                    <p className="no-stock-message">Sin stock</p>
                    :
                    <ItemCount className='card-item-counter' stockQty={stock} itemAdded={itemAdded} setItemAdded={setItemAdded} itemId={id} dispatch={dispatch} handleAlert={handleAlert}/> 
                    }
                </div>
            </div>
        </div>
    )
};

export default ItemCard;