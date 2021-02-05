import React from 'react';
import {GrEdit} from 'react-icons/gr';

const ContactDetails = ({currentUserData, handleClick, clicked}) => {
    
    return (
        <div className="customer-contact-detail">
            <div className='contact-txt'>
                <h3>Contacto</h3>
                <div>
                    <p>
                        <span><strong>Email</strong></span>
                        <br/>
                        {`${currentUserData.email}`}
                    </p>
                    <p>
                        <strong>Teléfono</strong>
                        <br/>
                        {`${currentUserData.phone}`}
                    </p>
                    <div className={clicked ? "hide" : "phone-address-edit"} onClick={() => handleClick('phone')}>
                        <GrEdit/>
                        <p>Editar teléfono</p>
                    </div>
                </div> 
            </div>
        </div>     
    )
}

export default ContactDetails
