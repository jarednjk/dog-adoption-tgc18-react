import React, { useState } from 'react';
import { Container, Row, Button, Card, Col, Badge, Modal, Accordion, Form } from 'react-bootstrap';
import "bootstrap-icons/font/bootstrap-icons.css";

export default function Browse(props) {

    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <React.Fragment>
            <Container fluid className="px-5">
                <h2 className="text-center pt-4 pb-2">Dogs Available for Adoption</h2>
                <Row className="g-5">
                    {/* ACCORDION */}
                    <Col lg={3}><Accordion>
                        <Accordion.Item eventKey="0">
                            <Accordion.Header><i className="bi bi-search-heart pe-1"></i> Search</Accordion.Header>
                            <Accordion.Body>
                                <Row>
                                    <Form>
                                        <div className="d-sm-flex d-lg-block">
                                        <Form.Group className="mb-3 mdSearchSm pe-sm-5 pe-lg-0" controlId="keywordSearch">
                                            <Form.Label>Keyword Search</Form.Label>
                                            <Form.Control placeholder="Name, breed, etc" />
                                        </Form.Group>

                                        <Form.Group className="mb-3 mdSearchSm" controlId="sortAge">
                                            <Form.Label>Sort Age by</Form.Label>
                                            {['radio'].map((type) => (
                                                <div key={`inline-${type}`}>
                                                    <Form.Check
                                                        inline
                                                        label="Young > Old"
                                                        value=""
                                                        name=""
                                                    
                                                        type={type}
                                                        id={`inline-${type}-7`}
                                                    />
                                                    <Form.Check
                                                        inline
                                                        label="Old > Young"
                                                        value=""
                                                        name=""
                                                       
                                                        type={type}
                                                        id={`inline-${type}-8`}
                                                    />
                                                </div>
                                            ))}
                                        </Form.Group>
                                        </div>
                                        
                                        <div className="d-sm-flex d-lg-block">
                                        <Form.Group className="mb-4 pe-sm-5 pe-lg-0 mdSearchSm">
                                            <Form.Label>Gender</Form.Label>
                                            {['checkbox'].map((type) => (
                                                <div key={`inline-${type}`} className="mb-4">
                                                    <Form.Check
                                                        inline
                                                        label="Male"
                                                        value=""
                                                        name=""
                                                        
                                                        type={type}
                                                        id={`inline-${type}-12`}
                                                    />
                                                    <Form.Check
                                                        inline
                                                        label="Female"
                                                        value=""
                                                        name=""
                                                        
                                                      
                                                        type={type}
                                                        id={`inline-${type}-13`}
                                                    />
                                                </div>
                                            ))}
                                        </Form.Group>
                                        <Form.Group className="mb-4 mdSearchSm">
                                            <Form.Label>Hypoallergenic</Form.Label>
                                            {['checkbox'].map((type) => (
                                                <div key={`inline-${type}`} className="mb-4">
                                                    <Form.Check
                                                        inline
                                                        label="Yes"
                                                        value=""
                                                        name=""
                                                        
                                                        type={type}
                                                        id={`inline-${type}-20`}
                                                    />
                                                    <Form.Check
                                                        inline
                                                        label="No"
                                                        value=""
                                                        name=""
                                                        
                                                      
                                                        type={type}
                                                        id={`inline-${type}-21`}
                                                    />
                                                </div>
                                            ))}
                                        </Form.Group>

                                        </div>
                                        

                                        <div className="d-md-flex d-lg-block">
                                        <Form.Group className="mb-4 pe-md-5 pe-lg-0 mdSearch">
                                            <Form.Label>Health Status</Form.Label>
                                            {['checkbox'].map((type) => (
                                                <div key={`inline-${type}`} className="mb-4">
                                                    <Form.Check
                                                        inline
                                                        label="Vaccinated"
                                                        value=""
                                                        name=""
                                                        
                                                        type={type}
                                                        id={`inline-${type}-14`}
                                                    />
                                                    <Form.Check
                                                        inline
                                                        label="Sterilized"
                                                        value=""
                                                        name=""
                                                        
                                                      
                                                        type={type}
                                                        id={`inline-${type}-15`}
                                                    />
                                                    <Form.Check
                                                        inline
                                                        label="Microchipped"
                                                        value=""
                                                        name=""
                                                        
                                                      
                                                        type={type}
                                                        id={`inline-${type}-16`}
                                                    />
                                                </div>
                                            ))}
                                        </Form.Group>

                                        <Form.Group className="mb-4 mdSearch">
                                            <Form.Label>Family Status</Form.Label>
                                            {['checkbox'].map((type) => (
                                                <div key={`inline-${type}`} className="mb-4">
                                                    <Form.Check
                                                        inline
                                                        label="HDB approved"
                                                        value=""
                                                        name=""
                                                        
                                                        type={type}
                                                        id={`inline-${type}-17`}
                                                    />
                                                    <Form.Check
                                                        inline
                                                        label="Good with kids"
                                                        value=""
                                                        name=""
                                                        
                                                      
                                                        type={type}
                                                        id={`inline-${type}-18`}
                                                    />
                                                    <Form.Check
                                                        inline
                                                        label="Good with other dogs"
                                                        value=""
                                                        name=""
                                                        
                                                      
                                                        type={type}
                                                        id={`inline-${type}-19`}
                                                    />
                                                </div>
                                            ))}
                                        </Form.Group>
                                        </div>

                                        

                                        <Form.Group className="mb-4">
                                            <Form.Label>Temperament</Form.Label>
                                            {['checkbox'].map((type) => (
                                                <div key={`inline-${type}`} className="mb-4">
                                                    <Form.Check
                                                        inline
                                                        label="Good-natured"
                                                        value=""
                                                        name=""
                                                        
                                                        type={type}
                                                        id={`inline-${type}-22`}
                                                    />
                                                    <Form.Check
                                                        inline
                                                        label="Aggressive"
                                                        value=""
                                                        name=""
                                                        
                                                      
                                                        type={type}
                                                        id={`inline-${type}-23`}
                                                    />
                                                    <Form.Check
                                                        inline
                                                        label="Active"
                                                        value=""
                                                        name=""
                                                        
                                                      
                                                        type={type}
                                                        id={`inline-${type}-24`}
                                                    />
                                                     <Form.Check
                                                        inline
                                                        label="Shy"
                                                        value=""
                                                        name=""
                                                        
                                                      
                                                        type={type}
                                                        id={`inline-${type}-25`}
                                                    />
                                                     <Form.Check
                                                        inline
                                                        label="Playful"
                                                        value=""
                                                        name=""
                                                        
                                                      
                                                        type={type}
                                                        id={`inline-${type}-26`}
                                                    />
                                                </div>
                                            ))}
                                        </Form.Group>



                                    </Form>
                                </Row>
                            </Accordion.Body>
                        </Accordion.Item>
                    </Accordion>
                    </Col>

                    {/* CARDS */}
                    <Col lg={9}>
                        <Row className="g-5">
                            {props.data.map(dog => <React.Fragment key={dog._id}>
                                <Col xs={12} md={6} lg={6} xl={4}>
                                    <Card className="h-100 rounded-3 shadow">
                                        <Card.Img id="card-img" variant="top" src={dog.pictureUrl} style={{ objectFit: "cover" }} />
                                        <Card.Body style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
                                            <div>
                                                <Card.Title>{dog.dogName[0].toUpperCase() + dog.dogName.slice(1)}</Card.Title>
                                                <Card.Subtitle className="mb-2 text-muted">{dog.breed[0].toUpperCase() + dog.breed.slice(1)}</Card.Subtitle>
                                            </div>
                                            <Card.Text id="cardDescription">
                                                {dog.description[0].toUpperCase() + dog.description.slice(1)}
                                            </Card.Text>
                                            <div className="mt-auto">
                                                <div className="mb-2">
                                                    <Badge bg={dog.gender === 'male' ? "primary" : "danger"}>{dog.gender[0].toUpperCase() + dog.gender.slice(1)}</Badge>{' '}
                                                    <Badge bg={dog.hypoallergenic === true ? "success" : null}>Hypoallergenic</Badge><br />
                                                    <Badge bg={dog.familyStatus.includes('hdbApproved') ? "secondary" : null}>HDB approved</Badge>
                                                </div>
                                            </div>
                                            <Button onClick={handleShow} style={{ width: "fit-content", alignSelf: 'flex-end' }} className="float-end btn-sm" variant="warning">More >></Button>
                                        </Card.Body>
                                    </Card>
                                </Col>


                            </React.Fragment>)}
                        </Row>

                    </Col>
                </Row>



                <Modal
                    show={show}
                    onHide={handleClose}
                >
                    <Modal.Header closeButton>
                        <Modal.Title>dog.dogName</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <p>You've made changes that haven't been published yet</p>
                        <p>If you discard changes, your unpublished changes will be deleted.</p>
                        <p>You can't undo this action.</p>
                    </Modal.Body>
                    <Modal.Footer>
                        <Button onClick={() => { props.setActive('adoptionProcess') }} variant="danger">
                            Discard Changes
                        </Button>
                        <Button onClick={handleClose} variant="info">Continue Editing</Button>
                    </Modal.Footer>
                </Modal>


            </Container>
        </React.Fragment>
    )
}