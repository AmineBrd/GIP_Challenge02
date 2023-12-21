// CheckoutItem.tsx (Updated)
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
        <div className="card mb-3">
            <div className="card-body d-flex flex-column flex-lg-row align-items-center">
                <div className="item-image me-lg-3 mb-3 mb-lg-0">
                    <img src={imageUrl} alt={itemName} className="img-fluid" />
                </div>
                <div className="item-details w-100">
                    <h5 className="card-title mb-2 mb-lg-0">Swaggy store</h5>
                    <div className="row align-items-center">
                        <div className="col-md-6 mb-2 mb-md-0">
                            <p className="card-text mb-1">{itemName}</p>
                            <h5 className="card-title mb-2 mb-lg-0">{category}</h5>
                            <div className="d-flex align-items-center">
                                <span className="me-2">Size:</span>
                                <span>{size}</span>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="input-group">
                                <button
                                    className="btn btn-outline-secondary"
                                    type="button"
                                    onClick={handleDecrease}
                                    aria-label="Decrease quantity"
                                >
                                    -
                                </button>
                                <input
                                    type="number"
                                    className="form-control text-center"
                                    value={quantity}
                                    onChange={(e) => updateQuantity(index, parseInt(e.target.value))}
                                    aria-label="Quantity"
                                    aria-valuemin={1}
                                />
                                <button
                                    className="btn btn-outline-secondary"
                                    type="button"
                                    onClick={handleIncrease}
                                    aria-label="Increase quantity"
                                >
                                    +
                                </button>
                            </div>
                            <div className="d-flex justify-content-between mt-2">
                                <span>Price: ${itemPrice.toFixed(2)}</span>
                                <span>Total: ${totalPrice.toFixed(2)}</span>
                            </div>
                            <div className="mt-2">
                                <button
                                    className="btn btn-danger"
                                    onClick={() => removeItem(index)}
                                    aria-label="Remove item"
                                >
                                    Remove
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CheckoutItem;
