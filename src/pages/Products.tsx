import React, { useEffect, useState } from 'react';
import axios from 'axios';
import PageCard from '../components/PageCard';
import PageHeader from '../components/PageHeader';
import TextDisplay from '../components/TextDisplay';
import ProductSlider from '../components/ProductSlider';
import { homeSliderSettings } from '../utils/sliderSettings';
import Wrapper from '../components/Wrapper';

const Products: React.FC = () => {
  const [cupcakes, setCupcakes] = useState<any[]>([]);
  const [weddingCakes, setWeddingCakes] = useState<any[]>([]); 

  useEffect(() => {
    const fetchData = async () => {
      try {
        const cupcakeResponse = await axios.get('http://localhost:5000/api/cupcakes');
        const weddingCakeResponse = await axios.get('http://localhost:5000/api/weddingcakes'); 

        console.log("Cupcake Response: ", cupcakeResponse.data);
        console.log("Wedding Cake Response: ", weddingCakeResponse.data);
        
        setCupcakes(Array.isArray(cupcakeResponse.data) ? cupcakeResponse.data : []);
        setWeddingCakes(Array.isArray(weddingCakeResponse.data) ? weddingCakeResponse.data : []);
      } catch (error) {
        console.error("Error fetching data: ", error);
      }
    };

    fetchData();
  }, []); 

  return (
    <PageCard>
      <Wrapper>
        <PageHeader title="Indulge in Our Irresistible Treats!" className="" />
        <TextDisplay text="At Munamii Cakery, we don't just bake desserts; we create moments of joy! Our cupcakes and wedding cakes are handcrafted with love and the finest ingredients, ensuring every bite is a delightful experience." />
        <TextDisplay text="Discover our mouthwatering flavors that are sure to tantalize your taste buds! Whether you're celebrating a special occasion or simply treating yourself, we have something for everyone." />
      </Wrapper>
      <ProductSlider title="Delicious Cupcakes" products={cupcakes} settings={homeSliderSettings}/>
      <ProductSlider title="Elegant Wedding Cakes" products={weddingCakes} settings={homeSliderSettings}/>
      <img
        src='/images/munamiiLogo.png'
        alt='munamiiLogo'
        className="w-80 h-auto object-cover rounded-full mb-8 mt-4 mx-auto"
      />
    </PageCard>
  );
};

export default Products;
