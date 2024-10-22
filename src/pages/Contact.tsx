import React from 'react';
import PageHeader from '../components/PageHeader';
import PageCard from '../components/PageCard';
import TextDisplay from '../components/TextDisplay';

const Contact: React.FC = () => {
  return (
    <PageCard>
      <PageHeader title="Contact Us" />
      <TextDisplay text="Have questions or inquiries? We're here to help!" className="text-center my-4" />
      <TextDisplay text="Feel free to reach out to us via email at: " className="text-center my-4" />
      <TextDisplay text="📧 munamiicakery@gmail.com" className="text-center my-2 font-bold" />
      <TextDisplay text="📞 Call us at: (123) 456-7890" className="text-center my-2" />
      <TextDisplay text="We look forward to creating something special for you!" className="text-center my-4" />
    </PageCard>
  );
};

export default Contact;
