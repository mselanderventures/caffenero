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

    const [hasBeenEdited, setHasBeenEdited] = useState(false)

    const handleSubmit = async (values) => {
        setLoading(true)
        const newErrors = await validate(values);
        setHasValidated(true)
        if (hasErrors(newErrors)) {
            setErrors(newErrors)
            setLoading(false)
            return;
        }
        const res = submit(values)
        setHasBeenEdited(false)
        setLoading(false)
        return res;
    }

    const handleValuesChanged = async (_, values) => {
        if (!hasBeenEdited) {
            setHasBeenEdited(true)
        }
        if (hasValidated) {
            const newErrors = await validate(values);
            setErrors(newErrors)
        }       
        setValues(values) 
        
    };

    const resetForm = () => {
        setHasBeenEdited(false)
        form.resetFields()
    }

    return {
        form, 
        errors,
        values,
        loading, 
        hasBeenEdited,
        setHasBeenEdited,
        setLoading,
        setErrors, 
        handleSubmit,
        handleValuesChanged,
        resetForm
    }
}
