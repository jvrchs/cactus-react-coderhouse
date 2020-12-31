import React from 'react';
import "./Item.scss";
import ItemCount from '../../../ItemCount/ItemCount';
import {Link} from 'react-router-dom';

const Item = ({
    id,
    title,
    category,
    description,
    price,
    image,
    alt
}) => {
    return (
        <div className="item-card">
            <div className="wrapper">
                <div className={`color-bg`}></div>
                <div className="card-img" style={{"backgroundImage": `url(../media/img/products/${image})`}}></div>
                <div className="card-info">
                    <h3><Link to={`/item/${id}`}>{title}</Link></h3>
                    <p className="category">{category}</p>
                    <div className="action">
                        <div className="price-group">
                            <p className="price">{price}</p>
                        </div>
                        <div className="heart">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64">
                                <path d="M47 5c-6.5 0-12.9 4.2-15 10-2.1-5.8-8.5-10-15-10A15 15 0 0 0 2 20c0 13 11 26 30 39 19-13 30-26 30-39A15 15 0 0 0 47 5z">
                                </path>
                            </svg>
                        </div>
                    </div>
                    <ItemCount initial={1} stock={20}/>
                </div>
            </div>
        </div>
    )
};

export default Item;