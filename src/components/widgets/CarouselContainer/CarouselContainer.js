import React, {useState, useEffect} from 'react';
import carouselData from '../../data/carouselData';
import './Carousel.scss';
import Carousel from './Carousel';
import Loader from '../Loader/Loader';


const CarouselContainer = () => {

    const [slidesData, setSlidesData] = useState([]);

    const [loader, setLoader] = useState(true);

    useEffect(() => {
        const getSlides = new Promise((resolve, reject) => {
            resolve(carouselData);
            });
            getSlides.then((slidesArr) => {
                setSlidesData(slidesArr)
                setLoader(false);
        });
    }, []);

    return(
        <>
            {
                !loader ?
                <Carousel slides={slidesData} />
                :
                <Loader/>
            }
        </>
    )
}

export default CarouselContainer;