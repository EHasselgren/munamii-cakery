import React from 'react';
import PageHeader from '../components/PageHeader';
import ProductSlider from '../components/ProductSlider';
import { cupcakes, weddingCakes } from '../data/products';
import TextDisplay from '../components/TextDisplay';

// Function to shuffle an array
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
    slidesToShow: 2,
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
    <div className="container mx-auto my-8">
      <PageHeader title="Welcome to Munamii Cakery" />
      <TextDisplay text="  We create delicious cupcakes and wedding cakes made with love!" className="text-center" />
  
      <ProductSlider title="Our Delicious Products" products={shuffledProducts} settings={settings} />
    </div>
  );
};

export default Home;

