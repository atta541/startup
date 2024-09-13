
import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

function Popup({ onClose }) {
    return (
        <div className="h-full w-full flex justify-center items-center p-4 md:p-12">
            <div className="relative h-auto md:h-[650px] w-full max-w-[600px] rounded-3xl overflow-hidden">
                <div className="absolute w-[432px] h-[432px] bg-[#7F7FD5] blur-[200px] -left-6 -top-12 z-0"></div>
                <div className="absolute w-[432px] h-[432px] bg-[#7F7FD5] blur-[200px] -left-6 top-[543px] z-0"></div>
                <div className="absolute w-[432px] h-[432px] bg-[#86A8E7] blur-[200px] left-[215px] top-[241px] z-0"></div>
                <div className="absolute w-[483px] h-[483px] bg-[#91EAE4] blur-[200px] left-[508px] -top-[121px] z-0"></div>

                <div className="absolute inset-0 bg-gradient-to-br from-white/90 via-white/60 to-transparent backdrop-blur-[100px] z-10"></div>

                <div className="absolute top-4 right-4 z-30 cursor-pointer" onClick={onClose}>
                    <Image
                        src="/icons/icons8-close-64.png"
                        alt="Close Icon"
                        width={30}
                        height={30}
                        className="w-8 h-8 object-contain"
                    />
                </div>

                {/* Content */}
                <div className="relative z-20 p-4 ml-10">
                    <div className="grid grid-cols-1 h-24 w-full ">
                        <div className="flex justify-center items-center h-full w-full mt-4">
                            <Link href="/" passHref>
                                <Image
                                    src="/icons/Group8490startup-icon.png"
                                    alt="Startup Icon"
                                    width={224}
                                    height={40}
                                    className="w-full h-full object-contain"
                                />
                            </Link>
                        </div>
                    </div>

                    <div className="flex flex-col md:flex-row md:space-x-12 md:ml-10 mt-5 ">
                        <div className="flex flex-col mb-4 md:mb-0 ml-4">
                            <h1 className="font-bold">NAME</h1>
                            <input
                                type="text"
                                placeholder="Input Name"
                                className="mt-2 p-2 border border-gray-300 rounded-xl w-full md:w-44 h-12"
                            />
                        </div>

                        {/* Number and input */}
                        <div className="flex flex-col    ml-4">
                            <h1 className="font-bold">Number</h1>
                            <input
                                type="text"
                                placeholder="Input Number"
                                className="mt-2 p-2 border border-gray-300 rounded-xl w-full md:w-44 h-12"
                            />
                        </div>
                    </div>

                    <div className="flex flex-col md:ml-12 mt-5">
                        {/* EMAIL and input */}
                        <div className="flex flex-col ml-4">
                            <h1 className="font-bold">EMAIL</h1>
                            <input
                                type="text"
                                placeholder="Input Email"
                                className="mt-2 p-2 border border-gray-300 rounded-xl w-full md:w-[400px] h-14"
                            />
                        </div>
                    </div>

                    {/* MESSAGE Section */}
                    <div className="flex flex-col md:ml-12 mt-5  ">
                        <div className="flex flex-col ml-4 ">
                            <h1 className="font-bold">MESSAGE</h1>
                            <textarea
                                placeholder="Input Your Message"
                                className="mt-2 p-2 border border-gray-300 rounded-xl w-full md:w-[400px] h-32 resize-none"
                            />
                        </div>
                    </div>





                    <div className="flex justify-center mt-4 md:ml-4 xs:justify-center xs:ml-0">
                        <button className="flex justify-center h-12 items-center px-10 py-3 gap-2 bg-[#6C60FE] border shadow-lg rounded-[10px] text-white font-medium text-[20px] leading-[32px] border-none ml-0 md:ml-36">
                            SEND MESSAGE
                        </button>
                    </div>

                </div>
            </div>
        </div>
    );
}

export default Popup;