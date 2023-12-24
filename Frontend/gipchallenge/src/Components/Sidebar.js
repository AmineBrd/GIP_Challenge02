import React from "react";
import { CheckBox, CheckboxGroup } from "./Checkbox";

const Sidebar = () => {
  return (
    <div className="mt-5 py-5">
      <div className="bg-light border border-secondary py-4 rounded-5">
        <h5 className="px-2 font-weight-bold">SIZE:</h5>
        <CheckboxGroup />
      </div>
      <div className="bg-light border border-secondary py-5 rounded-5 mt-3">
        <h5 className="p-2 font-weight-bold">TYPE:</h5>
        <div className="mx-4">
          <CheckBox type="T-Shirt" />
          <CheckBox type="Shoes" />
          <CheckBox type="Socks" />
          <CheckBox type="Hoodies" />
          <CheckBox type="Hats" />
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
