import { useQuery } from '@apollo/client';
import { Form, Input } from 'antd';
import React, { FC, useEffect } from 'react';
import { GET_USER } from '../../apollo/queries/GetUser';
import { GetUser } from '../../apollo/queries/__generated__/GetUser';
import { useForm } from '../../services/useForm';
import { PageTitle } from '../PageTitle';
import { SubTitle } from '../SubTitle';

export const GeneralSettings: FC = () => {
    const {
        form: generalForm,
        errors: generalErrors,
        handleSubmit: handleGeneralSubmit,
        handleValuesChanged: handleGeneralValuesChanged,
    } = useForm(
        () => null,
        () => null
    );

    const { loading, error, data } = useQuery<GetUser>(GET_USER);

    useEffect(() => {
        console.log(data?.user.company.name)
    }, [data])

    return (
        <>
            <PageTitle>Settings</PageTitle>

            <SubTitle style={{ marginTop: 20 }}>General</SubTitle>

            <Form
                form={generalForm}
                onValuesChange={handleGeneralValuesChanged}
                onFinish={handleGeneralSubmit}
                layout="vertical"
                style={{
                    width: 400,
                }}
            >
                <Form.Item
                    validateStatus={generalErrors['name'] ? 'error' : 'success'}
                    help={generalErrors['name']}
                    name="name"
                    label="Business Name"
                >
                    <Input size="large" placeholder="Wendys" defaultValue={data.user.company.name} />
                </Form.Item>
            </Form>
        </>
    );
};
