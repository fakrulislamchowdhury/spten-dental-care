import React, { useEffect, useState } from 'react';
import { Button, Card, Container } from 'react-bootstrap';
import { Link, useParams } from 'react-router-dom';
import './Booking.css';

const Booking = () => {
    const { serviceId } = useParams();
    const [details, setDetails] = useState([]);
    const [specificDetail, setSpecificDetail] = useState({});

    useEffect(() => {
        fetch('/fakeData.json')
            .then(res => res.json())
            .then(data => setDetails(data))
    }, []);

    useEffect(() => {
        if (details.length > 0) {
            // eslint-disable-next-line eqeqeq
            const matchData = details.find(detail => detail.id == serviceId)
            setSpecificDetail(matchData);
        }
    }, [details, serviceId, specificDetail]);

    return (
        <Container>
            <div className='shadow-lg rounded'>
                <div className='booking'>
                    <Card style={{ width: '18rem' }}>
                        <Card.Img variant="top" src={specificDetail?.img} style={{ height: "200px", width: "100%" }} />
                        <Card.Body>
                            <Card.Title>{specificDetail?.title}</Card.Title>
                            <Card.Text>
                                {specificDetail?.detail}
                            </Card.Text>
                            <Link to="/"><Button variant="primary">Go back</Button></Link>
                        </Card.Body>
                    </Card>
                </div>
            </div >
        </Container>
    );
};

export default Booking;