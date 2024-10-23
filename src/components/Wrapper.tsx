import React from 'react';

interface WrapperProps {
  children: React.ReactNode;
  className?: string;
}

const Wrapper: React.FC<WrapperProps> = ({ children, className = '' }) => {
  return (
    <div
      className={`bg-white mx-auto rounded-full shadow-md flex flex-col items-center justify-center p-10 m-10 w-[600px] h-[600px] ${className}`}
    >
      {children}
    </div>
  );
};

export default Wrapper;
