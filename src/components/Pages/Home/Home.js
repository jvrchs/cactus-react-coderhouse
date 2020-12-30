import React from 'react'
import ItemListContainer from '../ItemListContainer/ItemListContainer'
import Carousel from './Carousel/Carousel'
import carouselData from './Carousel/carouselData'
import TextImageContent from './TextImageContent/TextImageContent'

const Home = () => {
    return (
        <>
            <Carousel slides={carouselData}/>  
            <TextImageContent/>
            <ItemListContainer/>
        </>
    )
}

export default Home
