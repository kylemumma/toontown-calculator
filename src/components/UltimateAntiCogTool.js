import React from 'react';
import './../stylesheets/main.css';
import { Container, Row, Col } from 'react-bootstrap';
import BackButton from './BackButton.js'

function UltimateAntiCogTool(props) {
    return (
        <Container fluid>
            <BackButton onClick={props.onClick} />

            <Container>
                <Row className="justify-content-center">
                    <Col className="text-center">
                        <h1>Ultimate Anti-Cog Tool</h1>
                    </Col>
                </Row>
            </Container>
        </Container>
    );
}

export default UltimateAntiCogTool;