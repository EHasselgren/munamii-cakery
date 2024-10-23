import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingBag } from '@fortawesome/free-solid-svg-icons';

const Header: React.FC = () => {
  return (
    <header className="bg-[#008080] p-3 shadow-lg w-full">
      <nav className="flex justify-between items-center w-full">
        <div className="flex-shrink-0">
          <img
            src="/images/munamiiLogo.png"
            alt="Munamii Logo"
            className="h-[100px] left-0 top-0 object-contain"
          />
        </div>
        <ul className="flex space-x-6 justify-between top-0">
          <li>
            <Link to="/" className="font-whimsical text-5xl text-white hover:text-[#FFCAD4] transition duration-300 ease-in-out">
              Home
            </Link>
          </li>
          <li>
            <Link to="/about" className="font-whimsical text-5xl text-white hover:text-[#FFCAD4] transition duration-300 ease-in-out">
              About Us
            </Link>
          </li>
          <li>
            <Link to="/products" className="font-whimsical text-5xl text-white hover:text-[#FFCAD4] transition duration-300 ease-in-out">
              Products
            </Link>
          </li>
          <li>
            <Link to="/contact" className="font-whimsical text-5xl text-white hover:text-[#FFCAD4] transition duration-300 ease-in-out">
              Contact
            </Link>
          </li>
          <li>
            <Link to="/shoppingBag" className="flex items-center space-x-2 font-whimsical text-5xl text-white hover:text-[#FFCAD4] transition duration-300 ease-in-out">
              <FontAwesomeIcon icon={faShoppingBag} className="text-5xl" />
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
