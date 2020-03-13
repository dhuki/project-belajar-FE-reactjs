import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import './CarouselResponsive.css'

const CarouselResponsive = () => {
    return(
        <div className="carousel">
            <Carousel showThumbs={false} showStatus={false} infiniteLoop={true} autoPlay={true}>
                <div>
                    <img src={require ("../../assets/1.jpg")} alt="image1" />
                </div>
                <div>
                    <img src={require ("../../assets/1.jpg")} alt="image2" />
                </div>
                <div>
                    <img src={require ("../../assets/1.jpg")} alt="image3" />
                </div>
            </Carousel>
        </div>
    )
} 

export default CarouselResponsive;