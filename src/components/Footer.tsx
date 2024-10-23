import React from 'react';
import { Link } from 'react-router-dom';

const Footer: React.FC = () => {
  return (
    <footer className="bg-[#008080] p-3 shadow-lg w-full">
      <div className="flex flex-col items-center md:flex-row justify-between w-full">
        <p className="font-whimsical text-3xl text-white text-center md:text-left">
          &copy; 2024 Munamii Cakery
        </p>
        <ul className="flex space-x-6 mt-4 md:mt-0">
          <li>
            <Link to="/" className="font-whimsical text-3xl text-white hover:text-[#FFCAD4] transition duration-300 ease-in-out">
              Facebook
            </Link>
          </li>
          <li>
            <Link to="/contact" className="font-whimsical text-3xl text-white hover:text-[#FFCAD4] transition duration-300 ease-in-out">
              Instagram
            </Link>
          </li>
        </ul> 
      </div>
    </footer>
  );
};

export default Footer;



