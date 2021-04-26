import React from 'react'
import './GalleryImgCard.css'


function GalleryImgCard(props) {
    return (

        <div className="ImgCardSection">
        
            <div className="image-shadow"></div>
            <div className="image-shadow"></div>
            <div className="image-shadow"></div>
            <div className="image-shadow"></div>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <img src={props.imgUrl} alt="Img" className="gallery-image" />
        
        </div>
    )
}

export default GalleryImgCard
