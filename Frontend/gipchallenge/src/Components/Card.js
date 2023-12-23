import React, { useContext, useState } from "react";
import "./Card.css";
import { FilterContext } from "../Context/filterContext";

// Card Component
const Card = ({ item }) => {
  const [itemAdded, setItemAdded] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const { removeItemCart, addItemCart } = useContext(FilterContext);

  // function to handle adding and removing item from cart
  const toggleItemInCart = () => {
    setItemAdded(!itemAdded);
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
      if (!itemAdded) {
        setItemAdded(true);
        addItemCart(item);
      } else {
        setItemAdded(false);
        removeItemCart(item);
      }
    }, 600);
  };

  return (
    <div className="container">
      <div className="card">
        <div className="card-body d-flex flex-column align-items-center bg-light rounded">
          <img className="rounded w-100" src={`${item.url}`} alt={item.name} />
          <h5 className="card-title p-2 d-inline-block text-truncate mw-100">
            {item.name}
          </h5>
          <div className="card-text d-flex justify-content-around font-weight-bold">
            <p>{item.size}</p>
            <p>{item.type}</p>
          </div>
          <span className="mb-2">{item.price}$</span>
          <button
            type="button"
            className="btn btn-warning btn-sm font-weight-bold rounded-3 w-75"
            onClick={toggleItemInCart}
          >
            {isLoading
              ? "Loading..."
              : !itemAdded
              ? "Add to cart"
              : "✅ Added to Cart"}
          </button>
        </div>
      </div>
    </div>
  );
};


export default Card;
