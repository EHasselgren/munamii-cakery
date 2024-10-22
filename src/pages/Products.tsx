import React from 'react';
import PageCard from '../components/PageCard';
import PageHeader from '../components/PageHeader';
import TextDisplay from '../components/TextDisplay';
import ProductSlider from '../components/ProductSlider';
import { cupcakes, weddingCakes } from '../data/products';
import { homeSliderSettings } from '../utils/sliderSettings';
import Wrapper from '../components/Wrapper';

const Products: React.FC = () => {

  return (
    <PageCard>
      <Wrapper>
      <PageHeader title="Indulge in Our Irresistible Treats!" className="pb-2 mt-[-10px]"/>
      <TextDisplay text="At Munamii Cakery, we don't just bake desserts; we create moments of joy! Our cupcakes and wedding cakes are handcrafted with love and the finest ingredients, ensuring every bite is a delightful experience."/>
      <TextDisplay text="Discover our mouthwatering flavors that are sure to tantalize your taste buds! Whether you're celebrating a special occasion or simply treating yourself, we have something for everyone."/>
      </Wrapper>
      <ProductSlider title="Delicious Cupcakes" products={cupcakes} settings={homeSliderSettings} slidesToShow={4} />
      <ProductSlider title="Elegant Wedding Cakes" products={weddingCakes} settings={homeSliderSettings}  slidesToShow={4} />
      <img
        src='/images/munamiiLogo.png'
        alt='munamiiLogo'
        className="w-48 h-auto object-cover rounded-full pt-12  mx-auto"
      />
    </PageCard>
  );
};

export default Products;
