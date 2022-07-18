import * as React from 'react';
import { useState } from 'react';
import Head from 'next/head';
import PageHeader from '../components/PageHeader';


export interface SecurePageProps {
    children: any;
    title?: string;
    leftContent?: any;
    rightContent?: any;
    footer?: any;
    hideNav?: boolean;
    hideHeader?: boolean;
    allowAnonymous?: boolean;
    header?: React.ReactNode
    // allowMembers?: boolean;
    // allowEmployers?: boolean;
    // allowAdmin?: boolean;
}

export default function SecurePage(props: SecurePageProps) {
    const title = props.title
        ? `${props.title} | Atlas MBA`
        : 'Atlas MBA';

    

    const header = props.header || <PageHeader />;
    const left = props.leftContent;
    const center = props.children;
    const right = props.rightContent;
    const footer = props.footer;

    return (
        <>
            <Head>
                <title>{title}</title>
                <link rel="icon" href="./compass.png" />
                <link rel="preconnect" href="https://fonts.gstatic.com" />
                <link
                    href="https://fonts.googleapis.com/css2?family=Montserrat:wght@300&display=swap"
                    rel="stylesheet"
                />
                <meta property="og:title" content="Atlas MBA App Checklist" />
                <meta property="og:image" content="./screenshot.png" />
            </Head>
            <script
                defer
                src="https://connect.podium.com/widget.js#API_TOKEN=bfb36ee9-33ab-4c52-8029-9f4627def168"
                id="podium-widget"
                data-api-token="bfb36ee9-33ab-4c52-8029-9f4627def168"
            ></script>
            <div className="page" style={{
                backgroundColor: '#008cd8',
                height: '100vh'
            }}>
                <div className="header" style={{zIndex: 100}}>{header}</div>
                <div className="left" style={{zIndex: 90}}>{left}</div>
                <div className="center" style={{zIndex: 80}}>{center}</div>
                <div className="right" style={{zIndex: 70}}>{right}</div>
                <div className="footer" style={{zIndex: 100}}>{footer}</div>
            </div>
        </>
    );
}
