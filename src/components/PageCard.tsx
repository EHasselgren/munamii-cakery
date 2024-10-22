import React from 'react';

interface PageCardProps {
  children: React.ReactNode;
  className?: string;
}

const PageCard: React.FC<PageCardProps> = ({ children, className = '' }) => {
  return (
    <div className="flex-grow container mx-auto my-12 flex items-center justify-center min-h-screen">
      <div className={`max-w-5xl mx-auto border-[#a72056] rounded-lg  shadow-sm shadow-[#c96c95] p-8 bg-gradient-to-b from-white to-pink-300 ${className}`}>
        {children}
      </div>
    </div>
  );
};

export default PageCard;
