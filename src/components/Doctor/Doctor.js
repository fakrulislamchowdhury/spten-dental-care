import React from 'react';
import './Doctor.css';

const Doctor = (props) => {
    const { img, title, detail } = props.doctor; //
    return (
        <div className="doctor pb-3">
            <img src={img} alt="" />
            <h4> {title}</h4>
            <p>{detail}</p>
        </div>
    );
};

export default Doctor;