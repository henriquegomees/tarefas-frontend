import React from 'react'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import './button.css'

function CustomButton(props){
    return(
        <button className="custom-button" onClick={props.onClick} title={props.title}>
            <FontAwesomeIcon icon={props.icon} />
        </button>
    )
}

export default CustomButton