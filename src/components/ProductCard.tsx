

import React from 'react';

interface ProductCardProps {
  title: string;
  price: string;
  image: string;
}

const ProductCard: React.FC<ProductCardProps> = ({ title, price, image }) => {
  return (
    <div className="border border-pink-300 bg-white rounded-[140px] shadow-lg p-4 w-[200px] and h-[300px] transition-transform transform hover:scale-105 flex flex-col items-center mx-3 overflow-visible">
      <img src={image} alt={title} className="w-full h-auto object-cover rounded-full mb-4" />
      <div className="text-center">
        <h4 className="text-2xl font-bold text-[#008080] font-whimsical mb-2">{title}</h4>
        <p className="text-md text-[#008080] font-whimsical">{price}</p>
      </div>
    </div>
  );
};

export default ProductCard;
