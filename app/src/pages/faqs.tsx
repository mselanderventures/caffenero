import { useRouter } from 'next/router';
import React from 'react';
import SecurePage from '../layouts/SecurePage';
import { Fade } from 'react-reveal';
import PageContent from '../components/PageContent';

export default function FAQs() {
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
                    FAQs
                </h1>
                <PageContent>
                    <Fade>
                        <p className="title">
                            Q: I have sensitive teeth, does it hurt at all?
                        </p>
                    </Fade>
                    <Fade>
                        <p className="text-block">
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit. Nunc eget placerat nulla. Mauris ut leo
                            ultrices, auctor erat eu, efficitur metus.
                            Suspendisse sit amet tortor sapien. Suspendisse
                            tellus quam, gravida tempus feugiat et, consectetur
                            ut augue. Aenean pulvinar velit et ultrices
                            consectetur. Integer nec aliquet sem, quis tempor
                            massa. Nullam consequat, tortor eget rhoncus
                            facilisis, lorem neque maximus lacus, vitae interdum
                            leo enim molestie odio.
                        </p>
                    </Fade>
                    <Fade>
                        <p className="title">
                            Q: I have sensitive teeth, does it hurt at all?
                        </p>
                    </Fade>
                    <Fade>
                        <p className="text-block">
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit. Nunc eget placerat nulla. Mauris ut leo
                            ultrices, auctor erat eu, efficitur metus.
                            Suspendisse sit amet tortor sapien. Suspendisse
                            tellus quam, gravida tempus feugiat et, consectetur
                            ut augue. Aenean pulvinar velit et ultrices
                            consectetur. Integer nec aliquet sem, quis tempor
                            massa. Nullam consequat, tortor eget rhoncus
                            facilisis, lorem neque maximus lacus, vitae interdum
                            leo enim molestie odio.
                        </p>
                    </Fade>
                    <Fade>
                        <p className="title">
                            Q: I have sensitive teeth, does it hurt at all?
                        </p>
                    </Fade>
                    <Fade>
                        <p className="text-block">
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit. Nunc eget placerat nulla. Mauris ut leo
                            ultrices, auctor erat eu, efficitur metus.
                            Suspendisse sit amet tortor sapien. Suspendisse
                            tellus quam, gravida tempus feugiat et, consectetur
                            ut augue. Aenean pulvinar velit et ultrices
                            consectetur. Integer nec aliquet sem, quis tempor
                            massa. Nullam consequat, tortor eget rhoncus
                            facilisis, lorem neque maximus lacus, vitae interdum
                            leo enim molestie odio.
                        </p>
                    </Fade>
                    <Fade>
                        <p className="title">
                            Q: I have sensitive teeth, does it hurt at all?
                        </p>
                    </Fade>
                    <Fade>
                        <p className="text-block">
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit. Nunc eget placerat nulla. Mauris ut leo
                            ultrices, auctor erat eu, efficitur metus.
                            Suspendisse sit amet tortor sapien. Suspendisse
                            tellus quam, gravida tempus feugiat et, consectetur
                            ut augue. Aenean pulvinar velit et ultrices
                            consectetur. Integer nec aliquet sem, quis tempor
                            massa. Nullam consequat, tortor eget rhoncus
                            facilisis, lorem neque maximus lacus, vitae interdum
                            leo enim molestie odio.
                        </p>
                    </Fade>

                </PageContent>
            </SecurePage>
            <style jsx>{`
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
