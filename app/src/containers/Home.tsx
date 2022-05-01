import React, { useState } from 'react';
import { Flex } from 'theme-ui';
import { PageTitle } from '../components/PageTitle';
import useHover from '../hooks/useHover';
import { Card, Modal } from 'antd';
import { EditDeal } from '../components/Deals/EditDeal';
import { SubTitle } from '../components/SubTitle';
import { CustomIcon } from '../components/CustomIcon';

const { Meta } = Card;

export default function Home() {
    const [hoverRef, isHovered] = useHover<HTMLDivElement>();

    const [addDealVisible, setAddDealVisible] = useState(false);

    return (
        <Flex
            sx={{
                flexDirection: 'column',
                width: '100%',
            }}
        >
            <Modal
                title="Create New Deal"
                visible={addDealVisible}
                onOk={null}
                onCancel={() => setAddDealVisible(false)}
                width={800}
            >
                <EditDeal />
            </Modal>

            
            <PageTitle>Welcome!</PageTitle>

            {/* <SubTitle style={{ marginTop: 20 }}>My Deals</SubTitle> */}

            <Card
                hoverable
                style={{
                    width: 240,
                }}
                onClick={() => setAddDealVisible(true)}
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
                        <CustomIcon size={44} strokeWidth={2} color={"#c0c0c0"} iconName="plus" />
                    </Flex>
                }
            >
                <Meta title="Add New Deal" />
            </Card>

            

            {/* <SubTitle style={{ marginTop: 40 }}>
                Suggested Deals
            </SubTitle> */}
        </Flex>
    );
}
