import React from 'react'
import ItemListContainer from '../ItemListContainer/ItemListContainer'
import CarouselContainer from './CarouselContainer/CarouselContainer'
import TextImageContent from './TextImageContent/TextImageContent'

const Home = () => {
    return (
        <>
            <CarouselContainer/>
            <TextImageContent/>
            <ItemListContainer/>
        </>
    )
}

export default Home
