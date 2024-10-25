import React, { useEffect, useState } from 'react';
import ProductCard from './ProductCard'; 

interface ShoppingBagItem {
  id: string;
  itemType: string;
  title: string;
  price: string;
  quantity: number;
  imagePath: string;
}

const ShoppingBag: React.FC = () => {
  const [shoppingBag, setShoppingBag] = useState<ShoppingBagItem[]>([]);

  useEffect(() => {
    try {
      const bag = JSON.parse(localStorage.getItem('shoppingBag') || '[]') as ShoppingBagItem[];
      setShoppingBag(bag);
      console.log('Loaded shopping bag:', bag);
    } catch (error) {
      console.error('Error loading shopping bag:', error);
      setShoppingBag([]);
    }
  }, []);

  const calculateTotal = () => {
    return shoppingBag.reduce((total, item) => {
      const price = parseFloat(item.price.replace('$', ''));
      return total + (price * item.quantity);
    }, 0);
  };

  const handleConfirmPurchase = async () => {
    try {
      const userId = 'some-user-id'; // placeholder code, wed need to setup login etc to manage this correctly

      const response = await fetch('http://localhost:5000/api/shoppingbag', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          userId,
          items: shoppingBag.map(item => ({
            itemId: item.id,
            itemType: item.itemType,
            quantity: item.quantity,
          })),
        }),
      });

      if (!response.ok) {
        throw new Error('Failed to confirm purchase');
      }

      localStorage.removeItem('shoppingBag');
      setShoppingBag([]);
      alert('Purchase confirmed!');
    } catch (error) {
      console.error('Error confirming purchase:', error);
      alert('Failed to confirm purchase. Please try again.');
    }
  };

  const updateBagQuantity = (id: string, change: number) => {
    const updatedBag = shoppingBag.map(item => {
      if (item.id === id) {
        const newQuantity = item.quantity + change;
        return newQuantity > 0 ? { ...item, quantity: newQuantity } : null;
      }
      return item;
    }).filter((item): item is ShoppingBagItem => item !== null);

    localStorage.setItem('shoppingBag', JSON.stringify(updatedBag));
    setShoppingBag(updatedBag);
  };

  return (
    <div className="p-4 max-w-6xl mx-auto">
      {shoppingBag.length === 0 ? (
        <p className="text-white text-semibold text-3xl flex justify-center mb-8">No items in your bag!</p>
      ) : (
        <div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
            {shoppingBag.map(item => (
              <div key={item.id} className="relative rounded-xl p-4 m-2 transition-transform transform hover:scale-105 flex flex-col">
                <div className="absolute left-2/3 transform -translate-x-1/2 z-10 bg-white rounded-full px-3 py-1 shadow-md">
                  <span className="font-bold text-[#008080]">Qty: {item.quantity}</span>
                </div>
                <div className="flex mb-4">
                  <ProductCard
                    title={item.title}
                    price={item.price}
                    imagePath={item.imagePath}
                    _id={item.id}
                    itemType={item.itemType}
                    isInShoppingBag={true} 
                    onUpdateQuantity={updateBagQuantity}
                    onRemove={(id) => {
                      const updatedBag = shoppingBag.filter(i => i.id !== id);
                      localStorage.setItem('shoppingBag', JSON.stringify(updatedBag));
                      setShoppingBag(updatedBag);
                    }}
                  />
                </div>
              </div>
            ))}
          </div>

          <div className="my-10 flex justify-center">
            <div className="flex justify-between items-center mb-4 bg-white min-w-[60%] rounded-lg p-4 shadow-md">
              <div>
                <span className="text-xl font-bold text-[#008080] mr-2">Total:</span>
                <span className="text-xl font-bold text-[#008080]">${calculateTotal().toFixed(2)}</span>
              </div>
              <button
                onClick={handleConfirmPurchase}
                className="px-2 bg-[#008080] text-white font-bold py-3 rounded hover:bg-[#006666] transition duration-200"
              >
                Confirm Purchase
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ShoppingBag;
