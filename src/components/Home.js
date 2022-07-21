import React from 'react';
import { Container, Row, Button, Card, Col, Badge, Modal, Accordion, Form } from 'react-bootstrap';

export default function Home(props) {
    return (
        <React.Fragment>
            <div className="hero-container">
                <video src="/videos/dogvideo.mp4" autoPlay loop muted />
                <h1>Adopt A Dog</h1>
                <p>What are you waiting for?</p>
                <Button variant="outline-primary" size="lg">Browse</Button>
            </div>
            <Container>
                <Row className="g-5">
                    <Col lg={6}>
                        <div className="text-center px-5 mx-xl-5 d-flex flex-column justify-content-between">
                            <img className="align-self-center" src={require('../img/rehomeDog.png')} style={{ width: '150px' }}></img>
                            <h2>Rehome A Dog</h2>
                            <p>Did you know we’re assisting pet owners who can no longer care for their pets to find new loving homes for them? Rehome can help!</p>
                            <div>
                                <h5 className='hover-underline-animation'>Learn More ></h5>
                            </div>
                        </div>
                    </Col>
                    <Col lg={6}>
                        <div className="text-center px-5 mx-xl-5 h-100 d-flex flex-column justify-content-between">
                            <img className="align-self-center" src={require('../img/adoptionProcess.png')} style={{ width: '150px' }}></img>
                            <h2 className="text-center">How It Works</h2>
                            <p>Get the breakdown on how to use Adogpt and navigate the pet adoption process.</p>
                            <div>
                                <h5 className='hover-underline-animation'>Learn More ></h5>
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>

        </React.Fragment>
    )
}