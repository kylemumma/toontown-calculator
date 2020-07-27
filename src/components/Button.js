import React from 'react';

function Button(props) {
    return (
        <div id="button">
            <img src={props.imgUrl} alt="button"/>
        </div>
    );
}

export default Button;