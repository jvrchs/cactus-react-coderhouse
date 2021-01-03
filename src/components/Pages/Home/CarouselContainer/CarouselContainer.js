import React, {useState, useEffect} from 'react';
import carouselData from './carouselData';
import './Carousel.scss';
import Carousel from './Carousel';


const CarouselContainer = () => {
    const [slidesData, setSlidesData] = useState([]);

    useEffect(() => {
        const getSlides = new Promise((resolve, reject) => {
            resolve(carouselData);
            });
            getSlides.then((slidesArr) => {
                setSlidesData(slidesArr)
        });
    }, []);

    return(
        <>
            {
                slidesData.length > 0 ?
                <Carousel slides={slidesData} />
                :
                <p>Cargando...</p>
            }
        </>
    )
}

export default CarouselContainer;