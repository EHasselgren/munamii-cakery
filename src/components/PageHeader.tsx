import React from 'react';

interface PageHeaderProps {
    title: string;
}

const PageHeader: React.FC<PageHeaderProps> = ({ title }) => {
    return (
        <div className="py-3">
            <h2 className="font-whimsical text-3xl text-[#a72056] font-bold text-center">{title}</h2>
        </div>
    );
};

export default PageHeader;
