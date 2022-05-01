import { useQuery } from '@apollo/client';
import { Flex } from '@theme-ui/components';
import { Button, Form, Input, Spin } from 'antd';
import React, { FC } from 'react';
import { GET_USER } from '../../apollo/queries/GetUser';
import { GetUser } from '../../apollo/queries/__generated__/GetUser';
import { useForm } from '../../services/useForm';
import theme from '../../styles/theme';
import { PageTitle } from '../PageTitle';
import { SubTitle } from '../SubTitle';

export const AccountSettings: FC = () => {
    const {
        form: accountForm,
        errors: accountErrors,
        handleSubmit: handleAccountSubmit,
        handleValuesChanged: handleAccountValuesChanged,
        hasBeenEdited,
        resetForm
    } = useForm(
        () => null,
        () => null
    );

    const { loading, error, data } = useQuery<GetUser>(GET_USER);

    return (
        <>
            <SubTitle style={{ marginTop: 48, marginBottom: theme.space.medium }}>Account</SubTitle>
            <Flex
                style={{
                    width: 400,
                    flexDirection: "column"
                }}
            >
                
                {loading ? (
                    <Spin/>
                ) : (
                    <Form
                        form={accountForm}
                        onValuesChange={handleAccountValuesChanged}
                        onFinish={handleAccountSubmit}
                        layout="vertical"
                    >
                        <Form.Item
                            validateStatus={
                                accountErrors['name'] ? 'error' : 'success'
                            }
                            help={accountErrors['name']}
                            name="name"
                            label="Email"
                        >
                            <Input
                                size="large"
                                placeholder={data?.user.email}
                                disabled={true}
                            />
                        </Form.Item>
                        <Form.Item  style={{}}>
                            <Button
                                type="default"
                                size="large"
                                style={{}}
                            >
                                Change Password
                            </Button>
                        </Form.Item>
                    </Form>
                )}
            </Flex>
        </>
    );
};
