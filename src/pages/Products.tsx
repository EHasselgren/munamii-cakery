import React from 'react';
import ProductSlider from '../components/ProductSlider';
import PageHeader from '../components/PageHeader';
import TextDisplay from '../components/TextDisplay';
import { cupcakes, weddingCakes } from '../data/products';

const Products: React.FC = () => {

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

  return (
    <div className="container mx-auto my-8">
      <PageHeader title="Our Products" />
      <TextDisplay text="We bake the best cupcakes and weddingcakes in town!" className="text-center" />
      <TextDisplay text="Try our delicious flavors!" className="text-center" />
      <ProductSlider title="Cupcakes" products={cupcakes} settings={settings} />
      <ProductSlider title="Wedding Cakes" products={weddingCakes} settings={settings} />
    </div>
  );
};

export default Products;
