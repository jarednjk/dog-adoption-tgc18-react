import React from 'react';
import { Form, Container, Row, Accordion, Col } from 'react-bootstrap';

export default function AdoptionProcess() {
    return (
        <React.Fragment>
            <Container className="p-3 py-sm-5">
                <Row>
                    <Col lg={2} xl={3}></Col>
                    <Col>
                        <img className="w-100 rounded mb-4 add-adopt-pic" src={require('../img/adopt.jpg')}></img>
                        <h2 className="text-center">Why Adopting over Buying?</h2>
                        <p>Did you know that over 1,000 people per hour run a search right here looking to adopt a dog? Dog adoption is quickly becoming the preferred way to find a new dog with many benefits such as:<br/>
                                    <br/>1) Dog adoption fees are usually much lower than buying from a breeder. 
                                    <br/>2) You’re likely to find a dog who’s already learned a few things. 
                                    <br/>3) Adoptable dogs are often already housetrained, good with kids, and do well with other pets. 
                                    <br/>4) Lastly, don’t forget the wonderful feeling you get from saving a life!</p>
                        <h2 className="text-center mt-5">Adoption Process</h2>
                        <Accordion defaultActiveKey="0">
                            <Accordion.Item eventKey="1">
                                <Accordion.Header>Step 1: Finding a Suitable Dog</Accordion.Header>
                                <Accordion.Body>
                                    Click on 'Browse Dogs' in the navigation bar to see the dogs currently available for adoption. Over there, you can make use of the search function to filter the type of dogs depending on your needs.
                                </Accordion.Body>
                            </Accordion.Item>
                            <Accordion.Item eventKey="2">
                                <Accordion.Header>Step 2: Arranging for a Visit</Accordion.Header>
                                <Accordion.Body>
                                    After you've found a dog that you are interested in, you can contact the owner by dropping an email to arrange for a visit. The contact details of the owner can be found by clicking "More" on the card.
                                </Accordion.Body>
                            </Accordion.Item>
                            <Accordion.Item eventKey="3">
                                <Accordion.Header>Step 3: Meeting the Dog</Accordion.Header>
                                <Accordion.Body>
                                    Now that you are able to see and touch the dog close-up, evaluate whether it is suitable for you and your lifestyle. Feel free to ask the owner for any other important information required to make a sound decision.
                                </Accordion.Body>
                            </Accordion.Item>
                            <Accordion.Item eventKey="4">
                                <Accordion.Header>Step 4: Bringing Home Your New Pet</Accordion.Header>
                                <Accordion.Body>
                                    Once you are happy with the dog and both parties are agreeable, the adoption process can be finalised. The owner should pass you the dog's medical records along with other important information. You can now bring home your new pet. Enjoy!
                                </Accordion.Body>
                            </Accordion.Item>
                        </Accordion>
                    </Col>
                    <Col lg={2} xl={3}></Col>
                </Row>
            </Container>
        </React.Fragment>
    )
}