import React from 'react';
import './About.css';
import banner from '../../img/banner/7.jpg';
import { useHistory } from 'react-router-dom';

const About = () => {
    const history = useHistory();
    const handleClick = () => {
        history.push(`/services`);
    }
    return (
        <>
            <div>
                <h1 className='mt-4'><u>About Us</u></h1>
            </div>
            <div className="d-flex justify-content-center m-5">
                <div className="text-start mx-3">
                    <h2 className='text-info'>Dentistry is the science and art of preventing and controlling the dental disease.</h2>
                    <br /><br />
                    <p>At Spten Dental Care, we do things differently compared to your average dentist. From the luxurious and comfortable waiting room to the freshly brewing tea and coffee station, the bright and airy treatment rooms, we provide an impeccable service that is the best.</p>
                    <p>From the moment you walk in, our friendly and accommodating staff will serve you, making you feel comfortable and answering all your questions.</p>
                    <button onClick={handleClick} type="button" className="btn btn-primary">Learn More ...</button>
                </div>
                <div>
                    <img className=" about" src={banner} alt="Img" />
                </div>
            </div>
        </>
    );
};

export default About;