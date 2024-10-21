import React from 'react';
import { Link } from 'react-router-dom';


const Header: React.FC = () => {
  return (
    <header className="bg-pink-500 text-white p-6 shadow-lg">
      <nav className="container mx-auto flex justify-between items-center">
        <h1 className="text-2xl font-bold">Munamii Cakery</h1>
        <ul className="flex space-x-6">
          <li>
            <Link to="/" className="hover:text-yellow-300 transition duration-300 ease-in-out">
              Home
            </Link>
          </li>
          <li>
            <Link to="/about" className="hover:text-yellow-300 transition duration-300 ease-in-out">
              About Us
            </Link>
          </li>
          <li>
            <Link to="/products" className="hover:text-yellow-300 transition duration-300 ease-in-out">
              Products
            </Link>
          </li>
          <li>
            <Link to="/contact" className="hover:text-yellow-300 transition duration-300 ease-in-out">
              Contact
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;


