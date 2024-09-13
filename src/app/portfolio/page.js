
'use client'
import React from 'react';
import Image from 'next/image';
import leftStar from '/public/icons/Group 98left-star.png';
import rightStar from '/public/icons/Group 99right-star.png';
import SwiperSlider from '@/components/SwiperSlider';

const Portfolio = () => {
    return (


        <div
            className="relative flex flex-col items-center justify-start h-full"
            style={{ background: 'linear-gradient(to bottom, #e6fbfc, #f5faff)' }}
            id="portfolio-section"
        >



            <div className="absolute inset-0 bg-[rgba(0, 128, 255, 0.4)] z-0"></div>

            <div className="relative flex flex-col gap-12 mt-16 z-10 ] px-4 sm:px-6 md:px-8">
                <div className="w-full flex justify-center">
                    <button className="relative w-full sm:w-[220px] md:w-[250px] h-[50px] bg-white border border-[#EBEBEB] rounded-lg text-[#5C5C5C] font-bold text-[20px] leading-[32px] tracking-wide flex items-center justify-center" >
                        <div className="absolute w-[18px] h-[18px] bg-[#6C60FE] rounded-full left-[10px] top-[50%] transform -translate-y-1/2 ml-10"></div>
                        <span className="ml-[40px] text-black">Our Portfolio</span>
                    </button>
                </div>

                <div className="w-full flex justify-center">
                    <p
                        className="text-center text-[48px] leading-[90px] font-bold text-[#181818] sm:text-[36px] sm:leading-[60px] md:text-[42px] md:leading-[80px]"
                        style={{ fontFamily: "'Epilogue', sans-serif", fontStyle: "normal" }}
                    >
                        Digital <span style={{ color: 'rgba(158, 119, 237, 1)' }}>Masterpieces</span>
                    </p>
                </div>

                <div className="w-full text-center custom-range9:font-bold">
                    <p className="w-full sm:w-[90%] md:w-[80%] mx-auto lg:w-[850px]">
                        Digital Creations: Our Work Discover our portfolio to see how we turn creative ideas into impactful digital solutions.
                    </p>
                    <p className="w-full sm:w-[90%] md:w-[80%] mx-auto lg:w-[850px]">
                        From sleek websites to engaging apps, explore the diverse projects that showcase our expertise and innovation.
                    </p>
                </div>
            </div>


            <div className="absolute top-0 left-0 mt-4 ml-4 z-10   ">
                <Image src={leftStar} alt="Left Star" width={500} height={300} />
            </div>

            <div className="absolute top-0 right-0 mt-4 mr-4 z-10  ">
                <Image src={rightStar} alt="Right Star" width={450} height={300} />
            </div>



            <div className="relative z-10 mt-0 w-full max-w-[800px] h-[600px]    ">



                <SwiperSlider />
            </div>
        </div>
    );
};

export default Portfolio;
