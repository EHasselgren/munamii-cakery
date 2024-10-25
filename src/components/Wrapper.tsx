import React from 'react';
import { useMediaQuery } from '@mui/material';

interface WrapperProps {
  children: React.ReactNode;
  className?: string;
}

const Wrapper: React.FC<WrapperProps> = ({ children, className = '' }) => {
  const isLargeScreen = useMediaQuery('(min-width:768px)');

  return isLargeScreen ? (
    <div
      className={`bg-white mx-auto rounded-full shadow-md flex flex-col items-center justify-center 
                  p-10 m-10 w-[37.5rem] h-[37.5rem] ${className}`}
    >
      {children}
    </div>
  ) : (
    <>{children}</> 
  );
};

export default Wrapper;
