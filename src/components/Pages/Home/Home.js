import React from 'react'
import CarouselContainer from '../../widgets/CarouselContainer/CarouselContainer'
import CategoriesSectionContainer from '../../widgets/CategoriesSection/CategoriesSectionContainer'
import ShopSectionContainer from '../../widgets/ShopSection/ShopSectionContainer'
import TextImageContent from '../../widgets/TextImageContent/TextImageContent'
import './Home.scss'

const Home = () => {
    return (
        <>
            <CarouselContainer/>
            <section className="home-section section-box">
                <div className="home-container section-container-box">
                    <TextImageContent/>
                    <CategoriesSectionContainer/>
                    <ShopSectionContainer/>
                </div>
            </section>

        </>
    )
}

export default Home
