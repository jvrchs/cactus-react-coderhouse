import React, {useContext, useRef, useState} from 'react'
import {useForm} from 'react-hook-form';
import Button from '../../widgets/Button/Button';
import firebase from "firebase/app";
import "firebase/auth";
import "firebase/database";
import {context} from '../../context/context';

const MyAccount = () => {

    const {setCurrentUserId} = useContext(context);
    
    const {register, handleSubmit, errors} = useForm();

    const {register: register2, handleSubmit: handleSubmit2, errors: errors2, watch: watch} = useForm();

    const password = useRef({});

    password.current = watch("signUpPass", "");

    const onLogInSubmit = data => {
        //Get email and pass
        const email = data.logInEmail;
        const pass = data.logInPass;
        const auth = firebase.auth();
        //Sign in 
        const promise = auth.signInWithEmailAndPassword(email, pass);
        promise
            .then(response => {
                setCurrentUserId(response.user.uid)
                window.location.hash = `/mi-cuenta/${response.user.uid}`;
            })
            .catch(e => alert(e.message));
    }

    const onSignUpSubmit = data => {
        //Get data
        const email = data.signUpEmail;
        const phone = data.signUpPhone;
        const pass = data.signUpPass
        const auth = firebase.auth();
        //Sign Up
        const promise = auth.createUserWithEmailAndPassword(email, pass);
        promise
        .then(newUser => {
            const user = {
                uid: newUser.user.uid,
                email: email,
                phone: phone
            }
            setCurrentUserId(newUser.user.uid)
            writeUserData(user);
            window.location.hash = `/mi-cuenta/${newUser.user.uid}`;
        })    
        .catch(e => alert(e.message))
    }

    const writeUserData = user => {
        const database = firebase.database();
        database.ref('users/' + user.uid).set(user);
    }

    return (

        <section className="my-account-section section-box">
            <div className="my-account-container section-container-box">
                <div className="section-title">
                    <span></span>
                    <h1>MI CUENTA</h1>
                    <span></span>
                </div>
                <div className="my-account-forms-container">
                    <div className='logIn-form-wrapper'>
                        <form onSubmit={handleSubmit(onLogInSubmit)}>
                            <div>
                                <label htmlFor="logInEmail">E-mail</label>
                                <input name="logInEmail" ref={register({required: "E-mail requerido", pattern: {value:/[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/, message: "Email inválido"}})}/>
                                {errors.logInEmail && <p>{errors.logInEmail.message}</p>}

                                <label htmlFor="logInPass">Contraseña</label>
                                <input name="logInPass" type="password" ref={register({required: "Contraseña requerida"})}/>
                                {errors.logInPass && <p>{errors.logInPass.message}</p>}
                            </div>
                            <Button type="submit">Iniciar sesión</Button>
                        </form>
                    </div>
                    <div className='signUp-form-wrapper'>
                        <form onSubmit={handleSubmit2(onSignUpSubmit)}>
                            <div>
                                <label htmlFor="signUpEmail">E-mail*</label>
                                <input name="signUpEmail" ref={register2({required: "E-mail requerido", pattern: {value:/[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/, message: "Email inválido"}})}/>
                                {errors2.signUpEmail && <p>{errors2.signUpEmail.message}</p>}

                                <label htmlFor="signUpPhone">Teléfono*</label>
                                <input name="signUpPhone" ref={register2({required: "Teléfono requerido", pattern: {value: /^[0-9]*$/, message: "Némero inválido"}})}/>
                                {errors2.signUpPhone && <p>{errors2.signUpPhone.message}</p>}

                                <label htmlFor="signUpPass">Contraseña*</label>
                                <input name="signUpPass" type="password" ref={register2({required: "Contraseña requerida", minLength: {value: 6, message: "La contraseña debe contener al menos 6 caracteres"}})}/>
                                {errors2.signUpPass && <p>{errors2.signUpPass.message}</p>}

                                <label htmlFor="passRepeat">Confirme la contraseña*</label>
                                <input name="passRepeat" type="password" ref={register2({validate: value => value === password.current || "Las contraseñas no coinciden"})}/>
                                {errors2.passRepeat && <p>{errors2.passRepeat.message}</p>}
                            </div>
                            <Button type="submit">Registrarse</Button>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default MyAccount
