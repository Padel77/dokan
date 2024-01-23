// components/Carousel.js
import React, { useState, useRef } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { LuTriangleRight } from 'react-icons/lu';

const Carousel = ({ images }) => {
    const [activeIndex, setActiveIndex] = useState(0);
    const sliderRef = useRef(null);

    const settings = {
        dots: false,
        infinite: true,
        speed: 1000,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,        // Enable autoplay
        autoplaySpeed: 2000,   // Set the autoplay interval in milliseconds (2 seconds in this case)
        beforeChange: (current, next) => setActiveIndex(next),
    };


    const goToSlide = (index) => {
        if (sliderRef.current) {
            sliderRef.current.slickGoTo(index);
        }
    };

    return (
        <div className="relative">
            <Slider ref={sliderRef} {...settings} className="overflow-hidden">
                {images.map((image, index) => (
                    <div key={index} className="relative block">
                        <img src={image} alt={`Slide ${index + 1}`} className="w-screen" />
                        {/*<div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white text-2xl font-bold">*/}
                        {/*    Slide {index + 1} Content*/}
                        {/*</div>*/}
                    </div>
                ))}
            </Slider>

            <div className="absolute bottom-4 sm:flex hidden left-1/2 transform -translate-x-1/2 flex gap-2">
                {images.map((_, index) => (
                    <div
                        key={index}
                        onClick={() => goToSlide(index)}
                        className={`w-4 h-4 rounded-full cursor-pointer ${
                            index === activeIndex ? 'bg-red-500' : 'bg-gray-300'
                        }`}
                    ></div>
                ))}
            </div>
        </div>
    );
};

export default Carousel;
