const formsData = {
    contact: [
        {
            key: 'name',
            tag: 'input',
            type: 'text',
            required: true,
            cName: 'form-input',
            label: 'Nombre (requerido)'
        },
        {
            key: 'email',
            tag: 'input',
            type: 'email',
            required: true,
            cName: 'form-input',
            label: 'Correo Electrónico (requerido)'
        },
        {
            key: 'reason',
            tag: 'select',
            label: 'Motivo',
            cName: 'form-input',
            options: [
                {
                    value: 'query',
                    label: 'Consulta'
                },
                {
                    value: 'order-state',
                    label: 'Estado de pedido'
                },
                {
                    value: 'claim',
                    label: 'Reclamo'
                }
            ]
        },
        {
            key: 'message',
            tag: 'textarea',
            label: 'Mensaje',
            cName: 'form-textarea form-input'
        },
        {
            key: 'submit-btn',
            type: 'submit',
            className: 'form-input-btn'
        }
    ],
    logIn: [
        {
            key: 'email',
            tag: 'input',
            type: 'email',
            required: true,
            cName: 'form-input',
            label: 'Correo electrónico'
        },
        {
            key: 'password',
            tag: 'input',
            type: 'password',
            required: true,
            cName: 'form-input',
            label: 'Contraseña'
        }
    ],
    signUp: [
        {
            key: 'email',
            tag: 'input',
            type: 'email',
            required: true,
            cName: 'form-input',
            label: 'Correo electrónico'
        },
        {
            key: 'password',
            tag: 'input',
            type: 'password',
            required: true,
            cName: 'form-input',
            label: 'Contraseña'
        },
        {
            key: 'password2',
            tag: 'input',
            type: 'password',
            required: true,
            cName: 'form-input',
            label: 'Confirme contraseña'
        }
    ]    
};

export default formsData;