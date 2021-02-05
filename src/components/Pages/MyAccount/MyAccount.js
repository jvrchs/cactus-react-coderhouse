import React, {useContext, useRef} from 'react'
import {useForm} from 'react-hook-form';
import Button from '../../widgets/Button/Button';
import firebase from "firebase/app";
import "firebase/auth";
import "firebase/database";
import { contextForFirebase } from '../../context/contextForFirebase';
import '../../widgets/Form/Form.scss'
import './MyAccount.scss'

const MyAccount = () => {
  
    const {loggedIn, setCurrentUserId, setLoggedIn} = useContext(contextForFirebase);
    
    const {register, handleSubmit, errors} = useForm();

    const {register: register2, handleSubmit: handleSubmit2, errors: errors2, watch} = useForm();

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
                localStorage.setItem('currentUserId', response.user.uid);
                localStorage.setItem('loggedIn', true);
                setCurrentUserId(response.user.uid);
                setLoggedIn(true);
                window.location.hash = `/mi-cuenta/${response.user.uid}`;
            })
            .catch(e => alert(e.message));
    }

    const onSignUpSubmit = data => {
        //Get data
        const email = data.signUpEmail;
        const phone = data.signUpPhone;
        const pass = data.signUpPass;
        const auth = firebase.auth();
        //Sign Up
        const promise = auth.createUserWithEmailAndPassword(email, pass);
        promise
        .then(newUser => {
            const user = {
                uid: newUser.user.uid,
                email: email,
                phone: phone,
            }
            localStorage.setItem('currentUserId', newUser.user.uid);
            localStorage.setItem('loggedIn', true);
            setCurrentUserId(newUser.user.uid);
            setLoggedIn(true);
            writeUserData(user);
            window.location.hash = `/mi-cuenta/${newUser.user.uid}`;
        })    
        .catch(e => alert(e.message));
    }

    const writeUserData = user => {
        const database = firebase.database();
        database.ref('users/' + user.uid).set(user);
    }

    if(loggedIn){
        window.location.hash = `/mi-cuenta/${localStorage.getItem('currentUserId')}`
    }

    return (
        <section className="my-account-section section-box">
            <div className="my-account-container section-container-box">
                <div className="section-title">
                    <h1>MI CUENTA</h1>
                </div>
                <div className="my-account-forms-container">
                    <div className='my-account-form-wrapper'>
                        <form onSubmit={handleSubmit(onLogInSubmit)}>
                            <h3>Iniciar Sesión</h3>
                            <div className="form-field">
                                <label htmlFor="logInEmail">E-mail</label>
                                <input name="logInEmail" ref={register({required: "E-mail requerido", pattern: {value:/[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/, message: "Email inválido"}})}/>
                                <small>{errors.logInEmail && <p>{errors.logInEmail.message}</p>}</small>
                            </div>
                            <div className="form-field">
                                <label htmlFor="logInPass">Contraseña</label>
                                <input name="logInPass" type="password" ref={register({required: "Contraseña requerida"})}/>
                                <small>{errors.logInPass && <p>{errors.logInPass.message}</p>}</small>
                            </div>
                            <Button type="submit">Iniciar sesión</Button>
                        </form>
                    </div>
                    <div className='my-account-form-wrapper'>
                        <form onSubmit={handleSubmit2(onSignUpSubmit)}>
                            <h3>Registrarse</h3>
                            <div className="form-field">
                                <label htmlFor="signUpEmail">E-mail*</label>
                                <input name="signUpEmail" ref={register2({required: "E-mail requerido", pattern: {value:/[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/, message: "Email inválido"}})}/>
                                <small>{errors2.signUpEmail && <p>{errors2.signUpEmail.message}</p>}</small>
                            </div>
                            <div className="form-field">
                                <label htmlFor="signUpPhone">Teléfono*</label>
                                <input name="signUpPhone" ref={register2({required: "Teléfono requerido", pattern: {value: /^[0-9]*$/, message: "Número inválido"}})}/>
                                <small>{errors2.signUpPhone && <p>{errors2.signUpPhone.message}</p>}</small>
                            </div>
                            <div className="form-field">
                                <label htmlFor="signUpPass">Contraseña*</label>
                                <input name="signUpPass" type="password" ref={register2({required: "Contraseña requerida", minLength: {value: 6, message: "La contraseña debe contener al menos 6 caracteres"}})}/>
                                <small>{errors2.signUpPass && <p>{errors2.signUpPass.message}</p>}</small>
                            </div>
                            <div className="form-field">
                                <label htmlFor="passRepeat">Confirme la contraseña*</label>
                                <input name="passRepeat" type="password" ref={register2({validate: value => value === password.current || "Las contraseñas no coinciden"})}/>
                                <small>{errors2.passRepeat && <p>{errors2.passRepeat.message}</p>}</small>
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
