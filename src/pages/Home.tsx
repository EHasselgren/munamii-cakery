import React from 'react';
import PageHeader from '../components/PageHeader';
import ProductSlider from '../components/ProductSlider';
import { cupcakes, weddingCakes } from '../data/products';
import TextDisplay from '../components/TextDisplay';
import PageCard from '../components/PageCard';

const shuffleArray = (array: any[]) => {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
};

const Home: React.FC = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  const combinedProducts = [...cupcakes, ...weddingCakes];
  const shuffledProducts = shuffleArray(combinedProducts);

  return (
    <PageCard>
      <PageHeader title="Welcome to Munamii Cakery" />
      <TextDisplay text="At Munamii Cakery, we don’t just bake desserts; we craft unforgettable moments!" className="text-center my-4" />
      <TextDisplay text="With over a decade of experience, our passion for baking shines through in every handcrafted cupcake and wedding cake." className="text-center my-4" />
      <TextDisplay text="Every treat is made to order with the finest ingredients. Let us help you celebrate life's sweetest moments—contact us today for a custom quote!" className="text-center my-4" />
      <ProductSlider title="Our Irresistible Offerings" products={shuffledProducts} settings={settings} slidesToShow={3} className='mb-10' />
    </PageCard>
  );
};

export default Home;





