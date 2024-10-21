import React from 'react';
import PageHeader from '../components/PageHeader';

const Contact: React.FC = () => {
  return (
    <div className="container mx-auto my-8">
      <PageHeader title="Contact us" />
      <p className="mt-4">For any inquiries, please email us at: munamiicakery@gmail.com or call us at (123) 456-7890</p>
    </div>
  );
};

export default Contact;
