import React, { useState } from "react";

export function Item({ data, clickDelete }) {
  const [edit, setEdit] = useState(false);

  const handlerClick = () => {
    clickDelete(data.id);
    console.log(data.title);
  };

  const handlerCheck = () => {
    let checking = data.done ? false : true;
    data.done = checking;
  };

  const handlerClickEdit = () => {
    setEdit(true);
  };

  const ShowDescription = () => {
    return (
      <>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="14"
          height="14"
          fill="currentColor"
          className="bi bi-arrow-return-right"
          viewBox="0 0 16 16"
        >
          <path d="M1.5 1.5A.5.5 0 0 0 1 2v4.8a2.5 2.5 0 0 0 2.5 2.5h9.793l-3.347 3.346a.5.5 0 0 0 .708.708l4.2-4.2a.5.5 0 0 0 0-.708l-4-4a.5.5 0 0 0-.708.708L13.293 8.3H3.5A1.5 1.5 0 0 1 2 6.8V2a.5.5 0 0 0-.5-.5z" />
        </svg>
        <p className="info_description">{data.description}</p>
      </>
    );
  };

  const CheckBox = () => {
    return (
      <div className="container">
        <input
          type="checkbox"
          id={data.id}
          className="checkGreen"
          style={{ display: "none" }}
          onChange={handlerCheck}
        />
        <label htmlFor={data.id} className="check">
          <svg width="15px" height="15px" viewBox="0 0 18 18">
            <path d="M 1 9 L 1 9 c 0 -5 3 -8 8 -8 L 9 1 C 14 1 17 5 17 9 L 17 9 c 0 4 -4 8 -8 8 L 9 17 C 5 17 1 14 1 9 L 1 9 Z"></path>
            <polyline points="1 9 7 14 15 4"></polyline>
          </svg>
        </label>
      </div>
    );
  };

  const ItemEditing = () => {
    const [newTitle, setNewTitle] = useState(data.title);
    const [newDescription, setNewDescription] = useState(data.description);


    const handlerCancelEdit = (e) => {
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

  const ItemNoEditing = () => {
    return (
      <>
        <div className="taskItem">
          <div className="item_top">
            <CheckBox />
            <label htmlFor={data.id} className="title_label">{data.title}</label>
          </div>
          <div className="description_container">
            {data.description.trim() ? <ShowDescription /> : null}
          </div>
        </div>

        <button className="buttons edit_buttom" onClick={handlerClickEdit}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="currentColor"
            className="bi bi-pencil"
            viewBox="0 0 16 16"
          >
            <path d="M12.146.146a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1 0 .708l-10 10a.5.5 0 0 1-.168.11l-5 2a.5.5 0 0 1-.65-.65l2-5a.5.5 0 0 1 .11-.168l10-10zM11.207 2.5 13.5 4.793 14.793 3.5 12.5 1.207 11.207 2.5zm1.586 3L10.5 3.207 4 9.707V10h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.293l6.5-6.5zm-9.761 5.175-.106.106-1.528 3.821 3.821-1.528.106-.106A.5.5 0 0 1 5 12.5V12h-.5a.5.5 0 0 1-.5-.5V11h-.5a.5.5 0 0 1-.468-.325z" />
          </svg>
        </button>

        <button className="buttons danger_button" onClick={handlerClick}>
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
      </>
    );
  };

  return (
    <div key={data.id} className="taskItemContainer">
      {edit ? <ItemEditing /> : <ItemNoEditing />}
    </div>
  );
}
