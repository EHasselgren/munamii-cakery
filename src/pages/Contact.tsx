import React from 'react';
import PageCard from '../components/PageCard';
import PageHeader from '../components/PageHeader';
import TextDisplay from '../components/TextDisplay';
import Wrapper from '../components/Wrapper';
import { getImagePath } from '../utils/imageUtils';

const Contact: React.FC = () => {
  return (
    <PageCard>
      <Wrapper className='h-[400px] w-[400px]'>
      <PageHeader title="Contact Us"/>
      <TextDisplay text="Have questions or inquiries? We're here to help!"/>
      <TextDisplay text="Feel free to reach out to us via"/>
      <TextDisplay text="Phone: (123) 456-7890"/>
      <TextDisplay text="Email: munamiicakery@gmail.com"/>
      <TextDisplay text="We look forward to creating something special for you!"/>
      </Wrapper>
      <img
        src={getImagePath('/images/munamiiLogo.png')}
        alt='munamiiLogo'
        className="w-60 h-auto object-cover rounded-full  mx-auto"
      />
    </PageCard>
  );
};

export default Contact;
