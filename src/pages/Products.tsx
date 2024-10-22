import React from 'react';
import ProductSlider from '../components/ProductSlider';
import PageHeader from '../components/PageHeader';
import TextDisplay from '../components/TextDisplay';
import { cupcakes, weddingCakes } from '../data/products';
import PageCard from '../components/PageCard';

const Products: React.FC = () => {
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

  return (
    <PageCard>
      <PageHeader title="Indulge in Our Irresistible Treats!" />
      <TextDisplay
        text="At Munamii Cakery, we don't just bake desserts; we create moments of joy! Our cupcakes and wedding cakes are handcrafted with love and the finest ingredients, ensuring every bite is a delightful experience."
        className="text-center mb-4 text-lg leading-relaxed"
      />
      <TextDisplay
        text="Discover our mouthwatering flavors that are sure to tantalize your taste buds! Whether you're celebrating a special occasion or simply treating yourself, we have something for everyone."
        className="text-center mb-8 text-lg leading-relaxed"
      />

      <ProductSlider title="Delicious Cupcakes" products={cupcakes} settings={settings} slidesToShow={4} />
      <ProductSlider title="Elegant Wedding Cakes" products={weddingCakes} settings={settings} slidesToShow={4} />
    </PageCard>
  );
};

export default Products;
