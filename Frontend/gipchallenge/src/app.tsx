// App.tsx (Updated)
import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import CheckoutItem from './components/checkout'; // Update the path to your CheckoutItem component

const App: React.FC = () => {
  const [items, setItems] = useState<{ name: string; size: string; price: number; quantity: number }[]>([
    { name: 'Product 1', size: 'L', price: 20, quantity: 1 }, // Example product 1 with price 20
    { name: 'Product 2', size: 'M', price: 30, quantity: 1 }, // Example product 2 with price 30
  ]);

  const removeItemFromCheckout = (index: number) => {
    const updatedItems = items.filter((_, i) => i !== index);
    setItems(updatedItems);
  };

  const updateItemQuantity = (index: number, newQuantity: number) => {
    const updatedItems = [...items];
    updatedItems[index].quantity = Math.max(newQuantity, 1); // Ensure quantity is not less than 1
    setItems(updatedItems);
  };

  const totalPrice = items.reduce((acc, item) => acc + item.price * item.quantity, 0);
  const totalQuantity = items.reduce((acc, item) => acc + item.quantity, 0);

  return (
    <div className="container">
      <div className="row">
        <div className="col-md-8">
          <h2>Checkout Items</h2>
          {items.length === 0 ? (
            <p>No items added yet.</p>
          ) : (
            <div>
              {items.map((item, index) => (
                <CheckoutItem
                  key={index}
                  index={index}
                  itemName={item.name}
                  size={item.size}
                  itemPrice={item.price}
                  quantity={item.quantity}
                  updateQuantity={updateItemQuantity}
                  removeItem={removeItemFromCheckout}
                />
              ))}
            </div>
          )}
        </div>
        <div className="col-md-4">
          <div className="card">
            <div className="card-body">
              <h2>MY CART</h2>
              <p>Total Quantity: {totalQuantity}</p>
              <p>Total Price: ${totalPrice.toFixed(2)}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
