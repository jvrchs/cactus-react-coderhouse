import React from 'react';
import {GrFormAdd, GrEdit} from 'react-icons/gr';

const AddressDetails = ({clicked, currentUserData, handleClick}) => {
    return (
        <div className="customer-address-detail">
            <div className='address-txt'>
                <h3>Dirección de envío</h3>
                <span className={clicked || currentUserData.address ? 'hide' : 'add-address-btn'} onClick={() => handleClick('address')}><GrFormAdd/> Añadir</span>
                {currentUserData.address ? 
                    <div>
                        <div className="address-txt-info">
                            <p>{`${currentUserData.address.name} ${currentUserData.address.lastName} (${currentUserData.address.rut})`}</p>
                            <p>{`${currentUserData.address.direction} ${currentUserData.address.direction2}`}</p>
                            <p>{currentUserData.address.community}</p>
                            <p>{currentUserData.address.region}</p>
                        </div>
                        <div className={clicked ? "hide" : "phone-address-edit"} onClick={() => handleClick('address')}>
                            <GrEdit/>
                            <p>Editar dirección</p>
                        </div>
                    </div>
                    :
                    null
                }
            </div>
        </div>
    )
}

export default AddressDetails
