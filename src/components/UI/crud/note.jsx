import React from "react";
import CLOSE_SVG from "../../../assets/close.svg";

const Note = ({ id, content, onDelete }) => {
  return (
    <div className="note">
      <button
        className="btn btn-warning border border-primary note-delete d-flex align-center justify-content-center p-0"
        onClick={() => onDelete(id)}
      >
        <img alt="" className="w-100" src={CLOSE_SVG} />
      </button>

      <p>{content}</p>
    </div>
  );
};

export default Note;
