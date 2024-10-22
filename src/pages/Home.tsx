import React from 'react';
import PageHeader from '../components/PageHeader';
import ProductSlider from '../components/ProductSlider';
import { cupcakes, weddingCakes } from '../data/products';
import TextDisplay from '../components/TextDisplay';
import PageCard from '../components/PageCard';
import { homeSliderSettings } from '../utils/sliderSettings'; 
import TransparentWrapper from '../components/Wrapper'; 

const shuffleArray = (array: any[]) => {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
};

const Home: React.FC = () => {

  const combinedProducts = [...cupcakes, ...weddingCakes];
  const shuffledProducts = shuffleArray(combinedProducts);

  return (
    <PageCard>
      <TransparentWrapper>
      <PageHeader title="Welcome to Munamii Cakery"/>
      <TextDisplay text="At Munamii Cakery, we don’t just bake desserts; we craft unforgettable moments!"/>
      <TextDisplay text="With over a decade of experience, our passion for baking shines through in every handcrafted cupcake and wedding cake." />
      <TextDisplay text="Every treat is made to order with the finest ingredients. Let us help you celebrate life's sweetest moments—contact us today for a custom quote!" />
      </TransparentWrapper>
      <ProductSlider title="Our Irresistible Offerings" products={shuffledProducts} settings={homeSliderSettings} slidesToShow={4} className='mb-10' />
      <img
        src='/images/munamiiLogo.png'
        alt='munamiiLogo'
        className="w-48 h-auto object-cover rounded-full py-6 mx-auto"
      />
    </PageCard>
  );
};

export default Home;





