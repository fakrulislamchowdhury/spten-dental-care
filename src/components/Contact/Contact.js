import React from 'react';
import './Contact.css';

const Contact = () => {
    return (
        <>
            <div className="d-flex position-relative item">
                <div className="my-5">
                    <img src="https://www.pikpng.com/pngl/b/314-3142242_call-now-contact-nbp-telecom-services-icon-clipart.png" width="30px" alt="" />
                    <h3>Call us</h3>
                    <p>Phone: 01834959234</p>
                </div>
                <div id="container">
                    <img src="https://i1.wp.com/www.gauss-friends.org/wp-content/uploads/2020/04/location-pin-connectsafely-37.png?ssl=1" width="30px" alt="" />
                    <h3>Our location</h3>
                    <p>House-32, Rd-5, Taltola, Dhaka-1206, Bangladesh.</p>
                </div>
                <hr />
                <div className="my-5">
                    <img src="http://www.databases.email/wp-content/uploads/2019/07/gmail-3.png" width="50px" alt="" />
                    <h3>Email</h3>
                    <p>info@spten.com.bd</p>
                </div>
            </div >
            <div>
                <iframe src="https://www.google.com/maps/embed?pb=!1m10!1m8!1m3!1d7301.976418387336!2d90.3730888!3d23.7834342!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sbd!4v1637157000659!5m2!1sen!2sbd" style={{ width: "1200px", height: "300px" }}>
                </iframe>
            </div>
        </>
    );
};

export default Contact;