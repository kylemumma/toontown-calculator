import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

function MainScreen(props) {
    return (
        <Container>
            <Row>
                <Col lg="2">Button1</Col>
                <Col lg="2">Button2</Col>
                <Col lg="2">Button3</Col>
                <Col lg="2">Button4</Col>
                <Col lg="2">Button5</Col>
                <Col lg="2">Button6</Col>
            </Row>
        </Container>
    );
}

export default MainScreen;