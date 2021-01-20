import React, {useContext, useState} from 'react';
import "./ItemCard.scss";
import ItemCount from '../ItemCount/ItemCount';
import {Link} from 'react-router-dom';
import {MdLocalOffer} from 'react-icons/md';
import {FaHeart} from 'react-icons/fa';
import { RiCactusLine } from "react-icons/ri";
import {context} from '../../context/context';

const Item = ({
    id,
    title,
    category,
    price,
    offer,
    image,
    stock
}) => {

    const [itemAdded, setItemAdded] = useState(1);

    const {addItem, clpCurrencyFormat} = useContext(context)

    const onAdd = () => {
        addItem(id, itemAdded)
    }
    
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
                        <div className="heart">
                            <FaHeart/>
                        </div>
                    </div>
                    <ItemCount className='card-item-counter' stockQty={stock} itemAdded={itemAdded} setItemAdded={setItemAdded} itemId={id} onAdd={onAdd}/> 
                </div>
            </div>
        </div>
    )
};

export default Item;