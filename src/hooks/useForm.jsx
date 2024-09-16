// hooks/useForm.js
import { useState } from 'react';

const useForm = (initialValues) => {
    const [values, setValues] = useState(initialValues);
    const [errors, setErrors] = useState({});

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setValues({ ...values, [name]: value });
    };

    const handleErrors = (fieldErrors) => {
        setErrors(fieldErrors);
    };

    const resetForm = () => {
        setValues(initialValues);
        setErrors({});
    };

    return { values, handleInputChange, errors, handleErrors, resetForm };
};

export default useForm;
