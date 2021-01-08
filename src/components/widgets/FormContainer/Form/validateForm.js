export default function validateForm(values) {
    let errors = {}

    //Name
    if(!values.name.trim()) {
        errors.name = "Nombre requerido";
    }

    //Email
    if(!values.email) {
        errors.email = "Email requerido";
    } else if(!/^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i.test(values.email)) {
        errors.email = "La dirección de correo es inválida"
    }

    return errors;
}