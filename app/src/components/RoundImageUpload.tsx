import { LoadingOutlined, PlusOutlined } from '@ant-design/icons';
import { Upload } from 'antd';
import { UploadChangeParam } from 'antd/lib/upload';
import React, { FC, useState } from 'react';
import { Flex, Text } from 'theme-ui';
import theme from '../styles/theme';
import { beforeUpload, getBase64 } from './Deals/EditDeal';

type RoundImageUploadProps = {
    onEditedImage: (file: File | Blob) => void;
    image: string
};

export const RoundImageUpload: FC<RoundImageUploadProps> = (
    props: RoundImageUploadProps
) => {
    const { onEditedImage, image } = props;

    const [imageUrl, setImageUrl] = useState(image);
    const [logoImageFile, setLogoImageFile] = useState<File | Blob | null>(
        null
    );

    const handleImageChange = (info: UploadChangeParam) => {
        if (info.file.status === 'uploading') {
            return;
        }
        if (info.file.status === 'done') {
            // Get this url from response in real world.
            onEditedImage(info.file.originFileObj)
            setLogoImageFile(info.file.originFileObj);
            getBase64(info.file.originFileObj, (imageUrl) =>
                setImageUrl(imageUrl)
            );
        }
    };

    return (
        <Flex
            sx={{
                flexGrow: 1,
                justifyContent: 'center',
                flexDirection: 'row',
                margin: theme.space.medium,
            }}
        >
            <Upload
                name="avatar"
                showUploadList={false}
                beforeUpload={beforeUpload}
                onChange={handleImageChange}
            >
                {imageUrl ? (
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
                            src={imageUrl}
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
                                border: `${theme.colors.secondary} solid`,
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
                            border: 'solid gray',
                            borderWidth: 1,
                            justifyContent: 'center',
                            verticalAlign: 'center',
                            alignContent: 'center',
                            alignItems: 'center',
                            cursor: 'pointer',
                            borderRadius: 100,
                            '&:hover': {
                                border: `${theme.colors.primary} solid`,
                                borderWidth: 1,
                                '& .addImage': {
                                    color: theme.colors.primary,
                                },
                            },
                        }}
                    >
                        {false ? <LoadingOutlined /> : <PlusOutlined className="addImage"/>}
                        <Flex
                        className="addImage"
                            sx={{
                                
                                marginLeft: theme.space.small,
                            }}
                        >
                            Upload
                        </Flex>
                    </Flex>
                )}
            </Upload>
        </Flex>
    );
};
