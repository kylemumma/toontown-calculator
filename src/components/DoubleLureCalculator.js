import React from 'react';
import './../stylesheets/main.css';
import { Container, Row, Col } from 'react-bootstrap';
import BackButton from './BackButton.js'

function DoubleLureCalculator(props) {
    return (
        <Container fluid>
            <BackButton onClick={props.onClick} />

            <Container>
                <Row className="justify-content-center">
                    <Col className="text-center">
                        <h1>Double Lure Calculator</h1>
                    </Col>
                </Row>
            </Container>
        </Container>
    );
}

export default DoubleLureCalculator;