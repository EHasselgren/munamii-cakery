import React from 'react';

interface PageCardProps {
  children: React.ReactNode;
  className?: string;
}

const PageCard: React.FC<PageCardProps> = ({ children, className = '' }) => {
  return (
    <div className="flex flex-col min-h-screen container mx-auto my-0 flex-grow items-center justify-center">
      <div className={`w-full max-w-full rounded-lg ${className}`}>
        {children}
      </div>
    </div>
  );
};

export default PageCard;
