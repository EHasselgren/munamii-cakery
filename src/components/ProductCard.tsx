import React, { useState } from 'react';

interface ProductCardProps {
  title: string;
  price: string;
  image: string;
  onAddToBag: (productId: number) => Promise<void>;
  id: number;
}

const ProductCard: React.FC<ProductCardProps> = ({ title, price, image, onAddToBag, id }) => {
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  return (
    <div
      className="border bg-white rounded-xl shadow-lg w-[260px] m-4 transition-transform transform hover:scale-105 flex flex-col justify-between h-[380px] overflow-hidden"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div className="flex flex-col items-center py-6">
        <img
          src={image}
          alt={title}
          className="w-[160px] h-[160px] object-cover rounded-full mb-4"
        />
        <div className="text-center flex-grow">
          <h4 className="text-3xl font-bold text-[#008080] font-whimsical mb-3 overflow-hidden whitespace-nowrap text-ellipsis">{title}</h4>
          <p className="text-2xl text-[#008080] pt-2 font-whimsical">{price}</p>
        </div>
      </div>
 
      <button
        onClick={() => onAddToBag(id)}
        className="bg-[#008080]  text-white font-bold py-2 mb-3 mx-4 rounded hover:bg-[white] hover:text-[#008080] transition duration-200"
      >
        Add to Bag
      </button>
    </div>
  );
};

export default ProductCard;
