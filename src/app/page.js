import Image from 'next/image';

const HomePage = () => {
  return (
    <>


      <div className="w-full bg-cover bg-center min-h-screen relative pt-22 lg:h-[1000px] custom-mobile:h-[1500px] custom-range:h-[900px]    custom-range4:h-[750px]     custom-range8:h-[700px]" style={{ marginTop: '5.1rem', minHeight: '73vh' }}>


        <div className="absolute inset-x-1/2 transform -translate-x-1/2 flex flex-col items-center justify-center w-full px-4 lg:px-0 lg:w-[1200px] mt-4">



          <div className="relative text-center font-epilogue text-[24px] leading-[30px] font-bold text-[#181818] sm:text-[36px] sm:leading-[40px] lg:text-[72px] lg:leading-[78px]">
            We Provide <span className="text-[#6C60FE]">the Best <br />
              Services</span> for Your
            <br />
            Business
          </div>

          {/* Subtext */}
          <div className="text-center mt-4 font-epilogue text-[16px] leading-[24px] font-normal text-[#5C5C5C] sm:text-[24px] sm:leading-[36px] lg:w-[599px]  custom-range9:font-bold">
            We have almost 15+ years of experience to <br />
            helping consulting services and give business <br />
            solution
          </div>
          {/* Buttons */}
          <div className="flex flex-col items-center gap-4 mt-6 ">
            {/* Hire Us Now Button */}
            <button className="flex items-center justify-center w-full sm:w-auto px-6 py-3 gap-4 rounded-[10px] bg-[#6C60FE] text-white font-semibold border-2 border-[#6C60FE] shadow-lg">
              <span className="text-sm sm:text-base">Hire Us Now</span>
              <Image
                src="/icons/arrow-ios-rightarrow.png"
                alt="Arrow Icon"
                width={24}
                height={24}
                className="w-4 h-4 sm:w-6 sm:h-6"
              />
            </button>

            <div className="font-epilogue text-[16px] sm:text-[20px] leading-[24px] sm:leading-[32px] text-[#989898]">
              or
            </div>

            {/* Watch Our Profile Button */}
            <button className="relative flex items-center justify-center  w-full sm:w-[319px] h-[64px] sm:h-[80.36px] bg-white border-2 border-[#6C60FE] rounded-full shadow-md  custom-range3:w-[200px] custom-range3:p-0 " >
              <div className="absolute w-[40px] h-[40px] sm:w-[60px]  sm:h-[53.89px] left-4 top-1/2 transform -translate-y-1/2 bg-[#FFC447] rounded-full shadow-lg flex items-center justify-center">
                <Image
                  src="/icons/chevron-right.png"
                  alt="Chevron Icon"
                  width={40}
                  height={40}
                  className="w-[30px] h-[30px] sm:w-[49.36px] sm:h-[46.67px]"
                />
              </div>
              <span className="text-[#6C60FE] font-semibold text-[16px] sm:text-[20px] leading-[24px] sm:leading-[32px] ml-14 sm:ml-16  ">
                Watch Our Profile
              </span>
            </button>
          </div>

          {/* Client Section */}
          <div className="mt-12 lg:mt-16 w-full lg:w-[1200px] border-2 border-[#EBEBEB] bg-[#C5E2F2] rounded-full backdrop-blur-[100px] h-auto lg:h-[253px] p-6 lg:p-0    custom-range:w-[650px]     custom-range5:w-[600px]">
            <div className="text-center mt-4 font-epilogue text-[18px] leading-[24px] sm:text-[20px] sm:leading-[32px] text-neutral-n900 text-black">
              Take care more than <span className="text-blue-500">1k+ </span> clients
            </div>
            <div className="flex flex-wrap items-center justify-center space-x-4 mt-6 lg:mt-10">
              <Image
                src="/icons/arrow-ios-leftleft.png"
                alt="Arrow Left Icon"
                width={30}
                height={30}
                className="w-5 h-5 lg:w-6 lg:h-6     custom-range3:hidden"
              />
              <Image
                src="/icons/Fictional company logo1.png"
                alt="Fictional Logo 1"
                width={100}
                height={30}
                className="w-[100px] h-[30px] sm:w-[152px] sm:h-[47px]"
              />
              <Image
                src="/icons/Fictional company logo2.png"
                alt="Fictional Logo 2"
                width={120}
                height={30}
                className="w-[120px] h-[30px] sm:w-[176px] sm:h-[47px]"
              />
              <Image
                src="/icons/Fictional company logo3.png"
                alt="Fictional Logo 3"
                width={140}
                height={30}
                className="w-[140px] h-[30px] sm:w-[202px] sm:h-[47px]"
              />
              <Image
                src="/icons/Fictional company logo4.png"
                alt="Fictional Logo 4"
                width={150}
                height={30}
                className="w-[150px] h-[30px] sm:w-[225px] sm:h-[47px]"
              />
              <Image
                src="/icons/arrow-ios-leftright.png"
                alt="Arrow Right Icon"
                width={30}
                height={30}
                className="w-5 h-5 lg:w-6 lg:h-6   custom-range3:hidden"
              />
            </div>
          </div>
        </div>
      </div>

    </>

  );
};

export default HomePage;
