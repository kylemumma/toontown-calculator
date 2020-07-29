import React from 'react';
import './../stylesheets/toonButton.css'

let onClick = () => {

}

function ToonButton(props) {
    return (
        <button type="button" onClick={props.onClick}>
            <img src={props.url} alt={props.alt} />
        </button>
    );
}

export default ToonButton;