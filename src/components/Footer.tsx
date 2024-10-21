import React from 'react';
import { Link } from 'react-router-dom';

const Footer: React.FC = () => {
  return (
    <footer className="bg-pink-500 text-white p-6 mt-8 shadow-lg">
      <div className="container mx-auto flex flex-col items-center md:flex-row justify-between">
        <p className="text-center md:text-left">&copy; 2024 Munamii Cakery</p>
        <ul className="flex space-x-6 mt-4 md:mt-0">
          <li>
            <Link to="/" className="hover:text-yellow-300 transition duration-300 ease-in-out">
              Home
            </Link>
          </li>
          <li>
            <Link to="/contact" className="hover:text-yellow-300 transition duration-300 ease-in-out">
              Instagram
            </Link>
          </li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
