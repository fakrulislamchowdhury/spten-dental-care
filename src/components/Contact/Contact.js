import React from 'react';
import { Container } from 'react-bootstrap';
import './Contact.css';

const Contact = () => {
    return (
        <Container>
            <div className='py-5 map-list'>
                <iframe className='map' src="https://www.google.com/maps/embed?pb=!1m10!1m8!1m3!1d7301.976418387336!2d90.3730888!3d23.7834342!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sbd!4v1637157000659!5m2!1sen!2sbd" title="map">
                </iframe>
            </div>
            <div className='bottom'>
                <div className='d-flex align-items-center'>
                    <img src="https://i.ibb.co.com/Y3pf8p8/phone.png" width="20px" alt="" />
                    <h5 className='ps-2'>Phone: </h5>
                    <h6 className='ps-3'><small>+8801834959234</small></h6>
                </div>
                <div className='d-flex align-items-center'>
                    <img src="https://i.ibb.co.com/sFYh6kt/location.png" width="30px" alt="" />
                    <h5 className='ps-2'>Location:</h5>
                    <h6 className='ps-3'><small>House-32, Rd-5, Adabor, Dhaka-1207, BD.</small></h6>
                </div>
                <div className='d-flex align-items-center'>
                    <img src="https://i.ibb.co.com/y41r07r/gmail.png" width="30px" height="30px" alt="" />
                    <h5 className='ps-2'>Email:</h5>
                    <h6 className='ps-3'><small>info@spten.com.bd</small></h6>
                </div>
            </div >
        </Container>
    );
};

export default Contact;