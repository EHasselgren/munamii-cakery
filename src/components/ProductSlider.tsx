import React from 'react';
import ProductCard from './ProductCard';
import Slider from 'react-slick';

interface ProductSliderProps {
  title: string;
  products: { id: number; title: string; price: string; image: string }[];
  settings?: object;
  slidesToShow?: number;
  className?: string;
}

const ProductSlider: React.FC<ProductSliderProps> = ({
  title,
  products,
  settings = {},
  slidesToShow = 4,
  className = '',
}) => {
  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 400,
    slidesToShow,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: Math.min(slidesToShow, 3),
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: Math.min(slidesToShow, 1),
          slidesToScroll: 1,
        },
      },
    ],
    ...settings,
  };

  return (
    <div className={`mt-8 ${className}`}>
      <h3 className="text-3xl font-whimsical font-semibold mb-8 text-[#a72056] text-center">{title}:</h3>
      <Slider {...sliderSettings} className='rounded-lg'>
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
