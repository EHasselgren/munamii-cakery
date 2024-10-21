import React from 'react';
import PageHeader from '../components/PageHeader';

const About: React.FC = () => {
  return (
    <div className="container mx-auto my-8">
      <PageHeader title="About us" />
      <p className="mt-4">Munamii Cakery has been providing beautifully crafted cakes since 2010...</p>
    </div>
  );
};

export default About;
