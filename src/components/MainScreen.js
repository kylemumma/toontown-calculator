import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import ToonButton from './ToonButton.js'
import button1 from "./../ToontownMenu/Buttons/Button 1.png";
import button2 from "./../ToontownMenu/Buttons/Button 2.png";
import button3 from "./../ToontownMenu/Buttons/Button 3.png";
import button4 from "./../ToontownMenu/Buttons/Button 4.png";
import button5 from "./../ToontownMenu/Buttons/Button 5.png";
import button6 from "./../ToontownMenu/Buttons/Button 6.png";

function MainScreen(props) {
    return (
        <Container>
            <Row className="justify-content-center">
                <Col sm="12" md="6" lg="4" className="text-center my-4">
                    <ToonButton url={button1} alt={"Toon Damage Calculator"} onClick={() => {
                        props.onClick(1);
                    }} />
                </Col>
                <Col sm="12" md="6" lg="4" className="text-center my-4">
                    <ToonButton url={button2} alt={"Cog Facility Info"} onClick={() => {
                        props.onClick(2);
                    }} />
                </Col>
                <Col sm="12" md="6" lg="4" className="text-center my-4">
                    <ToonButton url={button3} alt={"Ultimate Anti-Cog Tool"} onClick={() => {
                        props.onClick(3);
                    }} />
                </Col>
                <Col sm="12" md="6" lg="4" className="text-center my-4">
                    <ToonButton url={button4} alt={"Toon Accuracy Calculator"} onClick={() => {
                        props.onClick(4);
                    }} />
                </Col>
                <Col sm="12" md="6" lg="4" className="text-center my-4">
                    <ToonButton url={button5} alt={"Double Lure Calculator"} onClick={() => {
                        props.onClick(5);
                    }} />
                </Col>
                <Col sm="12" md="6" lg="4" className="text-center my-4">
                    <ToonButton url={button6} alt={"Cog Damage Calculator"} onClick={() => {
                        props.onClick(6);
                    }} />
                </Col>
            </Row>
        </Container>
    );
}

export default MainScreen;