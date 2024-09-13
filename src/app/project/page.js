import React from 'react';
import Image from 'next/image';


// async function fetchProjects() {
//   const res = await fetch('http://localhost:3000/api/project', {
//     cache: 'no-store',
    
//   });

//   if (!res.ok) {
//     throw new Error('Network response was not ok');
//   }

//   return res.json();
// }




// async function fetchProjects() {
//   const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/project`, {
//     cache: 'no-store',
//   });

//   if (!res.ok) {
//     throw new Error('Network response was not ok');
//   }

//   return res.json();
// }


async function fetchProjects() {
  try {
    const apiUrl = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:3000';
    console.log('Fetching from:', `${apiUrl}/api/project`);
    
    const res = await fetch(`${apiUrl}/api/project`, {
      cache: 'no-store',
    });

    if (!res.ok) {
      console.error('Failed to fetch projects:', res.status, res.statusText);
      throw new Error('Failed to fetch projects');
    }

    return res.json();
  } catch (error) {
    console.error('Error in fetchProjects:', error);
    throw error;
  }
}



export default async function Projects() {
  const projects = await fetchProjects();


  return (
    <div
      className="border-6 border-blue-500 h-full w-full p-4 sm:p-6 lg:p-8"
      style={{
        background: 'linear-gradient(90deg, rgba(127, 127, 213, 0.5) -29.86%, rgba(134, 168, 231, 0.5) 55.73%, rgba(145, 234, 228, 0.5) 131.25%)',
      }}
    >
      {/* Button Section */}
      <div className="flex flex-col sm:flex-row justify-between items-center p-4">
        <div className="flex flex-col sm:flex-row w-full justify-between items-center space-y-4 sm:space-y-0 sm:space-x-4">
          <button className="relative w-full sm:w-[320px] h-[50px] bg-white border border-[#EBEBEB] rounded-lg text-[#5C5C5C] font-bold text-base sm:text-xl leading-tight sm:leading-normal tracking-wide flex items-center justify-center sm:mr-4">
            <div className="absolute w-[18px] h-[18px] bg-[#6C60FE] rounded-full left-[10px] top-[50%] transform -translate-y-1/2 ml-2 sm:ml-6"></div>
            <span className="ml-[30px] sm:ml-[40px] text-black">FEATURED PROJECTS</span>
          </button>

          <button className="flex items-center justify-center w-full sm:w-[200px] h-[50px] p-3 gap-2 sm:gap-4 rounded-[10px] bg-[#6C60FE] text-white font-semibold border-2 border-[#6C60FE] shadow-lg">
            <span className="text-xs sm:text-sm">See All Projects</span>
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

      {/* Title Section */}
      <div className="text-black font-bold text-xl sm:text-2xl lg:text-4xl leading-tight sm:leading-[35px] lg:leading-[67px] w-full sm:w-5/12 mb-6 sm:mb-8 mt-8 sm:mt-10 lg:mt-14">
        <p>
          Take A Look At Some Of <span className="text-[#6C60FE]">Our Work</span>
        </p>
      </div>

      {/* Content Section */}
      <div className="flex flex-col lg:flex-row w-full mt-12 sm:mt-24 h-auto">
        {/* Bullet Points */}
        <div className="w-full lg:w-3/12 border-black-500 mb-8 lg:mb-0 flex flex-col items-start">
          {['ALL', 'UI/UX DESIGN', 'ILLUSTRATION', 'PRESENTATION'].map((item, index) => (
            <div key={item} className="flex items-center mb-4 sm:mb-6">
              <div className={`w-2 h-2 sm:w-2.5 sm:h-2.5 rounded-full ${index === 0 ? 'bg-[#6C60FE]' : 'bg-[#5C5C5C]'}`}></div>
              <span className={`ml-2 sm:ml-3 font-bold text-lg sm:text-xl lg:text-2xl leading-tight sm:leading-7 lg:leading-9 underline ${index === 0 ? 'text-[#6C60FE]' : 'text-[#5C5C5C]'}`}>{item}</span>
            </div>
          ))}
        </div>

        {/* Project Cards */}
        <div className="w-full lg:w-6/12">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 p-4 sm:p-8 lg:p-12">
            {projects.slice(0, 4).map((project, index) => (
              <div
                key={project._id}
                className={`relative bg-white rounded-lg shadow-md overflow-hidden w-full max-w-[370px] mx-auto h-[350px] sm:h-[380px] ${index >= 2 ? 'sm:mt-8' : ''}`}
              >
                <Image
                  src={project.image}
                  alt={project.title}
                  width={370}
                  height={327}
                  className="w-full h-[200px] sm:h-[220px] object-cover"
                />
                <div className="absolute bottom-0 left-0 p-4 bg-white bg-opacity-80 w-full h-[150px] sm:h-[160px]">
                  <h3 className="text-lg sm:text-xl font-semibold mb-2 line-clamp-2">{project.title}</h3>
                  <p className="text-sm sm:text-base text-gray-500 line-clamp-3">{project.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}