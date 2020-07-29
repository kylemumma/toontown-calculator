import React from 'react';
import './../stylesheets/main.css';
import { Container, Row, Col } from 'react-bootstrap';

function ErrorPage(props) {
    return (
        <Container>
            <Row className="justify-content-center">
                <Col className="text-center mt-4">
                    <h1>
                        Uh oh, an error has occurred. We can't find the
                        page you're looking for.
                    </h1>
                </Col>
            </Row>
        </Container>
    );
}

export default ErrorPage;