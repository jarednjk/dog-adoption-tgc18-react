import React, { useState } from 'react';
import { Container, Row, Button, Card, Col, Badge, Modal } from 'react-bootstrap';

export default function Browse(props) {

    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <React.Fragment>
            <Container>
                <h2 className="text-center pt-4 pb-2">Dogs Available for Adoption</h2>
                <Row>
                    <Col md={3} lg={2}>SIDEBAR FOR SEARCH & FILTER</Col>
                    <Col md={9} lg={10}>
                        <Row className="g-4 g-xl-5">
                            {props.data.map(dog => <React.Fragment key={dog._id}>
                                <Col xs={12} md={6} lg={4}>
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