import { useState } from "react";

export function FormTask(props) {
  
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const  {addItem}  = props;


  const handlerSubmit = (e) => {
    e.preventDefault();
    console.log(title);
    console.log(description);

    // *antes que resetee le mando el objeto
    addItem({
      done: false,
      id: (new Date()).toString(),
      title,
      description
    }) 
    

    
    
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
    <div className="form_container">
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
    </div>
  );
}
