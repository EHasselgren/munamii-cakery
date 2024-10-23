import React, { useEffect, useState } from 'react';

interface ShoppingItem {
  id: number;
  itemType: string;
  quantity: number;
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

      // Send the shopping bag to the backend
      const response = await fetch('/api/shoppingbag', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          userId,
          items: shoppingBag,  // Pass the items from localStorage
        }),
      });

      if (!response.ok) {
        throw new Error('Failed to confirm purchase');
      }

      // Clear localStorage and reset the bag in state after successful purchase
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
              {item.itemType} - Quantity: {item.quantity}
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

