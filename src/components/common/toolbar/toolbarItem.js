import React from "react";

const ToolbarItem = ({ name, onClick, isActive }) => {
  const getButtonClass = () => {
    const baseClass = "btn mx-2";

    if (isActive) {
      return baseClass + " btn-primary";
    }
    return baseClass + " btn-secondary";
  };

  return (
    <button className={getButtonClass()} onClick={() => onClick(name)}>
      {name}
    </button>
  );
};

export default ToolbarItem;
