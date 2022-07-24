import React from 'react';
import { Container, Row, Button, Card, Col, Badge, Modal, Accordion, Form } from 'react-bootstrap';
import "bootstrap-icons/font/bootstrap-icons.css";

export default function Browse(props) {

    return (
        <React.Fragment>
            <Container fluid className="px-4 px-sm-5 pb-5">
                <h2 className="text-center pt-4 pb-2">Dogs Available for Adoption</h2>
                <Row className="g-4 g-lg-5">
                    {/* ACCORDION */}
                    <Col lg={3}><Accordion>
                        <Accordion.Item eventKey="0">
                            <Accordion.Header><i className="bi bi-search-heart pe-1"></i>Search</Accordion.Header>
                            <Accordion.Body>
                                <Row>
                                    <Form>
                                        <div className="d-md-flex mb-sm-2 d-lg-block">
                                            <Form.Group className="mdSearchSm pe-md-5 pe-lg-0 mb-4" controlId="keywordSearch">
                                                <Form.Label>Keyword Search</Form.Label>
                                                <Form.Control
                                                    placeholder="Name, breed, etc"
                                                    type="text"
                                                    name="keywordSearch"
                                                    value={props.keywordSearch}
                                                    onChange={props.updateSearchFormField} />
                                            </Form.Group>

                                            <div id="ageSearch" className="mb-4 d-flex d-lg-block">
                                                <Form.Group className="ageSearch pe-3 pe-md-1 pe-lg-0" controlId="gteYearSearch">
                                                    <Form.Label>Born After Year</Form.Label>
                                                    <Form.Control
                                                        type="text"
                                                        name="gteYearSearch"
                                                        maxlength="4"
                                                        placeholder="YYYY"
                                                        value={props.gteYearSearch}
                                                        onChange={props.updateSearchFormField} />
                                                </Form.Group>
                                                <Form.Group className="ageSearch ps-md-1 ps-lg-0" controlId="lteYearSearch">
                                                    <Form.Label>Born Before Year</Form.Label>
                                                    <Form.Control
                                                        type="text"
                                                        name="lteYearSearch"
                                                        maxlength="4"
                                                        placeholder="YYYY"
                                                        value={props.lteYearSearch}
                                                        onChange={props.updateSearchFormField} />
                                                </Form.Group>
                                            </div>
                                        </div>

                                        <div className="d-sm-flex justify-content-sm-between d-lg-block mb-4 mb-sm-0">
                                            <Form.Group className="pe-3 pe-lg-0 mdSearchSm">
                                                <Form.Label>Gender</Form.Label>
                                                {['radio'].map((type) => (
                                                    <div key={`inline-${type}`} className="mb-4">
                                                        <Form.Check
                                                            inline
                                                            label="Male"
                                                            value="male"
                                                            name="genderSearch"
                                                            checked={props.genderSearch === 'male'}
                                                            onChange={props.updateGender}
                                                            type={type}
                                                            id={`inline-${type}-12`}
                                                        />
                                                        <Form.Check
                                                            inline
                                                            label="Female"
                                                            value="female"
                                                            name="genderSearch"
                                                            checked={props.genderSearch === 'female'}
                                                            onChange={props.updateGender}
                                                            type={type}
                                                            id={`inline-${type}-13`}
                                                        />
                                                        <Form.Check
                                                            inline
                                                            label="All"
                                                            value="all"
                                                            name="genderSearch"
                                                            checked={props.genderSearch === 'all'}
                                                            onChange={props.updateGender}
                                                            type={type}
                                                            id={`inline-${type}-13`}
                                                        />
                                                    </div>
                                                ))}
                                            </Form.Group>
                                            <Form.Group className="mdSearchSm">
                                                <Form.Label>Hypoallergenic</Form.Label>
                                                {['checkbox'].map((type) => (
                                                    <div key={`inline-${type}`} className="mb-4">
                                                        <Form.Check
                                                            inline
                                                            label="Yes"
                                                            // value={props.hypoallergenicSearch }
                                                            name="hypoallergenicSearch"
                                                            checked={props.hypoallergenicSearch}
                                                            onChange={props.updateHypoallergenic}
                                                            type={type}
                                                            id={`inline-${type}-20`}
                                                        />
                                                    </div>
                                                ))}
                                            </Form.Group>

                                        </div>


                                        <div className="d-md-flex d-lg-block">
                                            <Form.Group className="pe-md-5 pe-lg-0 mdSearch">
                                                <Form.Label>Health Status</Form.Label>
                                                {['checkbox'].map((type) => (
                                                    <div key={`inline-${type}`} className="mb-4">
                                                        <Form.Check
                                                            inline
                                                            label="Vaccinated"
                                                            value="vaccinated"
                                                            name="healthSearch"
                                                            checked={props.healthSearch.includes('vaccinated')}
                                                            onChange={props.updateSearchCheckbox}
                                                            type={type}
                                                            id={`inline-${type}-14`}
                                                        />
                                                        <Form.Check
                                                            inline
                                                            label="Sterilized"
                                                            value="sterilized"
                                                            name="healthSearch"
                                                            checked={props.healthSearch.includes('sterilized')}
                                                            onChange={props.updateSearchCheckbox}
                                                            type={type}
                                                            id={`inline-${type}-15`}
                                                        />
                                                        <Form.Check
                                                            inline
                                                            label="Microchipped"
                                                            value="microchipped"
                                                            name="healthSearch"
                                                            checked={props.healthSearch.includes('microchipped')}
                                                            onChange={props.updateSearchCheckbox}
                                                            type={type}
                                                            id={`inline-${type}-16`}
                                                        />
                                                    </div>
                                                ))}
                                            </Form.Group>

                                            <Form.Group className="mdSearch">
                                                <Form.Label>Family Status</Form.Label>
                                                {['checkbox'].map((type) => (
                                                    <div key={`inline-${type}`} className="mb-4">
                                                        <Form.Check
                                                            inline
                                                            label="HDB approved"
                                                            value="hdbApproved"
                                                            name="familySearch"
                                                            checked={props.familySearch.includes('hdbApproved')}
                                                            onChange={props.updateSearchCheckbox}
                                                            type={type}
                                                            id={`inline-${type}-17`}
                                                        />
                                                        <Form.Check
                                                            inline
                                                            label="Good with kids"
                                                            value="goodWithKids"
                                                            name="familySearch"
                                                            checked={props.familySearch.includes('goodWithKids')}
                                                            onChange={props.updateSearchCheckbox}
                                                            type={type}
                                                            id={`inline-${type}-18`}
                                                        />
                                                        <Form.Check
                                                            inline
                                                            label="Good with other dogs"
                                                            value="goodWithOtherDogs"
                                                            name="familySearch"
                                                            checked={props.familySearch.includes('goodWithOtherDogs')}
                                                            onChange={props.updateSearchCheckbox}
                                                            type={type}
                                                            id={`inline-${type}-19`}
                                                        />
                                                    </div>
                                                ))}
                                            </Form.Group>
                                        </div>



                                        <Form.Group>
                                            <Form.Label>Temperament</Form.Label>
                                            {['checkbox'].map((type) => (
                                                <div key={`inline-${type}`} className="mb-4">
                                                    <Form.Check
                                                        inline
                                                        label="Good-natured"
                                                        value="good-natured"
                                                        name="temperamentSearch"
                                                        checked={props.temperamentSearch.includes('good-natured')}
                                                        onChange={props.updateSearchCheckbox}
                                                        type={type}
                                                        id={`inline-${type}-22`}
                                                    />
                                                    <Form.Check
                                                        inline
                                                        label="Aggressive"
                                                        value="aggressive"
                                                        name="temperamentSearch"
                                                        checked={props.temperamentSearch.includes('aggressive')}
                                                        onChange={props.updateSearchCheckbox}
                                                        type={type}
                                                        id={`inline-${type}-23`}
                                                    />
                                                    <Form.Check
                                                        inline
                                                        label="Active"
                                                        value="active"
                                                        name="temperamentSearch"
                                                        checked={props.temperamentSearch.includes('active')}
                                                        onChange={props.updateSearchCheckbox}
                                                        type={type}
                                                        id={`inline-${type}-24`}
                                                    />
                                                    <Form.Check
                                                        inline
                                                        label="Shy"
                                                        value="shy"
                                                        name="temperamentSearch"
                                                        checked={props.temperamentSearch.includes('shy')}
                                                        onChange={props.updateSearchCheckbox}
                                                        type={type}
                                                        id={`inline-${type}-25`}
                                                    />
                                                    <Form.Check
                                                        inline
                                                        label="Playful"
                                                        value="playful"
                                                        name="temperamentSearch"
                                                        checked={props.temperamentSearch.includes('playful')}
                                                        onChange={props.updateSearchCheckbox}
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
                                    <Card className="h-100 rounded-3 shadow" id="card-animation">
                                        <Card.Img id="card-img" variant="top" src={dog.pictureUrl} />
                                        <Card.Body className="d-flex justify-content-between flex-column">
                                            <div>
                                                <div className='d-flex'>
                                                    <Card.Title>{dog.dogName[0].toUpperCase() + dog.dogName.slice(1)}</Card.Title>
                                                    <Card.Title className="ms-auto">DOB</Card.Title>
                                                </div>
                                                <div className="mb-3 text-muted d-flex justify-content-between">
                                                    <Card.Subtitle>{dog.breed[0].toUpperCase() + dog.breed.slice(1)}</Card.Subtitle>
                                                    <Card.Subtitle>{dog.dateOfBirth}</Card.Subtitle>
                                                </div>
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
                                            <Button onClick={() => { props.handleModal(dog._id) }} style={{ width: "fit-content", alignSelf: 'flex-end' }} className="float-end btn-sm" variant="warning">More ></Button>
                                        </Card.Body>

                                    </Card>
                                </Col>


                            </React.Fragment>)}

                        </Row>

                    </Col>


                </Row>
                <Modal
                    show={props.modal !== null}
                    onHide={() => { props.closeModal() }}
                    size="lg"
                    centered
                >
                    {props.data.map(dog => {
                        if (props.modal === dog._id) {
                            return (
                                <React.Fragment key={dog._id}>
                                    <Modal.Header closeButton>
                                        <Modal.Title>{dog.dogName[0].toUpperCase() + dog.dogName.slice(1)}</Modal.Title>
                                    </Modal.Header>
                                    <Modal.Body>
                                        <Container>
                                            <Row>
                                                <div className="mb-4 d-lg-flex pt-2">
                                                    <img id="modal-img" className="img-fluid rounded mb-1" variant="top" src={dog.pictureUrl} />
                                                    <p className="ps-lg-4">{dog.description[0].toUpperCase() + dog.description.slice(1)}</p>
                                                </div>
                                                <Col xs={12} lg={6}>
                                                    <h4 className="mb-2 text-decoration-underline">Dog Details</h4>
                                                    <Row className="mb-3">
                                                        <Col><strong>Breed</strong></Col>
                                                        <Col>{dog.breed[0].toUpperCase() + dog.breed.slice(1)}</Col>
                                                    </Row>
                                                    <Row className="mb-3">
                                                        <Col><strong>Gender</strong></Col>
                                                        <Col>{dog.gender[0].toUpperCase() + dog.gender.slice(1)}</Col>
                                                    </Row>
                                                    <Row className="mb-3">
                                                        <Col><strong>Date of Birth</strong></Col>
                                                        <Col>{dog.dateOfBirth.slice(0, 10)}</Col>
                                                    </Row>
                                                    <Row className="mb-3">
                                                        <Col><strong>Temperament</strong></Col>
                                                        <Col>{dog.temperament.map(t => <div>{t[0].toUpperCase() + t.slice(1)}</div>)}</Col>
                                                    </Row>
                                                    <Row className="mb-3">
                                                        <Col><strong>Family Status</strong></Col>
                                                        <Col>{dog.familyStatus.map(f => <div>{f[0].toUpperCase() + (f.slice(1).split(/(?=[A-Z])/).join(' ')).toLowerCase()}</div>)}</Col>
                                                    </Row>
                                                    <Row className="mb-3">
                                                        <Col><strong>Health Status</strong></Col>
                                                        <Col>{dog.healthStatus.map(h => <div>{h[0].toUpperCase() + h.slice(1)}</div>)}</Col>
                                                    </Row>
                                                    <Row className="mb-3">
                                                        <Col><strong>Hypoallergenic</strong></Col>
                                                        <Col>{dog.hypoallergenic ? "Yes" : "No"}</Col>
                                                    </Row>
                                                    <Row className="mb-5">
                                                        <Col><strong>Toilet Trained</strong></Col>
                                                        <Col>{dog.toiletTrained ? "Yes" : "No"}</Col>
                                                    </Row>
                                                </Col>
                                                <Col xs={12} lg={6}>
                                                    <h4 className="mb-2 text-decoration-underline">Owner Details</h4>
                                                    <Row className="mb-3">
                                                        <Col><strong>Name</strong></Col>
                                                        <Col>{dog.owner.ownerName.replace(/(^\w{1})|(\s+\w{1})/g, letter => letter.toUpperCase())}</Col>
                                                    </Row>
                                                    <Row className="mb-3">
                                                        <Col><strong>Email</strong></Col>
                                                        <Col>{dog.owner.email}</Col>
                                                    </Row>
                                                </Col>



                                            </Row>

                                        </Container>

                                    </Modal.Body>
                                    <Modal.Footer>
                                        <Button onClick={() => { props.setActive('adoptionProcess') }} variant="warning">
                                            Adoption Process
                                        </Button>
                                        <Button onClick={() => { props.updateDog(); props.setActive('updateDog') }} variant="info">Edit</Button>
                                    </Modal.Footer>
                                </React.Fragment>
                            )
                        }
                    }
                    )}
                </Modal>

            </Container>

        </React.Fragment>

    )
}