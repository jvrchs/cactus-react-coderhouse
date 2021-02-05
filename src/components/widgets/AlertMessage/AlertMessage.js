import React from 'react';
import './AlertMessage.scss';
import {IoMdAlert} from 'react-icons/io';

const AlertMessage = ({message}) => {

    return (
        <div className="alert-container">
            <div className="alert-wrapper">
                <div className="alert-icon">
                    <IoMdAlert/>
                </div>
                <p>{message}</p>
            </div>
        </div>
        : 
        null
    )
}

export default AlertMessage;
