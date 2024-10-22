import React from 'react';

interface PageCardProps {
  children: React.ReactNode;
  className?: string;
}

const PageCard: React.FC<PageCardProps> = ({ children, className = '' }) => {
  return (
    <div className="flex-grow container mx-auto my-12 flex items-center justify-center min-h-screen">
      <div className={`w-[full] max-w-full rounded-lg shadow-sm p-10 ${className}`}>
        {children}
      </div>
    </div>
  );
};

export default PageCard;
