import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faInstagram } from '@fortawesome/free-brands-svg-icons';

const Footer: React.FC = () => {
  return (
    <footer className="bg-[#008080] p-3 shadow-lg w-full">
      <div className="flex flex-col items-center md:flex-row justify-between w-full">
        <p className="font-whimsical text-3xl text-white text-center md:text-left">
          &copy; 2024 Munamii Cakery
        </p>
        <ul className="flex space-x-6 mt-4 md:mt-0">
          <li>
            <Link to="https://www.facebook.com/munamiicupcakes/" className="flex items-center font-whimsical text-3xl pt-[0.15625rem] text-white hover:text-[#FFCAD4] transition duration-300 ease-in-out">
              <FontAwesomeIcon icon={faFacebook} className=" " />
            </Link>
          </li>
          <li>
            <Link to="https://www.instagram.com/munamii.cakery/" className="flex items-center font-whimsical text-3xl text-white hover:text-[#FFCAD4] transition duration-300 ease-in-out">
              <FontAwesomeIcon icon={faInstagram} className=" fa-lg" />
            </Link>
          </li>
        </ul> 
      </div>
    </footer>
  );
};

export default Footer;
