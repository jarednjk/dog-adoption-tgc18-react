import React, { useState } from 'react';
import {Container, Nav, Navbar} from 'react-bootstrap';

export default function Navigationbar(props) {

    const [expanded, setExpanded] = useState(false);

    return (
        <React.Fragment>
            <Navbar bg="info" variant="light" expand="lg" expanded={expanded}>
                <Container>
                    <Nav.Link onClick={()=>{
                        props.setActive('home')
                    }}><img src={require('../img/adogpt.png')} style={{height: '30px'}}/></Nav.Link>
                    <Navbar.Toggle onClick={() => setExpanded(expanded ? false : "expanded")} aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="ms-auto">
                            <Nav.Link onClick={()=>{
                                props.setActive('browse')
                            }} >Browse</Nav.Link>
                            <Nav.Link onClick={()=>{
                                props.setActive('add dog')
                            }} >Add Dog</Nav.Link>
                            <Nav.Link onClick={()=>{
                                props.setActive('manage')
                            }} >Manage</Nav.Link>
                            <Nav.Link onClick={()=>{
                                props.setActive('adoptionProcess')
                            }} >Adoption Process</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </React.Fragment>
    )
}