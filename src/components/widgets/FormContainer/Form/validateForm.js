export default function validateForm(values) {
    let errors = {}

    //Name
    if(Object.keys(values).includes('name')) {
        if(!values.name.trim()) {
            errors.name = "Nombre requerido";
        }
    };


    //Email
    if(Object.keys(values).includes('email')) {
        if(!values.email) {
            errors.email = "Email requerido";
        } else if(!/[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/g.test(values.email)) {
            errors.email = 'La dirección de correo es inválida'
        }
    };

    //Password
    if(Object.keys(values).includes('password')) {
        if(!values.password) {
            errors.password = 'Contraseña requerida';
        } else if (values.password.length < 6) {
            errors.password = 'La contraseña debe tener mínimo 6 caracteres.'
        }
    }

    //Password Confirm
    if(Object.keys(values).includes('password2')) {
        if(!values.password2) {
            errors.password2 = 'Contraseña requerida';
        } else if (values.password2 !== values.password) {
            errors.password2 = 'Las contraseñas no coinciden.'
        }
    }
  
    return errors;
}