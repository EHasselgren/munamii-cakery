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
    dots: false,
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
    <div className={`mt-8 ${className} relative p-4 overflow-visible`}>
      <h3 className="text-6xl font-whimsical font-semibold mb-8 text-[#008080] text-center">{title}:</h3>
      <Slider {...sliderSettings} className='rounded-lg overflow-visible'> 
        {products.map(product => (
          <div key={product.id} className="p-2 overflow-visible"> 
            <ProductCard
              title={product.title}
              price={product.price}
              image={product.image}
            />
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default ProductSlider;

