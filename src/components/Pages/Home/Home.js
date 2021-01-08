import React from 'react'
import CarouselContainer from '../../widgets/CarouselContainer/CarouselContainer'
import ShopSectionContainer from '../../widgets/ShopSection/ShopSectionContainer'
import TextImageContent from '../../widgets/TextImageContent/TextImageContent'

const Home = () => {
    return (
        <>
            <CarouselContainer/>
            <section className="home-section section-box">
                <div className="home-container section-container-box">
                    <TextImageContent/>
                    <ShopSectionContainer/>
                </div>
            </section>

        </>
    )
}

export default Home
