


'use client';
import React, { useState } from 'react';
import './Header.css'
import Image from 'next/image';
import Link from 'next/link';
import Popup from '../Popup'; 
import { Disclosure, DisclosureButton, DisclosurePanel } from '@headlessui/react';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';

const navigation = [
  { name: 'Home', href: '/', current: true },
  { name: 'About Us', href: '#aboutus', current: false },
  { name: 'Portfolio', href: '#portfolio-section', current: false },
  { name: 'Project', href: '/project', current: false },
];

const servicesDropdown = [
  { name: 'Service 1', href: '#service1' },
  { name: 'Service 2', href: '#service2' },
];

const pagesDropdown = [
  { name: 'Page 1', href: '#page1' },
  { name: 'Page 2', href: '#page2' },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(' ');
}

const Header = () => {
  const [isPopupVisible, setPopupVisible] = useState(false);
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

  const togglePopup = () => {
    setPopupVisible(!isPopupVisible);
  };

  return (
    <Disclosure as="nav" className="bg-white shadow ">
      {({ open }) => {
        setMobileMenuOpen(open);
        return (
          <>
            <div className="container mx-auto px-2 sm:px-6 lg:px-8">
              <div className="relative flex h-24 items-center justify-between">
                <div className="absolute inset-y-0 -left-8 flex items-center sm:hidden ">
                  {/* Mobile menu button */}
                  <DisclosureButton className="relative inline-flex items-center justify-center p-2 text-gray-500 hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-gray-300">
                    <span className="sr-only">Open main menu</span>
                    <Bars3Icon className={classNames(open ? 'hidden' : 'block', 'h-6 w-6')} aria-hidden="true" />
                    <XMarkIcon className={classNames(open ? 'block' : 'hidden', 'h-6 w-6')} aria-hidden="true" />
                  </DisclosureButton>
                </div>
                <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
                  <div className="flex-shrink-0 p-1 ">
                    <Link href="/" passHref>
                      <Image
                        src="/icons/Group8490startup-icon.png"
                        alt="Startup Icon"
                        width={224}
                        height={40}
                        className="block h-8 w-auto "
                      />
                    </Link>
                  </div>
                  <div className="hidden sm:ml-6 sm:block">
                    <div className="flex space-x-4">
                      {navigation.map((item) => (
                        <Link
                          key={item.name}
                          href={item.href}
                          className={classNames(
                            item.current ? 'text-[#6C60FE]' : 'text-gray-900 hover:text-[#6C60FE]',
                            'px-2 py-2 rounded-md text-lg font-medium'
                          )}
                        >
                          {item.name}
                        </Link>
                      ))}
                      <div className="relative    custom-range6:hidden">
                        <Disclosure as="div">
                          {({ open }) => (
                            <>
                              <DisclosureButton
                                className="flex items-center px-3 py-2 rounded-md text-lg font-medium text-gray-900 hover:text-[#6C60FE]"
                              >
                                Our Services
                                <svg
                                  className={classNames(open ? 'rotate-180' : 'rotate-0', 'ml-2 h-5 w-5 transform')}
                                  xmlns="http://www.w3.org/2000/svg"
                                  fill="none"
                                  viewBox="0 0 24 24"
                                  stroke="currentColor"
                                >
                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                                </svg>
                              </DisclosureButton>
                              <DisclosurePanel className="absolute left-0 mt-2 w-48 bg-white shadow-lg rounded-md    ">
                                <div className="py-1   ">
                                  {servicesDropdown.map((item) => (
                                    <Link
                                      key={item.name}
                                      href={item.href}
                                      className="block px-4 py-2 text-sm text-gray-900 hover:bg-gray-100"
                                    >
                                      {item.name}
                                    </Link>
                                  ))}
                                </div>
                              </DisclosurePanel>
                            </>
                          )}
                        </Disclosure>
                      </div>
                      <div className="relative  custom-range6:hidden">
                        <Disclosure as="div">
                          {({ open }) => (
                            <>
                              <DisclosureButton
                                className="flex items-center px-3 py-2 rounded-md text-lg font-medium text-gray-900 hover:text-[#6C60FE]"
                              >
                                Pages
                                <svg
                                  className={classNames(open ? 'rotate-180' : 'rotate-0', 'ml-2 h-5 w-5 transform')}
                                  xmlns="http://www.w3.org/2000/svg"
                                  fill="none"
                                  viewBox="0 0 24 24"
                                  stroke="currentColor"
                                >
                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                                </svg>
                              </DisclosureButton>
                              <DisclosurePanel className="absolute left-0 mt-2 w-48 bg-white shadow-lg rounded-md">
                                <div className="py-1">
                                  {pagesDropdown.map((item) => (
                                    <Link
                                      key={item.name}
                                      href={item.href}
                                      className="block px-4 py-2 text-sm text-gray-900 hover:bg-gray-100"
                                    >
                                      {item.name}
                                    </Link>
                                  ))}
                                </div>
                              </DisclosurePanel>
                            </>
                          )}
                        </Disclosure>
                      </div>
                    </div>
                  </div>
                </div>
                {!isMobileMenuOpen && (
                  <div className="absolute inset-y-0 right-0 hidden sm:flex items-center space-x-4   custom-range7:hidden">
                    <Link href="/portfolio">
                      <button className="flex items-center justify-center px-4 py-2 sm:px-6 sm:py-3 gap-4 bg-[#6C60FE] shadow-lg rounded-lg hover:bg-[#574bfb]">
                        <span className="text-white text-sm sm:text-base">Portfolio</span>
                        <Image
                          src="/icons/arrow-ios-rightarrow.png"
                          alt="Arrow Icon"
                          width={24}
                          height={24}
                          className="w-4 h-4 sm:w-6 sm:h-6"
                        />
                      </button>
                    </Link>
                    <button onClick={togglePopup} className="flex items-center justify-center px-4 py-2 sm:px-6 sm:py-3 gap-4 bg-[#181818] shadow-lg rounded-lg hover:bg-[#000000] ">
                      <span className="text-white text-sm sm:text-base">Contact Us</span>
                      <Image
                        src="/icons/arrow-ios-rightarrow.png"
                        alt="Arrow Icon"
                        width={24}
                        height={24}
                        className="w-4 h-4 sm:w-6 sm:h-6"
                      />
                    </button>
                  </div>
                )}
              </div>
            </div>

            <DisclosurePanel className="sm:hidden">
              <div className="space-y-1 px-2 pb-3 pt-2">
                {navigation.map((item) => (
                  <DisclosureButton
                    key={item.name}
                    as="a"
                    href={item.href}
                    className={classNames(
                      item.current ? 'text-[#6C60FE]' : 'text-gray-900 hover:text-[#6C60FE]',
                      'block px-3 py-2 rounded-md text-lg font-medium'
                    )}
                  >
                    {item.name}
                  </DisclosureButton>
                ))}
                {/* Portfolio and Contact Us buttons in the toggle menu with reduced width */}
                <div className="space-y-2 pt-4">
                  <Link href="/portfolio">
                    <button className="flex w-40 items-center justify-center px-3 py-2 gap-3 bg-[#6C60FE] shadow-lg rounded-lg hover:bg-[#574bfb]">
                      <span className="text-white text-sm">Portfolio</span>
                      <Image
                        src="/icons/arrow-ios-rightarrow.png"
                        alt="Arrow Icon"
                        width={20}
                        height={20}
                        className="w-4 h-4"
                      />
                    </button>
                  </Link>
                  <button onClick={togglePopup} className="flex w-40 items-center justify-center px-3 py-2 gap-3 bg-[#181818] shadow-lg rounded-lg hover:bg-[#000000]">
                    <span className="text-white text-sm">Contact Us</span>
                    <Image
                      src="/icons/arrow-ios-rightarrow.png"
                      alt="Arrow Icon"
                      width={20}
                      height={20}
                      className="w-4 h-4"
                    />
                  </button>
                </div>
              </div>
            </DisclosurePanel>

            {/* Popup Component */}
            {isPopupVisible && (
              <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
                <Popup onClose={togglePopup} />
              </div>
            )}
          </>
        );
      }}
    </Disclosure>
  );
};

export default Header;






