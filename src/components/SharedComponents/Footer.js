
import Image from "next/image";
const Footer = () => {
  return (
    <footer className="relative w-full bg-custom-gradient py-8 px-4 md:px-8 lg:px-16 lg:py-16" id="contactus">
      <div className="absolute inset-0 bg-custom-gradient" />

      <div className="relative flex flex-col items-center  lg:mt-6 sm:mt-6"> 
        <div className="w-full flex justify-center mb-4 -mt-6   custom-range3:mt-2"> 
          <button className="relative w-[270px] h-[50px] bg-white border border-[#EBEBEB] rounded-lg text-[#5C5C5C] font-bold text-[20px] leading-[32px] tracking-wide flex items-center justify-center">
            <div className="absolute w-[18px] h-[18px] bg-[#6C60FE] rounded-full left-[10px] top-[50%] transform -translate-y-1/2 ml-10"></div>
            <span className="ml-[40px] text-black">LET’S HIRE US</span>
          </button>
        </div>

        <div className="text-neutral-0 text-center text-3xl font-bold leading-snug mb-8 md:text-4xl lg:text-5xl mt-6">
          Do You Have Some <br /> Project in Your Mind?
        </div> 

        <div className="flex justify-center">
          <button className="flex items-center justify-center px-4 py-2 sm:px-6 sm:py-3 gap-4 bg-primary shadow-lg rounded-lg text-neutral-0 text-lg font-medium   ">
            <span className="text-white text-sm sm:text-base">Hire Us</span>
            <Image
              src="/icons/arrow-ios-rightarrow.png"
              alt="Arrow Icon"
              width={24}
              height={24}
              className="w-4 h-4 sm:w-6 sm:h-6"
            />
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
