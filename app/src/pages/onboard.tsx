import { useRouter } from 'next/router';
import React, { FC } from 'react';
import { Flex, Text, jsx } from 'theme-ui';
import { Steps, Button, message } from 'antd';
import theme from '../styles/theme';
import BasicInfo from '../components/Onboard/BasicInfo';

const { Step } = Steps;

const steps = [
    {
        title: 'Basic Info',
        content: 'First-content',
    },
    {
        title: 'Location Info',
        content: 'Second-content',
    },
    {
        title: 'My First Deal',
        content: 'Last-content',
    },
];

const Onboard: FC = (props: any) => {
    const router = useRouter();
    const {
        query: { name, businessName },
    } = router;

    const [currentStep, setCurrentStep] = React.useState(0);

    return (
        <>
            <Flex
                sx={{
                    height: '100vh',
                    width: '100vw',
                    justifyContent: 'center',
                    flexDirection: 'row',
                }}
            >
                <Flex
                    style={{
                        paddingTop: 100,
                        flexDirection: 'column',
                        flexGrow: 1,
                        maxWidth: 720,
                    }}
                >
                    <Text
                        sx={{
                            fontSize: 34,
                            fontFamily: 'Trebuchet MS',
                            color: 'black',
                            fontWeight: 600,
                            marginBottom: theme.space.xl,
                        }}
                    >
                        {name ? `Welcome ${name}!` : 'Welcome!'}
                    </Text>

                    <Steps current={currentStep}>
                        {steps.map((item) => (
                            <Step key={item.title} title={item.title} />
                        ))}
                    </Steps>
                    {/* {currentStep == 0 && 
                    //  <BasicInfo name={name} businessName={businessName} onFinished={() => setCurrentStep(1)}/>
                    }
                    {currentStep == 1 && 
                    //  <BasicInfo name={name} businessName={businessName} onFinished={() => setCurrentStep(1)}/>
                    } */}
                </Flex>
            </Flex>
        </>
    );
};

export default Onboard;
