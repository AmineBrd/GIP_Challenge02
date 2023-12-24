import { FilterContext } from "../Context/filterContext";
import React, { useContext } from "react";

// Checkbox Component of Product type
export const CheckBox = ({ type }) => {
  const { selectedFilters, updateSelectedFilters } = useContext(FilterContext);
  const handleCheckboxChange = () => {
    const updatedFilters = [...selectedFilters.type];

    // Change the status for the size filter (toggle)
    if (updatedFilters.includes(type)) {
      updatedFilters.splice(updatedFilters.indexOf(type), 1);
    } else {
      updatedFilters.push(type);
    }
    // Update the context with new filters
    updateSelectedFilters("type", updatedFilters);
  };
  return (
    <div className="form-check">
      <input
        type="checkbox"
        className="form-check-input"
        id="option"
        name="filterOption"
        value={`${type}`}
        onChange={handleCheckboxChange}
      />
      <label className="form-check-label" htmlFor="filterOption">
        {type}
      </label>
    </div>
  );
};

// Checkbox Component of Product size
export const CheckboxWithLabel = ({ size }) => {
  const { selectedFilters, updateSelectedFilters } = useContext(FilterContext);
  const handleCheckboxChange = () => {
    const updatedFilters = [...selectedFilters.size];

    // Change the status for the size filter (toggle)
    if (updatedFilters.includes(size)) {
      updatedFilters.splice(updatedFilters.indexOf(size), 1);
    } else {
      updatedFilters.push(size);
    }

    // Update the context with new filters
    updateSelectedFilters("size", updatedFilters);
  };

  return (
    <div className="form-check">
      <input
        type="checkbox"
        className="btn-check"
        id={`btn-check-${size}`}
        autoComplete="off"
        checked={selectedFilters.size.includes(size)}
        onChange={handleCheckboxChange}
      />
      <label className="btn btn-warning size" htmlFor={`btn-check-${size}`}>
        {size}
      </label>
    </div>
  );
};

// Grouping Checkboxes of sizes
export const CheckboxGroup = () => {
  return (
    <div>
      <div className="row">
        <div className="col-md-3 col-4">
          <CheckboxWithLabel size="S" />
        </div>
        <div className="col-md-3 col-4">
          <CheckboxWithLabel size="M" />
        </div>
        <div className="col-md-3 col-4">
          <CheckboxWithLabel size="L" />
        </div>
      </div>
      <div className="row">
        <div className="col-md-3 col-4">
          <CheckboxWithLabel size="XL" />
        </div>
      </div>
    </div>
  );
};
