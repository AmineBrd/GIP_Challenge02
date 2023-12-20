import React, { useState, useEffect } from 'react';

const CheckoutPage = ({ userId }) => {
    const [cartItems, setCartItems] = useState([]);

    // Fetch user's cart items based on userId (simulated API call)
    useEffect(() => {
        // Simulated API call to fetch user's cart items
        const fetchUserCartItems = async () => {
            try {
                // Replace this with your actual API endpoint
                const response = await fetch(`http://localhost:5173/cart/${userId}`);
                const data = await response.json();
                setCartItems(data.cartItems || []); // Assuming data is in the format { cartItems: [...] }
            } catch (error) {
                console.error('Error fetching cart items:', error);
            }
        };

        fetchUserCartItems();
    }, [userId]);

    // Calculate total price
    const totalPrice = cartItems.reduce((total, item) => total + item.product.productPrice, 0);

    return (
        <div>
            <h1>Checkout Page</h1>
            <div>
                {cartItems.map((item, index) => (
                    <div key={index}>
                        <img src={item.product.productImage} alt={item.product.productName} />
                        <p>Name: {item.product.productName}</p>
                        <p>Size: {item.product.productSize}</p>
                        <p>Price: ${item.product.productPrice}</p>
                    </div>
                ))}
            </div>
            <h3>Total Price: ${totalPrice}</h3>
        </div>
    );
};

export default CheckoutPage;
