import React, { useEffect, useState } from 'react';

interface ShoppingBagItem {
  id: string;   
  itemType: string;
  title: string;
  price: string;
  quantity: number;
  imagePath: string;
}

interface ProductCardProps {
  title: string;
  price: string;
  _id: string;  
  itemType: string;
  imagePath: string;
  quantity?: number; 
  isInShoppingBag?: boolean; 
  onUpdateQuantity?: (id: string, change: number) => void; 
  onRemove?: (id: string) => void;
}

const ProductCard: React.FC<ProductCardProps> = ({
  title,
  price,
  _id,
  itemType,
  imagePath,
  quantity = 1, 
  isInShoppingBag = false, 
  onUpdateQuantity,
  onRemove,
}) => {
  const [shoppingBag, setShoppingBag] = useState<ShoppingBagItem[]>([]);

  useEffect(() => {
    const storedBag = localStorage.getItem('shoppingBag');
    if (storedBag) {
      setShoppingBag(JSON.parse(storedBag));
    }
  }, []);

  const addToLocalBag = (_id: string, itemType: string, title: string, price: string, imagePath: string) => {
    try {
      let existingBag = [...shoppingBag]; 
  
      const existingItem = existingBag.find(item => item.id === _id);
  
      if (existingItem) {
        existingItem.quantity += 1;
      } else {
        const newItem: ShoppingBagItem = {
          id: _id,  
          itemType,
          title,
          price,
          quantity: 1, 
          imagePath, 
        };
        existingBag.push(newItem);  
      }
  
      localStorage.setItem('shoppingBag', JSON.stringify(existingBag));
      setShoppingBag(existingBag); 
      console.log('Updated shopping bag:', existingBag);
  
    } catch (error) {
      console.error('Error in addToLocalBag:', error);
    }
  };

  return (
    <div className="border bg-white rounded-xl w-[13.75rem] h-[18.75rem] m-4 transition-transform transform hover:scale-105 flex flex-col justify-between overflow-hidden">
      <div className="flex flex-col items-center py-4">
        <img
          src={imagePath}
          alt={title}
          className="w-[8.75rem] h-[8.75rem] object-cover rounded-full"
        />
        <div className="text-center flex-grow">
          <h4 className="text-lg font-bold text-[#008080] font-whimsical mb-2 overflow-hidden whitespace-nowrap text-ellipsis">
            {title}
          </h4>
          <p className="text-md text-[#008080] font-whimsical">{price}</p>
        </div>
      </div>

      {isInShoppingBag ? (
        <div className="z-10 flex justify-center gap-2 mb-3">
          <button
            onClick={() => onUpdateQuantity && onUpdateQuantity(_id, 1)} 
            className="bg-[#008080] text-white w-8 h-8 rounded-full hover:bg-[#006666] flex items-center justify-center"
            aria-label="Increase quantity"
          >
            +
          </button>
          <button
            onClick={() => onUpdateQuantity && onUpdateQuantity(_id, -1)}
            className="bg-[#008080] text-white w-8 h-8 rounded-full hover:bg-[#006666] flex items-center justify-center"
            aria-label="Decrease quantity"
          >
            -
          </button>
          <button
            onClick={() => onRemove && onRemove(_id)}
            className="bg-red-500 text-white w-8 h-8 rounded-full hover:bg-red-600 flex items-center justify-center"
            aria-label="Remove item"
          >
            ×
          </button>
        </div>
      ) : (
        <button
          onClick={() => {
            console.log('Adding to bag:', { _id, itemType, title, price, imagePath });
            addToLocalBag(_id, itemType, title, price, imagePath); 
          }}
          className="bg-[#008080] text-white font-bold py-2 mb-3 mx-4 rounded hover:bg-[white] hover:text-[#008080] hover:shadow-lg transition duration-200"
        >
          Add to Bag
        </button>
      )}
    </div>
  );
};

export default ProductCard;

