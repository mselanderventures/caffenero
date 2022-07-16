import { CalendarOutlined } from '@ant-design/icons';
import { Button } from 'antd';
import { useRouter } from 'next/router';
import React from 'react';
import { Fade } from 'react-reveal';
import theme from '../styles/theme';

export default function Landing() {
    const router = useRouter();
    return (
        <>
            <div className="container">
                <div className="left-content">
                    <Fade bottom>
                        <h1
                            style={{
                                fontSize: '64px',
                                lineHeight: '72px',
                                maxWidth: '500px',
                                textAlign: 'left',
                                marginTop: '12px',
                                marginBottom: '0px',
                                fontWeight: 700,
                                fontFamily: 'Trebuchet MS',
                                color: 'white',
                            }}
                        >
                            Take Control of your MBA Application
                        </h1>
                    </Fade>
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
                            
                        </p>
                    </Fade>
                    <Fade bottom>
                        <div
                            style={{
                                display: 'flex',
                                flexDirection: 'row',
                                justifyContent: 'flex-start',
                                marginTop: 30
                            }}
                        >
                            <img
                                src="./apple-download.png"
                                className="image"
                                style={{
                                    margin: 8,
                                    marginLeft: 0,
                                    width: 160,
                                    height: 54,
                                    cursor: 'pointer',
                                }}
                            />
                            <img
                                src="./googleplay-download.png"
                                className="image"
                                style={{
                                    margin: 8,
                                    width: 180,
                                    height: 55,
                                    marginTop: 7,
                                    cursor: 'pointer',
                                }}
                            />
                        </div>
                    </Fade>
                </div>
                <div className="right-content">
                    <Fade bottom>
                        <img
                            src="./screenshot.png"
                            className="image"
                            style={{ width: 350, margin: 'auto' }}
                        />
                    </Fade>
                </div>
            </div>
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
