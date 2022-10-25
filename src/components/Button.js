import React from 'react';
import Button from "react-bootstrap/Button";

const ButtonForm = (props) => {
    return(
        <Button
            style={props.style}
            variant={props.type === 'warning' ? 'warning' : 'secondary'}
            onClick={props.action} >
            {props.title}
        </Button>
    )  
}

export default ButtonForm;