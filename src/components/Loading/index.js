import React from 'react';
import "./style.css";
import { Container } from 'react-bootstrap';

export default function Loading() {
    return (
            <Container className="spinner">
                Loading
                <div className="spinner-sector spinner-sector-one"></div>
                <div className="spinner-sector spinner-sector-two"></div>
                <div className="spinner-sector spinner-sector-three"></div>
            </Container>
    )
}