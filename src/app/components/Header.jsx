import Link from "next/link";
import React from "react";

const Header = () => {
  return (
    <>
      <header className="text-gray-600 body-font shadow-lg">
        <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
          <a className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
            
            <span className="ml-3 text-2xl">Khushi<span className="text-orange-500"> Interior</span></span>
          </a>
          <nav className="md:ml-auto md:mr-auto flex flex-wrap items-center text-base justify-center">
            <a className="mr-5 hover:text-gray-900">Home</a>
            <a className="mr-5 hover:text-gray-900">About Us</a>
            <a className="mr-5 hover:text-gray-900">Book Your Appointment</a>
            <a className="mr-5 hover:text-gray-900">Contact Us</a>
          </nav>
          <button className="inline-flex items-center bg-orange-500 border-0 py-1 px-3 focus:outline-none hover:bg-gray-200 rounded text-white mt-4 md:mt-0">
           <Link href={'tel:8076864102'}>Call Us</Link>
          </button>
        </div>
      </header>
    </>
  );
};

export default Header;
