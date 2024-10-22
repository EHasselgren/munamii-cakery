import React from 'react';
import { Link } from 'react-router-dom';

const Footer: React.FC = () => {
  return (
    <footer className="bg-[#e895b5] p-6 mt-8 shadow-lg">
      <div className="container mx-auto flex flex-col items-center md:flex-row justify-between">
        <p className="font-whimsical text-3xl text-white text-center md:text-left">
          &copy; 2024 Munamii Cakery
        </p>
        <ul className="flex space-x-6 mt-4 md:mt-0">
          <li>
            <Link to="/" className="font-whimsical text-3xl text-white hover:text-[#e895b5] transition duration-300 ease-in-out">
              Home
            </Link>
          </li>
          <li>
            <Link to="/contact" className="font-whimsical text-3xl text-white hover:text-[#e895b5] transition duration-300 ease-in-out">
              Instagram
            </Link>
          </li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;

