import React from 'react';
import ProductCard from './ProductCard';
import Slider from 'react-slick';
import { SampleNextArrow, SamplePrevArrow } from './Arrow'; 

interface ProductSliderProps {
  title: string;
  products: { _id: string; title: string; price: string; image: string; type: string }[]; 
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
    nextArrow: <SampleNextArrow to="next" />,
    prevArrow: <SamplePrevArrow to="prev" />,
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
    <div className={`${className} relative py-4`}>
      <h3 className="text-4xl font-whimsical font-semibold mb-2 text-[#008080] text-center">
        {title}:
      </h3>
      <Slider {...sliderSettings} className="rounded-lg">
        {products.map(product => {
          return (
            <div key={`${product._id}`}>
              <ProductCard
                title={product.title}
                price={product.price}
                imagePath={product.image}
                _id={product._id}
                itemType={product.type} 
/>
</div>
          );
        })}
      </Slider>
    </div>
  );
};

export default ProductSlider;
