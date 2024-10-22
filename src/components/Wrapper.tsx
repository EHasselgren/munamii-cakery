import React from 'react';

interface WrapperProps {
  children: React.ReactNode;
  className?: string;
}

const Wrapper: React.FC<WrapperProps> = ({ children, className = '' }) => {
  return (
    <div className={`bg-white mx-auto rounded-full shadow-md flex flex-col items-center justify-center p-10 ${className}`} style={{ width: '600px', height: '600px' }}>
      {children}
    </div>
  );
};

export default Wrapper;
