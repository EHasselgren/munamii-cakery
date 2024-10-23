import React, { useEffect, useState } from 'react';

interface ShoppingItem {
  id: number;
  itemType: string;
  quantity: number;
  price: number;
  title: string;
}

const ShoppingBag: React.FC = () => {
  const [shoppingBag, setShoppingBag] = useState<ShoppingItem[]>([]);

  useEffect(() => {
    // Fetch the items from localStorage when the component mounts
    const bag = JSON.parse(localStorage.getItem('shoppingBag') || '[]');
    setShoppingBag(bag);
  }, []);

  const handleConfirmPurchase = async () => {
    try {
      const userId = 'some-user-id';  // Replace with actual userId logic

      const response = await fetch('/api/shoppingbag', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          userId,
          items: shoppingBag, 
        }),
      });

      if (!response.ok) {
        throw new Error('Failed to confirm purchase');
      }

      localStorage.removeItem('shoppingBag');
      setShoppingBag([]);
      alert('Purchase confirmed!');
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div>
      <h2>Your Shopping Bag</h2>
      {shoppingBag.length === 0 ? (
        <p>No items in your bag</p>
      ) : (
        <ul>
          {shoppingBag.map(item => (
            <li key={`${item.id}-${item.itemType}`}>
              {item.itemType} - Quantity: {item.quantity} Price: {item.price} Title: {item.title}
            </li>
          ))}
        </ul>
      )}
      <button onClick={handleConfirmPurchase}>
        Confirm Purchase
      </button>
    </div>
  );
};

export default ShoppingBag;

