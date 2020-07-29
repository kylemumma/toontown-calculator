import React from 'react';
import backButton from "./../ToontownMenu/Buttons/BackButton.png";
import './../stylesheets/backButton.css';
import { Row } from 'react-bootstrap';

function BackButton(props) {
    return (
        <Row className="mt-1 justify-content-center justify-content-sm-start">
            <button type="button" onClick={() => {
                props.onClick(0);
            }} className="back-button">
                <img src={backButton} alt={"Back"} />
            </button>
        </Row>
    );
}

export default BackButton;