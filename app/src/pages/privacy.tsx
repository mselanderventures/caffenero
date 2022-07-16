import { CalendarOutlined } from '@ant-design/icons';
import { Button } from 'antd';
import { useRouter } from 'next/router';
import React from 'react';
import { Fade } from 'react-reveal';
import SecurePage from '../layouts/SecurePage';
import theme from '../styles/theme';

export default function Privacy() {
    const router = useRouter();
    return (
        <>
            <SecurePage>
                <div className="container">
                    <div className="left-content">
                        <Fade bottom>
                            <p
                                style={{
                                    fontSize: '18px',
                                    textAlign: 'left',
                                    marginTop: '56px',
                                    marginBottom: '0px',
                                    fontWeight: 400,
                                    fontFamily: 'Trebuchet MS',
                                    color: 'white',
                                }}
                            >
                                We don't collect any of your personal data.
                                Nothing that you enter into the app is ever on
                                our servers. We don't even have servers
                            </p>
                        </Fade>
                    </div>
                </div>
            </SecurePage>
            <style jsx>{`
                .container {
                    margin-top: 50px;
                    max-width: ${theme.maxWidth};
                    margin-left: auto;
                    margin-right: auto;
                    content-align: center;
                    text-align: center;
                    display: flex;
                    flex-direction: row;
                    height: '100%';
                }
                .left-content {
                    margin-top: 50px;
                    max-width: 50%;
                }
                .right-content {
                    flex-grow: 1;
                }
            `}</style>
        </>
    );
}
