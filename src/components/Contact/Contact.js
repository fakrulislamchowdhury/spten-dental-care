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
                    <img src="https://i.ibb.co.com/pZhCgYJ/phone.png" width="18px" alt="" />
                    <h6 className='ps-2'>Phone: </h6>
                    <h6 className='ps-1'><small>01834-959234</small></h6>
                </div>
                <div className='d-flex align-items-center'>
                    <img className='ms-1' src="https://i.ibb.co.com/RcnP64k/location.png" width="16px" alt="" />
                    <h6 className='ps-2'>Location:</h6>
                    <h6 className='ps-1'><small>House-32, Rd-5, Adabor, Dhaka-1207, BD.</small></h6>
                </div>
                <div className='d-flex align-items-center'>
                    <img src="https://i.ibb.co.com/y41r07r/gmail.png" width="20px" height="20px" alt="" />
                    <h6 className='ps-2'>Email:</h6>
                    <h6 className='ps-1'><small>info@spten.com.bd</small></h6>
                </div>
            </div >
        </Container>
    );
};

export default Contact;