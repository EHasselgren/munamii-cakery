import React from 'react';
import PageHeader from '../components/PageHeader';
import PageCard from '../components/PageCard';
import TextDisplay from '../components/TextDisplay';

const About: React.FC = () => {
  return (
    <PageCard>
      <PageHeader title="About Us" />
      <TextDisplay text="At Munamii Cakery, our passion for baking began in 2010. We specialize in creating handcrafted cakes that celebrate life's most precious moments." className="text-center my-4" />
      <TextDisplay text="Each cake is a unique masterpiece crafted with the finest ingredients, bringing joy and flavor to your special occasions. From elegant wedding cakes to delightful cupcakes, we ensure every creation is a true work of art." className="text-center my-4" />
      <TextDisplay text="We believe in spreading happiness through our baking, supporting sustainability by sourcing local ingredients whenever possible. This means every delicious bite also supports our community." className="text-center my-4" />
      <TextDisplay text="Join us on this delightful journey! Whether you're planning a wedding, a birthday, or simply want to treat yourself, Munamii Cakery is here to turn your dreams into reality." className="text-center my-4" />
      <img
        src='/images/munamiiLogo.png'
        alt='munamiiLogo'
        className="w-48 h-auto object-cover rounded-full py-4 mx-auto"
      />
    </PageCard>
  );
};

export default About;
