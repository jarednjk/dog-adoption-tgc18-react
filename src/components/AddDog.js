import React from 'react';
import { Form, Container, Row, Button, Card, Col } from 'react-bootstrap';

export default function AddDog(props) {
    return (
        <React.Fragment>
            <Container className="p-5">


                <Row>
                    <Col lg={2} xl={3}></Col>
                    <Col>
                        <h2 className="text-center">Put a Dog Up for Adoption</h2>
                        <p className="text-center mb-5">Listing your dogs on our website reaches a bigger target audience and helps them find a FUR-ever home!</p>
                        <Form>
                            <h4 className="mb-4 text-decoration-underline">Dog Details:</h4>
                            <Form.Group className="mb-4" controlId="formGroupDogName">
                                <Form.Label>Dog's Name</Form.Label>
                                <Form.Control name="newDogName" value={props.newDogName} onChange={props.updateFormField} />
                            </Form.Group>

                            <Form.Group className="mb-4" controlId="formGroupBreed">
                                <Form.Label>Breed</Form.Label>
                                <Form.Select aria-label="Default select example">
                                    <option>Select a breed</option>
                                    <option value="1">One</option>
                                    <option value="2">Two</option>
                                    <option value="3">Three</option>
                                </Form.Select>
                            </Form.Group>

                            <Form.Group className="mb-4">
                                <Form.Label>Gender</Form.Label>
                                {['radio'].map((type) => (
                                    <div key={`inline-${type}`} className="mb-3">
                                        <Form.Check
                                            inline
                                            label="Male"
                                            value="male"
                                            name="group1"
                                            type={type}
                                            id={`inline-${type}-1`}
                                        />
                                        <Form.Check
                                            inline
                                            label="Female"
                                            value="female"
                                            name="group1"
                                            type={type}
                                            id={`inline-${type}-2`}
                                        />
                                    </div>
                                ))}
                            </Form.Group>

                            <Form.Group className="mb-4" controlId="formGroupDogName">
                                <Form.Label>Estimated Date of Birth</Form.Label>
                                <Form.Control type="date" name="newDogName" value={props.newDogName} onChange={props.updateFormField} />
                            </Form.Group>

                            <Form.Group className="mb-4">
                                <Form.Label>Temperament</Form.Label>
                                {['checkbox'].map((type) => (
                                    <div key={`inline-${type}`} className="">
                                        <Form.Check
                                            inline
                                            label="Good-natured"
                                            value="good-natured"
                                            name="group1"
                                            type={type}
                                            id={`inline-${type}-1`}
                                        />
                                        <Form.Check
                                            inline
                                            label="Aggressive"
                                            value="aggressive"
                                            name="group1"
                                            type={type}
                                            id={`inline-${type}-2`}
                                        />
                                        <Form.Check
                                            inline
                                            label="Active"
                                            value="active"
                                            name="group1"
                                            type={type}
                                            id={`inline-${type}-3`}
                                        />
                                        <Form.Check
                                            inline
                                            label="Shy"
                                            value="shy"
                                            name="group1"
                                            type={type}
                                            id={`inline-${type}-4`}
                                        />
                                        <Form.Check
                                            inline
                                            label="Playful"
                                            value="playful"
                                            name="group1"
                                            type={type}
                                            id={`inline-${type}-5`}
                                        />
                                    </div>
                                ))}
                            </Form.Group>

                            <Form.Group className="mb-4">
                                <Form.Label>Health Status</Form.Label>
                                {['checkbox'].map((type) => (
                                    <div key={`inline-${type}`} className="mb-4">
                                        <Form.Check
                                            inline
                                            label="Vaccinated"
                                            value="vaccinated"
                                            name="group1"
                                            type={type}
                                            id={`inline-${type}-1`}
                                        />
                                        <Form.Check
                                            inline
                                            label="Sterilized"
                                            value="sterilized"
                                            name="group1"
                                            type={type}
                                            id={`inline-${type}-2`}
                                        />
                                        <Form.Check
                                            inline
                                            label="Microchipped"
                                            value="microchipped"
                                            name="group1"
                                            type={type}
                                            id={`inline-${type}-3`}
                                        />
                                    </div>
                                ))}
                            </Form.Group>

                            <Form.Group className="mb-4">
                                <Form.Label>Family Status</Form.Label>
                                {['checkbox'].map((type) => (
                                    <div key={`inline-${type}`} className="mb-4">
                                        <Form.Check
                                            inline
                                            label="HDB approved"
                                            value="hdbApproved"
                                            name="group1"
                                            type={type}
                                            id={`inline-${type}-1`}
                                        />
                                        <Form.Check
                                            inline
                                            label="Good with kids"
                                            value="goodWithKids"
                                            name="group1"
                                            type={type}
                                            id={`inline-${type}-2`}
                                        />
                                        <Form.Check
                                            inline
                                            label="Good with other dogs"
                                            value="goodWithOtherDogs"
                                            name="group1"
                                            type={type}
                                            id={`inline-${type}-3`}
                                        />
                                    </div>
                                ))}
                            </Form.Group>

                            <Form.Group className="mb-4">
                                <Form.Label>Hypoallergenic</Form.Label>
                                {['radio'].map((type) => (
                                    <div key={`inline-${type}`}>
                                        <Form.Check
                                            inline
                                            label="Yes"
                                            value="true"
                                            name="group1"
                                            type={type}
                                            id={`inline-${type}-1`}
                                        />
                                        <Form.Check
                                            inline
                                            label="No"
                                            value="false"
                                            name="group1"
                                            type={type}
                                            id={`inline-${type}-2`}
                                        />
                                    </div>
                                ))}
                            </Form.Group>

                            <Form.Group className="mb-4">
                                <Form.Label>Toilet Trained</Form.Label>
                                {['radio'].map((type) => (
                                    <div key={`inline-${type}`} className="mb-3">
                                        <Form.Check
                                            inline
                                            label="Yes"
                                            value="true"
                                            name="group1"
                                            type={type}
                                            id={`inline-${type}-1`}
                                        />
                                        <Form.Check
                                            inline
                                            label="No"
                                            value="false"
                                            name="group1"
                                            type={type}
                                            id={`inline-${type}-2`}
                                        />
                                    </div>
                                ))}
                            </Form.Group>

                            <Form.Group className="mb-4" controlId="exampleForm.ControlTextarea1">
                                <Form.Label>Description</Form.Label>
                                <Form.Control placeholder="Write a short description on your dog" as="textarea" rows={3} />
                            </Form.Group>

                            <h4 className="mb-4 text-decoration-underline">Caretaker Details:</h4>
                            <Form.Group className="mb-4" controlId="formGroupDogName">
                                <Form.Label>Name</Form.Label>
                                <Form.Control placeholder="Name of individual or organization" name="newOwnerName" value={props.newDogName} onChange={props.updateFormField} />
                            </Form.Group>

                            <Form.Group className="mb-4" controlId="exampleForm.ControlInput1">
                                <Form.Label>Email</Form.Label>
                                <Form.Control type="email" placeholder="name@example.com" />
                            </Form.Group>

                            <Button className="float-end" variant="info">Cancel</Button>{' '}
                            <Button className="float-end mx-2" variant="warning">Add</Button>{' '}


                        </Form>
                    </Col>
                    <Col lg={2} xl={3}></Col>

                </Row>

            </Container>
        </React.Fragment>
    )
}