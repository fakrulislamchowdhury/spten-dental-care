import React, { useEffect, useState } from 'react';
import './Services.css';
import Service from '../Service/Service';


const Services = () => {
    const [services, setServices] = useState([]);

    useEffect(() => {
        fetch('./FakeData.JSON')
            .then(res => res.json())
            .then(data => setServices(data))
    }, [])

    return (
        <div>
            <h1>Our All Doctors Here</h1>
            <div className="services-container">
                {
                    services.map(service => <Service key={service.id} service={service} ></Service>)
                }
            </div>
        </div>
    );
};

export default Services;