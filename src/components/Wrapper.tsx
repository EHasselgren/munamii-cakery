import React from 'react';

interface WrapperProps {
  children: React.ReactNode;
  className?: string;
}

const Wrapper: React.FC<WrapperProps> = ({ children, className = '' }) => {
  return (
    <div className={`bg-white p-[140px] mx-2 rounded-full shadow-md ${className}`}>
      {children}
    </div>
  );
};

export default Wrapper;
