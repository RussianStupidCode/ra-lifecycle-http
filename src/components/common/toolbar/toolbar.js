import React from "react";
import ToolbarItem from "./toolbarItem";

const Toolbar = ({ filters, selected, onSelectFilter }) => {
  return (
    <div className="d-flex flex-row mb-2">
      {filters.map((filter) => (
        <ToolbarItem
          key={filter}
          name={filter}
          isActive={filter === selected}
          onClick={onSelectFilter}
        />
      ))}
    </div>
  );
};

export default Toolbar;
