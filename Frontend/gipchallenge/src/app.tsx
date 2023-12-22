import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import CheckoutItem from './components/checkout'; // Update the path to your CheckoutItem component

const App: React.FC = () => {
  const [items, setItems] = useState<{
    name: string;
    size: string;
    price: number;
    quantity: number;
    category: string; // Adding category to the item structure
  }[]>([
    { name: 'Product 1', size: 'L', price: 20, quantity: 1, category: 'Clothing' }, // Example product 1 with price 20 and category Clothing
    { name: 'Product 2', size: 'M', price: 30, quantity: 1, category: 'Accessories' }, // Example product 2 with price 30 and category Accessories
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

  // Get unique categories from the selected items
  const uniqueCategories = Array.from(new Set(items.map((item) => item.category)));

  // Suggested items based on the categories of selected items
  const suggestedItemsData = [
    {
      name: 'Suggested Item 1',
      size: 'M',
      price: 25,
      imageUrl: 'https://via.placeholder.com/150',
    },
    {
      name: 'Suggested Item 2',
      size: 'L',
      price: 30,
      imageUrl: 'https://via.placeholder.com/150',
    },
    {
      name: 'Suggested Item 3',
      size: 'S',
      price: 20,
      imageUrl: 'https://via.placeholder.com/150',
    },
    {
      name: 'Suggested Item 4',
      size: 'XL',
      price: 35,
      imageUrl: 'https://via.placeholder.com/150',
    },
  ];

  // Suggested items based on the categories of selected items
  const suggestedElements = suggestedItemsData.map((item, index) => (
    <div key={index} className="col-md-3">
      <div className="card mb-3">
        <img src={item.imageUrl} className="card-img-top" alt={item.name} />
        <div className="card-body">
          <h5 className="card-title">{item.name}</h5>
          <p className="card-text">Size: {item.size}</p>
          <p className="card-text">Price: ${item.price}</p>
          <button className="btn btn-primary">Buy</button>
        </div>
      </div>
    </div>
  ));

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
                  imageUrl="" // Add the imageUrl prop if available
                  category={item.category} // Pass the category to the CheckoutItem component
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
      <div className="row mt-4">
        {suggestedElements}
      </div>
    </div>
  );
};

export default App;
