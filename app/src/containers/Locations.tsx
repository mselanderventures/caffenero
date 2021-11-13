import React from 'react';
import { Box, Flex, Text } from 'theme-ui';
import { PageTitle } from '../components/PageTitle';
import theme from '../styles/theme';
import * as Icon from 'react-feather';
import useHover from '../hooks/useHover';
import { SubTitle } from '../components/SubTitle';
import { CustomIcon } from '../components/CustomIcon';
import { Card } from 'antd';

const { Meta } = Card

export default function Locations() {
    const [hoverRef, isHovered] = useHover<HTMLDivElement>();
    return (
        <Flex
            sx={{
                flexDirection: 'column',
                width: '100%'
            }}
        >
            <PageTitle>Locations</PageTitle>

            <SubTitle style={{ marginTop: 20 }}>My locations</SubTitle>

            <Box>
                <Card
                    hoverable
                    style={{
                        width: 240,
                    }}
                    onClick={() => null}
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
