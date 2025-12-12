import React from "react";

const validations = {
    email: {
        regex: /^[a-z0-9.]+@[a-z0-9]+\.[a-z]+\.([a-z]+)?$/i,
        message: 'Preencha um email válido'
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
        } else if(validations.email && !validations.email.regex.test(value)) {
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
