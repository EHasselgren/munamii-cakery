import React from 'react';

interface PageHeaderProps {
    title: string;
}

const PageHeader: React.FC<PageHeaderProps> = ({ title }) => {
    return (
        <div className="py-4">
            <h2 className="text-3xl text-pink-700 font-bold text-center my-4">{title}</h2>
        </div>
    );
};

export default PageHeader;

