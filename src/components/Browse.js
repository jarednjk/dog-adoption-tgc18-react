import React from 'react';
import { Container, Row, Button, Card, Col } from 'react-bootstrap';

export default function Browse(props) {
    return (
        <React.Fragment>
            <Container>
                <h1>Dogs available for adoption</h1>
                <Row>
                    <Col md={3} lg={2}>SIDEBAR FOR SEARCH & FILTER</Col>
                    <Col>
                    <Row className="g-4 g-xl-5">
                    {props.data.map(dog => <React.Fragment key={dog._id}>
                            <Col xs={12} md={6} lg={4}>
                                <Card className="h-100 rounded-3 shadow">
                                    <Card.Img variant="top" src={dog.pictureUrl} />
                                    <Card.Body>
                                        <Card.Title>{dog.dogName}</Card.Title>
                                        <Card.Subtitle className="mb-2 text-muted">{dog.breed}</Card.Subtitle>
                                        <Card.Text>
                                            {dog.description}
                                        </Card.Text>
                                        <Button className="float-end btn-sm" variant="warning">More >></Button>
                                    </Card.Body>
                                </Card>
                            </Col>
                        </React.Fragment>)}
                    </Row>
                        
                    </Col>
                </Row>


            </Container>
        </React.Fragment>
    )
}