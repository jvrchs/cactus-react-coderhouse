import {useState, useEffect} from 'react';

const useForm = (formValues, submitForm, validateForm) => {

    const [values, setValues] = useState(formValues);

    const [errors, setErrors] = useState({})

    const [isSubmiting, setIsSubmiting] = useState(false);

    const handleChange = e => {
        const {name, value} = e.target;
        setValues({
            ...values,
            [name]: value
        })
    }

    const handleSubmit = e => {
        e.preventDefault();
        setErrors(validateForm(values))
        setIsSubmiting(true);
    }

    useEffect(() => {
        if(Object.keys(errors).length === 0 && isSubmiting) {
            submitForm();
        }
    }, [errors, isSubmiting, submitForm])

    return { values, errors, handleChange, handleSubmit }
}

export default useForm;