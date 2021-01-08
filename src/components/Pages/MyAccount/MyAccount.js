import React from 'react'
import FormContainer from '../../widgets/FormContainer/FormContainer'

const MyAccount = () => {
    return (
        <section className="my-account-section section-box">
            <div className="my-account-container section-container-box">
                <div className="section-title">
                    <span></span>
                    <h1>MI CUENTA</h1>
                    <span></span>
                </div>
                <div className="my-account-forms-container">
                    <FormContainer formName='logIn' btnLabel="Ingresar"/>
                    <FormContainer formName='signUp' btnLabel="Ingresar"/>
                </div>
            </div>
        </section>
    )
}

export default MyAccount
