import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faShoppingBag,
  faBars,
  faTimes,
} from "@fortawesome/free-solid-svg-icons";
import { getImagePath } from "../utils/imageUtils";

const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  const handleLinkClick = () => {
    setIsOpen(false);
  };

  return (
    <header className="bg-[#008080] p-3 shadow-lg w-full relative">
      <nav className="flex justify-between items-center w-full">
        <div className="flex-shrink-0">
          <img
            src={getImagePath("/images/munamiiLogo.png")}
            alt="munamiiLogo"
            className="w-12 h-auto object-cover rounded-full "
          />
        </div>
        <button
          onClick={toggleMenu}
          className="text-white text-3xl md:hidden focus:outline-none"
          aria-label="Toggle menu"
        >
          <FontAwesomeIcon icon={isOpen ? faTimes : faBars} />
        </button>

        <ul
          className={`flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-6 md:flex ${
            isOpen ? "flex" : "hidden"
          } absolute md:static bg-[#008080] md:bg-transparent w-full md:w-auto left-0 top-0 p-5 md:p-0 z-10 items-center text-center`}
        >
          {isOpen && (
            <div className="flex justify-end w-full mb-4">
              <button
                onClick={handleLinkClick}
                className="text-white text-3xl"
                aria-label="Close menu"
              >
                <FontAwesomeIcon icon={faTimes} />
              </button>
            </div>
          )}
          <li>
            <Link
              to="/"
              onClick={handleLinkClick}
              className="font-whimsical text-3xl text-white hover:text-[#FFCAD4] transition duration-300 ease-in-out"
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              to="/about"
              onClick={handleLinkClick}
              className="font-whimsical text-3xl text-white hover:text-[#FFCAD4] transition duration-300 ease-in-out"
            >
              About Us
            </Link>
          </li>
          <li>
            <Link
              to="/products"
              onClick={handleLinkClick}
              className="font-whimsical text-3xl text-white hover:text-[#FFCAD4] transition duration-300 ease-in-out"
            >
              Products
            </Link>
          </li>
          <li>
            <Link
              to="/contact"
              onClick={handleLinkClick}
              className="font-whimsical text-3xl text-white hover:text-[#FFCAD4] transition duration-300 ease-in-out"
            >
              Contact
            </Link>
          </li>
          <li>
            <Link
              to="/shoppingBag"
              onClick={handleLinkClick}
              className="flex items-center justify-center space-x-2 font-whimsical text-5xl md:text-3xl text-white hover:text-[#FFCAD4] transition duration-300 ease-in-out"
            >
              <FontAwesomeIcon icon={faShoppingBag} />
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
