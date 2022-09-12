let notes = [];
let nextId = 1;

const getNotes = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(notes);
    }, Math.random() * 200);
  });
};

const createNote = (content) => {
  notes.push({ id: nextId++, content });
};

const deleteNote = (id) => {
  notes = notes.filter((note) => note.id !== id);
};

const API = {
  createNote,
  deleteNote,
  getNotes,
};

export default API;
