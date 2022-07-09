import React from 'react';
import { Container, Row, Button, Card, Col } from 'react-bootstrap';

export default function Browse(props) {
    return (
        <React.Fragment>
            <Container>
                <h1>Dogs available for adoption</h1>
                <Row>
                        {props.data.map(dog => <React.Fragment key={dog._id}>
                            <Col xs={12} md={6} lg={4}>
                            <Card>
                                <Card.Img variant="top" src={dog.pictureUrl} />
                                <Card.Body>
                                    <Card.Title>{dog.dogName}</Card.Title>
                                    <Card.Subtitle className="mb-2 text-muted">{dog.breed}</Card.Subtitle>
                                    <Card.Text>
                                        {dog.description}
                                    </Card.Text>
                                    <Button className="float-end" variant="primary">More</Button>
                                </Card.Body>
                            </Card>
                            </Col>
                        </React.Fragment>)}
                   

                </Row>


            </Container>
        </React.Fragment>
    )
}