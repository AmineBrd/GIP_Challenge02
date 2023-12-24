import { createContext, useState, useEffect } from "react";

export const FilterContext = createContext(null);

export const FilterProductContextProvider = ({ children }) => {
  const [checkedProductType, setCheckedProductType] = useState([]);
  const [checkedProductSize, setCheckedProductSize] = useState([]);
  const [cartItems, setCartItems] = useState([]);
  const [selectedFilters, setSelectedFilters] = useState({
    size: [],
    type: [],
  });
  // Load cart items from local storage
  useEffect(() => {
    const storedCartItems = JSON.parse(localStorage.getItem("shoppingCart"));
    setCartItems(storedCartItems);
  }, []);
  // Update local storage on every

  const updateSelectedFilters = (category, value) => {
    setSelectedFilters((prevFilters) => ({
      ...prevFilters,
      [category]: value,
    }));
    console.log(selectedFilters);
  };

  // Add item to cart
  const addItemCart = (item) => {
    setCartItems((prev) => [...prev, item]);
    localStorage.setItem("shoppingCart", JSON.stringify([...cartItems, item]));
  };
  // remove item from cart
  const removeItemCart = (item) => {
    setCartItems((prevCart) => {
      const updatedCart = prevCart.slice();
      const indexToRemove = updatedCart.findIndex(
        (element) => element.name === item.name
      );
      if (indexToRemove !== -1) {
        updatedCart.splice(indexToRemove, 1);
        localStorage.setItem("shoppingCart", JSON.stringify(updatedCart));
      }
      return updatedCart;
    });
  };

  return (
    <FilterContext.Provider
      value={{
        cartItems,
        setCartItems,
        removeItemCart,
        addItemCart,
        checkedProductType,
        setCheckedProductType,
        checkedProductSize,
        setCheckedProductSize,
        selectedFilters,
        setSelectedFilters,
        updateSelectedFilters,
      }}
    >
      {children}
    </FilterContext.Provider>
  );
};
