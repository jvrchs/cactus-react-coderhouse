import React, { useRef, useState } from 'react'
import Button from '../Button/Button';
import './CategoriesSection.scss'

const CategoriesSection = ({categoriesData}) => {

    return (
        <div className="categories-section">
            <div className="section-title">
                <span></span>
                <h2>CATEGORÍAS</h2>
                <span></span>
            </div>
            <div className="categories-grid">
                {categoriesData.map((category, index) => {
                    return(
                        <div className={`cat${index+1}`} key={index}>
                            <div className="category-hover-wrapper">
                                <div className="category-hover"></div>
                            </div>
                            <img src={`/media/img/categories/${category.image}`} alt={category.title}/>
                            <div className="category-info">
                                <p><b>{category.title}</b></p>
                                <div className='category-btn-wrapper'>
                                    <Button buttonSize="btn--medium" buttonStyle="btn--outline">    
                                        VER PRODUCTOS
                                    </Button>
                                </div>
                            </div>
                        </div>
                    ) 
                })}
            </div>
        </div>
    )
}

export default CategoriesSection
