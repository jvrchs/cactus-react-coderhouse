import React, { useContext, useEffect, useState } from 'react';
import firebase from "firebase/app";
import "firebase/auth";
import "firebase/database";
import { context } from '../../context/context';
import {GrFormAdd} from 'react-icons/gr';
import { useForm } from 'react-hook-form';
import comunas from '../../data/comunasChile';
import Button from '../../widgets/Button/Button';

const Dashboard = () => {

    const {setCurrentUserData, currentUserData, currentUserId} = useContext(context);

    const [clicked, setClicked] = useState(false);

    const [community, setCommunity] = useState([])

    const [directionAdded, setDirectionAdded] = useState(false)

    const {register, handleSubmit, errors} = useForm();

    const handleClick = () => {
        setClicked(!clicked);
    }

    const onSubmit = data => {
        setClicked(!clicked);
        const address = {
            name: data.addressName,
            lastName: data.addressLastName,
            rut: data.addressRut,
            direction: data.addressDirection,
            direction2: data.addressDirection2,
            region: data.addressRegion,
            community: data.addressCommunity,
            zip: data.addressZip
        }
        writeAddress(address)
    }

    const communityFilter = e => {
        let region = e.target.value;
        let [objData] = comunas.filter(data => data.region === region);
        let community = objData.comunas;
        setCommunity(community)
    }

    const writeAddress = address => {
        let update = {};
        update[`/users/${currentUserId}/address`] = address;
        return firebase.database().ref().update(update);
    }

    return (
        currentUserData ?
        <>
            <section className="dashboard-section section-box">
                <div className="dashboard-container section-container-box">
                    <div className="section-title">
                        <span></span>
                        <h1>DASHBOARD</h1>
                        <span></span>
                    </div>
                    <div>
                        <div>
                            <div className="customer-contact-detail">
                                <div>
                                    <h3>Contacto</h3>
                                    <div>
                                        <p>
                                            <strong>Email</strong>
                                            <br/>
                                            {`${currentUserData.email}`}
                                        </p>
                                        <p>
                                            <strong>Teléfono</strong>
                                            <br/>
                                            {`${currentUserData.phone}`}
                                        </p>
                                    </div> 
                                </div>
                            </div>
                            <div className="customer-adress-detail">
                                <div>
                                    <h3>Dirección de envío</h3>
                                    <span className={clicked || currentUserData.address ? 'hide' : 'add-adress-btn'} onClick={handleClick}><GrFormAdd/> Añadir</span>
                                    {currentUserData.address ? 
                                        <div>
                                            <p>{`${currentUserData.address.name} ${currentUserData.address.lastName} (${currentUserData.address.rut})`}</p>
                                            <p>{`${currentUserData.address.direction} ${currentUserData.address.direction2}`}</p>
                                            <p>{currentUserData.address.community}</p>
                                            <p>{currentUserData.address.region}</p>
                                        </div>
                                        :
                                        null
                                    }
                                </div>
                            </div>
                        </div>
                        {!clicked ? 
                            <div>
                                <p>AQUÍ VAN ÓRDENES Y WISHLIST</p>
                            </div>
                            :
                            <div>
                                <form onSubmit={handleSubmit(onSubmit)}>
                                    <div>
                                        <label htmlFor="addressName">Nombre*</label>
                                        <input name="addressName" ref={register({required: "Nombre requerido"})}/>
                                        {errors.addressName && <p>{errors.addressName.message}</p>}

                                        <label htmlFor="addressLastName">Apellido*</label>
                                        <input name="addressLastName" ref={register({required: "Apellido requerido"})}/>
                                        {errors.addressLastName && <p>{errors.addressLastName.message}</p>}

                                        <label htmlFor="addressRut">RUT*</label>
                                        <input name="addressRut" placeholder="XXXXXXXX-X" ref={register({required: "RUT requerido", pattern: {value: /^[0-9]+[-|‐]{1}[0-9kK]{1}$/, message: 'RUT inválido'}})}></input>
                                        {errors.addressRut && <p>{errors.addressRut.message}</p>}

                                        <label htmlFor="addressDirection">Dirección*</label>
                                        <input name="addressDirection" ref={register({required: 'Dirección requerida'})}/>
                                        {errors.addressDirection && <p>{errors.addressDirection.message}</p>}

                                        <label htmlFor="addressDirection2">Departamento, habitación, etc.</label>
                                        <input name="addressDirection2" ref={register()}/>

                                        <label htmlFor="addressRegion">Región*</label>
                                        <select name="addressRegion" ref={register({required: "Región requerida"})} onChange={communityFilter}>
                                            <option value="">-----</option>
                                            {comunas.map(data => {
                                                return(
                                                    <option value={data.region}>{data.region}</option>
                                                )
                                            })}
                                        </select>
                                        {errors.addressRegion && <p>{errors.addressRegion.message}</p>}

                                        <label htmlFor="addressCommunity">Comuna*</label>
                                        <select name="addressCommunity" ref={register({required: "Comuna requerida"})}>
                                            <option value="">-----</option>
                                            {community ? 
                                                community.map(community => {
                                                    return(
                                                        <option value={community}>{community}</option>
                                                    )
                                                })
                                                :
                                                null
                                            }
                                        </select>
                                        {errors.addressCommunity && <p>{errors.addressCommunity.message}</p>}
                                        
                                        <label htmlFor="addressZip">Código postal</label>
                                        <input name="addressZip" ref={register()}/>
                                    </div>
                                    <Button onClick={handleClick}>Cancelar</Button>
                                    <Button type="submit">Guardar</Button>
                                </form>
                            </div>
                        }
                        
                    </div>
                </div>    
            </section>
        </>
        : 
        null
    )
}

export default Dashboard
