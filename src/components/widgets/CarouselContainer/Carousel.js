import React, {useState} from 'react';
import {IoIosArrowBack, IoIosArrowForward} from 'react-icons/io';
import Button from '../Button/Button';
import {Link} from 'react-router-dom';

const Carousel = ({slides}) => {
    const [current, setCurrent] = useState(0);

    const length = slides.length;

    const nextSlide = () => {
        setCurrent(current === length - 1 ? 0 : current + 1)
    };

    const prevSlide = () => {
        setCurrent(current === 0 ? length - 1 : current - 1)
    };

    return (
        <section className="carousel-section">
            <div className="carousel-container">
                <IoIosArrowBack className="left-arrow" onClick={prevSlide}/>
                <IoIosArrowForward className="right-arrow" onClick={nextSlide}/>
                {slides.map((slide, index) => {
                    return(
                        <div className={index === current ? 'slide active' : 'slide'} key={slide.id}
                        style={{backgroundImage: `url(${slide.image})`}}>
                        {index === current && (
                            <>  
                                {window.innerWidth > 600 ? 
                                    <div className="header-container">
                                        {slide.textFirst}
                                        {slide.textSecond}
                                        <br/>
                                        
                                        <Link className="shop-btn" to='/tienda'>
                                            <Button buttonSize="btn--medium" buttonStyle="btn--outline">    
                                                TIENDA
                                            </Button>
                                        </Link>
                                    </div>
                                :
                                    <div className="header-container">
                                        {slide.textFirst}
                                        {slide.textSecond}
                                    </div>
                                }
                            </>
                        )}  
                        </div>
                    )
                })}
            </div>
        </section>
    )
}

export default Carousel
