import React, {useState} from 'react';
import "./ItemCard.scss";
import ItemCount from '../ItemCount/ItemCount';
import {Link} from 'react-router-dom';
import {MdLocalOffer} from 'react-icons/md';
import {FaHeart} from 'react-icons/fa';
import { RiCactusLine } from "react-icons/ri";

const Item = ({
    id,
    title,
    category,
    price,
    offer,
    image,
    stock
}) => {

    const [qty, setQty] = useState(0);
    const [itemAdded, setItemAdded] = useState(1);

    const onAdd = e => {
        setQty(itemAdded)
    }
    
    return (
        <div className="item-card">
            <div className="wrapper">
                <div className={`color-bg`}></div>
                <div className="card-img" style={{"backgroundImage": `url(../media/img/products/${image})`}}></div>
                <div className={offer != null ? 'offer-icon' : 'no-offer'}>
                    <MdLocalOffer/>
                    <RiCactusLine className='cactus-offer'/>
                </div>
                <div className="card-info">
                    <h3><Link to={`/item/${id}`}>{title}</Link></h3>
                    <p className="category">{category}</p>
                    <div className="action">
                        <div className="price-group">
                            <p className={offer != null ? 'price old-price' : 'price' }>{new Intl.NumberFormat("es-CL", {style: "currency", currency: "CLP"}).format(price)}</p>
                            <p className={offer != null ? 'price new-price' : 'no-offer' }>{new Intl.NumberFormat("es-CL", {style: "currency", currency: "CLP"}).format(offer)}</p>
                        </div>
                        <div className="heart">
                            <FaHeart/>
                        </div>
                    </div>
                    <ItemCount className='card-item-counter' stockQty={stock} onAdd={onAdd} itemAdded={itemAdded} setItemAdded={setItemAdded}/> 
                </div>
            </div>
        </div>
    )
};

export default Item;