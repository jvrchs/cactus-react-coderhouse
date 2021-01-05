import React, {useState} from 'react'
import './ProductImageGallery.scss'

const ProductImageGallery = ({alt, imageArr}) => {

    const [selectedImg, setSelectedImg] = useState(imageArr[1]);

    
    return (
        <div className="product-gallery-wrapper">
            <div className="selected-image">
                <img src={`/media/img/products/${selectedImg}`} />
            </div>
            <div className="product-gallery">
                {imageArr.map((img, index)=> {
                    return(
                        index === 0 ?
                        null
                        :
                        <img 
                            src={`/media/img/products/${img}`} 
                            alt={alt} 
                            key={index} 
                            onMouseEnter={() => {
                                setSelectedImg(imageArr[index])
                            }}
                        />
                    )
                })}
            </div>
        </div>
    )
}

export default ProductImageGallery
