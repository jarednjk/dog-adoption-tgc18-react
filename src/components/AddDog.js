import React, { useState } from 'react';
import { Form, Container, Row, Button, Modal, Col } from 'react-bootstrap';

export default function AddDog(props) {

    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    console.log(props.dogNameError);    

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
                            <Form.Group className="mb-4" controlId='dogName'>
                                <Form.Label>Dog's Name</Form.Label>
                                <Form.Control name="dogName" value={props.dogName} onChange={props.updateFormField} />
                                <div style={{color: 'red'}}>{props.errors.dogNameError}</div>
                            </Form.Group>

                            <Form.Group className="mb-4" controlId='breed'>
                                <Form.Label>Breed</Form.Label>
                                <Form.Control name="breed" value={props.breed} onChange={props.updateFormField} />
                                <div style={{color: 'red'}}>{props.errors.breedError}</div>
                            </Form.Group>

                            {/* <Form.Group className="mb-4" controlId='breed'>
                                <Form.Label>Breed</Form.Label>
                                <Form.Select aria-label="Default select example">
                                    <option>Select a breed</option>
                                    <option value="1">One</option>
                                    <option value="2">Two</option>
                                    <option value="3">Three</option>
                                </Form.Select>
                            </Form.Group> */}

                            <Form.Group className="mb-4">
                                <Form.Label>Gender</Form.Label>
                                {['radio'].map((type) => (
                                    <div key={`inline-${type}`}>
                                        <Form.Check
                                            inline
                                            label="Male"
                                            value="male"
                                            name="gender"
                                            checked={props.gender === 'male'}
                                            onChange={props.updateFormField}
                                            type={type}
                                            id={`inline-${type}-1`}
                                        />
                                        <Form.Check
                                            inline
                                            label="Female"
                                            value="female"
                                            name="gender"
                                            checked={props.gender === 'female'}
                                            onChange={props.updateFormField}
                                            type={type}
                                            id={`inline-${type}-2`}
                                        />
                                    </div>
                                ))}
                                    <div style={{color: 'red'}}>{props.errors.genderError}</div>
                            </Form.Group>

                            <Form.Group className="mb-4" controlId='dateOfBirth'>
                                <Form.Label>Estimated Date of Birth</Form.Label>
                                <Form.Control type="date" name="dateOfBirth" value={props.dateOfBirth} onChange={props.updateFormField} />
                                <div style={{color: 'red'}}>{props.errors.dateOfBirthError}</div>
                            </Form.Group>

                            <Form.Group className="mb-4">
                                <Form.Label>Temperament</Form.Label>
                                {['checkbox'].map((type) => (
                                    <div key={`inline-${type}`} className="">
                                        <Form.Check
                                            inline
                                            label="Good-natured"
                                            value="good-natured"
                                            name="temperament"
                                            checked={props.temperament.includes('good-natured')}
                                            onChange={props.updateCheckbox}
                                            type={type}
                                            id={`inline-${type}-1`}
                                        />
                                        <Form.Check
                                            inline
                                            label="Aggressive"
                                            value="aggressive"
                                            name="temperament"
                                            checked={props.temperament.includes('aggressive')}
                                            onChange={props.updateCheckbox}
                                            type={type}
                                            id={`inline-${type}-2`}
                                        />
                                        <Form.Check
                                            inline
                                            label="Active"
                                            value="active"
                                            name="temperament"
                                            checked={props.temperament.includes('active')}
                                            onChange={props.updateCheckbox}
                                            type={type}
                                            id={`inline-${type}-3`}
                                        />
                                        <Form.Check
                                            inline
                                            label="Shy"
                                            value="shy"
                                            name="temperament"
                                            checked={props.temperament.includes('shy')}
                                            onChange={props.updateCheckbox}
                                            type={type}
                                            id={`inline-${type}-4`}
                                        />
                                        <Form.Check
                                            inline
                                            label="Playful"
                                            value="playful"
                                            name="temperament"
                                            checked={props.temperament.includes('playful')}
                                            onChange={props.updateCheckbox}
                                            type={type}
                                            id={`inline-${type}-5`}
                                        />
                                    </div>
                                ))}
                                    <div style={{color: 'red'}}>{props.errors.temperamentError}</div>
                            </Form.Group>

                            <Form.Group className="mb-4">
                                <Form.Label>Health Status</Form.Label>
                                {['checkbox'].map((type) => (
                                    <div key={`inline-${type}`} className="mb-4">
                                        <Form.Check
                                            inline
                                            label="Vaccinated"
                                            value="vaccinated"
                                            name="healthStatus"
                                            checked={props.healthStatus.includes('vaccinated')}
                                            onChange={props.updateCheckbox}
                                            type={type}
                                            id={`inline-${type}-6`}
                                        />
                                        <Form.Check
                                            inline
                                            label="Sterilized"
                                            value="sterilized"
                                            name="healthStatus"
                                            checked={props.healthStatus.includes('sterilized')}
                                            onChange={props.updateCheckbox}
                                            type={type}
                                            id={`inline-${type}-7`}
                                        />
                                        <Form.Check
                                            inline
                                            label="Microchipped"
                                            value="microchipped"
                                            name="healthStatus"
                                            checked={props.healthStatus.includes('microchipped')}
                                            onChange={props.updateCheckbox}
                                            type={type}
                                            id={`inline-${type}-8`}
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
                                            name="familyStatus"
                                            checked={props.familyStatus.includes('hdbApproved')}
                                            onChange={props.updateCheckbox}
                                            type={type}
                                            id={`inline-${type}-9`}
                                        />
                                        <Form.Check
                                            inline
                                            label="Good with kids"
                                            value="goodWithKids"
                                            name="familyStatus"
                                            checked={props.familyStatus.includes('goodWithKids')}
                                            onChange={props.updateCheckbox}
                                            type={type}
                                            id={`inline-${type}-10`}
                                        />
                                        <Form.Check
                                            inline
                                            label="Good with other dogs"
                                            value="goodWithOtherDogs"
                                            name="familyStatus"
                                            checked={props.familyStatus.includes('goodWithOtherDogs')}
                                            onChange={props.updateCheckbox}
                                            type={type}
                                            id={`inline-${type}-11`}
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
                                            value='true'
                                            name="hypoallergenic"
                                            checked={props.hypoallergenic === true}
                                            onChange={props.updateBooleanFormField}
                                            type={type}
                                            id={`inline-${type}-3`}
                                        />
                                        <Form.Check
                                            inline
                                            label="No"
                                            value='false'
                                            name="hypoallergenic"
                                            checked={props.hypoallergenic === false}
                                            onChange={props.updateBooleanFormField}
                                            type={type}
                                            id={`inline-${type}-4`}
                                        />
                                    </div>
                                ))}
                                    <div style={{color: 'red'}}>{props.errors.hypoallergenicError}</div>
                            </Form.Group>

                            <Form.Group className="mb-4">
                                <Form.Label>Toilet Trained</Form.Label>
                                {['radio'].map((type) => (
                                    <div key={`inline-${type}`} className="mb-3">
                                        <Form.Check
                                            inline
                                            label="Yes"
                                            value="true"
                                            name="toiletTrained"
                                            checked={props.toiletTrained === true}
                                            onChange={props.updateBooleanFormField}
                                            type={type}
                                            id={`inline-${type}-5`}
                                        />
                                        <Form.Check
                                            inline
                                            label="No"
                                            value="false"
                                            name="toiletTrained"
                                            checked={props.toiletTrained === false}
                                            onChange={props.updateBooleanFormField}
                                            type={type}
                                            id={`inline-${type}-6`}
                                        />
                                    </div>
                                ))}
                                    <div style={{color: 'red'}}>{props.errors.toiletTrainedError}</div>
                            </Form.Group>

                            <Form.Group className="mb-4" controlId="description">
                                <Form.Label>Description</Form.Label>
                                <Form.Control placeholder="Write a short description on the dog" as="textarea" rows={3} name="description" value={props.description} onChange={props.updateFormField} />
                                <div style={{color: 'red'}}>{props.errors.descriptionError}</div>
                            </Form.Group>

                            <Form.Group className="mb-5" controlId="pictureUrl">
                                <Form.Label>Picture</Form.Label>
                                <Form.Control placeholder="Upload a picture of the dog in URL format" name="pictureUrl" value={props.pictureUrl} onChange={props.updateFormField} />
                                <div style={{color: 'red'}}>{props.errors.pictureUrlError}</div>
                            </Form.Group>

                            <h4 className="mb-4 text-decoration-underline">Caretaker Details:</h4>
                            <Form.Group className="mb-4" controlId="ownerName">
                                <Form.Label>Your Name</Form.Label>
                                <Form.Control placeholder="Name of individual or organization" name="ownerName" value={props.ownerName} onChange={props.updateFormField} />
                                <div style={{color: 'red'}}>{props.errors.ownerNameError}</div>
                            </Form.Group>

                            <Form.Group className="mb-4" controlId="email">
                                <Form.Label>Email</Form.Label>
                                <Form.Control type="email" placeholder="name@example.com" name="email" value={props.email} onChange={props.updateFormField} />
                                <div style={{color: 'red'}}>{props.errors.emailError}</div>
                            </Form.Group>

                            <Button onClick={handleShow} className="float-end" variant="info">Cancel</Button>{' '}
                            <Button onClick={props.handleSubmit} className="float-end mx-2" variant="warning">Add</Button>{' '}

                            <Modal
                                show={show}
                                onHide={handleClose}
                            >
                                <Modal.Header closeButton>
                                    <Modal.Title>Confirm Discard Changes</Modal.Title>
                                </Modal.Header>
                                <Modal.Body>
                                    <p>You've made changes that haven't been published yet</p>
                                    <p>If you discard changes, your unpublished changes will be deleted.</p>
                                    <p>You can't undo this action.</p>
                                </Modal.Body>
                                <Modal.Footer>
                                    <Button onClick={() => {props.setActive('browse')}} variant="danger">
                                        Discard Changes
                                    </Button>
                                    <Button onClick={handleClose} variant="info">Continue Editing</Button>
                                </Modal.Footer>
                            </Modal>


                        </Form>
                    </Col>
                    <Col lg={2} xl={3}></Col>

                </Row>

            </Container>
        </React.Fragment>
    )
}