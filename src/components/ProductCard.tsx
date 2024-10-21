import React from 'react';

interface ProductCardProps {
  title: string;
  price: string;
  image: string;
}

const ProductCard: React.FC<ProductCardProps> = ({ title, price, image }) => {
  return (
    <div className="border border-pink-300 bg-white rounded-lg shadow-lg p-4 transition-transform transform hover:scale-105 flex flex-col items-center mx-auto">
      <img src={image} alt={title} className="w-32 h-32 object-cover rounded-full mb-2" />
      <h4 className="text-lg font-bold text-pink-500">{title}</h4>
      <p className="text-md text-pink-500">{price}</p>
    </div>
  );
};

export default ProductCard;


