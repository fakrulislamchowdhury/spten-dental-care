import React from 'react';
import './About.css';
import banner from '../../img/banner/7.jpg';
import { useHistory } from 'react-router-dom';
import { Container } from 'react-bootstrap';

const About = () => {
    const history = useHistory();
    const handleClick = () => {
        history.push(`/services`);
    }
    return (
        <Container>
            <h1 className='mt-4'><u>About Us</u></h1>
            <div className='row row-cols-1 row-cols-lg-2 pb-5'>
                <div className='col'>
                    <img className='img-fluid pt-5' src={banner} alt="Img" />
                </div>
                <div className='col pt-3 paragraph'>
                    <h2 className='text-info'>Dentistry is the science and art of preventing and controlling the dental disease.</h2>
                    <br /><br />
                    <p>At Spten Dental Care, we do things differently compared to your average dentist. From the luxurious and comfortable waiting room to the freshly brewing tea and coffee station, the bright and airy treatment rooms, we provide an impeccable service that is the best.</p>

                    <p>From the moment you walk in, our friendly and accommodating staff will serve you, making you feel comfortable and answering all your questions.</p>
                    <button onClick={handleClick} type="button" className="btn btn-primary">Learn More ...</button>
                </div>
            </div>
        </Container>
    );
};

export default About;