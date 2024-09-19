import React from 'react';
import './Banner.css';
import { Carousel, Container } from 'react-bootstrap';
// import img1 from '../../../img/banner/Banner-1.jpg';
// import img2 from '../../../img/banner/Banner-2.jpg';
// import img3 from '../../../img/banner/Banner-3.jpg';

const Banner = () => {
    return (
        <Container>
            <Carousel fade className='banner-container pb-5 pt-2 banner-list'>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={"https://i.ibb.co.com/VH8vKNd/Banner-1.jpg"}
                        alt="First slide"
                    />
                    <Carousel.Caption className='text-dark'>
                        <h2>WE CREATE PERFECT SMILE FOR YOU</h2>
                        <p>We are prominent service provider on whom you can trust for all kind of dental treatments without any hassle.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={"https://i.ibb.co.com/FsH7LL0/Banner-2.jpg"}
                        alt="Second slide"
                    />
                    <Carousel.Caption className='text-dark'>
                        <h2>ONE-STOP SOLUTION COSMETIC DENTISTRY</h2>
                        <p>Cosmetic dentistry does take under consideration the
                            treatment of oral problems and also the...</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={"https://i.ibb.co.com/ykPVy4w/Banner-3.jpg"}
                        alt="Third slide"
                    />
                    <Carousel.Caption className='text-dark'>
                        <h2>DENTAL EMERGENCY SERVICES YOU CAN TRUST & RELAY ON</h2>
                        <p>Anybody is at risk of breaking the tooth or got injury to her
                            or his mouth while eating, playing, while at...</p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        </Container>
    );
};

export default Banner;