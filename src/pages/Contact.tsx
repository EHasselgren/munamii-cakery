import React from 'react';
import PageCard from '../components/PageCard';
import PageHeader from '../components/PageHeader';
import TextDisplay from '../components/TextDisplay';
import TransparentWrapper from '../components/TransparentWrapper';

const Contact: React.FC = () => {
  return (
    <PageCard>
      <TransparentWrapper>
      <PageHeader title="Contact Us"/>
      <TextDisplay text="Have questions or inquiries? We're here to help!"/>
      <TextDisplay text="Feel free to reach out to us via"/>
      <TextDisplay text="Phone: (123) 456-7890"/>
      <TextDisplay text="Email: munamiicakery@gmail.com"/>
      <TextDisplay text="We look forward to creating something special for you!"/>
      </TransparentWrapper>
    </PageCard>
  );
};

export default Contact;
