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
                <h1><u>About us</u></h1>
            </div>
            <div className="d-flex justify-content-center m-5">
                <div className="text-start mx-3">
                    <h1>Change the way you think about tutoring</h1>
                    <br /><br />
                    <p>We don't ask your child to review and memorize the same old stuff; we help them build the skills they need to really learn and understand. With Spten Learning®'s programs you'll be putting an end to the time and expense of hiring a tutor year after year—instead, you'll be giving your child the skills he or she needs to deal with today's school struggles, and helping him or her develop thinking and learning skills that will be used for this grade and for every grade.</p>
                    <button onClick={handleClick} type="button" className="btn btn-primary">View All</button>
                </div>
                <div>
                    <img className=" about" src={banner} alt="Img" />
                </div>
            </div>
        </>
    );
};

export default About;