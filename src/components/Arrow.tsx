import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronRight, faChevronLeft } from '@fortawesome/free-solid-svg-icons';

export const SamplePrevArrow: React.FC<any> = ({ className, style, onClick }) => (
  <div onClick={onClick} className={`arrow ${className}`} style={{ ...style, display: 'block' }}>
    <FontAwesomeIcon icon={faChevronLeft} className="text-teal-700 text-3xl sm:text-2xl md:text-3xl" />
  </div>
);

export const SampleNextArrow: React.FC<any> = ({ className, style, onClick }) => (
  <div onClick={onClick} className={`arrow ${className}`} style={{ ...style, display: 'block' }}>
    <FontAwesomeIcon icon={faChevronRight} className="text-teal-700 text-3xl sm:text-2xl md:text-3xl" />
  </div>
);
