import React, {useState, useEffect} from 'react'
import comunas from '../../../data/comunasChile';

const AddressFormFieldset = (props) => {

    const {register, errors, currentUserData, loggedIn} = props

    const [community, setCommunity] = useState([])

    const communityFilter = (region) => {
        let [objData] = comunas.filter(data => data.region === region);
        let community = objData.comunas;
        setCommunity(community)
    }

    useEffect(() => {
       if(loggedIn && currentUserData.address) {
            communityFilter(currentUserData.address.region)
       }
    }, [])

    return (
        <>
        <h3>Dirección de envío</h3>
        <div className="form-field">
            <label htmlFor="addressName">Nombre*</label>
            <input name="addressName" defaultValue={loggedIn && currentUserData.address ? currentUserData.address.name : ""} ref={register({required: "Nombre requerido"})}/>
            <small>{errors.addressName && <p>{errors.addressName.message}</p>}</small>
        </div>
        <div className="form-field">
            <label htmlFor="addressLastName">Apellido*</label>
            <input name="addressLastName" defaultValue={loggedIn && currentUserData.address ? currentUserData.address.lastName : ""} ref={register({required: "Apellido requerido"})}/>
            <small>{errors.addressLastName && <p>{errors.addressLastName.message}</p>}</small>
        </div>
        <div className="form-field">
            <label htmlFor="addressRut">RUT*</label>
            <input name="addressRut" defaultValue={loggedIn && currentUserData.address ? currentUserData.address.rut : ""} placeholder="XXXXXXXX-X" ref={register({required: "RUT requerido", pattern: {value: /^[0-9]+[-|‐]{1}[0-9kK]{1}$/, message: 'RUT inválido'}})}></input>
            <small>{errors.addressRut && <p>{errors.addressRut.message}</p>}</small>
        </div>
        <div className="form-field">
            <label htmlFor="addressDirection">Dirección*</label>
            <input name="addressDirection" defaultValue={loggedIn && currentUserData.address ? currentUserData.address.direction : ""} ref={register({required: 'Dirección requerida'})}/>
            <small>{errors.addressDirection && <p>{errors.addressDirection.message}</p>}</small>
        </div>
        <div className="form-field">
            <label htmlFor="addressRegion">Región*</label>
            <select name="addressRegion" defaultValue={loggedIn && currentUserData.address ? currentUserData.address.region : ""} ref={register({required: "Región requerida"})} onChange={e => communityFilter(e.target.value)}>
                <option value="">-----</option>
                {comunas.map((data, index) => {
                    return(
                        <option value={data.region} key={index}>{data.region}</option>
                    )
                })}
            </select>
            <small>{errors.addressRegion && <p>{errors.addressRegion.message}</p>}</small>
        </div>
        <div className="form-field">
            <label htmlFor="addressCommunity">Comuna*</label>
            <select name="addressCommunity" defaultValue={loggedIn && currentUserData.address ? currentUserData.address.community : ""} ref={register({required: "Comuna requerida"})}>
                <option value="">-----</option>
                {community ? 
                    community.map((community,index) => {
                        return(
                            <option key={index} value={community} index={index}>{community}</option>
                        )
                    })
                    :
                    null
                }
            </select>
            <small>{errors.addressCommunity && <p>{errors.addressCommunity.message}</p>}</small>
        </div>
        <div className="form-field">
            <label htmlFor="addressDirection2">Departamento, habitación, etc.</label>
            <input name="addressDirection2" defaultValue={loggedIn && currentUserData.address ? currentUserData.address.direction2 : ""} ref={register()}/>
        </div>
        <div className="form-field">
            <label htmlFor="addressZip">Código postal</label>
            <input name="addressZip" defaultValue={loggedIn && currentUserData.address ? currentUserData.address.zip : ""} ref={register()}/>
        </div>
        </>
    )
}

export default AddressFormFieldset
