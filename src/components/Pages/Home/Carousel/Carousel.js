import React, {useState} from 'react';
import carouselData from './carouselData';
import {IoIosArrowBack, IoIosArrowForward} from 'react-icons/io';
import './Carousel.scss';
import Button from '../../../Button/Button';

const Carousel = (props) => {
    const[current, setCurrent] = useState(0);
    const length = props.slides.length;

    const nextSlide = () => {
        setCurrent(current === length - 1 ? 0 : current + 1)
    };

    const prevSlide = () => {
        setCurrent(current === 0 ? length - 1 : current - 1)
    };

    if(!Array.isArray(props.slides) || props.slides.length <= 0) {
        return null;
    }

    return (
            <section className="carousel-container">
                <div className="carousel">
                    <IoIosArrowBack className="left-arrow" onClick={prevSlide}/>
                    <IoIosArrowForward className="right-arrow" onClick={nextSlide}/>
                    {carouselData.map((slide, index) => {
                        return(
                            <div className={index === current ? 'slide active' : 'slide'} key={slide.id}>
                            {index === current && (
                                <>
                                    <img src={slide.image} alt={slide.alt} className="carousel-image"/>
                                    <div className="header-container">
                                        {slide.textFirst}
                                        {slide.textSecond}
                                        <br/>
                                        <Button buttonSize="btn--medium" buttonStyle="btn--outline">SHOP</Button>
                                    </div>
                                </>)
                            }  
                            </div>
                        )
                    })}
                </div>
            </section>
            
    )
}

export default Carousel
