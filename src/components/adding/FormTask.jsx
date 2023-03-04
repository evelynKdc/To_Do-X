import { useState } from "react";

export function FormTask(props) {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const { addItem, closeFormHandler, asideVisible } = props;

  const handlerSubmit = (e) => {
    e.preventDefault();

    // *antes que resetee le mando el objeto
    addItem({
      done: false,
      id: new Date().toString(),
      title,
      description,
    });

    setTitle("");
    setDescription("");
  };

  const handlerInputTitle = (e) => {
    setTitle(e.target.value);
  };

  const handlerAreaDescription = (e) => {
    setDescription(e.target.value);
  };

  return (
    <div
      className={`form_container ${
        asideVisible ? "asideVisible" : "asideNotVisible"
      }`}
    >
      <form className="formTask" onSubmit={handlerSubmit}>
        <input
          autoFocus
          className="txtInput input_form"
          type="text"
          placeholder="Titulo...."
          onChange={handlerInputTitle}
          value={title}
        />
        <textarea
          className="txtArea area_form"
          placeholder="Descripción (opcional) . . . ."
          onChange={handlerAreaDescription}
          value={description}
        ></textarea>
        <button
          className="buttons button_primary"
          type="submit"
          disabled={title.trim() ? false : true}
        >
          Agregar
        </button>
      </form>

      <button
        className="buttons danger_button close_button"
        onClick={closeFormHandler}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="20"
          height="20"
          fill="currentColor"
          className="bi bi-x "
          viewBox="0 0 16 16"
        >
          <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z" />
        </svg>
      </button>
    </div>
  );
}
