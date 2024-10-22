import React from 'react';
import { Link } from 'react-router-dom';

const Header: React.FC = () => {
  return (
    <header className="bg-[#e895b5] p-6 shadow-lg">
      <nav className="container mx-auto flex justify-between items-center">
        <img
          src="/images/munamiiLogo.png"
          alt="Munamii Logo"
          className="h-14 w-auto object-contain"
        />
        <ul className="flex space-x-6">
          <li>
            <Link to="/" className="font-whimsical text-3xl hover:text-[#e895b5] transition duration-300 ease-in-out text-white">
              Home
            </Link>
          </li>
          <li>
            <Link to="/about" className="font-whimsical text-3xl hover:text-[#e895b5] transition duration-300 ease-in-out text-white">
              About Us
            </Link>
          </li>
          <li>
            <Link to="/products" className="font-whimsical text-3xl hover:text-[#e895b5] transition duration-300 ease-in-out text-white">
              Products
            </Link>
          </li>
          <li>
            <Link to="/contact" className="font-whimsical text-3xl hover:text-[#e895b5] transition duration-300 ease-in-out text-white">
              Contact
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
