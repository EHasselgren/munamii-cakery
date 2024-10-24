import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronRight, faChevronLeft } from '@fortawesome/free-solid-svg-icons';

export const SamplePrevArrow: React.FC<any> = (props) => {
    const { className, style, onClick } = props;
    return (
      <div onClick={onClick} className={`arrow ${className}`} style={{ ...style, display: 'block' }}>
      <FontAwesomeIcon icon={faChevronLeft} style={{ fontSize: '1.875rem', color: '#008080' }} />
      </div>
    );
  };
  
  export const SampleNextArrow: React.FC<any> = (props) => {
    const { className, style, onClick } = props;
    return (
      <div onClick={onClick} className={`arrow ${className}`} style={{ ...style, display: 'block' }}>
      <FontAwesomeIcon icon={faChevronRight} style={{ fontSize: '1.875rem', color: '#008080' }} />
      </div>
    );
  };

