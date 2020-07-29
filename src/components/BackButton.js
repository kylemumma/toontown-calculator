import React from 'react';
import backButton from "./../ToontownMenu/Buttons/BackButton.png";
import './../stylesheets/backButton.css';
import { Row } from 'react-bootstrap';

/*
@params onClick the function to be called when the back button is pressed 
        (this should always be the changeScene function in App.js)
@params *optional* sceneNumber the scene to change to when the back button
        is pressed (default=0)
*/
function BackButton(props) {
    return (
        <Row className="mt-1 justify-content-center justify-content-sm-start">
            <button type="button" onClick={() => {
                if(props.sceneNumber) {
                    props.onClick(props.sceneNumber);
                } else {
                    props.onClick(0);
                }
            }} className="back-button">
                <img src={backButton} alt={"Back"} />
            </button>
        </Row>
    );
}

export default BackButton;