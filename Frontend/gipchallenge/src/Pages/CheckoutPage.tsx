import React, { useContext, useState, useEffect } from 'react';
import CheckoutItem from "../Components/Checkout.tsx";
import { FilterContext } from '../Context/filterContext.js';
import Navbar from '../Components/Navbar.js';
import Footer from '../Components/Footer.js';

const Page: React.FC = () => {
    const { cartItems ,setCartItems }:any = useContext(FilterContext);
    const [items, setItems] = useState<{
        name: string;
        size: string;
        price: number;
        quantity: number;
        imageUrl:string;
        category: string; // Adding category to the item structure
    }[]>(cartItems);

    useEffect(() => {
        setItems(cartItems);
    }, [cartItems]);

    const removeItemFromCheckout = (index: number) => {
        const updatedItems = items.filter((_, i) => i !== index);
        setCartItems(updatedItems);
        localStorage.setItem("shoppingCart", JSON.stringify(updatedItems));
        setItems(updatedItems);

    };

    const updateItemQuantity = (index: number, newQuantity: number) => {
        const updatedItems = [...items];
        updatedItems[index].quantity = Math.max(newQuantity, 1); // Ensure quantity is not less than 1
        setItems(updatedItems);
    };

    const totalPrice = items.reduce((acc, item) => acc + item.price * item.quantity, 0);
    const totalQuantity = items.reduce((acc, item) => acc + item.quantity, 0);

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
                    <button className="btn btn-warning">Buy</button>
                </div>
            </div>
        </div>
    ));

    return (
        <>
            <Navbar ></Navbar>
        <div className="container">
            <div className="row">
                <div className="col-md-8 py-5 mt-5">
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
                                    imageUrl={item.imageUrl} // Add the imageUrl prop if available
                                    category={item.category} // Pass the category to the CheckoutItem component
                                />
                            ))}
                        </div>
                    )}
                </div>
                <div className="col-md-4 py-5 mt-5">
                    <div className="card">
                        <div className="card-body">
                            <h2>MY CART</h2>
                            <p>Total Quantity: {totalQuantity}</p>
                            <p>Total Price: ${totalPrice.toFixed(2)}</p>
                            <button className='btn btn-dark'>Checkout</button>
                        </div>
                    </div>
                </div>
            </div>
            <div className="row mt-4">
                {suggestedElements}
            </div>
        </div>
        <Footer/>
        </>
    );
};

export default Page;