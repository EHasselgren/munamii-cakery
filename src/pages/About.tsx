import React from 'react';
import PageCard from '../components/PageCard';
import PageHeader from '../components/PageHeader';
import TextDisplay from '../components/TextDisplay';
import Wrapper from '../components/Wrapper';

const About: React.FC = () => {
  return (
    <PageCard>
      <Wrapper className='w-[500px] h-[500px]'>
      <PageHeader title="About Us" className=''/>
      <TextDisplay text="At Munamii Cakery, our passion for baking began in 2010. We specialize in creating handcrafted cakes that celebrate life's most precious moments."/>
      <TextDisplay text="Each cake is a unique masterpiece crafted with the finest ingredients, bringing joy and flavor to your special occasions. From elegant wedding cakes to delightful cupcakes, we ensure every creation is a true work of art."/>
      <TextDisplay text="We believe in spreading happiness through our baking, supporting sustainability by sourcing local ingredients whenever possible. This means every delicious bite also supports our community."/>
      </Wrapper>
      <img
        src='/images/munamiiLogo.png'
        alt='munamiiLogo'
        className="w-80 h-auto object-cover rounded-full pb-10 mx-auto"
      />
    </PageCard>
  );
};

export default About;
