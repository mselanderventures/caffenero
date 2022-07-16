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
                                We are sorry you are having trouble with the app.
                                As of right now....theres nothing we can do. Its a free app. 
                                I made it to try and be helpful. Is it not helpful? Sorry. Its
                                free. So go make your own app. Or don't. I don't care what you do.
                                As long as I don't have to hear about it. 
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
