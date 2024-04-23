import React, { useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const CardSlider = ({ children }) => {
    const [slides, setSlides] = useState([1, 2, 3, 4, 5, 6]);
    const handleClick = () => {
        setSlides(
            slides.length === 6
                ? [1, 2, 3, 4, 5, 6, 7, 8, 9]
                : [1, 2, 3, 4, 5, 6]
        );
    };
    const NextArrow = ({ onClick }) => {
        return (
            <div
                className="absolute top-1/2 hidden lg:block
         transform -translate-y-1/2 lg:-right-[80px]  cursor-pointer bg-black bg-opacity-10 p-3 rounded-full hover:bg-opacity-50"
                onClick={onClick}
            >
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-6 h-6"
                >
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="m8.25 4.5 7.5 7.5-7.5 7.5"
                    />
                </svg>
            </div>
        );
    };

    const PrevArrow = ({ onClick }) => {
        return (
            <div
                className="absolute z-10 top-1/2 hidden lg:block transform -translate-y-1/2 -left-[80px] cursor-pointer bg-black bg-opacity-10 p-3 rounded-full hover:bg-opacity-50"
                onClick={onClick}
            >
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-6 h-6"
                >
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M15.75 19.5 8.25 12l7.5-7.5"
                    />
                </svg>
            </div>
        );
    };
    var settings = {
        dots: false,
        infinite: true,
        slidesToShow: 4,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        pauseOnHover: true,
        nextArrow: <NextArrow />,
        prevArrow: <PrevArrow />,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    infinite: true,
                },
            },
            {
                breakpoint: 720,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    initialSlide: 2,
                    swipeToSlide: true,
                },
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    swipeToSlide: true,
                },
            },
        ],
    };
    return (
        <>
            <ul className="mx-auto">
                <Slider {...settings}>{children}</Slider>
            </ul>
        </>
    );
};

export default CardSlider;
