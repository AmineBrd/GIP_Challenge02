import Navbar from "../Components/Navbar";
import Sidebar from "../Components/Sidebar";
import Footer from "../Components/Footer";
import ProductBody from "../Components/ProductBody";
import React from "react";
const Products = () => {
  return (
    <>
      <Navbar />
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-3 bg-light py-5">
            <Sidebar />
          </div>
          <div className="col-md-9 py-5 mt-5">
            <ProductBody />
          </div>
          <Footer />
        </div>
      </div>
    </>
  );
};

export default Products;
