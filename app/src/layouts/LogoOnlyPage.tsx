import * as React from 'react';
import { useState } from 'react';
import Head from 'next/head'
import LogoHeader from '../components/LogoHeader';

export interface LogoOnlyPageProps {
    children: any;
    title?: string;
    leftContent?: any;
    rightContent?: any;
    footer?: any;
    hideNav?: boolean;
    hideHeader?: boolean;
    allowAnonymous?: boolean;
    // allowMembers?: boolean;
    // allowEmployers?: boolean;
    // allowAdmin?: boolean;
}


export default function LogoOnlyPage(props: LogoOnlyPageProps) {

    const title = props.title ? `${props.title} | SquadEats` : "SquadEats";
    const header = <LogoHeader />
    const left = props.leftContent
    const center = props.children
    const right = props.rightContent
    const footer = props.footer

    return (
        <>
            <Head>
                <title>{title}</title>
                <link rel="icon" href="/talk.svg" />
                <link rel="preconnect" href="https://fonts.gstatic.com" />
                <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@300&display=swap" rel="stylesheet"/>
            </Head>
            <div className="page">
                <div className="header">{header}</div>
                <div className="left">{left}</div>
                <div className="center">{center}</div>
                <div className="right">{right}</div>
                <div className="footer">{footer}</div>
            </div>
        </>
    )
}