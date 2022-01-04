import React from 'react';
import { Card, Container } from 'react-bootstrap';
import './Doctor.css';

const Doctor = (props) => {
    const { img, title, detail } = props.doctor; //
    return (
        <Container>
            <div className='doctor px-4'>
                <Card style={{ width: '18rem' }}>
                    <Card.Img variant="top" src={img} />
                    <Card.Body>
                        <Card.Title>{title}</Card.Title>
                        <Card.Text>
                            {detail}
                        </Card.Text>
                    </Card.Body>
                </Card>
            </div>
        </Container>
    );
};

export default Doctor;