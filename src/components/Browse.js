import React from 'react';
import { Container, Row, Button, Card, Col } from 'react-bootstrap';

export default function Browse(props) {
    return (
        <React.Fragment>
            <Container>
                <h2 className="text-center pt-4 pb-2">Dogs Available for Adoption</h2>
                <Row>
                    <Col md={3} lg={2}>SIDEBAR FOR SEARCH & FILTER</Col>
                    <Col>
                    <Row className="g-4 g-xl-5">
                    {props.data.map(dog => <React.Fragment key={dog._id}>
                            <Col xs={12} md={6} lg={4}>
                                <Card className="h-100 rounded-3 shadow">
                                    <Card.Img id="card-img" variant="top" src={dog.pictureUrl} style={{objectFit: "cover"}}/>
                                    <Card.Body style={{display: 'flex', flexDirection: 'column', justifyContent: 'space-between'}}>
                                        <Card.Title>{dog.dogName}</Card.Title>
                                        <Card.Subtitle className="mb-2 text-muted">{dog.breed}</Card.Subtitle>
                                        <Card.Text>
                                            {dog.description}
                                        </Card.Text>
                                        <Button style={{width: "fit-content", alignSelf: 'flex-end'}} className="float-end btn-sm" variant="warning">More >></Button>
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