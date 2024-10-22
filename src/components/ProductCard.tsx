
import React from 'react';

interface ProductCardProps {
  title: string;
  price: string;
  image: string;
}

const ProductCard: React.FC<ProductCardProps> = ({ title, price, image }) => {
  return (
    <div className="border  bg-white rounded-xl shadow-lg px-auto py-6 w-[340px] h-[430px]  m-4 transition-transform transform hover:scale-105 flex flex-col items-center overflow-visible">
      <img src={image} alt={title} className="w-[220px] h-[220px] object-cover rounded-full mb-4" />
      <div className="text-center flex-grow">
        <h4 className="text-5xl font-bold text-[#008080] font-whimsical mb-2">{title}</h4>
        <p className="text-4xl text-[#008080] pt-2 font-whimsical">{price}</p>
      </div>
    </div>
  );
};

export default ProductCard;

