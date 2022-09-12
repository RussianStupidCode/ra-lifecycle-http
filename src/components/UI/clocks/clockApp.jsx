import React, { useState } from "react";
import AddForm from "./addForm";
import Clock from "./clock";

const ClockApp = () => {
  const [clocks, setClocks] = useState([]);

  const handleDelete = (idClock) => {
    setClocks((prevState) => prevState.filter((clock) => clock.id !== idClock));
  };

  const hadleSubmit = (form) => {
    setClocks([
      ...clocks,
      {
        id: form.id,
        name: form.name.trim(),
        timezone: form.timezone,
        onDelete: handleDelete,
      },
    ]);
  };

  return (
    <div className="d-flex flex-column w-100">
      <AddForm onSubmit={hadleSubmit}></AddForm>
      <div className="d-flex flex-row w-100 flex-wrap">
        {clocks.map((clock) => (
          <Clock key={clock.id} {...clock} />
        ))}
      </div>
    </div>
  );
};

export default ClockApp;
