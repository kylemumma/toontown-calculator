import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import Button from './Button.js'
import button1 from "./../ToontownMenu/Buttons/Button 1.png";
import button2 from "./../ToontownMenu/Buttons/Button 2.png";
import button3 from "./../ToontownMenu/Buttons/Button 3.png";
import button4 from "./../ToontownMenu/Buttons/Button 4.png";
import button5 from "./../ToontownMenu/Buttons/Button 5.png";
import button6 from "./../ToontownMenu/Buttons/Button 6.png";

function MainScreen(props) {
    return (
        <Container>
            <Row>
                <Col lg="2"><Button imgUrl={button1}/></Col>
                <Col lg="2"><Button imgUrl={button2}/></Col>
                <Col lg="2"><Button imgUrl={button3}/></Col>
                <Col lg="2"><Button imgUrl={button4}/></Col>
                <Col lg="2"><Button imgUrl={button5}/></Col>
                <Col lg="2"><Button imgUrl={button6}/></Col>
            </Row>
        </Container>
    );
}

export default MainScreen;