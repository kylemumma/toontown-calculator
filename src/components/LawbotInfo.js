import React from 'react';
import './../stylesheets/main.css';
import { Container, Row, Col } from 'react-bootstrap';
import BackButton from './BackButton.js'

function LawbotInfo(props) {
    return (
        <Container fluid>
            <BackButton onClick={props.onClick} sceneNumber={2} />

            <Container>
                <Row className="justify-content-center">
                    <Col className="text-center">
                        <h1>LawbotInfo</h1>
                    </Col>
                </Row>
            </Container>
        </Container>
    );
}

export default LawbotInfo;