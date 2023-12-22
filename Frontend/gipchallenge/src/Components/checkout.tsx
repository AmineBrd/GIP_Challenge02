import React from 'react';

interface CheckoutItemProps {
    index: number;
    itemName: string;
    itemPrice: number;
    quantity: number;
    updateQuantity: (index: number, newQuantity: number) => void;
    removeItem: (index: number) => void;
    size: string;
    imageUrl: string;
    category: string;
}

const CheckoutItem: React.FC<CheckoutItemProps> = ({
    index,
    itemName,
    itemPrice,
    quantity,
    updateQuantity,
    removeItem,
    size,
    imageUrl,
    category,
}) => {
    const totalPrice = itemPrice * quantity;

    const handleDecrease = () => {
        if (quantity > 1) {
            updateQuantity(index, quantity - 1);
        }
    };

    const handleIncrease = () => {
        updateQuantity(index, quantity + 1);
    };

    return (
        <div className="checkout-item-container">
            <div className="checkout-item">
                <img src={imageUrl} alt={itemName} className="checkout-item-image" />
                <div className="checkout-item-details">
                    <h3 className="checkout-item-name">{itemName}</h3>
                    <p className="checkout-item-category">{category}</p>
                    <p className="checkout-item-size">Size: {size}</p>
                    <div className="checkout-item-actions">
                        <button
                            className="checkout-item-decrease"
                            onClick={handleDecrease}
                            aria-label="Decrease quantity"
                        >
                            -
                        </button>
                        <input
                            type="number"
                            className="checkout-item-quantity"
                            value={quantity}
                            onChange={(e) => updateQuantity(index, parseInt(e.target.value))}
                            aria-label="Quantity"
                            aria-valuemin={1}
                        />
                        <button
                            className="checkout-item-increase"
                            onClick={handleIncrease}
                            aria-label="Increase quantity"
                        >
                            +
                        </button>
                        <span className="checkout-item-price">${itemPrice.toFixed(2)}</span>
                        <span className="checkout-item-total">${totalPrice.toFixed(2)}</span>
                        <button
                            className="checkout-item-remove"
                            onClick={() => removeItem(index)}
                            aria-label="Remove item"
                        >
                            Remove
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CheckoutItem;
