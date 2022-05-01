import { useMutation, useQuery } from '@apollo/client';
import { Button, Form, Input, Spin } from 'antd';
import React, { FC } from 'react';
import { Flex } from 'theme-ui';
import { UPDATE_USER } from '../../apollo/mutations/UpdateUser';
import { GET_USER } from '../../apollo/queries/GetUser';
import { GetUser } from '../../apollo/queries/__generated__/GetUser';
import { useForm } from '../../services/useForm';
import theme from '../../styles/theme';
import { RoundImageUpload } from '../RoundImageUpload';
import { SubTitle } from '../SubTitle';

export const GeneralSettings: FC = () => {
    const { loading, error, data: user, refetch } = useQuery<GetUser>(GET_USER, {
        fetchPolicy: 'no-cache',
    });
    const [updateUser, { error: updateError }] = useMutation(UPDATE_USER);

    const handleSubmit = async (values: any) => {
        await updateUser({
            variables: {
                input: {
                    companyName: values.companyName,
                    companyLogo: values.companyLogo
                },
            },
        });
        refetch()
    };

    const {
        form: generalForm,
        errors: generalErrors,
        handleSubmit: handleGeneralSubmit,
        handleValuesChanged: handleGeneralValuesChanged,
        loading: saving,
        hasBeenEdited,
        setHasBeenEdited,
        resetForm,
    } = useForm(() => null, handleSubmit);

    return loading ? (
        <>
            <Spin size="large" />
        </>
    ) : (
        <>
            <Flex
                style={{
                    width: 400,
                    flexDirection: 'column',
                }}
            >
                <SubTitle
                    style={{
                        marginTop: theme.space.larger,
                        marginBottom: theme.space.medium,
                    }}
                >
                    General
                </SubTitle>
                {loading ? (
                    <Spin />
                ) : (
                    <Form
                        form={generalForm}
                        onValuesChange={handleGeneralValuesChanged}
                        onFinish={handleGeneralSubmit}
                        layout="vertical"
                    >
                        <Form.Item
                            validateStatus={
                                generalErrors['companyName']
                                    ? 'error'
                                    : 'success'
                            }
                            help={generalErrors['companyName']}
                            name="companyName"
                            label="Company Name"
                        >
                            <Input
                                size="large"
                                placeholder="Wendys"
                                defaultValue={user?.user.company.name}
                            />
                        </Form.Item>
                        <Form.Item
                            validateStatus={
                                generalErrors['companyLogo'] ? 'error' : 'success'
                            }
                            help={generalErrors['companyLogo']}
                            name="companyLogo"
                            label="Company Logo"
                            style={{
                                width: 150,
                            }}
                        >
                            <RoundImageUpload
                                onEditedImage={(file) => {
                                    generalForm.setFieldsValue({ companyLogo: file });
                                    setHasBeenEdited(true);
                                }}
                                image={user?.user.company.logoImageUrl}

                            />
                        </Form.Item>
                        {saving ? (
                            <Spin />
                        ) : (
                            <Form.Item style={{}}>
                                <Button
                                    type="default"
                                    htmlType="submit"
                                    size="large"
                                    style={{
                                        marginRight: theme.space.medium,
                                    }}
                                    disabled={!hasBeenEdited}
                                    onClick={resetForm}
                                >
                                    Cancel
                                </Button>
                                <Button
                                    type="primary"
                                    htmlType="submit"
                                    size="large"
                                    style={{}}
                                    disabled={!hasBeenEdited}
                                >
                                    Save
                                </Button>
                            </Form.Item>
                        )}
                    </Form>
                )}
            </Flex>
        </>
    );
};
