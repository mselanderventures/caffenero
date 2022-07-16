import {
    CalendarOutlined,
    LeftOutlined,
    RightOutlined,
} from '@ant-design/icons';
import { Button, Carousel } from 'antd';
import { useRouter } from 'next/router';
import React from 'react';
// import StockImage from '../StockImage';
// import StockImageContainer from '../StockImageContainer';

export default function HomeCarouselMobile() {
    const router = useRouter();
    var two = [];
    for (var i = 0; i < 2; i++) {
        two.push(true);
    }
    return (
        <>
            {/* <div className="carousel-container">
                <Carousel
                    autoplay
                    initialSlide={1}
                    prevArrow={<LeftOutlined />}
                    nextArrow={<RightOutlined />}
                    arrows={true}
                    slidesToShow={2}
                    centerMode={true}
                    centerPadding={'10%'}
                    className="carousel"
                >
                    <StockImageContainer>
                        <div className="text-tile">
                            <Button
                                type="primary"
                                size="large"
                                onClick={() => { router.push('/BookNow') }}
                                style={{
                                    backgroundColor: '#157F1F',
                                    color: '#ffffff',
                                    fontSize: '20px',
                                    fontWeight: 400,
                                    height: '100%',
                                    width: '100%',
                                    margin: '0',
                                    position: 'absolute',
                                }}
                            >
                                <CalendarOutlined
                                    style={{ fontSize: '80px' }}
                                />
                                <br />
                                Book Now
                            </Button>
                        </div>
                        <StockImage seed={10} />
                    </StockImageContainer>
                    {two.map((post, index) => {
                        return (
                            <StockImageContainer>
                                <StockImage seed={index * 2} />
                                <StockImage seed={index * 2 + 1} />
                            </StockImageContainer>
                        );
                    })}
                    <StockImageContainer>
                        <StockImage seed={4} />
                        <div className="text-tile">
                            <Button
                                type="primary"
                                size="large"
                                onClick={() => { router.push('/BookNow') }}
                                style={{
                                    backgroundColor: '#157F1F',
                                    color: '#ffffff',
                                    fontSize: '2.5vw',
                                    position: 'absolute',
                                    width: '100%',
                                    height: '100%',
                                    left: 0,
                                    right: 0,
                                    margin: 'auto',
                                    lineHeight: '22px'
                                }}
                            >
                                <CalendarOutlined
                                    style={{ fontSize: '80px' }}
                                />
                                <br />
                                <span
                                    style={{
                                        fontSize: '20px'
                                        
                                    }}
                                >
                                    Make an
                                    <br />
                                    Appointment
                                </span>
                            </Button>
                        </div>
                    </StockImageContainer>
                    {two.map((post, index) => {
                        return (
                            <StockImageContainer>
                                <StockImage seed={6 + index * 2} />
                                <StockImage seed={6 + index * 2 + 1} />
                            </StockImageContainer>
                        );
                    })}
                </Carousel>
            </div>
            <style jsx>{`
                .carousel-container {
                }
                h1 {
                    color: #e0e0e0;
                    margin-left: 8px;
                    margin-top: 24px;
                    font-family: Inter, sans-serif;
                    weight: 600;
                    font-size: 4.5vw;
                    line-height: 4.5vw;
                }
                .text-tile {
                    background-color: #06aed5;
                    width: 100%;
                    height: 100%;
                    position: relative;
                }
            `}</style> */}
        </>
    );
}
