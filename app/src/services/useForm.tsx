import { useState } from "react";
// import { hasErrors } from '@SVM/lib';
import { Form } from 'antd';

export function hasErrors(errorObject: any) {
    return errorObject && Object.keys(errorObject).length > 0;
}

export function useForm(validate: (values) => any, submit: (values) => any) {
    const [form] = Form.useForm();
    const [errors, setErrors] = useState({})
    const [values, setValues] = useState({})
    const [loading, setLoading] = useState(false)
    const [hasValidated, setHasValidated] = useState(false)

    const handleSubmit = async (values) => {
        setLoading(true)
        const newErrors = await validate(values);
        setHasValidated(true)
        if (hasErrors(newErrors)) {
            setErrors(newErrors)
            setLoading(false)
            return;
        }
        return submit(values);
    }

    const handleValuesChanged = async (_, values) => {
        if (hasValidated) {
            const newErrors = await validate(values);
            setErrors(newErrors)
        }       
        setValues(values) 
    };

    return {
        form, 
        errors,
        values,
        loading, 
        setLoading,
        setErrors, 
        handleSubmit,
        handleValuesChanged
    }
}
