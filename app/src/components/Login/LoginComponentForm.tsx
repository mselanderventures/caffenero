import { Button, Form, Input, message } from 'antd';
import { useRouter } from 'next/router';
import React, { FC, useState } from 'react';
import { Flex } from 'theme-ui';
import { useForm } from '../../services/useForm';
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';

type LoginComponentFormProps = {};

export const LoginComponentForm: FC<LoginComponentFormProps> = (
    props: LoginComponentFormProps
) => {
    const router = useRouter();
    const { redirectPath } = router.query;

    const { form, errors, setErrors, handleSubmit, handleValuesChanged } =
        useForm(() => null, submitLogin);

    const auth = getAuth()

    async function submitLogin(values) {
        signInWithEmailAndPassword(auth, values.email, values.password)
        .then( async (userCredential) => {
            const user = userCredential.user;
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
        });
        if (redirectPath) router.push(`/${redirectPath}`);

        router.push('/admin');
    }

    return (
        <Form
            form={form}
            onValuesChange={handleValuesChanged}
            onFinish={handleSubmit}
            layout="vertical"
        >
            <h2 className="sign-in-title">Business Login</h2>
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
                </Flex>
            </Flex>

            <Form.Item style={{}}>
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
                    {'Log in'}
                </Button>
            </Form.Item>
        </Form>
    );
};
