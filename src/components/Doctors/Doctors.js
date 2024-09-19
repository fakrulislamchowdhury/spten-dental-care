import React, { useEffect, useState } from 'react';
import { Container } from 'react-bootstrap';
import Doctor from '../Doctor/Doctor';
import './Doctors.css';

const Doctors = () => {
    const [doctors, setDoctors] = useState([]);

    useEffect(() => {
        fetch('/doctors.json')
            .then(res => res.json())
            .then(data => setDoctors(data))
    }, []);

    return (
        <Container>
            <h1 className='text-primary mt-5 doctor-list'>Our Dental Specialist Doctors</h1>
            <div className="doctor-container">
                {
                    doctors.map(doctor => <Doctor key={doctor.id} doctor={doctor}></Doctor>)
                }
            </div>
        </Container>
    );
};

export default Doctors;