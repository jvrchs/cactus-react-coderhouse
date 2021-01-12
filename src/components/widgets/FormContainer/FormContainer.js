import React, {useState} from 'react';
import Form from './Form/Form';
import ContactFormSuccess from './Form/FormSuccess';
import validateForm from './Form/validateForm';
import formsData from '../../data/formsData';
import useForm from './Form/useForm';
import './Form/Form.scss'

const FormContainer = ({formName, btnLabel}) => {

    const formValues = {};

    for(let i = 0; i < formsData[formName].length; ++i){
        formValues[formsData[formName][i].key] = ""
    }
    
    const submitForm = () => {
        setIsSubmitted(true);
    }

    const [isSubmited, setIsSubmitted] = useState(false);

    const {values, errors, handleChange, handleSubmit} = useForm(formValues, submitForm, validateForm);

    return (
        <div>
            {!isSubmited ? 
            <Form 
            data={formsData} 
            handleSubmit={handleSubmit} 
            handleChange={handleChange} 
            formsName={formName} 
            values={values}
            btnLabel={btnLabel}
            errors={errors}/> 
            : 
            <ContactFormSuccess/>}
        </div>
    )
}

export default FormContainer
