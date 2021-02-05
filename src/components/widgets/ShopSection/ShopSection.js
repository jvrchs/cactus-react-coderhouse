import React from 'react';
import './ShopSection.scss';
import ItemCard from '../ItemCard/ItemCard';
import Button from '../Button/Button';
import {Link} from 'react-router-dom';

const ShopSection = ({productsData, handleAlert}) => {

    return (

        <div className="shop-section">
            <div className="section-title">
                <h2>TIENDA</h2>
            </div>
            <div className="item-card-container">
                {productsData.map(item => {
                    return(
                        <ItemCard
                        key={item.itemId}
                        id={item.itemId}
                        title={item.itemName}
                        category={item.categoryName}
                        price={item.price}
                        offer={item.offer ? item.offer[1] : null}
                        image={item.images[0]}
                        alt={item.alt}
                        stock={item.stock}
                        handleAlert={handleAlert}
                        />
                    )
                })}
            </div>
            <div className="shop-section-button">  
                <Link to="/tienda">
                    <Button buttonSize="btn--large" buttonStyle="btn--primary">
                        Ver todo
                    </Button>
                </Link>
            </div>
        </div> 
        
    )
}

export default ShopSection;
