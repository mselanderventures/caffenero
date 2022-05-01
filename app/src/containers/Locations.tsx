import React, { useState } from 'react';
import { Box, Flex, Text } from 'theme-ui';
import { PageTitle } from '../components/PageTitle';
import theme from '../styles/theme';
import * as Icon from 'react-feather';
import useHover from '../hooks/useHover';
import { SubTitle } from '../components/SubTitle';
import { CustomIcon } from '../components/CustomIcon';
import { Card, Modal } from 'antd';
import { EditDeal } from '../components/Deals/EditDeal';
import { EditLocation } from '../components/Locations/EditLocation';

const { Meta } = Card

export default function Locations() {
    const [hoverRef, isHovered] = useHover<HTMLDivElement>();
    const [addLocationVisible, setAddLocationVisible] = useState(false)

    return (
        <Flex
            sx={{
                flexDirection: 'column',
                width: '100%'
            }}
        >
            <Modal
                title="Add New Location"
                visible={addLocationVisible}
                onOk={null}
                onCancel={() => setAddLocationVisible(false)}
                width={800}
            >
                <EditLocation />
            </Modal>
            <PageTitle>Locations</PageTitle>

            <SubTitle style={{ marginTop: 20 }}>My locations</SubTitle>

            <Box>
                <Card
                    hoverable
                    style={{
                        width: 240,
                    }}
                    onClick={() => setAddLocationVisible(true)}
                    cover={
                        <Flex
                            sx={{
                                width: 240,
                                height: 100,
                                backgroundColor: '#DCDCDC',
                                alignItems: 'center',
                                justifyContent: 'center',
                            }}
                        >
                            <CustomIcon
                                size={44}
                                strokeWidth={2}
                                color={'#c0c0c0'}
                                iconName="plus"
                            />
                        </Flex>
                    }
                >
                    <Meta title="Add New Location" />
                </Card>
            </Box>
        </Flex>
    );
}
