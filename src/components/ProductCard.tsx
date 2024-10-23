import React, {} from 'react';

interface ProductCardProps {
  title: string;
  price: string;
  image: string;
  id: number;
  itemType: string;
}

// add items to the local storage shopping bag
const addToLocalBag = (productId: number, itemType: string) => {
  const existingBag = JSON.parse(localStorage.getItem('shoppingBag') || '[]');

  const existingItem = existingBag.find((item: any) => item.id === productId && item.itemType === itemType);

  if (existingItem) {
    existingItem.quantity += 1; 
  } else {
    existingBag.push({ id: productId, itemType, quantity: 1 });
  }

  localStorage.setItem('shoppingBag', JSON.stringify(existingBag));
};

const ProductCard: React.FC<ProductCardProps> = ({ title, price, image, id, itemType }) => {

  return (
    <div
      className="border bg-white rounded-xl shadow-lg w-[220px] h-[300px] m-4 transition-transform transform hover:scale-105 flex flex-col justify-between overflow-hidden"    
    >
      <div className="flex flex-col items-center py-4">
        <img
          src={image}
          alt={title}
          className="w-[140px] h-[140px] object-cover rounded-full mb-1"
        />
        <div className="text-center flex-grow">
          <h4 className="text-lg font-bold text-[#008080] font-whimsical mb-2 overflow-hidden whitespace-nowrap text-ellipsis">
            {title}
          </h4>
          <p className="text-md text-[#008080] font-whimsical">{price}</p>
        </div>
      </div>

      <button
        onClick={() => addToLocalBag(id, itemType)} 
        className="bg-[#008080] text-white font-bold py-2 mb-3 mx-4 rounded hover:bg-[white] hover:text-[#008080] transition duration-200"
      >
        Add to Bag
      </button>
    </div>
  );
};

export default ProductCard;