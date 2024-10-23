import React, { useEffect, useState } from 'react';
import axios from 'axios';
import TextDisplay from '../components/TextDisplay';
import ProductCard from '../components/ProductCard';

interface ShoppingBagItem {
  _id: string;
  productId: {
    title: string;
    price: string;
    image: string;
  };
  quantity: number;
}

const ShoppingBag: React.FC = () => {
  const [items, setItems] = useState<ShoppingBagItem[]>([]);

  useEffect(() => {
    const fetchShoppingBag = async () => {
      try {
        const response = await axios.get('http://localhost:5000/api/shopping-bag');
        setItems(response.data);
      } catch (error) {
        console.error('Error fetching shopping bag:', error);
      }
    };

    fetchShoppingBag();
  }, []);

  const handleRemoveItem = async (id: string) => {
    try {
      await axios.delete(`http://localhost:5000/api/shopping-bag/${id}`);
      setItems(items.filter(item => item._id !== id));
    } catch (error) {
      console.error('Error removing item:', error);
    }
  };

  return (
    <div>
      <TextDisplay text="Your Shopping Bag" className="mb-6" />
      {items.length === 0 ? (
        <TextDisplay text="is empty." className="text-red-500" />
      ) : (
        <div className="flex flex-wrap justify-center">
          {items.map(item => (
            <div key={item._id} className="flex flex-col items-center">
          <h1> {item.productId.title}</h1>
              <div className="text-center mt-2">
                <p className="text-xl font-bold text-[#008080]">Quantity: {item.quantity}</p>
                <button 
                  className="mt-2 bg-red-500 text-white rounded-lg px-4 py-2"
                  onClick={() => handleRemoveItem(item._id)}
                >
                  Remove
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default ShoppingBag;
