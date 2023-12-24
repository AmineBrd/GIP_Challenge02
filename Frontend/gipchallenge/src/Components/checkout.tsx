import React from 'react';

interface CheckoutItemProps {
  index: number;
  itemName: string;
  itemPrice: number;
  quantity: number;
  updateQuantity: (index: number, quantity: number) => void;
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
    <div className="my-3">
      <div className="d-flex align-items-center border border-secondary p-4 rounded-4">
        <img src={imageUrl} alt={itemName} className="rounded-4" style={{ maxWidth: '125px' }} />
        <div className="ms-3">
          <h3>{itemName}</h3>
          <p>{category}</p>
          <p>Size: {size}</p>
          <div className="d-flex align-items-center flex-wrap">
            <button className="btn btn-outline-dark" onClick={handleDecrease}>
              -
            </button>
            <input
              type="number"
              className="form-control mx-2 w-25"
              value={quantity}
              onChange={(e) => updateQuantity(index, parseInt(e.target.value))}
              aria-label="Quantity"
              aria-valuemin={1}
            />
            <button
              className="btn btn-outline-dark"
              onClick={handleIncrease}
            >
              +
            </button>
            <span className="mx-2">${itemPrice.toFixed(2)}</span>
            <span className="mx-2">${totalPrice.toFixed(2)}</span>
            <button
              className="btn btn-outline-warning ms-auto"
              onClick={() => removeItem(index)}
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
