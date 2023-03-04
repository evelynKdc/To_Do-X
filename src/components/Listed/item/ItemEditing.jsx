import React, {useState} from 'react'

export const ItemEditing = ({data, edit, setEdit}) => {
    const [newTitle, setNewTitle] = useState(data.title);
    const [newDescription, setNewDescription] = useState(data.description);


    const handlerCancelEdit = () => {
      setEdit(false)
    }

    const handlerUpdateItem = (e) => {
      e.preventDefault();

      data.title = newTitle;
      data.description = newDescription;

      setEdit(false);
    };

    const handlerUpdateDescription = (e) => {
      setNewDescription(e.target.value);
    };

    const handlerUpdateTitle = (e) => {
      setNewTitle(e.target.value);
      console.log(edit);
    };

    return (
      <form className="formTaskUpdating" onSubmit={handlerUpdateItem}>
        <div className="containerInputsUpdating">
          <input
            autoFocus
            className="txtInput input_formUpdating"
            type="text"
            placeholder="Titulo...."
            onChange={handlerUpdateTitle}
            value={newTitle}
          />
          <textarea
            className="txtArea area_formUpdating"
            placeholder="Descripción (opcional) . . . ."
            onChange={handlerUpdateDescription}
            value={newDescription}
          ></textarea>
        </div>
        <div className="containerButtonsUpdating">
          <button
            className="buttons button_confirm"
            type="submit"
            disabled={newTitle.trim() ? false : true}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              fill="currentColor"
              className="bi bi-check"
              viewBox="0 0 16 16"
            >
              <path d="M10.97 4.97a.75.75 0 0 1 1.07 1.05l-3.99 4.99a.75.75 0 0 1-1.08.02L4.324 8.384a.75.75 0 1 1 1.06-1.06l2.094 2.093 3.473-4.425a.267.267 0 0 1 .02-.022z" />
            </svg>
          </button>
          <button className="buttons danger_button" onClick={handlerCancelEdit}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              fill="currentColor"
              className="bi bi-x"
              viewBox="0 0 16 16"
            >
              <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z" />
            </svg>
          </button>
        </div>
      </form>
    );
  };