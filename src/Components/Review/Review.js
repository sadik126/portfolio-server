import React from 'react';
import "~slick-carousel/slick/slick.css";
import "~slick-carousel/slick/slick-theme.css";
import { Container, Row } from 'react-bootstrap';

const Review = () => {
    var settings = {
        autoplay: true,
        autoplaySpeed: 3000,
        dots: true,
        infinite: true,
        speed: 3000,
        slidesToShow: 1,
        vertical: true,
        verticalSwiping: true,
        slidesToScroll: 1,
        initialSlide: 0,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    initialSlide: 1
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    };
    return (
        <>
            <Container>
                <h1 className='text-center'>Customer Reviews</h1>
                <Row>


                </Row>
            </Container>

        </>
    );
};

export default Review;