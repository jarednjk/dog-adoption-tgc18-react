import React from 'react';
import {Container, Nav, Navbar} from 'react-bootstrap';

export default function Navigationbar(props) {

    return (
        <React.Fragment>
            {/* <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <div className="container-fluid">
                    <a className="navbar-brand" href="#">Navbar</a>
                    <button className="navbar-toggler" onClick={ () => {props.toggleMenu()}} type="button" dataBsToggle="collapse" dataBsTarget="#navbarNav" ariaControls="navbarNav" ariaExpanded="false" ariaLabel="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav">
                            <li className="nav-item">
                                <a className="nav-link active" ariaCurrent="page">Browse</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link">Add Dog</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link">Manage</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link">Adoption Process</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav> */}
            <Navbar bg="info" variant="light" expand="lg">
                <Container>
                    <Nav.Link onClick={()=>{
                        props.setActive('home')
                    }}><img src={require('../img/adogpt.png')} style={{height: '30px'}}/></Nav.Link>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="ms-auto">
                            <Nav.Link onClick={ ()=>{
                                props.setActive('browse')
                            } } >Browse</Nav.Link>
                            <Nav.Link>Add Dog</Nav.Link>
                            <Nav.Link>Manage</Nav.Link>
                            <Nav.Link>Adoption Process</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
            {/* <ul>
                <li><a onClick={()=>{
                    props.setActive('home')
                }}>Home</a></li>
                <li><a onClick={()=>{
                    props.setActive('browse')
                }} >Browse</a></li>
            </ul> */}
        </React.Fragment>
    )
}