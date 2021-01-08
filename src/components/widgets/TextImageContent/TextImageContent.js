import React from 'react';
import './TextImageContent.scss'

const TextImageContent = () => {
    return (
        <div className="home-body-content-container">
            <div className="home-body-content-text">
                <p><b>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Labore fuga eum voluptatem! Sunt obcaecati, nulla nesciunt deserunt cumque repellat quis pariatur recusandae cupiditate nobis placeat. Iusto nemo aut cum animi?</b></p>
            </div>
            <div className="home-body-content-img">
                <div><img src="media/img/home-content/home-content-1.png" alt="cactus"/></div>
                <div><img src="media/img/home-content/home-content-3.png" alt="cactus"/></div>
                <div><img src="media/img/home-content/home-content-2.png" alt="cactus"/></div>
            </div>
        </div>
    )
}

export default TextImageContent;
