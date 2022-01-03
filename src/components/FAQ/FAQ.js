import React from 'react';
import './FAQ.css';
import { Accordion, Container } from 'react-bootstrap';

const FAQ = () => {
    return (
        <>
            <Container>
                <h1>Frequently Asked Questions</h1>
                <div className='faq'>
                    <Accordion>
                        <Accordion.Item eventKey="0">
                            <Accordion.Header>What will happen on my first appointment?</Accordion.Header>
                            <Accordion.Body>
                                <p>Please try and arrive 15 minutes early then your scheduled appointment. It will help you in completing a medical history and past dental experience form formalities. In under any current medications going on then keep a list on hand; bringing a copy of your prescription is advisable. By arriving early, you get a chance to relax.</p>
                                <p>The dentist usually carries out a thorough dental history and examination on your first appointment. Then further diagnosis and treatment plan will be discussed based on the current situation. If you are unsure about anything, please feel free to ask questions or ask for clarification. If the advised treatment is complex and the patient needs to consider the options, he will be given a review appointment.</p>
                                <p>Unless you are in pain and urgent treatment is must then only it will be carried out on the first visit.</p>
                            </Accordion.Body>
                        </Accordion.Item>
                        <Accordion.Item eventKey="1">
                            <Accordion.Header>At what age should I start bringing my children to the dentist?</Accordion.Header>
                            <Accordion.Body>
                                <p>It is advisable to bring children above 3 months of age and upwards to visit the dentist. This provides them a chance to get acquainted to the sights and importantly the dentist. It is more relaxing for everyone if parents accompany the child.</p>
                            </Accordion.Body>
                        </Accordion.Item>
                        <Accordion.Item eventKey="2">
                            <Accordion.Header>Why would my dentist recommend I see an orthodontist?</Accordion.Header>
                            <Accordion.Body>
                                <p>Orthodontics is a stream of dentistry that deals in treating patients with improper positioning of teeth when the mouth is kept close. An orthodontist is a dental specialist concerned with preventing or correcting irregularities of teeth. Children and adults can both benefit from orthodontic treatment. Referral to an orthodontist would be given based on how your child's teeth are developing at each routine examination.</p>
                            </Accordion.Body>
                        </Accordion.Item>
                        <Accordion.Item eventKey="3">
                            <Accordion.Header>Why regular visits to a dentist are required?</Accordion.Header>
                            <Accordion.Body>
                                <p>Most of us do not see a dentist on a regular basis. Appointment is scheduled only when we have a problem. It can be termed as “crisis treatment”. While patient may feel they are saving money, it usually ends up costing much more in terms of both money and time, simply because most dental problems do not have any symptoms until they reach the advanced stages. Tooth decay is a simple example.</p>
                                <p>Your dentist can usually detect a cavity 3-4 years before any symptoms develop. It is common to see patients with a huge cavity and has never realized any pain of discomfort. This is why regular checkups are important so schedule your appointment today?</p>
                            </Accordion.Body>
                        </Accordion.Item>
                    </Accordion>
                </div>
            </Container>
        </>
    );
};

export default FAQ;