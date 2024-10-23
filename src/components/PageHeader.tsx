import React from 'react';

interface PageHeaderProps {
  title: string;
  className?: string; 
}

const PageHeader: React.FC<PageHeaderProps> = ({ title, className = '' }) => {
  return (
    <div className={className}>
      <h2 className="font-whimsical text-5xl mb-4 text-[#008080] font-bold text-center">
        {title}
      </h2>
    </div>
  );
};

export default PageHeader;
