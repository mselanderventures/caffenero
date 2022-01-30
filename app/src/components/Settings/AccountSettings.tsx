import { useQuery } from '@apollo/client';
import { Form, Input } from 'antd';
import React, { FC } from 'react';
import { GET_USER } from '../../apollo/queries/GetUser';
import { GetUser } from '../../apollo/queries/__generated__/GetUser';
import { useForm } from '../../services/useForm';
import { PageTitle } from '../PageTitle';
import { SubTitle } from '../SubTitle';

export const AccountSettings: FC = () => {
    const {
        form: accountForm,
        errors: accountErrors,
        handleSubmit: handleAccountSubmit,
        handleValuesChanged: handleAccountValuesChanged,
    } = useForm(
        () => null,
        () => null
    );

    const { loading, error, data } = useQuery<GetUser>(GET_USER);

    return (
        <>
            <SubTitle style={{ marginTop: 20 }}>Account</SubTitle>
            <Form
                    form={accountForm}
                    onValuesChange={handleAccountValuesChanged}
                    onFinish={handleAccountSubmit}
                    layout="vertical"
                    style={{
                        width: 400,
                    }}
                >
                    <Form.Item
                        validateStatus={accountErrors['name'] ? 'error' : 'success'}
                        help={accountErrors['name']}
                        name="name"
                        label="Email"
                    >
                        <Input size="large" placeholder={data.user.email} disabled={true}/>
                    </Form.Item>

            </Form>
        </>
    );
};
