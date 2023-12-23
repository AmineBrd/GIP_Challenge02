import { createContext, useState } from "react";

export const FilterContext = createContext(null);

export const FilterProductContextProvider = ({ children }) => {
  const [checkedProductType, setCheckedProductType] = useState([]);
  const [checkedProductSize, setCheckedProductSize] = useState([]);
  const [cartItems, setCartItems] = useState([]);
  const [selectedFilters, setSelectedFilters] = useState({
    size: [],
    type: [],
  });

  const updateSelectedFilters = (category, value) => {
    setSelectedFilters((prevFilters) => ({
      ...prevFilters,
      [category]: value,
    }));
    console.log(selectedFilters)
  };

  // Add item to cart 
  const addItemCart = (item) => {
    setCartItems((prev) => [...prev, item]);
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
      }
      return updatedCart;
    });
  };

  return (
    <FilterContext.Provider
      value={{
        cartItems,
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
