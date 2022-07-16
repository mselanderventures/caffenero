import SecurePage from '../layouts/SecurePage';
import { useRouter } from 'next/router';
import React from 'react';
import { useWindowDimensions } from '../services/useWindowDimensions';
import Landing from '../containers/Landing';
import LandingMobile from '../containers/LandingMobile';


export default function Home() {
    const { width, height } = useWindowDimensions();
    const router = useRouter();

    const isMobile = width < 800;

    return (
        <>
            <SecurePage>
                {isMobile ? (
                    <>
                        <LandingMobile/>
                    </>
                ) : (
                    <>
                        <Landing/>
                    </>
                )}
            </SecurePage>
            <style jsx>{`
                .reviews-section {
                    margin-top: 96px;
                    padding-top: 112px;
                    padding-bottom: 96px;
                    background-color: #ff7700;
                    background-image: url('desktop.jpeg');
                    background-size: cover;
                }
                
            `}</style>
        </>
    );
}
