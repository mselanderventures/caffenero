import { Button, Form, Input, message, Spin } from 'antd';
import { useRouter } from 'next/router';
import React, { FC, useState } from 'react';
import { Flex } from 'theme-ui';
import { useForm } from '../../services/useForm';
import validator from 'validator';
import { getAuth, createUserWithEmailAndPassword } from 'firebase/auth';
import { useHistory } from 'react-router-dom';

type RegisterComponentFormProps = {};

const validateRegister = (values: any) => {
    let errorMap: any = {};

    if (!values.email) {
        errorMap.email = 'Please enter a valid email';
    }

    if (values.password !== values.confirmPassword) {
        errorMap.password = 'Passwords do not match';
        errorMap.confirmPassword = 'Passwords do not match';
    } else {
        if (!values.password || values.password.length < 8) {
            errorMap.password = 'Passwords must be at least 8 characters';
        }
    }

    if (!values.businessName || values.businessName.length == 0) {
        errorMap.businessName = 'This field is required';
    }

    if (!values.name || values.name.length == 0) {
        errorMap.name = 'This field is required';
    }
    return errorMap;
};

export const RegisterComponentForm: FC<RegisterComponentFormProps> = (
    props: RegisterComponentFormProps
) => {
    const router = useRouter();
    const { redirectPath } = router.query;

    const {
        form,
        errors,
        loading,
        setLoading,
        setErrors,
        handleSubmit,
        handleValuesChanged,
    } = useForm(validateRegister, submitRegister);

    const auth = getAuth();

    async function submitRegister(values) {
        createUserWithEmailAndPassword(auth, values.email, values.password)
            .then((userCredential) => {
                const user = userCredential.user;
                router.push({
                    pathname: '/onboard',
                    query: {
                        name: values.name,
                        businessName: values.businessName,
                    },
                }, {
                    pathname: '/onboard'
                });
                setLoading(false);
            })
            .catch((error) => {
                const errorCode = error.code;
                if (errorCode == 'auth/invalid-email') {
                    setErrors({ email: 'Please enter a valid email' });
                } else if (errorCode == 'auth/email-already-in-use') {
                    setErrors({ email: 'This email is already in use' });
                } else {
                    message.error(error.message);
                }
                setLoading(false);
            });
    }

    return (
        <Form
            form={form}
            onValuesChange={handleValuesChanged}
            onFinish={handleSubmit}
            layout="vertical"
        >
            <h2 style={{ alignContent: 'center' }}>Business Sign-Up</h2>
            <Flex>
                <Flex
                    sx={{
                        flexDirection: 'column',
                        flexGrow: 1,
                        flexBasis: 0,
                    }}
                >
                    <Form.Item
                        name="email"
                        label="Email"
                        validateStatus={errors['email'] ? 'error' : 'success'}
                        help={errors['email']}
                    >
                        <Input size="large" placeholder="Email" />
                    </Form.Item>
                    <Form.Item
                        validateStatus={
                            errors['password'] ? 'error' : 'success'
                        }
                        help={errors['password']}
                        name="password"
                        label="Password"
                    >
                        <Input
                            size="large"
                            type="password"
                            placeholder="Password"
                        />
                    </Form.Item>
                    <Form.Item
                        validateStatus={
                            errors['confirmPassword'] ? 'error' : 'success'
                        }
                        help={errors['confirmPassword']}
                        name="confirmPassword"
                        label="Confirm Password"
                    >
                        <Input
                            size="large"
                            type="password"
                            placeholder="Confirm Password"
                        />
                    </Form.Item>
                </Flex>
                <Flex style={{ width: 24 }}></Flex>

                <Flex
                    sx={{
                        flexDirection: 'column',
                        flexGrow: 1,
                        flexBasis: 0,
                    }}
                >
                    <Form.Item
                        name="name"
                        label="Full Name"
                        validateStatus={
                            errors['name'] ? 'error' : 'success'
                        }
                        help={errors['name']}
                    >
                        <Input size="large" placeholder="i.e. John Doe" />
                    </Form.Item>
                    <Form.Item
                        name="businessName"
                        label="Business Name"
                        validateStatus={
                            errors['businessName'] ? 'error' : 'success'
                        }
                        help={errors['businessName']}
                    >
                        <Input size="large" placeholder="Business Name" />
                    </Form.Item>
                </Flex>
            </Flex>
            {loading ? (
                <Flex
                    sx={{
                        width: '100%',
                        flexDirection: 'row',
                        justifyContent: 'center',
                    }}
                >
                    <Spin size={'large'} />
                </Flex>
            ) : (
                <Form.Item>
                    <Button
                        type="primary"
                        htmlType="submit"
                        size="large"
                        style={{
                            width: '100%',
                            flexGrow: 1,
                            justifySelf: 'center',
                            marginTop: '8px',
                            marginBottom: '16px',
                        }}
                    >
                        {'Sign Up'}
                    </Button>
                </Form.Item>
            )}
        </Form>
    );
};
