import React from 'react';
import './../stylesheets/main.css';
import { Container, Row, Col } from 'react-bootstrap';
import BackButton from './BackButton.js';
import ToonButton from './ToonButton.js';
import SellbotIcon from './../ToontownMenu/Cog Facility Menu/Buttons/SellbotIcon.png';
import CashbotIcon from './../ToontownMenu/Cog Facility Menu/Buttons/CashbotIcon.png';
import LawbotIcon from './../ToontownMenu/Cog Facility Menu/Buttons/LawbotIcon.png';
import BossbotIcon from './../ToontownMenu/Cog Facility Menu/Buttons/BossbotIcon.png';

function CogFacilityInfo(props) {
    return (
        <Container fluid>
            <BackButton onClick={props.onClick} />

            <Container>
                <Row className="justify-content-center">
                    <Col className="text-center">
                        <h1>Cog Facility Info</h1>
                    </Col>
                </Row>
                <Row className="justify-content-center">
                    <Col xs='12' md='6' lg='3' className="text-center">
                        <ToonButton url={SellbotIcon} alt="Sellbot" onClick={props.onClick}/>
                    </Col>
                    <Col xs='12' md='6' lg='3' className="text-center">
                        <ToonButton url={CashbotIcon} alt="Cashbot" onClick={props.onClick}/>
                    </Col>
                    <Col xs='12' md='6' lg='3' className="text-center">
                        <ToonButton url={LawbotIcon} alt="Lawbot" onClick={props.onClick}/>
                    </Col>
                    <Col xs='12' md='6' lg='3' className="text-center">
                        <ToonButton url={BossbotIcon} alt="Bossbot" onClick={props.onClick}/>
                    </Col>
                </Row>
            </Container>
        </Container>
    );
}

export default CogFacilityInfo;