import React, { useState, useEffect, useRef } from "react";
import { isValidTimeZone } from "../../../helpers/utils";

const AddForm = ({ onSubmit }) => {
  const currentId = useRef(0);

  const [form, setForm] = useState({ name: "", timezone: "" });

  const onChange = ({ target }) => {
    const newForm = { ...form, [target.name]: target.value };
    setForm(newForm);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    onSubmit({ ...form, id: currentId.current });

    currentId.current++;
  };

  const [valid, setValid] = useState(false);

  useEffect(() => {
    if (isValidTimeZone(form.timezone) && form.name.trim().length > 0) {
      setValid(true);
      return;
    }

    setValid(false);
  }, [form]);

  return (
    <form className="d-flex justify-content-center align-items-center">
      <div className="d-flex flex-column mx-2">
        <label>Название</label>
        <input
          type="text"
          name="name"
          placeholder="Нарния"
          onChange={onChange}
        />
      </div>

      <div className="d-flex flex-column mx-2">
        <label>Временная зона (+/-HHMM | +0100)</label>
        <input
          type="text"
          name="timezone"
          placeholder="+0500"
          onChange={onChange}
        />
      </div>

      <div className="d-flex flex-column mx-2 align-self-end">
        <button
          className="btn btn-primary"
          disabled={!valid}
          onClick={handleSubmit}
        >
          Добавить
        </button>
      </div>
    </form>
  );
};

export default AddForm;
