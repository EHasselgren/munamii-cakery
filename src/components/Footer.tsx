import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faInstagram } from '@fortawesome/free-brands-svg-icons';

const Footer: React.FC = () => (
  <footer className="bg-teal-700 p-3 shadow-lg w-full">
    <div className="flex flex-col items-center md:flex-row justify-between w-full space-y-4 md:space-y-0">
      <p className="font-whimsical text-xl sm:text-2xl md:text-3xl text-white text-center md:text-left">
        &copy; 2024 Munamii Cakery
      </p>
      <ul className="flex space-x-6">
        <li>
          <Link to="https://www.facebook.com/munamiicupcakes/" className="flex items-center font-whimsical text-2xl sm:text-3xl text-white hover:text-pink-200 transition duration-300 ease-in-out">
            <FontAwesomeIcon icon={faFacebook} />
          </Link>
        </li>
        <li>
          <Link to="https://www.instagram.com/munamii.cakery/" className="flex items-center font-whimsical text-2xl sm:text-3xl text-white hover:text-pink-200 transition duration-300 ease-in-out">
            <FontAwesomeIcon icon={faInstagram} />
          </Link>
        </li>
      </ul>
    </div>
  </footer>
);

export default Footer;
