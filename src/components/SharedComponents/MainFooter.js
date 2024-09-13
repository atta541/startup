
// import Image from "next/image";
// const MainFooter = () => {
//   return (
//     <div
//       className="flex flex-col w-full bg-[rgba(245, 244, 255, 1)] pt-16 "
//       style={{ background: 'rgba(245, 244, 255, 1)' }}
//       id="aboutus"
//     >
//       <div className="flex flex-col lg:flex-row justify-between px-8 lg:px-12">
//         <div className="flex flex-col gap-6 mb-8 lg:mb-0">
//           <div className="flex flex-row items-center gap-4">
//             <img
//               src="icons/icon-0logo.png"
//               alt="Logo"
//               className="w-16 h-[51px]"
//             />
//             <div className="text-[32px] font-bold text-[#6C60FE]">Startup</div>
//           </div>

//           <div className="text-[14px] font-normal text-[#313131]">
//             Copyright © 2023. Startup Agency
//           </div>

//           <div className="flex flex-col gap-3">
//             <div className="text-[16px] font-medium text-[#6C60FE]">Location</div>
//             <div className="text-[14px] font-normal text-[#313131] leading-6">
//               Lorem ipsum dolor sit amet,
//               <br />
//               consectetur adipiscing elit.
//               <br />
//               Pellentesque fermentum consectetur leo.
//             </div>
//           </div>
//         </div>

//         {/* Second Column: Our Services */}
//         <div className="flex flex-col gap-6 mb-8 lg:mb-0">
//           <div className="text-[16px] font-medium text-[#6C60FE]">Our Services</div>
//           <div className="text-[14px] font-medium text-[#313131]">Graphic Design</div>
//           <div className="text-[14px] font-medium text-[#313131]">Presentation Design</div>
//           <div className="text-[14px] font-medium text-[#313131]">Visual Identity Design</div>
//           <div className="text-[14px] font-medium text-[#313131]">Web Design</div>
//         </div>

//         <div className="flex flex-col gap-6 mb-8 lg:mb-0 lg:mr-[30rem]">
//           <div className="text-[16px] font-medium text-[#6C60FE]">Company</div>
//           <div className="text-[14px] font-medium text-[#313131]">About Us</div>
//           <div className="text-[14px] font-medium text-[#313131]">Services</div>
//           <div className="text-[14px] font-medium text-[#313131]">Pages</div>
//           <div className="text-[14px] font-medium text-[#313131]">Portfolio</div>
//           <div className="text-[14px] font-medium text-[#313131]">Contact Us</div>
//         </div>
//       </div>

//       <div className="flex flex-col lg:flex-row justify-between items-center px-8 lg:px-12 my-8">
//         <div className="flex-grow h-[1px] bg-[#DADADA] lg:w-[70%] w-full mb-4 lg:mb-0"></div>

//         <div className="flex gap-6 ml-0 lg:ml-6">
//           <img
//             src="icons/WhatsApp (2).png"
//             alt="WhatsApp"
//             className="w-8 h-8"
//           />
//           <img
//             src="icons/Facebook.png"
//             alt="Facebook"
//             className="w-8 h-8"
//           />
//           <img
//             src="icons/Instagram.png"
//             alt="Instagram"
//             className="w-8 h-8"
//           />
//         </div>
//       </div>

//       {/* Bottom Section: Centered Policies */}
//       <div className="flex justify-center items-center pb-8">
//         <div className="flex flex-col lg:flex-row gap-4 lg:gap-6 text-[14px] text-[#313131] text-center lg:text-left">
//           <span>Return Policy</span>
//           <span>Shipping Policy</span>
//           <span>Privacy Policy</span>
//           <span>Terms of Service</span>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default MainFooter;







import Image from "next/image";

const MainFooter = () => {
  return (
    <div
      className="flex flex-col w-full bg-[rgba(245, 244, 255, 1)] pt-16 "
      style={{ background: 'rgba(245, 244, 255, 1)' }}
      id="aboutus"
    >
      <div className="flex flex-col lg:flex-row justify-between px-8 lg:px-12">
        <div className="flex flex-col gap-6 mb-8 lg:mb-0">
          <div className="flex flex-row items-center gap-4">
            <Image
              src="/icons/icon-0logo.png"
              alt="Logo"
              className="w-16 h-[51px]"
              width={64} // Adjust width
              height={51} // Adjust height
            />
            <div className="text-[32px] font-bold text-[#6C60FE]">Startup</div>
          </div>

          <div className="text-[14px] font-normal text-[#313131]">
            Copyright © 2023. Startup Agency
          </div>

          <div className="flex flex-col gap-3">
            <div className="text-[16px] font-medium text-[#6C60FE]">Location</div>
            <div className="text-[14px] font-normal text-[#313131] leading-6">
              Lorem ipsum dolor sit amet,
              <br />
              consectetur adipiscing elit.
              <br />
              Pellentesque fermentum consectetur leo.
            </div>
          </div>
        </div>

        {/* Second Column: Our Services */}
        <div className="flex flex-col gap-6 mb-8 lg:mb-0">
          <div className="text-[16px] font-medium text-[#6C60FE]">Our Services</div>
          <div className="text-[14px] font-medium text-[#313131]">Graphic Design</div>
          <div className="text-[14px] font-medium text-[#313131]">Presentation Design</div>
          <div className="text-[14px] font-medium text-[#313131]">Visual Identity Design</div>
          <div className="text-[14px] font-medium text-[#313131]">Web Design</div>
        </div>

        <div className="flex flex-col gap-6 mb-8 lg:mb-0 lg:mr-[30rem]">
          <div className="text-[16px] font-medium text-[#6C60FE]">Company</div>
          <div className="text-[14px] font-medium text-[#313131]">About Us</div>
          <div className="text-[14px] font-medium text-[#313131]">Services</div>
          <div className="text-[14px] font-medium text-[#313131]">Pages</div>
          <div className="text-[14px] font-medium text-[#313131]">Portfolio</div>
          <div className="text-[14px] font-medium text-[#313131]">Contact Us</div>
        </div>
      </div>

      <div className="flex flex-col lg:flex-row justify-between items-center px-8 lg:px-12 my-8">
        <div className="flex-grow h-[1px] bg-[#DADADA] lg:w-[70%] w-full mb-4 lg:mb-0"></div>

        <div className="flex gap-6 ml-0 lg:ml-6">
          <Image
            src="/icons/WhatsApp (2).png"
            alt="WhatsApp"
            className="w-8 h-8"
            width={32} // Adjust width
            height={32} // Adjust height
          />
          <Image
            src="/icons/Facebook.png"
            alt="Facebook"
            className="w-8 h-8"
            width={32} // Adjust width
            height={32} // Adjust height
          />
          <Image
            src="/icons/Instagram.png"
            alt="Instagram"
            className="w-8 h-8"
            width={32} // Adjust width
            height={32} // Adjust height
          />
        </div>
      </div>

      {/* Bottom Section: Centered Policies */}
      <div className="flex justify-center items-center pb-8">
        <div className="flex flex-col lg:flex-row gap-4 lg:gap-6 text-[14px] text-[#313131] text-center lg:text-left">
          <span>Return Policy</span>
          <span>Shipping Policy</span>
          <span>Privacy Policy</span>
          <span>Terms of Service</span>
        </div>
      </div>
    </div>
  );
};

export default MainFooter;
