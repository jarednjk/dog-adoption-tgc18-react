import React from 'react';
import { Container, Row, Button, Col } from 'react-bootstrap';

export default function Home(props) {
    return (
        <React.Fragment>
            <div>
                <div className="mb-4">
                    <div id="home-banner">
                        <img src={require('../img/home.jpg')}></img>
                        <div id="cta">
                            <h1 className="display-4">Find Your New Best Friend</h1>
                            <h5 className="mb-3 px-2">Search adoptable dogs from shelters, rescues & private owners.</h5>
                            <Button onClick={() => {
                                props.setActive('browse')
                            }} variant="warning" size="lg">Browse Dogs<i className="bi bi-search-heart ps-2"></i></Button>
                        </div>
                    </div>
                </div>
                <Container>
                    <Row className="g-5">
                        <Col lg={6}>
                            <div className="text-center px-5 mx-xl-5 d-flex flex-column justify-content-between">
                                <img className="align-self-center" src={require('../img/rehomeDog.png')} style={{ width: '80px' }}></img>
                                <h2>Rehome A Dog</h2>
                                <p>Did you know we’re assisting dog owners who can no longer care for their dogs to find new loving homes for them? Rehome can help!</p>
                                <div>
                                    <Button onClick={() => { props.setActive('add dog') }} variant="info">Learn More ></Button>
                                    {/* <h5 onClick={()=>{props.setActive('add dog')}} className='hover-underline-animation'>Learn More ></h5> */}
                                </div>
                            </div>
                        </Col>
                        <Col lg={6}>
                            <div className="text-center px-5 mx-xl-5 d-flex flex-column justify-content-between mb-5 mb-lg-0">
                                <img className="align-self-center" src={require('../img/adoptionProcess.png')} style={{ width: '80px' }}></img>
                                <h2>Adoption Process</h2>
                                <p>Get the breakdown on how to use Adogpt and navigate the dog adoption process. Learn why you should consider adopting over buying!</p>
                                <div>
                                    <Button onClick={() => { props.setActive('adoptionProcess') }} variant="info">Learn More ></Button>
                                    {/* <h5 onClick={()=>{props.setActive('adoptionProcess')}} className='hover-underline-animation mb-5 mb-lg-0'>Learn More ></h5> */}
                                </div>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </div>
            {/* <div className="">
            <img className="hero" style={{objectFit: 'cover'}} src={require('../img/home.jpg')}></img>                
                <h1>Adopt A Dog</h1>
                <p>What are you waiting for?</p>
                <Button variant="outline-primary" size="lg">Browse</Button>
            </div> */}


        </React.Fragment>
    )
}