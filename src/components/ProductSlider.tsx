import React from 'react';
import ProductCard from './ProductCard';
import Slider from 'react-slick';

interface ProductSliderProps {
  title: string;
  products: { id: number; title: string; price: string; image: string }[];
  settings: object;
}

const ProductSlider: React.FC<ProductSliderProps> = ({ title, products, settings }) => {
  // Define default settings or merge with provided settings
  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4, // Show 3 slides at once
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 768, // Adjust for smaller screens
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 480, // Adjust for very small screens
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className="my-8">
      <h3 className="text-2xl font-semibold my-2 text-pink-600 text-center ">{title}</h3>
      <Slider {...sliderSettings} className='rounded-lg '>
        {products.map(product => (
          <ProductCard 
            key={product.id} 
            title={product.title} 
            price={product.price} 
            image={product.image} 
          />
        ))}
      </Slider>
    </div>
  );
};

export default ProductSlider;

