import React from "react";

const validations = {
    email: {
        regex: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
        message: 'Preencha um email válido'
    },
    password: {
        regex: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{8,}$/,
        message: 'A senha precisa ter 1 caracter maiúsculo, 1 minúsculo e 1 dígito. Com no mínimo 8 caracteres.'
    }
}

export const useForm = (type) => {
    const [value, setValue] = React.useState('')
    const [error, setError] = React.useState('')


    function validate(value) {
        if(type === false) return true;
        if(value.length === 0) {
            setError('Preencha um valor.')
            return false;
        } else if(validations[type] && !validations[type].regex.test(value)) {
            setError(validations[type].message)
            return false
        } else {
            setError(false)
            return true
        }
    }

    function onChange({target}) {
        if(error)validate(target.value)
        setValue(target.value)
    }

  return {
    value,
    setValue,
    onChange,
    error,
    validate: () => validate(value),
    onBlur: () => validate(value)
  }
}

export default useForm;
