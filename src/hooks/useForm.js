import { useState } from 'react';

const useForm = (callback, data) => {
    const [values, setValues] = useState(data);

    const handleChange = (event) => {
        if (event.persist) {
            event.persist();
        }
        if (event.target.type === 'checkbox') {
            setValues((values) => ({
                ...values,
                [event.target.name]: event.target.checked,
            }));
        } else {
            setValues((values) => ({
                ...values,
                [event.target.name]: event.target.value,
            }));
        }
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        callback(values);
    };

    return [values, handleChange, handleSubmit];
};

export default useForm;
