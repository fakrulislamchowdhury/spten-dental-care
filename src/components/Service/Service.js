import React from 'react';
import './Service.css';

const Service = (props) => {
    const { img, title, detail } = props.service; // destructuring in service components
    return (
        <div className="service">
            <img src={img} alt="" />
            <h4> {title}</h4>
            <p>{detail}</p>
            <button type="button" className="btn btn-primary">Details...</button>
        </div>
    );
};

export default Service;