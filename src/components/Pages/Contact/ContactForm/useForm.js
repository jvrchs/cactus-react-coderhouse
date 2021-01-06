import {useState, useEffect} from 'react';

const useForm = (submitForm,validate) => {

    const [values, setValues] = useState({
        name: '',
        email: '',
        reason: '',
        message: ''
    });

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
        setErrors(validate(values))
        setIsSubmiting(true);
    }

    useEffect(() => {
        if(Object.keys(errors).length === 0 && isSubmiting) {
            submitForm();
        }
    }, [errors])

    return { values, errors, handleChange, handleSubmit }
}

export default useForm;