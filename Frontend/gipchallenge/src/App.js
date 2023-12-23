import { useContext, useState, useEffect } from "react";
import Card from "./Components/Card";
import { FilterContext } from "./Context/filterContext";
import cart from "./assets/shopping-cart.svg";
import Navbar from "./Components/Navbar";
import Sidebar from "./Components/Sidebar";
import items from "./util/ProductsData";

const App = () => {
  return (
    <>
      <Navbar />
      <div className="container-fluid">
        <div className="row">
          {/* Sidebar */}
          <div className="col-md-3 bg-light py-5">
            <Sidebar />
          </div>
          {/* Main Body */}
          <div className="col-md-9 py-5 mt-5">
            <MainBody />
          </div>
          asdfsadf
        </div>
      </div>
    </>
  );
};

const MainBody = () => {
  const { selectedFilters, cartItems } = useContext(FilterContext);

  const [filteredItems, setFilteredItems] = useState([...items]);
  const [sortOption, setSortOption] = useState("");

  useEffect(() => {
    // Function to filter items based on selected filters
    const filterItems = () => {
      let filtered = [...items];

      // Apply filters based on selectedFilters
      if (selectedFilters.size.length > 0) {
        filtered = filtered.filter((item) =>
          selectedFilters.size.includes(item.size)
        );
      }

      if (selectedFilters.type.length > 0) {
        filtered = filtered.filter((item) =>
          selectedFilters.type.includes(item.type)
        );
      }

      // Sort the filtered items based on the selected option
      sortFilteredItems(filtered);
    };

    // Function to sort filtered items based on the selected option
    const sortFilteredItems = (filtered) => {
      switch (sortOption) {
        case "Price+":
          setFilteredItems([...filtered].sort((a, b) => a.price - b.price));
          break;
        case "Price-":
          setFilteredItems([...filtered].sort((a, b) => b.price - a.price));
          break;
        case "Name+":
          setFilteredItems(
            [...filtered].sort((a, b) => a.name.localeCompare(b.name))
          );
          break;
        case "Name-":
          setFilteredItems(
            [...filtered].sort((a, b) => b.name.localeCompare(a.name))
          );
          break;
        default:
          // Default sorting
          setFilteredItems([...filtered].sort((a, b) => a.price - b.price));
      }
    };

    filterItems();
  }, [selectedFilters, sortOption]);

  const handleSortChange = (event) => {
    setSortOption(event.target.value);
  };

  // Chunk the filtered items array
  const chunkedItems = [];
  for (let i = 0; i < filteredItems.length; i += 3) {
    chunkedItems.push(filteredItems.slice(i, i + 3));
  }

  return (
    <div>
      {/* Map through the chunks and render each row */}
      <div className="d-flex justify-content-between align-items-center">
        <h3 className="p-2 mt-2">All Products</h3>
        <div className="d-flex mt-3 align-items-center w-50">
          <div className="w-50">
            <h4 className="">Sort By:</h4>
          </div>
          <select
            className="form-select w-100"
            aria-label="Default select example"
            value={sortOption}
            onChange={handleSortChange}
          >
            <option value="Price+">Price+</option>
            <option value="Price-">Price-</option>
            <option value="Name+">Name+</option>
            <option value="Name-">Name-</option>
          </select>
          <img
            src={cart}
            alt=""
            className="img-fluid w-25 mx-4 cursor-pointer"
          />
          <span className="badge bg-warning ml-2">{cartItems.length}</span>
        </div>
      </div>
      {chunkedItems.map((chunk, index) => (
        <div key={index} className="card-container row">
          {chunk.map((item, itemIndex) => (
            <div key={itemIndex} className="col-sm-12 col-md-4 col-12 mt-3">
              <Card item={item} />
            </div>
          ))}
        </div>
      ))}
    </div>
  );
};

export default App;
