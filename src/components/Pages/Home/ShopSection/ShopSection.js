import React from 'react';
import './ShopSection.scss';
import Item from '../../ItemListContainer/Item/Item';
import Button from '../../../Button/Button';
import {Link} from 'react-router-dom';

const ShopSection = ({productsData}) => {

    return (
        <>
            <section className="shop-section-container">
                <h2 className="section-title">TIENDA</h2>
                <div className="item-card-container">
                    {productsData.map((item, index) => {
                        return(
                            <Item
                            key={item.id}
                            id={item.id}
                            title={item.title}
                            category={item.category}
                            price={item.price}
                            offer={item.offer ? item.offer[1] : null}
                            image={item.images[0]}
                            alt={item.alt}
                            stock={item.stock}
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
            </section> 
        </> 
    )
}

export default ShopSection;
