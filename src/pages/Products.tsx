import React, { useEffect, useState } from 'react';
import axios from 'axios';
import PageCard from '../components/PageCard';
import PageHeader from '../components/PageHeader';
import TextDisplay from '../components/TextDisplay';
import ProductSlider from '../components/ProductSlider';
import { homeSliderSettings } from '../utils/sliderSettings';
import Wrapper from '../components/Wrapper';

const Products: React.FC = () => {
  const [cupcakes, setCupcakes] = useState<any[]>([]); // Default empty array
  const [weddingCakes, setWeddingCakes] = useState<any[]>([]); // Default empty array

  // Fetch data from API
  useEffect(() => {
    const fetchData = async () => {
      try {
        const cupcakeResponse = await axios.get('http://localhost:5000/api/cupcakes'); // For cupcakes
        const weddingCakeResponse = await axios.get('http://localhost:5000/api/wedding-cakes'); // For wedding cakes

        // Check the response data
        console.log("Cupcake Response: ", cupcakeResponse.data);
        console.log("Wedding Cake Response: ", weddingCakeResponse.data);
        
        // Ensure we're setting arrays
        setCupcakes(Array.isArray(cupcakeResponse.data) ? cupcakeResponse.data : []);
        setWeddingCakes(Array.isArray(weddingCakeResponse.data) ? weddingCakeResponse.data : []);
      } catch (error) {
        console.error("Error fetching data: ", error);
      }
    };

    fetchData();
  }, []); // Empty dependency array to run only on mount

  return (
    <PageCard>
      <Wrapper>
        <PageHeader title="Indulge in Our Irresistible Treats!" className="pb-2 mt-[-10px]" />
        <TextDisplay text="At Munamii Cakery, we don't just bake desserts; we create moments of joy! Our cupcakes and wedding cakes are handcrafted with love and the finest ingredients, ensuring every bite is a delightful experience." />
        <TextDisplay text="Discover our mouthwatering flavors that are sure to tantalize your taste buds! Whether you're celebrating a special occasion or simply treating yourself, we have something for everyone." />
      </Wrapper>
      <ProductSlider title="Delicious Cupcakes" products={cupcakes} settings={homeSliderSettings} slidesToShow={5} />
      <ProductSlider title="Elegant Wedding Cakes" products={weddingCakes} settings={homeSliderSettings} slidesToShow={5} />
      <img
        src='/images/munamiiLogo.png'
        alt='munamiiLogo'
        className="w-80 h-auto object-cover rounded-full pt-12 mx-auto"
      />
    </PageCard>
  );
};

export default Products;
