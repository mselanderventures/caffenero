import { Form, Input, Button, Divider } from 'antd';
import { useForm } from '../services/useForm';
import auth from '../services/auth';
import { useRouter } from 'next/router';
import theme from '../styles/theme';
import React, { useState } from 'react';
import { Flex } from 'theme-ui';
import { RegisterComponentForm } from '../components/Login/RegisterComponentForm';
import { LoginComponentForm } from '../components/Login/LoginComponentForm';
import Logo from '../components/Logo';

export default function Login() {
    const [isSignUpPage, setIsSignUpPage] = useState(false);

    return (
        <>
            <>
                <div className="page">
                    <div style={{ height: 56 }}></div>
                    <div className="container">
                        <div className="logo-container">
                            <Logo
                                black={"true"}
                                height={56}
                                style={{ display: 'block', margin: 'auto' }}
                            />
                        </div>
                        <div className="form-container">
                            {isSignUpPage ? (
                                <RegisterComponentForm />
                            ) : (
                                <LoginComponentForm />
                            )}
                        </div>
                    </div>
                    <div className="create-account-container">
                        <Divider
                            style={{
                                marginBottom: '8px',
                                color: 'white',
                            }}
                            plain
                        >
                            {isSignUpPage
                                ? 'Already have a Business Portal account?'
                                : 'New to SquadEats Business Portal?'}
                        </Divider>
                        <Button
                            type="default"
                            size="large"
                            style={{
                                width: '100%',
                                marginBottom: '16px',
                                fontWeight: 600,
                                boxShadow: `2px 2px 5px 1px rgba(0,0,0,0.2)`,
                            }}
                            onClick={() => setIsSignUpPage(!isSignUpPage)}
                        >
                            {isSignUpPage ? 'Log in' : 'Sign up'}
                        </Button>
                    </div>
                </div>
            </>
            <style jsx>{`
                .sign-in-title {
                    text-align: center;
                    align-items: center;
                    margin-left: auto;
                    margin-right: auto;
                }
                .page {
                    justify-content: center;
                    align-items: center;
                    background-color: ${theme.colors.primary};
                    height: 100%;
                }
                .container {
                    max-width: ${isSignUpPage ? '40rem' : theme.loginWidth};
                    background-color: white;
                    align-items: center;
                    margin-left: auto;
                    margin-right: auto;
                    border: 1px solid ${theme.colors.secondary};
                    border-radius: 5px;
                    box-shadow: 2px 2px 5px 1px rgba(0, 0, 0, 0.2);
                }
                .create-account-container {
                    max-width: ${theme.loginWidth};
                    align-items: center;
                    margin-left: auto;
                    margin-right: auto;
                    margin-top: 16px;
                }
                .logo-container {
                    margin-top: 16px;
                    margin-bottom: 8px;
                }
                .form-container {
                    padding-left 32px;
                    padding-right: 32px;
                    margin-left: auto;
                    margin-right: auto;
                }
            `}</style>
        </>
    );
}
