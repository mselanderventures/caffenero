import { useRouter } from 'next/router';
import React from 'react';
import SecurePage from '../layouts/SecurePage';
import { Fade } from 'react-reveal';
import { FacebookOutlined, InstagramOutlined, MessageOutlined, PhoneOutlined } from '@ant-design/icons';
import PageContent from '../components/PageContent';

export default function Contact() {
    return (
        <>
            <SecurePage>
                <h1
                    style={{
                        fontSize: '48px',
                        textAlign: 'left',
                        marginTop: '48px',
                        marginLeft: '10%',
                        marginBottom: '48px',
                        fontFamily: 'Montserrat, sans-serif',
                    }}
                >
                    Contact
                </h1>
                <PageContent>
                    <p className="text-block">
                        Got a question? Want to make an appointment? Give us a
                        call! (Or a text, or an email, or slide in to our dms)
                    </p>
                    <div
                        style={{
                            backgroundColor: '#dadce0',
                            borderRadius: '15px',
                            maxWidth: '250px',
                            padding: '20px',
                            float: 'left',
                            margin: '12px',
                            marginLeft: '0px',
                            marginTop: '0px',
                            width: '250px'
                        }}
                    >
                        <p className="contact-text"><PhoneOutlined /> Call</p>
                    </div>
                    <div
                        style={{
                            backgroundColor: '#dadce0',
                            borderRadius: '15px',
                            maxWidth: '250px',
                            padding: '20px',
                            float: 'left',
                            margin: '12px',
                            marginLeft: '0px',
                            marginTop: '0px',
                            width: '250px'
                        }}
                    >
                        <p className="contact-text"><MessageOutlined /> Text</p>
                    </div>
                    <div
                        style={{
                            backgroundColor: '#dadce0',
                            borderRadius: '15px',
                            maxWidth: '250px',
                            padding: '20px',
                            float: 'left',
                            margin: '12px',
                            marginLeft: '0px',
                            marginTop: '0px',
                            width: '250px'
                        }}
                    >
                        
                        <p className="contact-text"><InstagramOutlined /> Instagram</p>
                    </div>
                    <div
                        style={{
                            backgroundColor: '#dadce0',
                            borderRadius: '15px',
                            maxWidth: '250px',
                            padding: '20px',
                            float: 'left',
                            margin: '12px',
                            marginLeft: '0px',
                            marginTop: '0px',
                            width: '250px'
                        }}
                    >
                        <p className="contact-text"><FacebookOutlined /> Messenger</p>
                    </div>
                </PageContent>
            </SecurePage>
            <style jsx>{`
                .contact-text {
                    font-size: 25px;
                    color: #000000;
                    text-align: center;
                    font-family: 'Montserrat', sans-serif;
                    margin-bottom: 0px;
                    float:
                }
                .title {
                    font-size: 25px;
                    line-height: 25px;
                    color: #000000;
                    text-align: left;
                    font-weight: 700;
                    margin-top: 64px;
                    margin-bottom: 12px;
                }
                .text-block {
                    font-size: 25px;
                    color: #000000;
                    text-align: left;
                    font-family: 'Montserrat', sans-serif;
                }
            `}</style>
        </>
    );
}
