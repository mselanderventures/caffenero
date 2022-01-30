/** @jsx jsx */
import { LoadingOutlined, PlusOutlined } from '@ant-design/icons';
import { useMutation } from '@apollo/client';
import { getAuth } from '@firebase/auth';
import { Button, Form, Input, message, Upload } from 'antd';
import { UploadChangeParam } from 'antd/lib/upload';
import React, { FC, useEffect, useState } from 'react';
import { Flex, Text, jsx } from 'theme-ui';
import { ONBOARD_BASIC_INFO } from '../../apollo/mutations/UpdateBasicInfo';
import { useForm } from '../../services/useForm';
import theme from '../../styles/theme';
import { beforeUpload, getBase64 } from '../Deals/EditDeal';

type BasicInfoProps = {
    name: string;
    businessName: string;
    onFinished: () => void;
};

const validateBasicInfo = (values: any, profileImageUrl?: string) => {
    let errorMap: any = {};

    console.log(values)

    if (!values.name || values.name.length == 0) {
        errorMap.name = 'Please enter your last name';
    }

    if (!values.businessName || values.businessName.length == 0) {
        errorMap.businessName = 'Please enter your last name';
    }

    if (!profileImageUrl || profileImageUrl.length == 0) {
        errorMap.businessLogo = 'Logo required';
    }

    return errorMap;
};

const BasicInfo: FC<BasicInfoProps> = (props: BasicInfoProps) => {
    const { name, businessName, onFinished } = props;
    const {
        form,
        errors,
        setErrors,
        handleSubmit,
        values,
        handleValuesChanged,
    } = useForm(validate, submitBasicInfo);

    const [updateUser, {data, error}] = useMutation(ONBOARD_BASIC_INFO);

    async function submitBasicInfo(values: any) {
        const res = await updateUser({
            variables: {
                input: {
                    name: values.name,
                    businessName: values.businessName,
                    logoImageFile: logoImageFile
                }
            }
        })
    }

    const auth = getAuth()
    useEffect(() => {
        if (data) {
            onFinished();
        } else {
            if (error) {
                message.error(error)
            }
        }
    }, [data, error])

    const [logoImageUrl, setLogoImageUrl] = useState(null);
    const [logoImageFile, setLogoImageFile] = useState<File | Blob | null>(null);

    function validate() {
        return validateBasicInfo(values, logoImageUrl);
    }

    const handleImageChange = (info: UploadChangeParam) => {
        if (info.file.status === 'uploading') {
            return;
        }
        if (info.file.status === 'done') {
            // Get this url from response in real world.
            setLogoImageFile(info.file.originFileObj)
            getBase64(info.file.originFileObj, (imageUrl) =>
                setLogoImageUrl(imageUrl)
            );
        }
    };
    


    return (
        <div style={{ marginTop: theme.space.xl }}>
            <Form
                form={form}
                onValuesChange={handleValuesChanged}
                onFinish={handleSubmit}
                layout="vertical"
            >
                <Flex sx={{ flexDirection: 'column' }}>
                    <Flex
                        sx={{
                            flexDirection: 'row',
                            flexGrow: 1,
                            flexBasis: 0,
                        }}
                    >
                        <Flex sx={{ flexDirection: 'column', flexGrow: 1 }}>
                            <Form.Item
                                name="name"
                                initialValue={name}
                                label="Full Name"
                                validateStatus={
                                    errors['name'] ? 'error' : 'success'
                                }
                                help={errors['name']}
                                style={{
                                    marginRight: theme.space.medium,
                                }}
                            >
                                <Input size="large" placeholder="John Doe" />
                            </Form.Item>
                            <Form.Item
                                validateStatus={
                                    errors['businessName'] ? 'error' : 'success'
                                }
                                initialValue={businessName}
                                help={errors['businessName']}
                                name="businessName"
                                label="Business Name"
                                style={{
                                    paddingRight: theme.space.medium,
                                }}
                            >
                                <Input
                                    size="large"
                                    placeholder="Business Name"
                                />
                            </Form.Item>
                        </Flex>

                        <Form.Item
                            validateStatus={
                                errors['businessLogo'] ? 'error' : 'success'
                            }
                            help={errors['businessLogo']}
                            name="businessLogo"
                            label="Business Logo"
                            style={{
                                flexGrow: 1,
                                paddingLeft: theme.space.medium,
                                justifyContent: 'center',
                                display: 'flex',
                                flexDirection: 'column',
                            }}
                        >
                            <Flex
                                sx={{
                                    flexGrow: 1,
                                    justifyContent: 'center',
                                    flexDirection: 'row',
                                }}
                            >
                                <Upload
                                    name="avatar"
                                    showUploadList={false}
                                    beforeUpload={beforeUpload}
                                    onChange={handleImageChange}
                                >
                                    {logoImageUrl ? (
                                        <Flex
                                            sx={{
                                                position: 'relative',
                                                width: 125,
                                                height: 125,
                                                justifyContent: 'center',
                                                alignContent: 'center',
                                                alignItems: 'center',
                                                cursor: 'pointer',
                                            }}
                                        >
                                            <img
                                                src={logoImageUrl}
                                                width={125}
                                                height={125}
                                                style={{
                                                    alignSelf: 'stretch',
                                                    borderRadius: 100,
                                                    position: 'absolute',
                                                    left: 0,
                                                    right: 0,
                                                    top: 0,
                                                    bottom: 0,
                                                    margin: 'auto',
                                                    opacity: 0.5,
                                                    borderWidth: 2,
                                                    borderColor:
                                                        'rgba(0,0,0,1)',
                                                }}
                                                alt="avatar"
                                            />
                                            <Text
                                                sx={{
                                                    color: 'black',
                                                    fontWeight: 400,
                                                    fontSize: 18,
                                                    zIndex: 55,
                                                }}
                                            >
                                                Edit
                                            </Text>
                                        </Flex>
                                    ) : (
                                        <Flex
                                            sx={{
                                                width: 125,
                                                height: 125,
                                                backgroundColor: '#ECECEC',
                                                border: 'dashed gray',
                                                borderWidth: 2,
                                                justifyContent: 'center',
                                                verticalAlign: 'center',
                                                alignContent: 'center',
                                                alignItems: 'center',
                                                cursor: 'pointer',
                                                borderRadius: 100,
                                                '&:hover': {
                                                    border: `${theme.colors.primary} dashed`,
                                                },
                                            }}
                                        >
                                            {false ? (
                                                <LoadingOutlined />
                                            ) : (
                                                <PlusOutlined />
                                            )}
                                            <Flex
                                                style={{
                                                    marginLeft:
                                                        theme.space.small,
                                                }}
                                            >
                                                Upload Logo
                                            </Flex>
                                        </Flex>
                                    )}
                                </Upload>
                            </Flex>
                        </Form.Item>
                    </Flex>
                </Flex>
                <Form.Item>
                    <Flex
                        sx={{
                            width: '100%',
                            display: 'flex',
                            justifyContent: 'flex-end',
                        }}
                    >
                        <Button
                            type="primary"
                            htmlType="submit"
                            size="large"
                            style={{
                                justifySelf: 'right',
                                marginTop: '8px',
                                marginBottom: '16px',
                            }}
                        >
                            Continue
                        </Button>
                    </Flex>
                </Form.Item>
            </Form>
        </div>
    );
};

export default BasicInfo;
