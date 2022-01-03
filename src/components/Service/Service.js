import React from 'react';
import { Link } from 'react-router-dom';
import './Service.css';

const Service = (props) => {
    const { id, img, title, detail } = props.service;   // destructuring in service components
    return (
        <div>
            <div className="service pb-3">
                <img src={img} alt="" />
                <h4> {title}</h4>
                <p>{detail}</p>
                <Link to={`/booking/${id}`}><button type="button" className="btn btn-primary">Details...</button></Link>
            </div>
        </div>
    );
};

export default Service;