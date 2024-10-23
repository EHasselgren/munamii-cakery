import React, { useEffect, useState } from 'react';
import axios from 'axios'; 
import PageHeader from '../components/PageHeader';
import ProductSlider from '../components/ProductSlider';
import TextDisplay from '../components/TextDisplay';
import PageCard from '../components/PageCard';
import { homeSliderSettings } from '../utils/sliderSettings';
import Wrapper from '../components/Wrapper';

const Home: React.FC = () => {
  const [cupcakes, setCupcakes] = useState([]);
  const [weddingCakes, setWeddingCakes] = useState([]);

  const shuffleArray = (array: any[]) => {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
  };
  
  useEffect(() => {
    const fetchData = async () => {
      try {
        const cupcakeResponse = await axios.get('http://localhost:5000/api/cupcakes'); 
        const weddingCakeResponse = await axios.get('http://localhost:5000/api/weddingcakes'); 
        
        setCupcakes(cupcakeResponse.data); 
        setWeddingCakes(weddingCakeResponse.data); 
      } catch (error) {
        console.error("Error fetching data: ", error);
      }
    };

    fetchData();
  }, []); 

  const combinedProducts = [...cupcakes, ...weddingCakes];
  const shuffledProducts = shuffleArray(combinedProducts);

  return (
    <PageCard>
      <Wrapper className="flex-grow flex flex-col items-center justify-center">
        <PageHeader title="Welcome to Munamii Cakery" />
        <TextDisplay text="At Munamii Cakery, we don’t just bake desserts; we craft unforgettable moments!" />
        <TextDisplay text="With over a decade of experience, our passion for baking shines through in every handcrafted cupcake and wedding cake." />
        <TextDisplay text="Every treat is made to order with the finest ingredients. Let us help you celebrate life's sweetest moments—contact us today for a custom quote!" />
      </Wrapper>
      <ProductSlider title="Our Irresistible Offerings" products={shuffledProducts} settings={homeSliderSettings} slidesToShow={6} />
      <img
        src='/images/munamiiLogo.png'
        alt='munamiiLogo'
        className="w-80 h-auto object-cover rounded-full mb-2 py-6 mx-auto"
      />
    </PageCard>
  );
};

export default Home;





