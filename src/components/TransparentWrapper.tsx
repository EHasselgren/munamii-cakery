import React from 'react';

interface TransparentWrapperProps {
  children: React.ReactNode;
  className?: string;
}

const TransparentWrapper: React.FC<TransparentWrapperProps> = ({ children, className = '' }) => {
  return (
    <div className={`bg-white bg-opacity-70 p-[140px] mx-2 rounded-full shadow-md ${className}`}>
      {children}
    </div>
  );
};

export default TransparentWrapper;
