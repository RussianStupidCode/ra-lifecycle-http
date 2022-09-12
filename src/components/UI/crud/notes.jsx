import React, { useEffect, useState } from "react";
import Note from "./note";
import REFRESH_SVG from "../../../assets/refresh.svg";
import API from "../../../api";

const Notes = () => {
  const [notes, setNotes] = useState([]);
  const [update, setUpdate] = useState(false);
  const [content, setContent] = useState("");

  const refresh = () => {
    setUpdate((prev) => !prev);
  };

  useEffect(() => {
    API.getNotes().then((data) => setNotes(data));
  }, []);

  useEffect(() => {
    API.getNotes().then((data) => setNotes(data));
  }, [update]);

  const handleDelete = (id) => {
    API.deleteNote(id);
    refresh();
  };

  const handleInput = ({ target }) => {
    setContent(target.value);
  };

  const handleSend = ({ key }) => {
    if (key !== "Enter") {
      return;
    }

    const request = content.trim();

    if (request.length === 0) {
      return;
    }

    API.createNote(request);
    setContent("");
    refresh();
  };

  return (
    <div className="d-flex flex-column">
      <div className="p-2 m-2 d-flex flex-row align-center">
        <h1 className="my-2">Notes</h1>
        <button className="btn btn-success refresh p-0 m-2" onClick={refresh}>
          <img alt="" className="w-100" src={REFRESH_SVG} />
        </button>
      </div>

      <div>
        <textarea
          className="p-2"
          onInput={handleInput}
          value={content}
          rows={6}
          cols={40}
          onKeyDown={handleSend}
          placeholder="Ввести и нажать Enter"
        ></textarea>
      </div>

      <div className="d-flex flex-wrap">
        {notes.map((note) => (
          <Note key={note.id} {...note} onDelete={handleDelete}></Note>
        ))}
      </div>
    </div>
  );
};

export default Notes;
