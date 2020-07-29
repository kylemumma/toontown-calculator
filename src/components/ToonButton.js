import React from 'react';
import './../stylesheets/toonButton.css'

function ToonButton(props) {
    return (
        <button type="button" onClick={props.onClick} className="toon-button">
            <img src={props.url} alt={props.alt} />
        </button>
    );
}

export default ToonButton;