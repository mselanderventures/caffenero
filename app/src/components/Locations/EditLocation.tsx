/** @jsx jsx */
import { LoadingOutlined, PlusOutlined } from '@ant-design/icons';
import {
    Button,
    Card,
    Form,
    Input,
    Radio,
    Slider,
    Image,
    Upload,
    message,
    Select,
} from 'antd';
import Meta from 'antd/lib/card/Meta';
import React, { FC, useState } from 'react';
import { Flex, Text, jsx } from 'theme-ui';
import { useForm } from '../../services/useForm';
import theme from '../../styles/theme';
// import LocationPicker from 'react-location-picker';
import dynamic from 'next/dynamic';
const { Option } = Select;

const LocationPicker = dynamic(() => import('react-location-picker'), {
    ssr: false,
});

const defaultPosition = {
    lat: 27.9878,
    lng: 86.925,
};

export type EditLocationProps = {
    locationId?: string;
};

export const EditLocation: FC<EditLocationProps> = (
    props: EditLocationProps
) => {
    const { locationId } = props;

    const {
        form,
        errors,
        setErrors,
        values,
        handleSubmit,
        handleValuesChanged,
    } = useForm(
        () => null,
        () => null
    );

    const prefix =
        !values['type'] || values['type'] == 'free'
            ? 'Free'
            : values['type'] == 'percent'
            ? `${values['percent-off'] || '10'}% Off`
            : `$${values['dollar-off'] || '1'} Off`;

    const titleString = `${prefix} ${
        values['name'] ? values['name'] : '_________'
    }`;
    const subString = values['req'] || '';

    const [imageUrl, setImageUrl] = useState('');

    const handleImageChange = (info) => {
        if (info.file.status === 'uploading') {
            return;
        }
        if (info.file.status === 'done') {
            // Get this url from response in real world.
            getBase64(info.file.originFileObj, (imageUrl) =>
                setImageUrl(imageUrl)
            );
        }
    };

    return (
        <Flex
            sx={{
                flexDirection: 'row',
            }}
        >
            <Flex>
                <Form
                    form={form}
                    onValuesChange={handleValuesChanged}
                    onFinish={handleSubmit}
                    layout="vertical"
                    style={{
                        width: 300,
                    }}
                >
                    <Form.Item
                        validateStatus={errors['name'] ? 'error' : 'success'}
                        help={errors['name']}
                        name="name"
                        label="Location Name"
                    >
                        <Input size="large" />
                    </Form.Item>

                    <Form.Item
                        validateStatus={errors['address'] ? 'error' : 'success'}
                        help={errors['address']}
                        name="address"
                        label="Address"
                    >
                        <Input size="large" />
                    </Form.Item>
                    <Flex>
                        <Form.Item
                            validateStatus={
                                errors['city'] ? 'error' : 'success'
                            }
                            help={errors['city']}
                            name="city"
                            label="City"
                        >
                            <Input size="large" />
                        </Form.Item>
                        <Form.Item
                            validateStatus={
                                errors['state'] ? 'error' : 'success'
                            }
                            help={errors['state']}
                            name="state"
                            label="State"
                        >
                            <Select defaultValue="UT">
                                <Option value="Zhejiang">UT</Option>
                                <Option value="Jiangsu">ID</Option>
                            </Select>
                        </Form.Item>
                        <Form.Item
                            validateStatus={errors['zip'] ? 'error' : 'success'}
                            help={errors['zip']}
                            name="zip"
                            label="Zip"
                        >
                            <Input size="large" />
                        </Form.Item>
                    </Flex>

                </Form>
            </Flex>
            <Flex
                sx={{
                    padding: theme.space.large,
                    paddingRight: 0,
                    justifyContent: 'center',
                    flexGrow: 1,
                }}
            >
                <LocationPicker
                    containerElement={<div style={{ flexGrow: 1 }} />}
                    mapElement={<div style={{ height: '400px' }} />}
                    defaultPosition={defaultPosition}
                    onChange={() => null}
                />
            </Flex>
        </Flex>
    );
};

export function beforeUpload(file) {
    const isJpgOrPng = file.type === 'image/jpeg' || file.type === 'image/png';
    if (!isJpgOrPng) {
        message.error('You can only upload JPG/PNG file!');
    }
    const isLt2M = file.size / 1024 / 1024 < 2;
    if (!isLt2M) {
        message.error('Image must smaller than 2MB!');
    }
    return isJpgOrPng && isLt2M;
}

export function getBase64(img, callback) {
    const reader = new FileReader();
    reader.addEventListener('load', () => callback(reader.result));
    reader.readAsDataURL(img);
}
