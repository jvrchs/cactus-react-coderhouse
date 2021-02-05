import React, { useState } from 'react'
import AlertMessage from '../../widgets/AlertMessage/AlertMessage'
import CarouselContainer from '../../widgets/CarouselContainer/CarouselContainer'
import ShopSectionContainer from '../../widgets/ShopSection/ShopSectionContainer'
import TextImageContent from '../../widgets/TextImageContent/TextImageContent'
import './Home.scss'

const Home = () => {

    const [showAlert, setShowAlert] = useState(false);

    const handleAlert = () => {
        setShowAlert(true);
        setTimeout(() => setShowAlert(false), 5000);
    }

    return (
        <>   
        {!showAlert ? null : <AlertMessage message='No hay más stock de este ítem'/>}
        <CarouselContainer/>
        <section className="home-section section-box">
            <div className="home-container section-container-box">
                <TextImageContent/>
                <ShopSectionContainer handleAlert={handleAlert}/>
            </div>
        </section>
        </>
    )
}

export default Home;
